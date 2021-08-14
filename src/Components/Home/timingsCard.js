import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "1100px",
    height: "60px",
    // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
        {open === "true" && id === "2" && (
          <>
            <Typography>Now Opened</Typography>
            <Typography>
              From {startTime} - To {endTime}
            </Typography>
          </>
        )}
        {open === "true" && id === "3" && (
          <Typography className={textStyles || null}>{textForOpen}</Typography>
        )}
      </CardContent>
    </Card>
  );
}
