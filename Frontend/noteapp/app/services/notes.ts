export interface NoteRequest {
    id: string;
    title: string;
    description: string;
    iscomplete: boolean;
}

export const getAllNotes = async () => {
    const response = await fetch("http://localhost:5017/Notes")
    return response.json;
}

export const createNote = async (noterequest: NoteRequest) => {
    await fetch("http://localhost:5017/Notes", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(noterequest),
    });
};

export const updateNote = async (id: string, noterequest: NoteRequest) => {
    await fetch(`http://localhost:5017/Notes/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(noterequest),
    });
};

export const deleteNote = async (id: string) => {
    await fetch(`http://localhost:5017/Notes/${id}`, {
        method: "DELETE",
    });
}