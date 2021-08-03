import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import OfferCard from "../OfferCard/index";
import ListProducts from "../Home/ListProducts";

const useStyles = makeStyles({
  root: {
    width: "60%",
    borderRadius: "20px",
    border: "4px solid #F59E0B",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    marginTop: "10px",
    maringBottom: "30px",
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
    padding: "20px",
  },
});
const product = {
  foodType: {
    vegan: false,
    glutenFree: true,
    spicy: false,
  },
  bundle: {
    quantity: 1,
  },
  title: "Offer Title",
  description: "helow worl",
  type: "default",
  images: ["images/uEW4DQ0AmItiLogo.jpg"],
  currency: "€",
  availability: true,
  isDeleted: false,
  allergies: ["Magna cupiditate ali", "invent"],
  _id: "60d1ed21d615ed15b9fcef1a",
  sizes: [
    {
      discountAvailability: false,
      discountType: "",
      discountedPrice: 0,
      discount: -1,
      title: "",
      price: 523,
    },
  ],
  multipleSizes: false,
  restaurant: "605b18408fc02bb4c1377081",
  addOns: [],
  createdAt: "2021-06-22T14:01:05.815Z",
  updatedAt: "2021-06-22T15:59:45.328Z",
};
export default function MenuCard({ selectedMenu }) {
  const classes = useStyles();

  console.log({ items: selectedMenu?.items });
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
      <div className={classes.smallCenter}>
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
