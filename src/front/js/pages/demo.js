import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <ul className="list-group">
                {store.demo.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between"
                            style={{ background: item.background }}>
                            <Link to={"/single/" + index}>
                                <span>Link to: {item.title}</span>
                            </Link>
                            {item.background === "orange" ? (
                                <p style={{ color: item.initial }}>
                                    Check store/flux.js scroll to the actions to see the code
                                </p>
                            ) : null}
                            <img src="https://media.licdn.com/dms/image/D4D22AQEY8VsH07eC2A/feedshare-shrink_800/0/1704981912200?e=2147483647&v=beta&t=HvtA_o68bFOxEDl_i9UBJgYWJsTLDVpbOIjB7xkWLKk" alt="example" />
                            <button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
                                Change Color
                            </button>
                        </li>
                    );
                })}
            </ul>
            <br />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
