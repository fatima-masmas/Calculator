import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
    const { calc} = useContext (CalcContext);
    return (
        <div className="screen">0321432</div>
    )
}

export default Screen;