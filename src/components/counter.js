import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import './counter.css';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
            onClick={dec}
                className="btn btn-danger btn-lg">DEC</button>
            <button
                onClick={inc} 
                className="btn btn-success btn-lg">INC</button>
            <button
                onClick={rnd} 
                className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};

const mapStatrtoProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStatrtoProps, actions)(Counter);