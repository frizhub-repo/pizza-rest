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
  ...rest
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        ...rest,
      }}
      className="scale-in-center cardRoot"
    >
      <Card
        bodyStyle={{ padding: "0px 10px 8px 10px" }}
        className="cardContainer"
      >
        <div className="displayCol">
          <h3
            className="overflowText cardHeading cp"
            title={title}
            onClick={onClickHandler}
          >
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
                <Divider type="vertical" className="dividerVertical" />
              </>
            )}

            <Divider type="vertical" className="dividerVertical" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
