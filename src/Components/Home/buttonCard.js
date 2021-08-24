import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    border: "4px solid #10B981",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px",
    width: "100%",
  },
  txt: {
    fontWeight: "normal",
    fontSize: "45px",
    textAlign: "center",
    color: "#10B981",
  },
});

export default function ButtonCard({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.txt}>{text}</span>
    </div>
  );
}
