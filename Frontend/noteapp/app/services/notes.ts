export interface NoteRequest {
    title: string;
    description: string;
    iscomplete: boolean;
}

export const getAllNotes = async () => {
    const response = await fetch("https://localhost:7130/Notes")

    return response.json();
};

export const createNote = async (noterequest: NoteRequest) => {
    await fetch("https://localhost:7130/Notes", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(noterequest),
    });
};

export const updateNote = async (id: string, noterequest: NoteRequest) => {
    await fetch(`https://localhost:7130/notes/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(noterequest),
    });
};

export const deleteNote = async (id: string) => {
    await fetch(`https://localhost:7130/notes/${id}`, {
        method: "DELETE",
    });
};