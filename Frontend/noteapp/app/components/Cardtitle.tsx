interface Props {
	title: string;
	iscomplete: boolean;
}

export const CardTitle = ({ title, iscomplete }: Props) => {
	return (<div style={{
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent:"space-between"
	}} >

		<p className="card_title">{title}</p>

		<p className="card_iscomplete">{iscomplete}</p>
	</ div>)
}