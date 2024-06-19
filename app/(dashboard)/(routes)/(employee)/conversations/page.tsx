"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth, db } from "@/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { Mail, MoveLeft, Plus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsMailbox, BsPen, BsTrash, BsHeartFill, BsHeart } from "react-icons/bs";
import { AiFillMail, AiOutlineUser } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { heart, info, phone, video } from "@/public";
import toast from "react-hot-toast";

const Conversations = () => {
  const [users, setUsers] = useState<any>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const [editMode, setEditMode] = useState(false);
  const [currentContact, setCurrentContact] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addContact = async () => {
    if (name && email && position) {
      try {
        const newContact = {
          name: name,
          email: email,
          position: position,
          favorite: false, // initialize as not a favorite
        };

        const docRef = await addDoc(collection(db, 'applications/conversation/contacts'), newContact);
        console.log('Contact added with ID: ', docRef.id);

        setName('');
        setEmail('');
        setPosition('');
        setIsDialogOpen(false);
      } catch (error: any) {
        console.error('Error adding contact: ', error.message);
      }
    } else {
      console.log('Please fill in all fields.');
    }
  };

  const deleteContact = async (userId: any) => {
    try {
      const docRef = doc(db, 'applications/conversation/contacts', userId);
      await deleteDoc(docRef);
      console.log('Contact deleted successfully');
    } catch (error) {
      console.error('Error deleting contact: ', error);
    }
  };

  const updateContact = async () => {
    if (currentContact && currentContact.id) {
      try {
        const updatedContact = {
          name: name,
          email: email,
          position: position,
        };

        const docRef = doc(db, 'applications/conversation/contacts', currentContact.id);
        await updateDoc(docRef, updatedContact);
        console.log('Contact updated successfully');

        setName('');
        setEmail('');
        setPosition('');
        setEditMode(false);
        setCurrentContact(null);
        setIsDialogOpen(false);
      } catch (error) {
        console.error('Error updating contact: ', error);
      }
    }
  };

  const handleEditClick = (contact: any) => {
    setCurrentContact(contact);
    setName(contact.name);
    setEmail(contact.email);
    setPosition(contact.position);
    setEditMode(true);
    setIsDialogOpen(true);
  };

  const toggleFavorite = async (contact: any) => {
    try {
      const docRef = doc(db, 'applications/conversation/contacts', contact.id);
      await updateDoc(docRef, { favorite: !contact.favorite });
      toast.success('Favorite status updated successfully');
      console.log('Favorite status updated successfully');
    } catch (error) {
      console.error('Error updating favorite status: ', error);
    }
  };
  // Fetch contacts from Firestore in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'applications/conversation/contacts'), (snapshot) => {
      const updatedContacts: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(updatedContacts);
    });

    return () => unsubscribe();
  }, []);




  return (
    <div className="w-full full">
      <div className="ml-[20px] xl:ml-[42px] flex items-center pt-[45px] gap-4">
        <Link href="/">
          <MoveLeft className="size-6 text-primary" />
        </Link>
        <h1 className="text-lg text-[#244469]">Applications/Conversations</h1>
      </div>
      <div className="flex bg-white w-full justify-between xl:mt-[55px] pr-4 flex-col xl:flex-row h-full pt-4">
        <Tabs defaultValue="contacts" className="w-full h-full">
          <div className="w-[90%] mx-auto bg-[#E3E3E3] rounded-lg p-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                {user?.photoURL ? <Image src={user && user.photoURL} width={69} height={69} className="rounded-full " alt="profile" />
                  :
                  <AiOutlineUser size={30} />}
                <div>
                  <p className="text-[#244469] text-[16px] font-semibold">
                    {user ? <>
                      {user?.displayName ? user.displayName : user?.email}
                    </> :
                      <>
                        guest
                      </>
                    }
                  </p>
                  <p className="text-[#5C5C5C] text-[10px]">
                    {user ? <>
                      {user.email}
                    </> :
                      <>
                        guest email
                      </>
                    }
                  </p>
                  <p className="text-[#5C5C5C] text-[12px]">
                    Last update: 16 Jun 2024
                  </p>
                </div>
              </div>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => { setEditMode(false); setIsDialogOpen(true); }}>
                    <Plus />
                    Add contact
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
                  <DialogTitle className="flex justify-center text-lg font-medium">
                    {editMode ? 'Edit contact' : 'Add contact'}
                  </DialogTitle>
                  <div className="mt-4">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      className="w-full mt-1"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      className="w-full mt-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      className="w-full mt-1"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                  <DialogFooter className="mt-6 flex justify-end space-x-2">
                    <DialogClose asChild>
                      <Button type="button" variant="destructive">
                        Close
                      </Button>
                    </DialogClose>
                    <Button type="button" variant="secondary" onClick={editMode ? updateContact : addContact}>
                      {editMode ? 'Update Contact' : 'Save Contact'}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <TabsList className="flex justify-between bg-[#E3E3E3]">
              <div>
                <TabsTrigger value="contacts">My Contacts</TabsTrigger>
                <TabsTrigger value="groups">My Groups</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </div>
              <div>
                <Button variant="ghost">
                  <Image src={phone} width={16} height={16} alt="phone" />
                </Button>
                <Button variant="ghost">
                  <Image src={video} width={16} height={16} alt="phone" />
                </Button>
                <Button variant="ghost">
                  <Image src={info} width={16} height={16} alt="phone" />
                </Button>
              </div>
            </TabsList>
          </div>
          <TabsContent value="contacts">
            <div className="bg-white w-[95%] mx-auto h-fit min-h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user: any) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.position}</TableCell>
                      <TableCell className=" flex justify-end gap-x-2 gap-6 text-right">
                        <button onClick={() => window.location.href = `mailto:${user.email}`}>
                          <AiFillMail size={20} />
                        </button>
                        <button onClick={() => toggleFavorite(user)}>
                          {user.favorite ? <BsHeartFill size={20} /> : <BsHeart size={20} />}
                        </button>
                        <button onClick={() => deleteContact(user.id)}>
                          <BsTrash size={20} />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="groups">
            <div className="bg-white w-full h-fit min-h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]"></div>
          </TabsContent>
          <TabsContent value="favorites">
            <div className="bg-white w-full h-fit min-h-[800px] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.filter((user: any) => user.favorite).map((user: any) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.position}</TableCell>
                      <TableCell className=" flex justify-end gap-x-2 gap-6 text-right">
                        <button onClick={() => window.location.href = `mailto:${user.email}`}>
                          <BsMailbox size={20} />
                        </button>
                        <button onClick={() => toggleFavorite(user)}>
                          {user.favorite ? 'u' : 'k'}

                        </button>
                        <button onClick={() => deleteContact(user.id)}>
                          <BsTrash size={20} />

                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Conversations;
