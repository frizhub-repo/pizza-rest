import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function MenuCard({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.divFlexStyles2}>
      <Card className={classes.roundedCardStyles}>
        <CardContent></CardContent>
      </Card>
      <Card className={classes.root3}>
        <CardContent className={classes.divFlexStyles}>
          <Typography className={classes.typoStyles4}>OPENING HOURS</Typography>
          <Typography className={classes.typoStyles4}>OPENING HOURS</Typography>
        </CardContent>
      </Card>
      <Card className={classes.roundedCardStyles}>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
