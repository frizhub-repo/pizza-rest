import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "1100px",
    height: "60px",
  },
  main: {
    marginTop: "-10PX",
  },
});

export default function TimeTableCard({
  startTime,
  endTime,

  styles,
  day,
}) {
  const classes = useStyles();

  return (
    <Card className={(classes.root, styles || null)}>
      <CardContent className={classes.main}>
        {day !== "SUNDAY" ? (
          <Typography>{`${day}      ${startTime} - To ${endTime}`}</Typography>
        ) : (
          <Typography>{`${day}      CLOSED`}</Typography>
        )}
      </CardContent>
    </Card>
  );
}
