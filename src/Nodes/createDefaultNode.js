import * as THREE from 'three';

export const createDefaultNode = ({ position, color, radius }) => {
	const nodeGeometry = new THREE.CircleGeometry(radius || 1, 32);
	const nodeMaterial = new THREE.MeshBasicMaterial({
		color: color || 0xff0000,
	});
	const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);

	// Set position if provided
	if (position) {
		nodeMesh.position.set(position.x || 0, position.y || 0, position.z || 0);
	}

	return nodeMesh;
};
