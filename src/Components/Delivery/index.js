import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import delivery from "../../images/delivery.png";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../Home/Hero";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TimingsCard from "../Home/timingsCard";
import { useStyles } from "../TableRes/TableResStyles";
import exicon from "../../images/exicon.png";
import shop from "../../images/shop.png";
import Section4 from "../Home/section4";
import CardMedia from "@material-ui/core/CardMedia";
import foodPackage from "../../images/foodPackage.png";
import Carousel from "react-multi-carousel";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { getDeliverableMenus } from "../../api/customers";
import ProductByCategories from "../CustomComponents/ProductByCategories";
import DeleteItemIcon from "../../Assets/IconComponent/DeleteItemIcon";
import { removeItem } from "../../actions/index";
import FlamesIcon from "Assets/IconComponent/Flames";
import DiscountButtons from "Components/CustomComponents/DiscountButtons";
import { isEmpty } from "utils/common";
import messages from "utils/messages";
import Header from "Components/Home/Header";
import deliveryHeaderImg from "Assets/images/deliveryHeader.png";
import AuthModal from "Components/Auth/AuthModal";
import Reviews from "Components/CustomComponents/Reviews";

function Delivery() {
  let { restaurant, customerData } = useRestaurantContext();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);

  const history = useHistory();

  const { products: ordersProducts, total } = useSelector(
    (state) => state.orders
  );

  const orderNow = () => {
    try {
      if (ordersProducts?.length <= 0) {
        toast.error("Please provide some products to proceed");
        return;
      }
      if (isEmpty(customerData)) {
        handleClickOpen();
      } else if (customerData?.addresses?.length) {
        history.push("/chooseAddress");
      } else {
        history.push("/deliveryAddress");
      }
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        return;
      }
      toast.error("Error occured");
      console.log({ error });
    }
  };
  const validateOfferMinPrice = () => {
    for (const { offer, quantity } of ordersProducts) {
      if (!isEmpty(offer) && offer?.discountType !== "bundle") {
        const minPrice = offer?.minOrderPrice * quantity;
        if (total < minPrice) {
          throw Error(messages.minOrderPrice(minPrice));
        }
      }
    }
  };

  const removeItemFromCart = (product) => {
    dispatch(removeItem(product));
  };

  const isProductAddedToCart = (productId) => {
    let val = false;
    ordersProducts.forEach((prd) => {
      if (prd.product === productId) val = true;
    });
    return val;
  };

  const [menus, setMenus] = React.useState([]);

  const fetchDeliverableMenus = async () => {
    try {
      setLoading(true);
      const res = await getDeliverableMenus();
      setMenus(res?.data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeliverableMenus();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero
        textOne={restaurant?.restaurant?.name ?? "Uncle Sammy"}
        textTwo="Delivery"
        url={deliveryHeaderImg}
        restaurantLogo={restaurant?.restaurant?.logoUrl}
      />
      <Section4 placeData={restaurant?.placeData} />
      <div className={classes.orderStyles2}>
        <div className={classes.itemsStyles}>
          <div className={`${classes.dealsRoot}`}>
            <div
              className="custom-scroll"
              style={{ height: "fit-content", maxHeight: "300px" }}
            >
              <div
                className={`${classes.hotDeals} ${
                  activeIndex === "hotDeals" && classes.activeMenu
                }`}
                onClick={() => setActiveIndex("hotDeals")}
              >
                Hot Deals
                <div className={classes.hotDealsIcon}>
                  <FlamesIcon />
                </div>
              </div>
              {menus.length ? (
                menus?.map((menu, index) => (
                  <p
                    key={menu?._id}
                    className={`${classes.dealsList} ${
                      activeIndex === index && classes.activeMenu
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      setSectionIndex(0);
                    }}
                  >
                    {menu?.title}
                  </p>
                ))
              ) : (
                <div className={classes.notFoundMenus}>
                  These sections don't have any menus!
                </div>
              )}
            </div>
          </div>
          <Header />
          <Card
            className={`${classes.root5} ${classes.extraStyle3} ${classes.extraStyle11}`}
          >
            {activeIndex === "hotDeals" ? (
              <DiscountButtons />
            ) : (
              <div>
                <CardContent className={classes.carouselCard}>
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className={classes.crsStyles}
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                      desktop: {
                        breakpoint: {
                          max: 3000,
                          min: 1024,
                        },
                        items: 5,
                        partialVisibilityGutter: 40,
                      },
                      mobile: {
                        breakpoint: {
                          max: 464,
                          min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                      },
                      tablet: {
                        breakpoint: {
                          max: 1024,
                          min: 464,
                        },
                        items: 4,
                        partialVisibilityGutter: 30,
                      },
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={3}
                    swipeable
                  >
                    {menus[activeIndex]?.items?.length > 0 &&
                      menus[activeIndex]?.items?.map((item, index) => (
                        <h1
                          key={index}
                          className={`${classes.carousel} ${
                            sectionIndex === index && classes.activeSection
                          }`}
                          onClick={() => setSectionIndex(index)}
                        >
                          {item?.category?.name}
                        </h1>
                      ))}
                  </Carousel>
                </CardContent>
                {menus[activeIndex]?.items[sectionIndex]?.products?.length ? (
                  <CardContent
                    className={`${classes.cardSpacing} custom-scroll-product`}
                  >
                    <div className={classes.dCStyles}>
                      <ProductByCategories
                        products={
                          menus[activeIndex]?.items[sectionIndex]?.products
                        }
                        isProductAddedToCart={isProductAddedToCart}
                      />
                    </div>
                  </CardContent>
                ) : (
                  <div
                    style={{
                      color: "#000",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: "20px",
                    }}
                  >
                    These sections don't have any products!
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>

        <div className={classes.tableReserve}>
          <div className={classes.container4}>
            <Card
              className={`${classes.dCStyles1} ${
                !restaurant?.placeData?.opening_hours?.open_now &&
                classes.closeResStats
              }`}
            >
              <CardContent>
                <div className={classes.img}>
                  <img src={delivery} />
                </div>
              </CardContent>
            </Card>
            <div>
              <div>
                <TimingsCard
                  id="2"
                  startTime="9:00am"
                  endTime="2:00pm"
                  open={restaurant?.placeData?.opening_hours?.open_now}
                  styles={`${classes.dCStyles2} ${
                    !restaurant?.placeData?.opening_hours?.open_now &&
                    classes.closeResStats
                  }`}
                />
              </div>
              <div>
                <TimingsCard
                  id="3"
                  open="true"
                  textForOpen="Click for Opening Hours"
                  styles={classes.dCStyles3}
                />
              </div>
            </div>
          </div>
          <Card className={`${classes.root5} ${classes.extraStyle2}`}>
            <CardContent>
              <div className={classes.allergiesRoot}>
                <img src={exicon} width="31px" height="15px" />
                <p>
                  If you’ve got any allergies or intollerances (for you or any
                  one of your friends)
                </p>
                <label className={classes.allergiesClickHereTxt}>
                  Click Here
                </label>
              </div>
              <Card className={classes.pickCard}>
                <CardContent className={classes.flexRowStyles}>
                  <Card className={classes.pickCard2}>
                    <CardContent className={classes.flexRowStyles}>
                      <CardMedia
                        className={classes.media0}
                        image={foodPackage}
                      />
                      <div className={`${classes.t2}`}>
                        <h1 className={classes.headingStyles2}>
                          Delivery at Home
                        </h1>
                        <p>You are missing 15$ for FREE SHIPPING</p>
                      </div>
                    </CardContent>
                  </Card>
                  <CardMedia className={classes.media7} image={shop} />
                  <div className={classes.textsStyles}>
                    <h1 className={classes.headingStyles}>PickUp your Order</h1>
                    <p>Come to our local to get your order</p>
                  </div>
                </CardContent>
              </Card>
              <br />

              <br />

              {ordersProducts?.length > 0 &&
                ordersProducts.map((product) => (
                  <div key={product?.product}>
                    <div className={classes.sepText}>
                      <div className={classes.orderItem}>
                        <div onClick={() => removeItemFromCart(product)}>
                          <DeleteItemIcon />
                        </div>
                        <p className={classes.ml}>
                          {product.quantity}x {product?.name}
                        </p>
                      </div>
                      {product.price ? (
                        <div className={classes.priceTagContainer}>
                          {(product?.isDiscount === "flat" ||
                            product?.isDiscount === "percentage") && (
                            <span className={classes.originalPriceTag}>
                              {product?.originalPrice}€
                            </span>
                          )}
                          <p>{product.price > 0 ? product.price : 0}€</p>
                        </div>
                      ) : (
                        <p className={classes.free}>Free</p>
                      )}
                    </div>
                    <span className={classes.sizes}>
                      {product?.size?.title}
                    </span>
                    {product?.bundledProduct?.length > 0 &&
                      product?.bundledProduct?.map((productObj) => (
                        <div className={classes.bundleProduct}>
                          <div className={classes.bundleTitleContainer}>
                            <span className={classes.bundleTitle}>
                              {product.quantity}x {productObj?.product?.title}
                            </span>
                            <p className={classes.free}>Free</p>
                          </div>
                          <span className={classes.sizeTitleContainer}>
                            {productObj?.size?.title}
                          </span>
                        </div>
                      ))}
                  </div>
                ))}
              <br />
              <hr />
              <br />
              <div className={classes.sepText}>
                <p>Subtotal</p>
                <p className={classes.totalTxt}>{total > 0 ? total : 0} €</p>
              </div>

              <button className={`${classes.buttonCardStyles}`}>
                Add more 5€ to your order to proceed
              </button>
              <button
                className={`${classes.buttonCardStyles} ${classes.colorSt}`}
                onClick={orderNow}
              >
                Choose a Payment method
              </button>
            </CardContent>
          </Card>
          <div className={classes.reviewRoot}>
            <Reviews placeData={restaurant?.placeData} />
          </div>
        </div>
      </div>
      <Footer />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <AuthModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Delivery;
