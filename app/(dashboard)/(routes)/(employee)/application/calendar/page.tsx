"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/firebaseConfig";
import { addDoc, collection, onSnapshot, query, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const categoryColors: any = {
  company: '#4CAF50', // green
  scheduled: '#F15B64', // red
  all: '#1B8FE3', // blue for 'All events'
};

const Calendar = () => {
  const [events, setEvents] = useState<any>([{ id: "", title: "", start: "", end: "", category: "" }]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventStartDate, setNewEventStartDate] = useState("");
  const [newEventStartTime, setNewEventStartTime] = useState("");
  const [newEventEndDate, setNewEventEndDate] = useState("");
  const [newEventEndTime, setNewEventEndTime] = useState("");
  const [newEventCategory, setNewEventCategory] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingEvent, setEditingEvent] = useState<any>(null);

  const handleAddEvent = async () => {
    if (newEventTitle && newEventStartDate && newEventStartTime && newEventEndDate && newEventEndTime && newEventCategory) {
      const newEventStart = `${newEventStartDate}T${newEventStartTime}`;
      const newEventEnd = `${newEventEndDate}T${newEventEndTime}`;

      try {
        const docRef = await addDoc(collection(db, "applications/calendar/events"), {
          title: newEventTitle,
          start: newEventStart,
          end: newEventEnd,
          category: newEventCategory,
        });
        setEvents([...events, { id: docRef.id, title: newEventTitle, start: newEventStart, end: newEventEnd, category: newEventCategory }]);
      } catch (error) {
        console.error("Error adding document: ", error);
      }

      clearFormFields();
    }
  };


  const handleUpdateEvent = async () => {
    const newEventStart = `${newEventStartDate}T${newEventStartTime}`;
    const newEventEnd = `${newEventEndDate}T${newEventEndTime}`;

    console.log(
      {
        title: newEventTitle,
        start: newEventStart,
        end: newEventEnd,
        category: newEventCategory,
      }
    );

    if (editingEvent && newEventTitle && newEventStartDate && newEventStartTime && newEventEndDate && newEventEndTime && newEventCategory) {
      const newEventStart = `${newEventStartDate}T${newEventStartTime}`;
      const newEventEnd = `${newEventEndDate}T${newEventEndTime}`;

      try {
        const eventDocRef = doc(db, "applications/calendar/events", editingEvent.id);
        await updateDoc(eventDocRef, {
          title: newEventTitle,
          start: newEventStart,
          end: newEventEnd,
          category: newEventCategory,
        });


        setEvents(events.map((evt: any) => (evt.id === editingEvent.id ? { ...evt, title: newEventTitle, start: newEventStart, end: newEventEnd, category: newEventCategory } : evt)));
        setEditingEvent(null);
      } catch (error) {
        console.error("Error updating document: ", error);
      }

      clearFormFields();
    }

  };


  const clearFormFields = () => {
    setNewEventTitle("");
    setNewEventStartDate("");
    setNewEventStartTime("");
    setNewEventEndDate("");
    setNewEventEndTime("");
    setNewEventCategory("");
  };

  const handleDeleteEvent = async (eventId: any) => {
    try {
      const eventDocRef = doc(db, "applications/calendar/events", eventId);
      await deleteDoc(eventDocRef);
      setEvents(events.filter((evt: any) => evt.id !== eventId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleEditEvent = (event: any) => {
    setNewEventTitle(event.title);
    setNewEventStartDate(event.start.toISOString().slice(0, 10));
    setNewEventStartTime(event.start.toISOString().slice(11, 16));
    setNewEventEndDate(event.end.toISOString().slice(0, 10));
    setNewEventEndTime(event.end.toISOString().slice(11, 16));
    setNewEventCategory(event.extendedProps.category);

    setEditingEvent(event);

  };

  const handleEventDrop = async (info: any) => {
    const { event } = info;
    const newEventStart = `${newEventStartDate}T${newEventStartTime}`;
    const newEventEnd = `${newEventEndDate}T${newEventEndTime}`;
    const updatedEvent = {
      title: event.title,
      start: event.start.toISOString(),
      end: event.end.toISOString(),
      category: event.extendedProps.category,
    };

    try {
      const eventDocRef = doc(db, "applications/calendar/events", event.id);
      await updateDoc(eventDocRef, updatedEvent);

      setEvents(events.map((evt: any) => (evt.id === event.id ? { ...evt, ...updatedEvent } : evt)));
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "applications/calendar/events"));
    const unsub = onSnapshot(q, (snapshot) => {
      const eventsData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setEvents(eventsData);
    });
    return () => unsub();
  }, []);

  const handleFilterChange = (filter: any) => {
    setFilter(filter);
  };

  const filteredEvents = events.filter((event: any) =>
    filter === "all" || event.category === filter
  );

  const renderEventContent = (eventInfo: any) => {
    const { category } = eventInfo.event.extendedProps;
    const eventColor = categoryColors[category] || '#1B8FE3'; // default to blue if no category
    return (
      <div className="fc-event-title-container text-white flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: eventColor }}>
        <div>
          <div className="fc-event-title">{eventInfo.event.title}</div>
          <div className="text-sm">{`${eventInfo.event.startStr.slice(11, 16)} - ${eventInfo.event.endStr.slice(11, 16)}`}</div>
        </div>
        <div className="flex items-center gap-2">
          <FaEdit className="cursor-pointer hover:text-yellow-400" onClick={() => handleEditEvent(eventInfo.event)} />
          <FaTrashAlt className="cursor-pointer hover:text-red-500" onClick={() => handleDeleteEvent(eventInfo.event.id)} />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full full">
      <div className="ml-[20px] xl:ml-[42px] flex items-center pt-[45px] gap-4">
        <Link href="/application">
          <MoveLeft className="size-6 text-primary" />
        </Link>
        <h1 className="text-lg text-[#244469]">Applications/Calendar</h1>
      </div>
      <div className="flex bg-white w-full justify-between pr-4 flex-col xl:flex-row">
        <div className="flex w-fit xl:w-[200px] gap-y-[17px] xl:pt-[63px] xl:flex-col">
          <Button className="bg-[#1B8FE3] w-full" onClick={() => handleFilterChange("all")}>All events</Button>
          <Button className="bg-[#4CAF50] w-full" onClick={() => handleFilterChange("company")}>Company &apos; Event</Button>
          <Button className="bg-[#F15B64] w-full" onClick={() => handleFilterChange("scheduled")}>Scheduled Event</Button>
        </div>
        <div className="bg-white w-full xl:w-[70%] border border-dotted border-[#5C5C5C] px-[24px] py-[10px] rounded-[20px]">
          <div className="grid grid-cols-4 items-center gap-8 mb-9">
            <label htmlFor="eventTitle" className="flex flex-col gap-3 mb-2 font-medium">Event Title:
              <input
                type="text"
                id="eventTitle"
                placeholder="Event Title"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                className="border p-2 mr-2 rounded-lg"
              />
            </label>
            <label htmlFor="startDate" className="flex flex-col gap-3 mb-2 font-medium">Start Date:
              <input
                type="date"
                id="startDate"
                value={newEventStartDate}
                onChange={(e) => setNewEventStartDate(e.target.value)}
                className="border p-2 mr-2 rounded-lg"
              />
            </label>
            <label htmlFor="startTime" className="flex flex-col gap-3 mb-2 font-medium">Start Time:
              <input
                type="time"
                id="startTime"
                value={newEventStartTime}
                onChange={(e) => setNewEventStartTime(e.target.value)}
                className="border p-2 mr-2 rounded-lg"
              />
            </label>
            <label htmlFor="endDate" className="flex flex-col gap-3 mb-2 font-medium">End Date:
              <input
                type="date"
                id="endDate"
                value={newEventEndDate}
                onChange={(e) => setNewEventEndDate(e.target.value)}
                className="border p-2 mr-2 rounded-lg"
              />
            </label>
            <label htmlFor="endTime" className="flex flex-col gap-3 mb-2 font-medium">End Time:
              <input
                type="time"
                id="endTime"
                value={newEventEndTime}
                onChange={(e) => setNewEventEndTime(e.target.value)}
                className="border p-2 mr-2 rounded-lg"
              />
            </label>
            <label htmlFor="category" className="flex flex-col gap-3 mb-2 font-medium">Event Category:
              <select
                id="category"
                value={newEventCategory}
                defaultValue={newEventCategory}
                onChange={(e) => setNewEventCategory(e.target.value)}
                className="border p-2 mr-2 rounded-lg"
              >
                <option value="">Select Category</option>
                <option value="company">Company&apos;s Event</option>
                <option value="scheduled">Scheduled Event</option>
              </select>
            </label>
            <button
              onClick={editingEvent ? handleUpdateEvent : handleAddEvent}
              className="bg-blue-500 w-fit h-fit text-white px-4 py-2 items-center rounded-lg transform transition-transform hover:scale-105"
            >
              {editingEvent ? "Update Event" : "Add Event"}
            </button>
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "today prev next",
              center: "title",
              end: "dayGridMonth timeGridWeek timeGridDay",
            }}
            height={700}
            events={filteredEvents}
            editable={true}
            eventDrop={handleEventDrop}
            eventContent={renderEventContent}
          />
        </div>
      </div>
      <style jsx global>{`
        .fc-event-title {
          white-space: normal !important;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .fc-event {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Calendar;
