import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: "300px",
    height: "250px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
  },
  title: {
    fontSize: 16,
    color: "#EBA73A",
    fontStyle: "italic",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardContainer({ textOne, textTwo }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {textOne}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          {textTwo}
        </Typography>
      </CardContent>
    </Card>
  );
}
