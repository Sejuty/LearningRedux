import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyDonut } from "../redux/index";

function HookDonutContainer(props) {
  const numOfDonuts = useSelector((state) => state.donut.numOfDonuts);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Num of Donuts - {numOfDonuts}</h1>
      <button onClick={() => dispatch(buyDonut())}>Buy Donut</button>
    </div>
  );
}

export default HookDonutContainer;
