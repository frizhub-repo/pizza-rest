import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    width: "420px",
    height: "70px",
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
    marginLeft: "200px",
  },
  iconClass: {
    width: "80px",
    height: "70px",
    border: "4px solid #EA9C0D",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
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
    height: "450px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
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
    width: "422px",
  },

  root2: {
    backgroundColor: "#62BA81",
    width: "90px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  root4: {
    backgroundColor: "#62BA81",
    width: "280px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  root6: {
    backgroundColor: "#EA9C0D",
    width: "280px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  extraStyle3: {
    backgroundColor: "white",
    borderRadius: "0px",
    height: "1150px",
    width: "900px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
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
  },
  extraStylesForRadius2: {
    borderTopLeftRadius: "15px",
  },
  headerStyles: {
    display: "flex",
  },
  courseCardDiv: {
    borderTopLeftRadius: "15px",
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
    marginRight: "442px",
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
    marginLeft: "395px",
  },
  h1Styles: {
    color: "#62BA81",
    fontSize: "27px",
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bolder",
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
  imgDivContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  root7: {
    width: "575px",
    height: "393px",
    border: "2px solid #62BA81",
    borderRadius: "15px",
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
    fontSize: "10px",
    color: "#62BA81",
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
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  extraStyle8: {
    backgroundColor: "white",

    borderRadius: "0px",
    width: "1300px",
    height: "740px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  extraStyle9: {
    backgroundColor: "white",
    width: "1160px",
    height: "250px",
    borderRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: "20px",
  },
  tableReserve2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "30px",
  },
  imageStyles: {
    width: "1170px",
    height: "250px",
    objectFit: "cover",
  },
  extraStyle10: {
    backgroundColor: "white",
    width: "370px",
    height: "370px",
    borderRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: "20px",
  },
  carosalStyles: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
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
    justifyContent: "space-around",
    flexDirection: "row",
  },
  itemsStyles: {
    display: "flex",
    flexDirection: "column",
  },
  extraStylesForD: {
    width: "900px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  extraStyle11: {
    height: "750px",
  },
  dCStyles1: {
    backgroundColor: "#62BA81",
    width: "150px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  dCStyles2: {
    backgroundColor: "#62BA81",
    width: "320px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  dCStyles3: {
    backgroundColor: "#EA9C0D",
    width: "320px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  infoCard: {
    backgroundColor: "white",
    width: "386px",
    height: "73px",
    color: "white",
    borderRadius: "15px",
    border: "2px solid #CB0E0E",
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
    width: "386px",
    height: "68px",
    color: "white",
    borderRadius: "15px",
    marginTop: "10px",
  },
  pickCard2: {
    backgroundColor: "white",
    width: "150px",
    height: "48px",
    color: "white",
    borderRadius: "15px",
    display: "flex",
  },
  shopImage: {},
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
    width: "124px",
    borderRadius: "5px",
  },
  likeIcon: {
    height: "30px",
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
    justifyContent: "space-evenly",

    marginTop: "42px",
  },
}));
