import React from "react";
import delivery from "../../images/delivery.png";
import rating from "../../images/rating.png";
import map from "../../images/map.png";
import Reservation from "../../images/reservation.png";
import cost from "../../images/cost.png";
function section4() {
  return (
    <section className="flex py-20  w-full ">
      <div className="flex-grow-1 w-5/6 h-full ml-12 mt-2">
        <div className="h-24 flex ">
          <div className="w-1/4  ">
            <p className=" text-gray-500 text-center text-sm">Address</p>
            <img className="object-contain mt-2 w-full h-16 " src={map} />

            <p className=" text-gray-500 text-center mt-2 text-sm">
              Via Cristoforo Colombo,44
            </p>
          </div>

          <div className="w-1/4  ">
            <p className=" text-gray-500 text-center text-sm">Delivery</p>
            <img className="h-16 object-contain  w-full" src={delivery} />

            <p className=" text-gray-500 text-center mt-2 text-sm">
              Minimum Order 15$
            </p>
          </div>

          <div className="w-1/4  ">
            <p className=" text-gray-500 text-center text-sm">Delivery Fee</p>
            <img className="object-contain  w-full h-16 " src={cost} />
            <p className=" text-gray-500 text-center mt-2 text-sm">
              Minimum Order 15$
            </p>
          </div>
          <div className="w-1/4  ">
            <p className=" text-gray-500 text-center text-sm">Reviews</p>
            <img className="object-contain  w-full h-16" src={rating} />
            <p className=" text-gray-500 text-center mt-2 text-sm">
              22 Satisfid clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section4;
