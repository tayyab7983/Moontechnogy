import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Moon() {

  const ref = useRef();

  useFrame(() => {
    if(ref.current){
      ref.current.rotation.y += 0.01;
    }
  });

  return (

    <Sphere ref={ref} args={[1.2,64,64]}>

      <meshStandardMaterial
  color="#cdb87c"
  roughness={0.95}
  metalness={0.02}
/>
    </Sphere>

  );

}

export default Moon;