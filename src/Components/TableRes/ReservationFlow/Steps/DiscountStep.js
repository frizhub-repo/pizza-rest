import { CircularProgress } from "@material-ui/core";
import { reserveTable } from "api/reservations";
import { useRestaurantContext } from "Context/restaurantContext";
import * as React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import classes from "./Step.module.css";

function DiscountCard({ content, isActive, handleClick }) {
  return (
    <div className={classes.detailsCardContainer} onClick={handleClick}>
      <div className={classes.detailsCardContentContainer}>
        <div className={classes.detailsCardHeaderContainer}>
          {content?.discountPrice && (
            <div className={classes.detailsCardNameContainer}>
              <h5>-{content?.discountPrice}%</h5>
            </div>
          )}
          <h5 className={classes.detailsCardHeader}>{content?.title}</h5>
        </div>
        <div>
          <p style={{ textAlign: "start" }}>{content.description}</p>
        </div>
      </div>
      <div
        className={`${classes.detailsCardSelector} ${
          isActive && classes.detailsCardSelector_active
        } shadow-md`}
      ></div>
    </div>
  );
}

export default function DiscountStep({ discounts, parameters, setParameters }) {
  const [chooseOffer, setChooseOffer] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { token } = useRestaurantContext();
  const history = useHistory();

  React.useEffect(() => {
    for (const offer of discounts) {
      let numPeople = parseInt(parameters?.people?.count);
      const isPeopleExist =
        offer?.numberOfPeople?.includes(numPeople) ||
        (offer?.peopleGreaterThanSix && numPeople >= 6);
      let isDateExist = false;
      for (
        let date = new Date(offer?.startDate);
        date <= new Date(offer?.endDate);
        date.setDate(date.getDate() + 1)
      ) {
        if (
          new Date(date).toLocaleDateString() ===
          new Date(parameters?.date?.value).toLocaleDateString()
        ) {
          isDateExist = true;
        }
      }
      let isSlotExist = false;
      if (
        offer?.hourlyTimeSlots?.includes(parameters?.time?.slot) ||
        (parameters?.time?.slot >= offer?.groupTimeSlot?.startHour &&
          parameters?.time?.slot <= offer?.groupTimeSlot?.endHour)
      ) {
        isSlotExist = true;
      }
      // Set offers based on discount type
      if (offer?.discountType === "bundle" && isDateExist) {
        setChooseOffer((prevOffer) => [...prevOffer, offer]);
      }
      if (
        offer?.discountType === "group" &&
        isPeopleExist &&
        isDateExist &&
        isSlotExist
      ) {
        setChooseOffer((prevOffer) => [...prevOffer, offer]);
      }
      if (offer?.discountType === "hourly" && isDateExist && isSlotExist) {
        setChooseOffer((prevOffer) => [...prevOffer, offer]);
      }
    }
  }, []);

  const noDiscount = {
    header: "Don’t use any discounts",
    description: "No one Discounts will be used with this order",
  };

  function updateDiscount(id) {
    setParameters({ ...parameters, discount: id });
  }

  const createReservation = async () => {
    setLoading(true);
    try {
      if (!token) {
        toast.info("Please login first");
        history.push("/signIn");
      } else if (!parameters?.discount) {
        toast.error("Please choose discount");
      } else {
        const payload = {
          startTime: parameters?.date?.value,
          numberOfPeople: parseInt(parameters?.people?.count),
          timeSlot: parameters?.time?.slot,
          services: parameters?.time?.name,
          offer: parameters?.discount === -1 ? null : parameters?.discount,
        };
        const res = await reserveTable(payload);
        toast.success("Reservation has been created successfully");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Error while creating offer");
      console.log({ error });
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Choose a Discount</h3>
      <div className={`${classes.contentContainer} custom-scroll-secondary`}>
        <div className="mx-2">
          {chooseOffer?.length > 0 &&
            chooseOffer?.map((discount, index) => (
              <DiscountCard
                content={discount}
                isActive={discount?._id === parameters?.discount?._id}
                handleClick={() => updateDiscount(discount)}
              />
            ))}
          {chooseOffer?.length > 0 && (
            <h5 className={classes.secondaryHeader}>Or:</h5>
          )}
          <div className="mt-2"></div>
          <DiscountCard
            content={noDiscount}
            isActive={parameters?.discount === -1}
            handleClick={() => updateDiscount(-1)}
          />
        </div>
      </div>
      <div className={classes.createReservationBtnRoot}>
        <button
          className={classes.createReservationBtn}
          onClick={createReservation}
          disabled={loading}
        >
          {loading && (
            <CircularProgress
              color="inherit"
              size={20}
              style={{ marginRight: "8px" }}
            />
          )}
          Create Reservation
        </button>
      </div>
    </div>
  );
}
