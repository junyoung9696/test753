/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 level20.gltf --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/level20-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (props.play) {
      actions["Key.011Action"].play();
    }
  }, [props.play]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_020">
          <mesh
            name="result-5_029"
            geometry={nodes["result-5_029"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={nodes["result-5_029"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_029"].morphTargetInfluences}
          />
          <mesh
            name="result-5_029_1"
            geometry={nodes["result-5_029_1"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_029_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_2"
            geometry={nodes["result-5_029_2"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_029_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_3"
            geometry={nodes["result-5_029_3"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_029_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_4"
            geometry={nodes["result-5_029_4"].geometry}
            material={materials.petals}
            morphTargetDictionary={
              nodes["result-5_029_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_5"
            geometry={nodes["result-5_029_5"].geometry}
            material={materials.stamens}
            morphTargetDictionary={
              nodes["result-5_029_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_6"
            geometry={nodes["result-5_029_6"].geometry}
            material={materials.stem}
            morphTargetDictionary={
              nodes["result-5_029_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level20-transformed.glb");