
"use client";

import Button from "antd/es/button/button"
import { Notes } from "../components/Notes";
import { useEffect, useState } from "react";
import { NoteRequest, createNote, getAllNotes, updateNote } from "../services/notes";
import Title from "antd/es/skeleton/Title";
import { CreateUpdateNote, Mode } from "../components/CreateUpdateNote";
import { request } from "http";


export default function NotesPage() {
    const [values, setvalues] = useState<Note>({
        title: "",
        description: "",
        iscomplete:false,
    } as Note);
    

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

    const handleUpdateNote = async (id: string, request: NoteRequest){
        await updateNote(id, request);
        closeModal();


        const notes = await getAllNotes();
        setNotes(notes);
    }




    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <Button>
            Add Note
            </Button>

            <CreateUpdateNote ></CreateUpdateNote>

            {loading ? (<Title>Loading....</Title>) : <Notes notes={notes}/>};
            
        </div>
)
}