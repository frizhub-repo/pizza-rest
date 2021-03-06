import { Card, Popconfirm } from "antd";
import React from "react";
import DishesIcon from "../../Assets/IconComponent/DishesIcon";
import { Divider, Typography } from "antd";
import "./styles.css";

const ItemCard = ({
  payload,
  title,
  image,
  onClickHandler,
  deleteItemHandler,
  deleteStatus,
  count = 0,
  deleteModal,
  showCount = false,
  children,
  onClickEditHandler,
  onClickItemsHandler,
  setSelectedMenu,
  isSelectedMenu,
  ...rest
}) => {
  return (
    <div
      style={{
        boxShadow: "0 4px 4px rgb(0 0 0 / 20%)",
        backgroundImage: `url(${process.env.REACT_APP_API_BASE_URL}/${image})`,
        ...rest,
      }}
      className="cardRoot"
      onClick={onClickHandler}
    >
      <Card
        bodyStyle={{
          padding: "0px 10px 8px 10px",
          background: isSelectedMenu && "#F59E0B",
          borderRadius: "30px",
        }}
        className="cardContainer"
        style={{ background: isSelectedMenu && "#F59E0B" }}
      >
        <div className="displayCol">
          <h3 className="overflowText cardHeading cp" title={title}>
            {title}
          </h3>
          <hr className="hrStyles" />
          <div className="actionContainer">
            {showCount && (
              <>
                <div className="displayCol cp" onClick={onClickItemsHandler}>
                  <DishesIcon />
                  <Typography className="prodLen">{count ?? 0}</Typography>
                </div>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
