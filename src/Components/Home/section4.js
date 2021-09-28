import React from "react";
import delivery from "../../images/delivery.png";
import rating from "../../images/rating.png";
import map from "../../images/map.png";
import Reservation from "../../images/reservation.png";
import cost from "../../images/cost.png";
import styles from "./styles";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(styles);
function Section4({ placeData }) {
  const classes = useStyles();

  return (
    <section className="flex py-20  w-full ">
      <div className="flex-grow-1 w-5/6 h-full ml-12 mt-2">
        <div className="h-24 flex ">
          <div className="w-1/4  ">
            <p
              className={`${classes.texts} text-center text-sm font-weight-normal`}
            >
              Address
            </p>
            <img className="object-contain mt-2 w-full h-16 " src={map} />

            <p className="font-weight-normal text-center mt-2 text-sm">
              {placeData?.formatted_address}
            </p>
          </div>

          <div className="w-1/4  ">
            <p
              className={`${classes.texts} text-center text-sm font-weight-normal`}
            >
              Delivery
            </p>
            <img className="h-16 object-contain  w-full" src={delivery} />

            <p className="font-weight-normal text-center mt-2 text-sm">
              Minimum Order 15$
            </p>
          </div>

          <div className="w-1/4  ">
            <p
              className={`${classes.texts} text-center text-sm font-weight-normal`}
            >
              Delivery Fee
            </p>
            <img className="object-contain  w-full h-16 " src={cost} />
            <p className="font-weight-normal text-center mt-2 text-sm">
              Minimum Order 15$
            </p>
          </div>
          <div className="w-1/4  ">
            <p
              className={`${classes.texts} text-center text-sm font-weight-normal`}
            >
              Reviews
            </p>
            <img className="object-contain  w-full h-16" src={rating} />
            <p className="font-weight-normal text-center mt-2 text-sm">
              {placeData?.user_ratings_total} Satisfid clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
