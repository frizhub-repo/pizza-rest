import React from "react";

const ProfileIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="100"
            viewBox="0 0 512 512"
        >
            <linearGradient
                id="SVGID_1_"
                x1="256"
                x2="256"
                y1="512"
                y2="0"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#5558ff"></stop>
                <stop offset="1" stopColor="#00c0ff"></stop>
            </linearGradient>
            <linearGradient
                id="SVGID_2_"
                x1="256"
                x2="256"
                y1="452"
                y2="91"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#addcff"></stop>
                <stop offset="0.503" stopColor="#eaf6ff"></stop>
                <stop offset="1" stopColor="#eaf6ff"></stop>
            </linearGradient>
            <circle cx="256" cy="256" r="256" fill="url(#SVGID_1_)"></circle>
            <path
                fill="url(#SVGID_2_)"
                d="M331 166c0-41.355-33.645-75-75-75s-75 33.645-75 75 33.645 75 75 75 75-33.645 75-75zm-75 75c-74.439 0-135 60.561-135 135v14.058c0 4.264 1.814 8.326 4.99 11.171C162.528 433.969 208.7 452 256 452c47.301 0 93.473-18.031 130.01-50.771a14.998 14.998 0 004.99-11.171V376c0-74.439-60.561-135-135-135z"
            ></path>
        </svg>
    );
};

export default ProfileIcon;
