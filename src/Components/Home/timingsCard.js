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

export default function TimingsCard({
  startTime,
  endTime,
  open,
  styles,
  textStyles,
  textForOpen,
  id,
  onClickHandler = () => {},
}) {
  const classes = useStyles();

  return (
    <Card
      className={(classes.root, styles || null)}
      onClick={onClickHandler}
      style={{ cursor: "pointer" }}
    >
      <CardContent className={classes.main}>
        <Typography>
          {open === "true" && id === "2" ? "Now Opened" : null}
        </Typography>
        <Typography>
          {open === "true" && id === "2"
            ? `From ${startTime} - To ${endTime}`
            : null}
        </Typography>
        <Typography className={textStyles || null}>
          {open === "true" && id === "3" ? `${textForOpen}` : null}
        </Typography>
      </CardContent>
    </Card>
  );
}
