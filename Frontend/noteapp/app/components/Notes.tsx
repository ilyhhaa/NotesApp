import Card from "antd/es/card/Card"
import { CardTitle } from "./Cardtitle"
import  Button  from "antd/es/button/button"

interface Props {
    notes: Note[]
    handleDelete: (id: string) => void;
    handleOpen: (note: Note) => void;

}


export const Notes = ({notes, handleDelete,handleOpen }: Props) => {
    return (
        <div className="cards">
            {notes.map((note: Note) => (


                <Card
                    key={note.id}
                    title={<CardTitle title={note.title}

                        iscomplete={note.iscomplete} />}
                    bordered={false}

                >
                    <p>{note.description}</p>
                    <div className="button">
                        <Button onClick={() => handleOpen(note)} style={{flex:1}}>
                            Edit
                        </Button>

                        <Button onClick={() => handleDelete(note.id)}
                        danger
                            style={{ flex: 1 }}
                        >Delete</Button>
                    </div>

                </Card>


            ))}
        </div>

    );





};
