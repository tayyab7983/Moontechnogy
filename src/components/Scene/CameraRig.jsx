 import { useFrame, useThree } from "@react-three/fiber";

function CameraRig() {

  const { camera, mouse } = useThree();

  useFrame(() => {

    camera.position.x += (mouse.x * 0.7 - camera.position.x) * 0.05;

    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;

    camera.lookAt(0, 0, 0);

  });

  return null;
}

export default CameraRig;