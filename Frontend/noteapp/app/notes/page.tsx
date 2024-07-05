
"use client";

import Button from "antd/es/button/button"
import { Notes } from "../components/Notes";
import { useEffect, useState } from "react";
import { getAllNotes } from "../services/notes";
import Title from "antd/es/skeleton/Title";


export default function NotesPage() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNotes = async () => {
            const notes = await getAllNotes();
            setLoading(false);
            setNotes(notes);
        }
        getNotes();
    }, []);

    return (
        <div>
            <Button>
            Add Note
            </Button>
            {loading ? (<Title>Loading....</Title>) : <Notes notes={notes}/>};
            
        </div>
)
}