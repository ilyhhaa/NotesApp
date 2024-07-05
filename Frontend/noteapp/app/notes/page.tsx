
"use client";

import Button from "antd/es/button/button"
import { Notes } from "../components/Notes";
import { useEffect, useState } from "react";
import { getAllNotes } from "../services/notes";

export default function NotesPage() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNotes = async () => {
            const notes = await getAllNotes();
            setLoading(false);
            setNotes(notes)
        }
        getNotes();
    }, [])
    return (
        <div>
            <Button>
            Add Note
            </Button>

            <Notes notes={notes } />
        </div>
)
}