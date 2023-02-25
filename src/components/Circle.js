
import useVisibilitySensor from "@rooks/use-visibility-sensor";
import React from "react";
import { CircleBis } from "./CircleBis";
import { CircleGris } from "./CircleGris";


export function Circle() {
  const ref = React.useRef(null);
  const { isVisible } = useVisibilitySensor(ref, {
    intervalCheck: false,
    scrollCheck: true,
    resizeCheck: true
  });

  return (
    <div className="valores-circle" ref={ref}>
      {isVisible ? <CircleBis /> : <CircleGris />}
    </div>
  );
};