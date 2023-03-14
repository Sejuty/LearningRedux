import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyDonut } from "../redux";

function HookItemContainer(props) {
  const itemState = useSelector((state) =>
    props.cake ? state.cake.numOfCakes : state.donut.numOfDonuts
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Item Container - {itemState} </h1>
      <button
        onClick={
          props.cake 
          ? () => dispatch(buyCake()) : () => dispatch(buyDonut())
        }
      >
        Buy Item
      </button>
    </div>
  );
}

export default HookItemContainer;
