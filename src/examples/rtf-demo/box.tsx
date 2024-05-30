import { type ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type * as THREE from "three";

export const Box = (props: ThreeElements["mesh"]) => {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const meshRef = useRef<THREE.Mesh>(null!);
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	useFrame((state, delta) => (meshRef.current.rotation.x += delta));
	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
};
