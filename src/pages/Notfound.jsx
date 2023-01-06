import React from "react";
import Cursor from "../component/cursor";
import { Triangle } from "react-loader-spinner";
import Loader from "../component/Loader";
export default function Notfound() {
  return (
    <div>
      <Cursor />
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_vzj1xd0x.json"
        background="transparent"
        speed="1"
        style={{ width: "100vw", height: "100vh", background: "#051028" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}
