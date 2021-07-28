import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
  sectionStyles: {
    marginBottom: "20px",
  },
  divStyles: {
    height: "100%",
  },
  skeletonStyles: {
    marginBottom: "20px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  banner: {
    border: "1px solid #8080804f",
    padding: "20px",
    borderRadius: "10px",
    opacity: "0.8",
  },
  bannerHeading: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  menuHeading: {
    fontWeight: "700",
    marginRight: "5px",
    fontSize: "17px",
  },
  cardContentSPacing: {
    padding: "13px",
  },
  menuContent: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    fontWeight: "700",
    fontSize: "17px",
    textAlign: "start",
    margin: "20px 0px ",
  },
  menuPara: {
    fontWeight: "600",
    color: "grey",
    fontSize: "17px",
  },
  cardContent: {
    border: "1px solid text-lg",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
  },
  mobile1: {
    padding: "6rem 13rem 6rem 13rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      flexDirection: "column",
    },
  },
  mobile2: {
    width: "66.66%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  container: {
    marginLeft: "20px",
  },
  hrStyles: {
    color: "black",
  },
  root5: {
    backgroundColor: "#EA9C0D",
    width: "400px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  textStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "x-large",
    marginTop: "10px",
  },
  containerTwo: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "30px",

    [theme.breakpoints.down("md")]: {
      position: "relative",
      marginLeft: "45px",
    },
  },
  iconClass: {
    width: "80px",
    height: "70px",
    border: "4px solid #EA9C0D",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      right: "23px",
      width: "63px",
      height: "68px",
    },
  },
  divClass: {
    display: "flex",
    justifyContent: "space-around",
  },
  extraStyle: {
    backgroundColor: "#10B981",
    borderRadius: "0px",
    height: "75px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
  },
  extraStyle2: {
    backgroundColor: "white",
    borderRadius: "0px",
    height: "fit-content",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  coursesStyles: {
    display: "flex",
    flexDirection: "column",
  },
  tableReserve: {
    marginTop: "15px",
    width: "400px",
  },
  container4: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "70px",
    fontFamily: "Roboto",
    width: "400px",
  },
  extra: {
    marginLeft: "-30px",
  },
  root2: {
    backgroundColor: "#62BA81",
    width: "80px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },

  root4: {
    backgroundColor: "#62BA81",
    width: "250px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  root6: {
    backgroundColor: "#EA9C0D",
    width: "250px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  extraStyle3: {
    backgroundColor: "white",
    borderRadius: "0px",
    height: "1150px",
    width: "900px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  rStyles: {
    [theme.breakpoints.down("md")]: {
      width: "573px",
      position: "relative",
      left: "13px",
    },
  },
  extraStyle4: {
    backgroundColor: "#10B981",
    borderRadius: "0px",
    width: "300px",
    height: "60px",
    marginTop: "30px",
  },
  extraStylesForRadius: {
    borderTopRightRadius: "15px",
    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
  },
  extraStyleForRadius3: {
    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
  },
  extraStylesForRadius2: {
    borderTopLeftRadius: "15px",
    [theme.breakpoints.down("md")]: {
      width: "190px",
    },
  },
  headerStyles: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      left: "15px",
    },
  },
  screenStyles: {
    [theme.breakpoints.down("md")]: {
      position: "relative",
      right: "22px",
    },
  },
  courseCardDiv: {
    borderTopLeftRadius: "15px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "-15px",
    },
  },
  img: {
    width: "55px",
    height: "55px",
    marginTop: "13px",
  },
  textStyle: {
    color: "#EA9C0D",
    fontSize: 20,
    marginTop: "15px",
    fontFamily: "Roboto",
  },
  pStyles: {
    fontStyle: "italic",
  },

  title: {
    fontSize: 17,
    color: "#EBA73A",
    fontStyle: "italic",
    marginTop: "30px",
  },
  title2: {
    marginTop: "5px",
  },
  pos: {
    marginBottom: 12,
  },
  img2: {
    height: "189px",
    width: "127px",
    display: "block",
  },
  avatarStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h1Styles: {
    color: "#62BA81",
    fontSize: "27px",
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bolder",
    marginTop: "15px",
  },
  pStyles: {
    float: "left",
  },
  imgStyles: {
    height: "54px",
    width: "60px",
    marginRight: "20px",
    marginTop: "-10px",
    marginLeft: "20px",
  },
  divNewStyles: {
    marginBottom: "-30px",
  },
  imgDivContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  root7: {
    width: "575px",
    height: "363px",
    border: "2px solid #62BA81",
    borderRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "318px",
      height: "445px",
    },
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: "20px",
    marginTop: "20px",
  },
  cardContentStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "21px",
    color: "#62BA81",
    textAlign: "center",
  },
  lineStyles: {
    width: "520px",
    height: "3px",
    backgroundColor: "#62BA81",
    marginBottom: "20px",
  },
  extraStyle7: {
    backgroundColor: "#EA9C0D",
    borderRadius: "0px",
    height: "70px",
    width: "1300px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "982px",
    },
  },
  extraStyle8: {
    backgroundColor: "white",

    borderRadius: "0px",
    width: "1300px",
    height: "740px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "982px",
    },
  },

  tableReserve2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "30px",
    marginBottom: "60px",
  },
  imageStyles: {
    width: "1170px",
    height: "250px",
    objectFit: "cover",
  },

  carosalStyles: {
    display: "flex",
    justifyContent: "center",
  },
  innerCarosalStyles: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: "7px",
    left: "60px",
  },
  bookImgStyles: {
    backgroundColor: "white",
    height: "72px",
    width: "85px",
    marginTop: "-25px",
    marginLeft: "-14px",
    borderTopLeftRadius: "15px",
  },
  bookStyles: {
    height: "60px",
    width: "60px",
    marginTop: "10px",
    marginLeft: "17px",
  },
  typoStyles: {
    color: "white",
    marginTop: "-55px",
    marginLeft: "30px",
    fontSize: "25px",
    fontWeight: "bolder",
  },
  orderStyles2: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: "40px",
    scrollbarWidth: "thin",
  },
  itemsStyles: {
    display: "flex",
    flexDirection: "column",
  },
  extraStylesForD: {
    width: "900px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    [theme.breakpoints.down("md")]: {
      width: "588px",
    },
  },
  extraStyle11: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "588px",
      position: "relative",
    },
  },
  dCStyles1: {
    backgroundColor: "#62BA81",
    width: "150px",
    height: "120px",
    color: "black",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  dCStyles2: {
    backgroundColor: "#62BA81",
    width: "300px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  dCStyles3: {
    backgroundColor: "#EA9C0D",
    width: "300px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  dCStyles6: {
    width: "1000px",
    height: "800px",
    position: "relative",
    overflow: "hidden",
    overflowY: "scroll",
    scrollbarWidth: "auto",
    left: "40px",

    color: "black",
  },

  infoCard: {
    backgroundColor: "white",
    height: "87px",

    color: "white",
    borderRadius: "15px",
    border: "2px solid #CB0E0E",
  },
  getStars: {
    color: "#EA9C0D",
    fontSize: "40px",
  },
  getStarsSlash: {
    color: "#62BA81",
    fontSize: "50px",
  },
  infoCardText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bolder",
    fontSize: "10px",
    flexDirection: "column",
    marginTop: "-10px",
  },
  infoImageStyles: {
    width: "30px",
    height: "30px",
  },
  clickStyles: {
    color: "#CB0E0E",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  pickCard: {
    backgroundColor: "#62BA81",
    width: "372px",
    height: "65px",
    color: "white",
    borderRadius: "15px",
    marginTop: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  pickCard2: {
    backgroundColor: "white",
    width: "196px",
    height: "63px",
    color: "white",
    borderRadius: "15px",
    display: "flex",
    marginLeft: "-12px",
    marginTop: "-14px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  shopImage: {},
  innnerCard: {
    backgroundColor: "#62BA81",
    width: "200px",
    height: "70px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    textAlign: "center",
    fontWeight: "bolder",
    marginLeft: "20px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  upperDiv: {
    display: "grid",
    gridRowGap: "2px",
  },
  innerDiv: {
    display: "flex",
  },
  nameStyles: {
    width: "300px",
    [theme.breakpoints.down("md")]: {
      width: "230px",
    },
  },
  emailStyles: {
    width: "380px",
    [theme.breakpoints.down("md")]: {
      width: "260px",
    },
  },
  messageStyles: {
    width: "700px",
    marginTop: "-70px",
    [theme.breakpoints.down("md")]: {
      width: "514px",
    },
  },
  nameDivStyles: {
    width: "300px",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    marginTop: "10px",
    backgroundColor: "white",
    height: "100px",
    [theme.breakpoints.down("md")]: {
      width: "230px",
    },
  },
  emailDivStyles: {
    width: "380px",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    marginTop: "10px",
    backgroundColor: "white",
    height: "100px",
    [theme.breakpoints.down("md")]: {
      width: "260px",
    },
  },
  messageDivStyles: {
    width: "700px",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    marginTop: "10px",
    backgroundColor: "white",
    height: "140px",
    [theme.breakpoints.down("md")]: {
      width: "514px",
    },
  },
  nameDiv2Styles: {
    backgroundColor: "#E8E8E8",
    width: "288px",
    height: "86px",
    marginTop: "-10px",
    marginLeft: "-10px",
  },
  emailDiv2Styles: {
    backgroundColor: "#E8E8E8",
    width: "368px",
    height: "87px",
    marginLeft: "-10px",
    marginTop: "-11px",
  },
  messageDiv2Styles: {
    backgroundColor: "#E8E8E8",
    width: "680px",
    height: "124px",
    marginTop: "-9px",
    marginLeft: "-5px",
  },
  flexStyles: {
    display: "flex",
    flexDirection: "column",
  },
  buttonCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EA9C0D",
    width: "700px",
    height: "70px",
    marginLeft: "18px",
    color: "white",
    borderRadius: "15px",
    marginTop: "-90px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    [theme.breakpoints.down("md")]: {
      width: "514px",
    },
  },
  typostyles2: {
    textAlign: "center",
    color: "white",
    fontSize: "30px",
  },
  typostyles3: {
    textAlign: "center",
    color: "black",
    fontSize: "20px",
  },
  mapDivStyles: {
    display: "flex",
  },
  mapCard: {
    backgroundColor: "white",
    width: "522px",
    height: "437px",
    marginLeft: "20px",
    color: "white",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  addressStyles: {
    display: "flex",
    flexDirection: "column",
  },
  addressCard: {
    backgroundColor: "white",
    width: "522px",
    height: "237px",
    marginLeft: "20px",
    color: "white",
    borderRadius: "15px",
    marginTop: "20px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "396px",
    },
  },
  avatarDivStyles: {
    display: "flex",
    justifyContent: "space-between",
  },

  forflex: {
    display: "flex",
    flexDirection: "column",
    marginRight: "-160px",
    marginLeft: "30px",
    marginTop: "25px",
  },
  carouselLeftCard: {
    height: "368px",
    width: "188px",
    backgroundColor: "#F59E0B",
    boxSizing: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "inset 4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
    borderRadius: "70%",
    marginTop: "30px",
  },
  carouselRightCard: {
    height: "368px",
    width: "188px",
    backgroundColor: "#F59E0B",
    boxSizing: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "inset -4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
    borderRadius: "70%",
    marginTop: "30px",
  },
  resSmallCards: {
    backgroundColor: "rgba(245, 158, 11, 0.4);",
    height: "50px",
    width: "110px",
    borderRadius: "5px",
  },
  likeIcon: {
    height: "30px",
  },
  euroIcon: {
    marginTop: "-15",
    marginLeft: "20px",
    height: "70px",
    width: "70px",
  },
  fourFiveIcon: {
    height: "20px",
    marginTop: "5px",
  },
  numberIcon: {
    height: "15px",
    marginTop: "5px",
  },
  likeIconDiv: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    justifyContent: "space-evenly",
  },
  iconsDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  typostyles7: {
    textAlign: "center",
    color: "#10B981",
    fontSize: "20px",
  },
  pStyles: {
    color: "#F59E0B",
  },
  media: {
    width: "1160px",
    height: "250px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: "20px",
    marginLeft: "50px",
    [theme.breakpoints.down("md")]: {
      width: "888px",
    },
  },
  media2: {
    width: "370px",
    height: "370px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: "20px",
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      width: "293px",
      height: "300px",
    },
  },
  media3: {
    width: "522px",
    height: "430px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "20px",
    [theme.breakpoints.down("md")]: {
      width: "396px",
    },
  },
  media4: {
    width: "330px",
    height: "120px",
    borderRadius: "15px",
    marginTop: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "20px",
  },
  textDivStyles: {
    display: "flex",
    flexDirection: "column",
    marginRight: "400px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      left: "200px",
    },
  },
  media7: {
    width: "65px",
    height: "56px",
    marginTop: "-10px",
    marginLeft: "7px",
  },
  media0: {
    width: "78px",
    height: "56px",
    marginTop: "-13px",
    marginLeft: "-5px",
  },
  flexRowStyles: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  t2: {
    color: "#62BA81",
    fontSize: "8px",
    fontStyle: "italic",
    marginTop: "-12px",
    marginLeft: "5px",
  },
  textsStyles: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontSize: "11px",
    fontStyle: "italic",
    marginTop: "-6px",
    marginLeft: "5px",
  },
  headingStyles: {
    textDecoration: "underline",
    fontSize: "15px",
    fontWeight: "bold",
  },
  headingStyles2: {
    textDecoration: "underline",
    fontSize: "12px",
    fontWeight: "bold",
  },
  sepText: {
    display: "flex",
    justifyContent: "space-between",
    color: "grey",
    fontWeight: "bolder",
    fontFamily: "Roboto",
  },
  buttonCardStyles: {
    backgroundColor: "#D57070",
    width: "366px",
    height: "38px",
    color: "white",
    borderRadius: "10px",
    marginTop: "15px",
    textAlign: "center",
    color: "white",
  },
  colorSt: {
    backgroundColor: "#646464",
  },
  borderSt: {
    marginTop: "-9px",
  },

  additionInfoImgContainer: {
    left: "0",
    height: "45px",
    boxShadow: "rgba(73, 38, 38, 0.5) 0px 1px 4px",
    borderTop: "2px solid #c2bbba",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    scrollbarWidth: "thin",
  },
  textFont: {
    fontSize: "20px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    right: "20px",
  },
  textFont2: {
    fontSize: "20px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    right: "65px",
  },
  mImgStyles: {
    width: "30px",
    height: "30px",
    position: "relative",
    top: "-10px",
    cursor: "pointer",
  },

  additionInfoImgContainer: {
    left: "0",
    height: "45px",
    boxShadow: "rgba(73, 38, 38, 0.5) 0px 1px 4px",
    borderTop: "2px solid #c2bbba",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    scrollbarWidth: "thin",
  },
  textFont: {
    fontSize: "20px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    right: "20px",
  },
  textFont2: {
    fontSize: "20px",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    right: "65px",
  },
  mImgStyles: {
    width: "30px",
    height: "30px",
    position: "relative",
    top: "-10px",
  },

  mCardStyles: {
    width: "55px",
    height: "42px",
    borderRadius: "0px 0px 23px 23px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
  },
  carousel: {
    color: "#EA9C0D",
    padding: "10px",
    height: "100%",
    border: "1px solid #EA9C0D",
    backgroundColor: "#fff",
    borderRadius: "30px",
    cursor: "pointer",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
  },

  activeSection: {
    color: "#fff",
    backgroundColor: "#EA9C0D",
  },
}));
