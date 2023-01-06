import React from "react";
import { Triangle } from "react-loader-spinner";
export default function ({ loader }) {
  return (
    <div>
      <Triangle
        height="200"
        width="200"
        color="#0052D4"
        ariaLabel="triangle-loading"
        wrapperStyle={{
          justifyContent: "center",
          alignItems: "center",

          minHeight: "100vh",
          background: "#051028",
        }}
        wrapperClassName=""
        visible={loader}
      />
    </div>
  );
}
