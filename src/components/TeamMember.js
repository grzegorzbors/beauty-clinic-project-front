import Card from "@material-ui/core/Card";

const TeamMember = (props) => {
  return (
      <Card key={props.id}>
        <p>{props.name}</p>
      </Card>
  )
}

export default TeamMember