import React from "react";
import { connect } from "react-redux";
import { buyCake, buyDonut } from "../redux";

function itemContainer(props) {
  return (
    <div>
      <h2> Item - {props.item}</h2>
      <button onClick={props.buyItem}>buy item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.donut.numOfDonuts;

  return {
    item: itemState,
  };
};

const mapDispatchToProps=(dispatch, ownProps)=>{
    const dispatchFunction = ownProps.cake
    ?()=>dispatch(buyCake())
    :()=>dispatch(buyDonut())

    return {
        buyItem : dispatchFunction
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(itemContainer);
