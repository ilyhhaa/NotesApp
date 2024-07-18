import { Input, Modal } from "antd";
import { NoteRequest } from "../services/notes";
import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface Props {
    mode: Mode;
    values: Note;
    IsModalIsOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: NoteRequest) => void;
    handleUpdate: (id: string, request: NoteRequest) => void;
}

export enum Mode {
    Create,
    Edit,
}

export const CreateUpdateNote = ({
    mode,
    values,
    IsModalIsOpen,
    handleCancel,
    handleCreate,
    handleUpdate }: Props) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [iscomplete, setComplete] = useState<boolean>(false);


    useEffect(() => {
        setTitle(values.title)
        setDescription(values.description)
        setComplete(values.iscomplete)
    },[values])


    const handleOnOk = async () => {
        const noteRequest = { title, description, iscomplete }

        mode == Mode.Create ? handleCreate(noteRequest) :
            handleUpdate(values.id, noteRequest)
    }





    return (
        <Modal title={mode === Mode.Create ? "Add Note" : "Edit Note"}
            open={IsModalIsOpen}
            cancelText={"Cancel"}
            onOk={handleOnOk}
            onCancel={handleCancel}


        >


            <div className="note__modal">
                <Input
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    placeholder= "Name Your Note"

                />

                <TextArea
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    placeholder="Description" />

                <Input
                    value={iscomplete}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComplete(Boolean(e.target.value))}
                    placeholder= "Status"/>
                    
            </div>
        </Modal>
)
};

