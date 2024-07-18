
"use client";

import Button from "antd/es/button/button"
import { Notes } from "../components/Notes";
import { useEffect, useState } from "react";
import { NoteRequest, createNote, deleteNote, getAllNotes, updateNote } from "../services/notes";
import Title from "antd/es/skeleton/Title";
import { CreateUpdateNote, Mode } from "../components/CreateUpdateNote";



export default function NotesPage() {

    const defaultValues = {
        title: "",
        description: "",
        iscomplete: false,
    } as Note;
    
    const [values, setvalues] = useState<Note>(defaultValues);
        
    

    const [note, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, SetMode] = useState(Mode.Create)


    useEffect(() => {
        const getNotes = async () => {
            const notes = await getAllNotes();
            setLoading(false);
            setNotes(notes);
        }
        getNotes();
    }, []);


    const handleCreateNote = async (request: NoteRequest) => {
        await createNote(request);
        closeModal();

        const notes = await getAllNotes();
        setNotes(notes);
    }

    const handleUpdateNote = async (id: string, request: NoteRequest)=>{
        await updateNote(id, request);
        closeModal();


        const notes = await getAllNotes();
        setNotes(notes);
    }


    const handleDeleteNote = async (id: string) => {
        await deleteNote(id);
        closeModal();


        const notes = await getAllNotes();
        setNotes(notes);
    }


    const openModal = () => {
        SetMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setvalues(defaultValues);
        setIsModalOpen(false);

    };

    const openEditModal = (note: Note) => {
        SetMode(Mode.Edit);
        setvalues(note);
        setIsModalOpen(true);
    }

    return (
        <div>
            <Button>
            Add Note
            </Button>

            <CreateUpdateNote mode={mode}
                values={values}
                IsModalIsOpen={isModalOpen}
                handleCreate={handleCreateNote}
                handleUpdate={handleUpdateNote}
                handleCancel={closeModal} />

            {loading ? (<Title>Loading....</Title>) : <Notes notes={note} handleOpen={openEditModal} handleDelete={handleDeleteNote} />}
            
        </div>
)
}