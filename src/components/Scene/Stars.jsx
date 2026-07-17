 import { Stars } from "@react-three/drei";

function SpaceStars() {
  return (
    <Stars
      radius={150}
      depth={60}
      count={5000}
      factor={7}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export default SpaceStars;