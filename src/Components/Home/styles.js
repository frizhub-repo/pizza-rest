const styles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "70px",
    fontFamily: "Roboto",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  container2: {
    display: "grid",
    gridTemplateColumns: "207px 207px",
    gridRowGap: "1px",
    gridColumnGap: "1px",
  },
  textStyles: {
    color: "white",
  },
  root2: {
    backgroundColor: " #10B981",
    width: "110px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  root3: {
    background: "linear-gradient(90deg, #6d6b67 40%, #F59E0B 30%)",
    width: "750px",
    height: "400px",
    marginTop: "5px",
    marginBottom: "40px",
    borderRadius: "15px",

    color: "white",
  },
  root4: {
    backgroundColor: " #10B981",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    border: "1px solid rgba(0, 0, 0, 0.4)",

    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("sm")]: {
      width: "222px",
    },
  },
  root5: {
    backgroundColor: "#F59E0B",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("sm")]: {
      width: "222px",
    },
  },
  img: {
    width: "60px",
    height: "60px",
    marginTop: "13px",
    marginLeft: "10px",
  },
  aboutUsText: {
    color: "#F59E0B",
    fontFamily: "Roboto",
    fontStyle: "normal",
    textAlign: "center",
    padding: "60px 0 0",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "60px",
      paddingRight: "60px",
    },
  },
  headingStyle: {
    fontSize: "60px",
    lineHeight: "84px",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "27px",
    },
  },
  paraStyles: {
    fontSize: "20px",
    lineHeight: "33px",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "17px",
      marginLeft: "13px",
      marginTop: "15px",
      fontSize: "15px",
    },
  },
  root6: {
    backgroundColor: "#F59E0B",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderBottom: "1px solid grey",
  },
  closedStyles: {
    backgroundColor: "#CB0E0E",

    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderBottom: "1px solid grey",
  },
  timingCardStyles: {
    backgroundColor: "#F59E0B",
    width: "210px",
    height: "50px",
    color: "white",
    borderRadius: "0px",
  },
  addStyles: {
    backgroundColor: "#BA2211",
  },
  addStyles2: {
    borderBottomLeftRadius: "15px",
  },
  addStyles3: {
    borderBottomRightRadius: "15px",
  },
  typoStyles4: {
    textAlign: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  timingCardStyles2: {
    backgroundColor: "#10B981",
    width: "418px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  timingCardContect: {},
  timingCardContect2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img2: {
    width: "80px",
    height: "80px",
    marginTop: "-5px",
  },
  //section 3 styles start here
  s3MainDiv: { marginTop: "30px" },
  s3InnerDiv: { display: "flex", flexDirection: "column", width: "550px" },
  s3FirstCard: {
    backgroundColor: "white",
    width: "434px",
    height: "80px",
    borderRadius: "0px 0px 15px 15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  s3FirstCardImage: { height: "280px", width: "401px" },
  carouselDiv: {
    display: "flex",
    width: "575px",
    position: "relative",
  },
  carouselLeftCard: {
    height: "338px",
    width: "188px",
    backgroundColor: "#F59E0B",
    boxSizing: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "inset 4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
    borderRadius: "70%",
    marginTop: "3px",
  },
  carouselRightCard: {
    height: "338px",
    width: "188px",
    backgroundColor: "#F59E0B",
    boxSizing: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "inset -4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
    borderRadius: "70%",
    marginTop: "3px",
  },
  carouselInnerCard: {
    backgroundColor: "#10B981",
    height: "338px",
    width: "460px",
    borderRadius: "30px",
    position: "absolute",
    left: "58px",
    top: "3px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  carouselCardImageDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  carouselCardImage: { height: "130px", width: "130px" },
  whiteBar: {
    width: "550px",
    height: "5px",
    backgroundColor: "white",
    marginTop: "10px",
    borderRadius: "5px",
  },
  text: { color: "white" },
  mainDiv: {
    margin: "30px 0px 30px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  googleMapRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px 0",
  },
  googleMap: {
    width: "700px",
    borderRadius: "30px",
  },
  divFlexStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  divFlexStyles2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  roundedCardStyles: {
    backgroundColor: "#F59E0B",
    width: "60px",
    height: "60px",
    color: "white",
    borderRadius: "50%",
    marginLeft: "800px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  flexDisplay: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  media3: {
    width: "622px",
    height: "370px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: "70px",
    marginRight: "-50px",
  },
  media5: {
    width: "437px",
    height: "300px",
    borderRadius: "15px 15px 0px 0px",
  },
  flexRowStyle: {
    display: "flex",
    justifyContent: "space-around",
  },
  flexColStyle: {
    display: "flex",
    flexDirection: "column",
  },
  pTextStyles: {
    marginTop: "8px",
    fontWeight: "bolder",
  },
  forwardArrow: {
    backgroundColor: "#F69D0B",
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    borderRadius: "50%",
    width: 80,
    height: 80,
    left: 15,
    cursor: "pointer",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: "350px",
    // },
  },
  backwordArrow: {
    backgroundColor: "#F69D0B",
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 80,
    height: 80,
    borderRadius: "50%",
    right: 15,
    cursor: "pointer",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexDStyles: {
    display: "flex",
    justifyContent: "center",
  },
  indicatorStyles: {
    background: "#F69D0B",
    width: 30,
    height: 30,
    display: "inline-block",
    margin: "0 8px",
    borderRadius: "50%",
    boxShadow: "inset 0px 0px 0px 2px rgb(0 0 0 / 50%)",
  },
  indiExtra: {
    background: "white",
    width: 30,
    height: 30,
    display: "inline-block",
    margin: "0 8px",
    borderRadius: "50%",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    border: "2px solid #000",
  },

  flexCoursel: {
    width: "1086px",
    height: "297px",
  },
  mainDeev: {
    width: "100%",
  },
  icones: {
    [theme.breakpoints.down("sm")]: {
      dislay: "flex",
      flexDirection: "column",
    },
  },
  sectionTwo: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
      paddingRight: "50px",
    },
  },
  flex: {
    width: "25%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      dislay: "flex",
      marginBottom: "60px",
    },
  },
  carousel: {
    display: "flex",
    width: "1000px",
    justifyContent: "center",
    height: "450px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px",
  },
  rmvCarouselSpacing: {
    width: "685px",
    height: "370px",
  },
  discountTitle: {
    fontWeight: "normal",
    fontSize: "50px",
    lineHeight: "75px",
    textAlign: "center",
  },
  rmvdiscountTitleFont: {
    fontSize: "30px",
  },
  titleSpacing: {
    paddingTop: "20px",
  },
  skeletongSpaing: {
    margin: "0 20px",
    borderRadius: "30px",
  },
  discountDivider: {
    backgroundColor: "#fff",
  },
  carouselDiv: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "25px",
      paddingRight: "25px",
    },
  },
  arrowCarousel: {
    width: "40%",
    borderTopLeftRadius: "30px",
    borderBottomLeftRadius: "30px",
    display: "flex",
    marginTop: "60px",
  },
  arrowCarouselTwo: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "60%",
    background: "#F59E0B",
    color: "#fff",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    padding: "20px",
  },
  texts: {
    color: "#000000",
  },
  txt: {
    color: "#000",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "0.9rem",
    textAlign: "center",
  },
  iconspacing: {
    margin: "0 170px",
    [theme.breakpoints.down("md")]: {
      margin: "0 120px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 100px",
    },
  },
  rmvSpacing: {
    margin: "10px 0",
  },
  closeRestaurant: {
    backgroundColor: "#CB0E0E",
  },
  someThingRoot: {
    margin: "80px 50px 50px 50px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 150px",
  },
  menuSpacing: {
    marginTop: "30px",
    width: "100%",
  },
  carouselRot: {
    margin: "100px 0 50px 0",
  },
});

export default styles;
