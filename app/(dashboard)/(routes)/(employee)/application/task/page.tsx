"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { bookMark, del, grid, pencil, task, todo } from "@/public";
import { MoveLeft, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addDoc, collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const Task = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [newTaskTag, setNewTaskTag] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const dialogRef = useRef(null); // Ref for the dialog component

  const handleAddTask = async () => {
    if (newTaskTitle && newTaskDate) {
      try {
        // Add the new task to Firestore
        const docRef = await addDoc(collection(db, "applications/calendar/tasks"), {
          title: newTaskTitle,
          details: newTaskDetails,
          date: newTaskDate,
          tag: newTaskTag,
        });

        // Update the local state with the new task
        setTasks([...tasks, { title: newTaskTitle, details: newTaskDetails, date: newTaskDate, tag: newTaskTag }]);

        // Clear the input fields
        setNewTaskTitle("");
        setNewTaskDetails("");
        setNewTaskDate("");
        setNewTaskTag("");

        // Close the dialog
        setIsDialogOpen(false);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "applications/calendar/tasks"), (snapshot) => {
      const fetchedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
    });

    return () => unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
  }, []);



  const handleDeleteTask = async (taskId: any) => {
    try {
      await deleteDoc(doc(db, "applications/calendar/tasks", taskId));
      setTasks(tasks.filter((task: any) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleEditTask = async (taskId: any) => {
    const taskToUpdate = tasks.find((task: any) => task.id === taskId);
    if (!taskToUpdate) return;

    try {
      await setDoc(doc(db, "applications/calendar/tasks", taskId), {
        title: taskToUpdate.title,
        details: taskToUpdate.details,
        date: taskToUpdate.date,
        tag: taskToUpdate.tag,
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const openDialogForEdit = (task: any) => {
    setSelectedTaskId(task.id);
    setNewTaskTitle(task.title);
    setNewTaskDetails(task.details);
    setNewTaskDate(task.date);
    setNewTaskTag(task.tag);
    setIsDialogOpen(true);
  };
  return (
    <div className="w-full full">
      <div className="ml-[20px] xl:ml-[42px] flex items-center pt-[45px] gap-4">
        <Link href="/application">
          <MoveLeft className="size-6 text-primary" />
        </Link>
        <h1 className="text-lg text-[#244469]">Applications/Social</h1>
      </div>
      <div className="flex bg-white w-full justify-between xl:mt-[55px]  pr-4 flex-col xl:flex-row h-full pt-7">
        <div className="shadow-2xl w-[200px]">
          <Dialog ref={dialogRef} open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
              <DialogTitle className="flex justify-center text-lg font-medium">
                {selectedTaskId ? "Edit Task" : "Add Task"}
              </DialogTitle>
              <div className="mt-4">
                <Label htmlFor="task-title">Task Title</Label>
                <Input
                  id="task-title"
                  className="w-full mt-1"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <Label htmlFor="task-details">Task Details</Label>
                <Textarea
                  id="task-details"
                  className="w-full mt-1"
                  value={newTaskDetails}
                  onChange={(e) => setNewTaskDetails(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <Label htmlFor="task-date">Select Date/Time</Label>
                <Input
                  id="task-date"
                  type="date"
                  className="w-full mt-1"
                  value={newTaskDate}
                  onChange={(e) => setNewTaskDate(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <Label htmlFor="task-tag">Task Tag</Label>
                <Input
                  id="task-tag"
                  className="w-full mt-1"
                  value={newTaskTag}
                  onChange={(e) => setNewTaskTag(e.target.value)}
                />
              </div>
              <DialogFooter className="mt-6 flex justify-end space-x-2">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button type="button" variant="ghost" onClick={handleAddTask}>
                  {selectedTaskId ? "Update Task" : "Save Changes"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="flex gap-y-[17px] xl:pt-[33px] xl:flex-col ">
            <Button className="text-black bg-white w-[80%] flex gap-1">
              <Image src={task} width={16} height={16} alt="feed" /> All Tasks
            </Button>
            <Button className="bg-white w-[80%] text-black flex gap-1">
              {" "}
              <Image src={todo} width={20} height={20} alt="people" />
              Today's Task
            </Button>
            <Button className="w-[80%] bg-white text-black flex gap-1">
              <Image src={grid} width={20} height={20} alt="feed" />
              This Week Tasks
            </Button>
            <Button className="w-[80%] bg-white text-black flex gap-1">
              {" "}
              <Image src={bookMark} width={20} height={20} alt="feed" />
              Created by me
            </Button>
          </div>
        </div>
        <div
          className="bg-white w-full xl:w-[70%] h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]"
          style={{ boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)" }}
        >
          <h1 className="font-medium ">All task</h1>
          <Table>
            <TableBody>
              {tasks.map((task: any) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium flex flex-col">
                    {task.title}
                    <span className="text-[#4CAF50]">ASSIGNED BY: MANAGER</span>
                  </TableCell>
                  <TableCell>{task.details}</TableCell>
                  <TableCell className="text-right">
                    {task.date}
                    <span className="flex gap-x-2 justify-end">
                      <Image
                        src={pencil}
                        width={15}
                        height={15}
                        alt="pencil"
                        onClick={() => {
                          openDialogForEdit(task); // Call function to open dialog for editing
                          if (dialogRef.current) dialogRef.current.open(); // Open dialog programmatically
                        }}
                      />
                      <Image
                        src={del}
                        width={15}
                        height={15}
                        alt="delete"
                        onClick={() => handleDeleteTask(task.id)}
                      />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Task;
