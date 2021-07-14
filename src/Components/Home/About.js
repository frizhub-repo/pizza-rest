import React, { useState } from "react";

import { MDBIcon } from "mdbreact";
import TestimonialCard from "./testimonialCard";

function About() {
  const [index, setIndex] = useState(0);

  function handleChange(mode) {
    if (index == 0 && mode == "back") {
      setIndex(testimonial.length - 1);
    } else if (index == testimonial.length - 1 && mode == "forward") {
      setIndex(0);
    } else if (mode == "forward") {
      setIndex((index) => index + 1);
    } else {
      setIndex((index) => index - 1);
    }
  }

  const testimonial = [
    {
      name: "Alex",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
        "pulvinar facilisis justo mollis, auctor consequat urna.",
      image:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    },
    {
      name: "Penny",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
        "pulvinar facilisis justo mollis, auctor consequat urna.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      name: "Robert",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
        "pulvinar facilisis justo mollis, auctor consequat urna.",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      name: "Bob",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
        "pulvinar facilisis justo mollis, auctor consequat urna.",
      image:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1002&q=80",
    },
  ];

  return (
    <div className="flex mt-4 h-96 ">
      <div className="w-full  flex">
        <div className="w-full px-12  pt-12">
          <div className="w-full flex justify-content-center  align-items-center">
            <TestimonialCard
              image={testimonial[index].image}
              text={testimonial[index].text}
            />
          </div>

          <div className="flex justify-content-around mt-4 ">
            <MDBIcon
              icon="angle-left white-text"
              className="mr-2 "
              onClick={() => handleChange("back")}
            />
            <MDBIcon
              icon="angle-right white-text"
              onClick={() => handleChange("forward")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
