import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "840px",
    height: "60px",
    borderRadius: "20px",
    border: "4px solid #62BA81",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    marginTop: "10px",
    marginBottom: "20px",
  },

  title: {
    fontSize: 40,
    color: "#62BA81",
    marginTop: "-18px",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ButtonCard({ text }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
