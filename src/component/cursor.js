import React from 'react'
import AnimatedCursor from "react-animated-cursor";
export default function() {
  return (
    <div><AnimatedCursor
        innerSize={15}
        outerSize={10}
        color="0,82,212"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={5}
        outerStyle={{
          background: "rgba(255, 225, 225, 0.3)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /></div>
  )
}
