import * as React from "react";
import Placeholder from "Assets/images/order-placeholder.png";
import classes from "./Menus.module.css";
import { getOrders } from "api/orders";
import { toast } from "react-toastify";
import { OrderHistoryLoading } from "../OrderHistoryLoading";

export default function OrderHistory() {
  const [history, setHistory] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => fetchOrders(), []);

  async function fetchOrders() {
    try {
      const res = await getOrders();
      if (res?.status === 200) setHistory(res?.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast.error("Unable to get orders history.");
    }
  }

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Order History</h1>
      </div>

      {isLoading ? (
        <>
          <OrderHistoryLoading />
          <OrderHistoryLoading />
        </>
      ) : history?.length ? (
        history?.map((record) => (
          <div>
            <h2 className={classes.recordDate}>
              {new Date(record.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h2>
            <div className={classes.orderContainerWrapper}>
              <table className={classes.orderContainer}>
                <tr className={classes.orderHeader}>
                  <th className={classes.columnName}>Plates</th>
                  <th className={classes.columnName}>Price</th>
                  <th className={classes.columnName}>QTY</th>
                  <th
                    className={`${classes.columnName} ${classes.border_none}`}
                  >
                    Actions
                  </th>
                </tr>
                {record.products.map((item, index) => (
                  <tr className={`${classes.productContainer}`}>
                    <td className={classes.plateContainer}>
                      <img
                        src={Placeholder}
                        width={100}
                        height={100}
                        className={classes.orderImage}
                      />
                      <div>
                        <p className={classes.productText}>
                          {item.product.title}
                        </p>
                        <p>
                          Add-Ons:{" "}
                          {item.product.addOns.length
                            ? item.product.addOns.map((addOn) => `${addOn}, `)
                            : "N/A"}
                        </p>
                      </div>
                    </td>
                    <td className={classes.detailText}>{item.price}</td>
                    <td className={classes.detailText}>{item.quantity}</td>
                    <td className={classes.detailText}>
                      <button className={classes.actionBtn}>
                        Reorder again this plate
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className={classes.actionsRow}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className={classes.btnsColumn}>
                    <button className={classes.actionBtn}>View Order</button>
                    <button className={classes.actionBtn}>
                      Redo the entire order again
                    </button>
                    <button className={classes.actionBtn}>Review</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        ))
      ) : (
        <h1>No orders to show</h1>
      )}
    </div>
  );
}
