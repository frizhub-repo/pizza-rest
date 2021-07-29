import React from "react";
import delivery from "../../images/delivery.png";
import rating from "../../images/rating.png";
import map from "../../images/map.png";
import Reservation from "../../images/reservation.png";
import { useRestaurantContext } from "../../Context/restaurantContext";
import styles from "./styles";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(styles);

function Section2() {
  const { restaurant } = useRestaurantContext();
  const classes = useStyles();

  return (
    <section className={`${classes.sectionTwo} flex py-20  w-full `}>
      <div className="flex-grow-1 w-5/6 h-full ml-12 mt-2">
        <div className={`${classes.icones} h-24 flex `}>
          <div className={`${classes.flex} `}>
            <p className=" text-gray-500 text-center text-sm">Address</p>
            <img className="object-contain mt-2 w-full h-16 " src={map} />

            <p className=" text-gray-500 text-center mt-2 text-sm px-2">
              {restaurant?.restaurant?.address}
            </p>
          </div>
          <div className={`${classes.flex}  `}>
            <p className=" text-gray-500 text-center text-sm">
              Table Reservation
            </p>
            <img className="object-contain  w-full h-16 " src={Reservation} />
            <p className=" text-gray-500 text-center mt-2 text-sm">
              Minimum Order 15$
            </p>
          </div>
          <div className={`${classes.flex}  `}>
            <p className=" text-gray-500 text-center text-sm">Delivery</p>
            <img className="h-16 object-contain  w-full" src={delivery} />

            <p className=" text-gray-500 text-center mt-2 text-sm">
              Minimum Order 15$
            </p>
          </div>
          <div className={`${classes.flex}   `}>
            <p className=" text-gray-500 text-center text-sm">Reviews</p>
            <img className="object-contain  w-full h-16" src={rating} />
            <p className=" text-gray-500 text-center mt-2 text-sm">
              22 Satisfid clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
