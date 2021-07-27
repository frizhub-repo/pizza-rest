import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Logo from "../../images/logo.png";

const useStyles = makeStyles({
  root: {
    width: "503px",
    height: "440px",
    borderRadius: "30px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  },

  title: {
    fontSize: 36,
    color: "#EBA73A",
    fontStyle: "italic",
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    height: "283px",
    width: "199px",
    display: "block",
    marginLeft: "140px",
  },
});

export default function CardContainer({ textOne, textTwo, restaurantLogo }) {
  const classes = useStyles();

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
        <img
          className={classes.img}
          src={`${process.env.REACT_APP_API_BASE_URL}/${restaurantLogo}`}
        />

        <Typography variant="h5" component="h2" className={classes.title}>
          {textTwo}
        </Typography>
      </CardContent>
    </Card>
  );
}
