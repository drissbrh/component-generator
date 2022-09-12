import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBox, addChildBox, deleteBox } from "../redux/actions/boxActions";
import randomColor from "randomcolor";
import "./Box.css";

const Box = ({ identifier, box_in_box_number }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const boxState = useSelector((state) => state.boxState);
  const { childs } = boxState;

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  };

  return (
    <div className="box_wrapper" style={{ backgroundColor: getRandomColor() }}>
      <div className="upper_box">
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button className="" onClick={() => dispatch(deleteBox(identifier))}>
          delete Box
        </button>
        <button
          className=""
          onClick={() =>
            dispatch(addChildBox({ id: Math.floor(Math.random() * 100000000) }))
          }
        >
          add Box
        </button>
      </div>
      <div className="down_box"></div>
    </div>
  );
};

export default Box;
