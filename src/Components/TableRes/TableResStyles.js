import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    width: "362px",
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
    height: "100px",
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
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  root4: {
    backgroundColor: "#62BA81",
    width: "242px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  root6: {
    backgroundColor: "#EA9C0D",
    width: "242px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
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
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
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
}));
