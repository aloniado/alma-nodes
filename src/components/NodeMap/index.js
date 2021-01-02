import React, { useState } from "react";
import Node from "../Node/index"


const NodeMap = ({ data = [] }) => {
    return (
        <div className="">
            <div className="">
                {data.map((tree) => (
                    <Node node={tree} />
                ))}
            </div>
        </div>
    );
};

export default NodeMap;