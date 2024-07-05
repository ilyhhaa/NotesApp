import Card from "antd/es/card/Card"
import { CardTitle } from "./Cardtitle"
import  Button  from "antd/es/button/button"

interface Props {
    notes:Note[]
}


export const Notes = ({ notes }: Props) => {

    <div className="cards">
        {notes.map((note: Note) => (


            <Card
                key={note.id} title={<CardTitle title={note.title} iscomplete={note.iscomplete} />}
                bordered={false}

            >
                <p>{note.description}</p>
                <div className="button">
                    <Button>
                    Edit
                    </Button>

                    <Button>Delete</Button>
                </div>

            </Card>


        ))}</div>





}
