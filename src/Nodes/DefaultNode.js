import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { CircleGeometry, MeshStandardMaterial } from 'three';

export const DefaultNode = (props) => {
	const ref = useRef();
	const [hovered, setHover] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [mouseHeld, setMouseHeld] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useFrame((state, delta) => {
		setX(state.pointer.x);
		setY(state.pointer.y);
		return 0;
	});

	useEffect(() => {
		if (mouseHeld === true) {
			ref.current.position.x += x;
			ref.current.position.y += y;
		}
	}, [mouseHeld, x, y]);

	const handlePointerDown = (event) => {
		setMouseHeld(true);
	};

	const handlePointerUp = (event) => {
		console.log('let go', event);
		setMouseHeld(false);
	};

	return (
		<mesh
			{...props}
			ref={ref}
			scale={3}
			onClick={() => setClicked(!clicked)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
			onPointerDown={handlePointerDown}
			onPointerUp={handlePointerUp}
		>
			<circleGeometry args={[1, 100]} />
			<meshStandardMaterial color={hovered ? 'blue' : 'red'} />
		</mesh>
	);
};
