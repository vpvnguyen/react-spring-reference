import React from "react";
import { useSpring, animated } from "react-spring";

const style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};

const ComponentOne = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <div style={style}>
        <h1>Component1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          doloremque aspernatur iure facere beatae dolore dolorem ipsa. Velit
          laborum, molestias deleniti nobis accusamus reiciendis incidunt,
          perferendis magnam, ea earum inventore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Enim doloremque aspernatur iure facere
          beatae dolore dolorem ipsa. Velit laborum, molestias deleniti nobis
          accusamus reiciendis incidunt, perferendis magnam, ea earum inventore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          doloremque aspernatur iure facere beatae dolore dolorem ipsa. Velit
          laborum, molestias deleniti nobis accusamus reiciendis incidunt,
          perferendis magnam, ea earum inventore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Enim doloremque aspernatur iure facere
          beatae dolore dolorem ipsa. Velit laborum, molestias deleniti nobis
          accusamus reiciendis incidunt, perferendis magnam, ea earum inventore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          doloremque aspernatur iure facere beatae dolore dolorem ipsa. Velit
          laborum, molestias deleniti nobis accusamus reiciendis incidunt,
          perferendis magnam, ea earum inventore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Enim doloremque aspernatur iure facere
          beatae dolore dolorem ipsa. Velit laborum, molestias deleniti nobis
          accusamus reiciendis incidunt, perferendis magnam, ea earum inventore.
        </p>
      </div>
    </animated.div>
  );
};

export default ComponentOne;
