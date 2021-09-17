import CustomSelect from "Components/Common/CustomSelect/CustomSelect";
import CustomText from "Components/Common/CustomText/CustomText";
import * as React from "react";
import { useForm } from "react-hook-form";
import classes from "./Menus.module.css";
import { useRestaurantContext } from "Context/restaurantContext";
import FieldError from "Components/Common/FieldError";
import { CircularProgress } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { updateCustomerInfo } from "api/customers";
import { toast } from "react-toastify";

export default function Account() {
  const { customerData, refetchCustomerHandler } = useRestaurantContext();
  const { register, errors, handleSubmit, reset } = useForm({
    firstName: customerData?.firstName,
    lastName: customerData?.lastName,
  });

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (Object.entries(customerData).length > 0) {
      reset({
        firstName: customerData?.firstName,
        lastName: customerData?.lastName,
      });
    }
  }, [customerData]);

  const updateProfile = async (data) => {
    setLoading(true);
    try {
      const res = await updateCustomerInfo(data);
      toast.success("Profile has been updated");
      refetchCustomerHandler();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
      toast.error("Error updating profile");
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Account</h1>
      </div>
      {Object.keys(customerData).length > 0 ? (
        <div>
          <form onSubmit={handleSubmit(updateProfile)}>
            <CustomText
              placeholder={"First Name"}
              name={"firstName"}
              register={register}
              validationRule={{
                required: "This is required field",
              }}
              type="text"
            />
            {errors?.firstName?.message && (
              <FieldError message={errors?.firstName?.message} />
            )}
            <CustomText
              placeholder={"Last Name"}
              name={"lastName"}
              register={register}
              validationRule={{
                required: "This is required field",
              }}
              type="text"
            />
            {errors?.lastName?.message && (
              <FieldError message={errors?.lastName?.message} />
            )}
            <CustomSelect
              placeholder={"Gender"}
              values={["Male", "Female", "Other"]}
              register={register}
              name={"gender"}
            />
            <CustomText
              placeholder={"Email"}
              name={"email"}
              defaultValue={customerData?.email}
              isDisabled={true}
            />
            <CustomText name={"Date"} type="date" />
            <div className="mt-4">
              <button
                type="submit"
                className={classes.customBtn}
                disabled={loading}
              >
                {loading && (
                  <CircularProgress
                    color="inherit"
                    size={20}
                    style={{ marginRight: "8px" }}
                  />
                )}
                Save Changes
              </button>
              <p className="text-white">
                We save those information in order to send you the best offers
              </p>
            </div>
          </form>
        </div>
      ) : (
        [1, 2, 3, 4].map(() => (
          <Skeleton
            variant="rect"
            height={70}
            width={"100%"}
            className={classes.skeleton}
          />
        ))
      )}
    </div>
  );
}
