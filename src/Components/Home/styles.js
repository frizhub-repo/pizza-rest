const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "70px",
    fontFamily: "Roboto",
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
    backgroundColor: "#62BA81",
    width: "110px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  root3: {
    background: "linear-gradient(90deg, #6d6b67 40%, #EA9C0D 30%)",
    width: "750px",
    height: "400px",
    marginTop: "5px",
    marginBottom: "30px",
    borderRadius: "15px",
    marginLeft: "50px",
    color: "white",
  },
  root4: {
    backgroundColor: "#62BA81",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  root5: {
    backgroundColor: "#EA9C0D",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
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
  },
  headingStyle: {
    fontSize: "72px",
    lineHeight: "84px",
  },
  paraStyles: {
    fontSize: "30px",
    lineHeight: "35px",
    marginLeft: "27px",
  },
  root6: {
    backgroundColor: "#EA9C0D",
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
    backgroundColor: "#EA9C0D",
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
  },
  timingCardStyles2: {
    backgroundColor: "#62BA81",
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
  s3InnerDiv: { display: "flex", flexDirection: "column" },
  s3FirstCard: {
    backgroundColor: "white",
    width: "437px",
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
    justifyContent: "space-between",
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
    backgroundColor: "#EA9C0D",
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
};

export default styles;
