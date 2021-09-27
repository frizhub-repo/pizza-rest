import classes from "./OrderHistorySkeleton.module.css";
import * as React from "react";
import { Skeleton } from "@material-ui/lab";

export const OrderHistoryLoading = () => {
  return (
    <div>
      <div className={classes.dateSkeletonRoot}>
        <Skeleton
          variant="rect"
          height={30}
          width={240}
          className={classes.dateSkeleton}
        />
      </div>
      <div className={classes.orderContainerWrapper}>
        <table className={classes.orderContainer}>
          <tr className={classes.orderHeader}>
            <th className={classes.columnName}>Plates</th>
            <th className={classes.columnName}>Price</th>
            <th className={classes.columnName}>QTY</th>
            <th className={`${classes.columnName} ${classes.border_none}`}>
              Actions
            </th>
          </tr>
          {[1, 2, 3].map((_, index) => (
            <tr
              key={index}
              className={`${classes.productContainer} ${
                index === 2 && classes.rmvBorderBtm
              }`}
            >
              <td className={classes.detailText}>
                <Skeleton
                  variant="rect"
                  height={120}
                  className={classes.imgSkeleton}
                />
              </td>
              <td colspan="3">
                <div>
                  <Skeleton variant="rect" className={classes.txtSkeleton} />
                  <Skeleton variant="rect" className={classes.txtSkeleton} />
                  <Skeleton variant="rect" className={classes.txtSkeleton} />
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
