import React from "react";
import { Card, CardContent } from "@material-ui/core";
import dish from "../../images/dish.png";
import carousel from "../../images/carousel.png";
import roundImage from "../../images/roundImage.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
export default function Section3() {
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card
          style={{
            border: "1px solid rgba(0, 0, 0, 0.4)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardContent>
            <div>
              <img src={dish} style={{ height: "280px", width: "401px" }} />
            </div>
          </CardContent>
          <CardContent>
            <img src={carousel} />
          </CardContent>
        </Card>

        <div
          style={{
            display: "flex",
            width: "575px",
            position: "relative",
            justifyContent: "space-between",
          }}
        >
          <Card
            style={{
              height: "338px",
              width: "188px",
              backgroundColor: "#F59E0B",
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              boxShadow: "inset 4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
              borderRadius: "70%",
              marginTop: "3px",
            }}
          ></Card>

          <Card
            style={{
              height: "338px",
              width: "188px",
              backgroundColor: "#F59E0B",
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              boxShadow: "inset -4px 0px 4px 4px rgba(0, 0, 0, 0.4)",
              borderRadius: "70%",
              marginTop: "3px",
            }}
          ></Card>
          <Card
            style={{
              backgroundColor: "#10B981",
              height: "338px",
              width: "460px",
              borderRadius: "30px",
              position: "absolute",
              left: "58px",
              top: "3px",
            }}
          >
            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <img
                  src={roundImage}
                  style={{ height: "130px", width: "130px" }}
                />
              </div>
              <div
                style={{
                  width: "550px",
                  height: "5px",
                  backgroundColor: "white",
                  marginTop: "10px",
                  borderRadius: "5px",
                }}
              ></div>
              <div>
                <p style={{ color: "white" }}>
                  ''E’ il mio ristorante preferito a Pisa. Andateci e non ve ne
                  pentirete!!! I piatti sono buonissimi ed in più il personale è
                  gentile. Super consigliato, noi appena possiamo (data la
                  pandemia) ci torniamo con piacere'’
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
