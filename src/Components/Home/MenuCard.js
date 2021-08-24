import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import OfferCard from "../OfferCard/index";
import ListProducts from "../Home/ListProducts";

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderRadius: "20px",
    border: "4px solid #F59E0B",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  },

  title: {
    fontSize: 40,
    color: "#F59E0B",
    marginTop: "-18px",
  },
  pos: {
    marginBottom: 12,
  },
  smallCenter: {
    width: "100%",
    padding: "1px 20px 20px",
    maxHeight: "700px",
  },
});

export default function MenuCard({ selectedMenu }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {selectedMenu?.title}
        </Typography>
      </CardContent>
      <div className={`${classes.smallCenter} custom-scroll-product`}>
        {selectedMenu?.items?.length ? (
          selectedMenu?.items?.map((item) => (
            <ListProducts products={item?.products} />
          ))
        ) : (
          <div>No Products to show for this Menu!</div>
        )}
        {/* <OfferCard product={product} /> */}
      </div>
    </Card>
  );
}
