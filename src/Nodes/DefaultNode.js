// DefaultNode.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const DefaultNode = ({ position, color, radius }) => {
	const nodeRef = useRef();

	useEffect(() => {
		const nodeGeometry = new THREE.CircleGeometry(radius || 1, 32);
		const nodeMaterial = new THREE.MeshBasicMaterial({
			color: color || 0xff0000,
		});
		const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);

		// Set position if provided
		if (position) {
			nodeMesh.position.set(position.x || 0, position.y || 0, position.z || 0);
		}

		nodeRef.current.add(nodeMesh);
	}, [position, color, radius]);

	return <group ref={nodeRef} />;
};

export default DefaultNode;
