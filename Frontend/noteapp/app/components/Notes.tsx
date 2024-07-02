import Card from "antd/es/card/Card"
import { CardTitle } from "./Cardtitle"

interface Props {
    notes:Note[]
}


export const Notes = ({ notes }: Props) => {

    <div className="cards">
        {notes.map((note: Note) => (


            <Card key={note.id} title={<CardTitle title={note.title} iscomplete={note.iscomplete} />} bordered={false}
            />


        ))}</div>





}
