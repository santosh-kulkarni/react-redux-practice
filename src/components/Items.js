import React from "react";
import { connect } from "react-redux";
import { increase, decrease, reset, axiosDispatch } from "../redux/dispatch";

function Items(props) {
    return (
        <React.Fragment>
            <center>
                <h1>Number of Items: {props.items}</h1>
                <h1>Axios Results: {props.array}</h1>
                <button onClick={props.increase}>Increse Items</button>
                <button onClick={props.decrease}>Decrease Items</button>
                <button onClick={props.reset}>Reset</button>
                <button onClick={props.axiosDispatch}>Axios</button>
            </center>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        array: state.array
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
        reset: () => dispatch(reset()),
        axiosDispatch: () => dispatch(axiosDispatch())
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Items);