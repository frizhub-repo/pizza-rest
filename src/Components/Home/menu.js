import React, { useState } from "react";
import fork from "../../images/fork.png";
import coffee from "../../images/coffee.svg";
import food from "../../images/food.svg";
import servingDish from "../../images/serving-dish.svg";
import cupcake from "../../images/cupcake.svg";
import coffeeOrange from "../../images/coffee-orange.png";
import foodOrange from "../../images/food-orange.png";
import servingDishOrange from "../../images/serving-dish-orange.png";
import cupcakeOrange from "../../images/cupcake.png";
import MenuTable from "./MenuTable";

function Menu() {
  const [menu, setMenu] = useState("1");

  return (
    <section
      className="flex py-20  w-full py-20 "
      style={{
        background:
          "url(https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center center",
      }}
    >
      <div className="w-full h-full ">
        <div className="flex w-full  justify-content-start ml-4 ">
          <img src={fork} className="  h-16 w-16 " />
          <div className="w-1/3 ml-4">
            <h1 className="text-white mr-2 font-weight-bold text-4xl text-left ">
              Our Menu
            </h1>
            <p className="text-white text-left text-sm">
              Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus,
              lacinia quis posuere ut
            </p>
          </div>
        </div>
        <div className="w-full flex ml-8 mr-0 ">
          <div className="w-1/6 ">
            <div
              className="inline-flex justify-content-between content-center mt-4  mb-4  w-full hover:cursor-pointer"
              onClick={() => setMenu("1")}
            >
              <img
                className="h-12 w-12 mr-2d-block  "
                src={menu == "1" ? coffeeOrange : coffee}
              />
              <p
                className={`${
                  menu == "1" ? "text-yellow-500" : "text-white"
                }  text-lg font-weight-bolder    `}
              >
                Breakfast
              </p>
            </div>
            <div
              className="inline-flex justify-content-between  content-center mb-4  w-full hover:cursor-pointer"
              onClick={() => setMenu("2")}
            >
              <img
                className="h-12 w-12 mr-2 d-block  "
                src={menu == "2" ? foodOrange : food}
              />
              <p
                className={`${
                  menu == "2" ? "text-yellow-500" : "text-white"
                }  text-lg font-weight-bolder    `}
              >
                Lunch
              </p>
            </div>
            <div
              className="inline-flex justify-content-between  content-center mb-4  w-full hover:cursor-pointer"
              onClick={() => setMenu("3")}
            >
              <img
                className="h-12 w-12 mr-2 d-block  "
                src={menu == "3" ? servingDishOrange : servingDish}
              />
              <p
                className={`${
                  menu == "3" ? "text-yellow-500" : "text-white"
                }  text-lg font-weight-bolder    `}
              >
                Dinner
              </p>
            </div>
            <div
              className="inline-flex justify-content-between  content-center mb-4  w-full hover:cursor-pointer"
              onClick={() => setMenu("4")}
            >
              <img
                className="h-12 w-12 mr-2 d-block  "
                src={menu == "4" ? cupcakeOrange : cupcake}
              />
              <p
                className={`${
                  menu == "4" ? "text-yellow-500" : "text-white"
                }  text-lg font-weight-bolder    `}
              >
                Desserts
              </p>
            </div>
          </div>
          {menu == "1" && <MenuTable />}
          {menu == "2" && <MenuTable />}
          {menu == "3" && <MenuTable />}
          {menu == "4" && <MenuTable />}
        </div>
      </div>
    </section>
  );
}

export default Menu;
