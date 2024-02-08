/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Aliaksandr.melas (https://sketchfab.com/alexandr.melas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/billions-stars-skybox-hdri-panorama-7e3e8f94810b44dd837bacad6c65b5e8
Title: Billions stars Skybox HDRI panorama
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import spaceScene from '../assets/3d/space.glb'

const Space = (props) => {
  const { nodes, materials } = useGLTF(
spaceScene
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default Space
