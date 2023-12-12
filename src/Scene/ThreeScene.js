// ThreeScene.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { createDefaultNode } from '../Nodes/createDefaultNode';

export const ThreeScene = ({ nodes }) => {
	const sceneRef = useRef();

	useEffect(() => {
		const scene = new THREE.Scene(); // Create a Three.js scene

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer();

		renderer.setSize(window.innerWidth, window.innerHeight);
		sceneRef.current.appendChild(renderer.domElement);

		// Add nodes based on props
		if (nodes && nodes.length > 0) {
			nodes.forEach((nodeProps) => {
				const node = createDefaultNode(nodeProps);
				scene.add(node);
			});
		}

		camera.position.z = 5;

		const animate = () => {
			requestAnimationFrame(animate);

			renderer.render(scene, camera);
		};

		animate();

		const handleResize = () => {
			const newWidth = window.innerWidth;
			const newHeight = window.innerHeight;

			camera.aspect = newWidth / newHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(newWidth, newHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [nodes]);

	return <div ref={sceneRef} />;
};
