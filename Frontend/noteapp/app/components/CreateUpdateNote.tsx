import { Input, Modal } from "antd";
import { NoteRequest } from "../services/notes";
import { title } from "process";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface Props {
    mode: Mode;
    values: Note[];
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
    const [isComplete, setComplete] = useState<boolean>(false);


    const handleOk = async () => {
        const noteRequest = {title,description,isComplete}
    }





    return (
        <Modal title={mode === Mode.Create ? "Add Note" : "Edit Note"}
            open={IsModalIsOpen}
            cancelText={"Cancel"}>

            <div className="note__modal">
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder= "Name Your Note"

                />

                <TextArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    placeholder="Description" />

                <Input
                    value={isComplete}
                    onChange={(e) => setComplete(Boolean(e.target.value))}
                    placeholder= "Status"/>
                    
            </div>
        </Modal>
)
};

