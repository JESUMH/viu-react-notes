import { Delete } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";

/**
 * @function Note
 * @param {*} props 
 * @returns note card HTML
 */
export default function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Card sx={{width: 250}}>
      <CardHeader title={props.title} />
      <CardContent>{props.content}</CardContent>
      <CardActions>
        <Button onClick={handleClick}>
          <Delete />
        </Button>
      </CardActions>
    </Card>
  )
}