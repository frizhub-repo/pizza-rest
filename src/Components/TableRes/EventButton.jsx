import React, { useState } from "react";

const EventButton = ({ localState, data, setData, text }) => {
    return (
        <button
            className={`text-gray-500 font-weight-light text-xs px-6   py-3 w-1/4  border border-gray-500 rounded-pill `}
            onClick={(e) => {
                e.preventDefault();
                setData(localState);
            }}
            style={{
                backgroundColor: localState === data && "rgba(16, 185, 129,1)",
                color: localState === data ? "#fff" : "#000",
            }}
        >
            {text}
        </button>
    );
};

export default EventButton;
