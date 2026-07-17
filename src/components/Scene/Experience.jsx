import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import Moon from "./Moon";
import SpaceStars from "./Stars";
import Particles from "./Particles";
import CameraRig from "./CameraRig";

function Experience() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 40,
      }}
      gl={{
        alpha: true,
        antialias: true,
      }}
      style={{
        background: "transparent",
      }}
    >
      {/* Lights */}

      <ambientLight intensity={0.8} />

      <directionalLight
        position={[3, 2, 5]}
        intensity={3}
        color="#ffffff"
      />

      <pointLight
        position={[2, 1, 3]}
        intensity={8}
        color="#d4af37"
      />

      {/* Stars */}

      <SpaceStars />

      {/* Moon */}

      <Float
        speed={3}
        rotationIntensity={0.8}
        floatIntensity={1}
      >
        <Moon />
      </Float>

      {/* Particles */}

      <Particles />

      {/* Mouse Camera */}

      <CameraRig />

    </Canvas>
  );
}

export default Experience;