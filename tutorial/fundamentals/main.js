console.log('Fundamentals tutorial code follow through')

import * as THREE from 'three';
 
function main() {

	// Fetch the DOM's canvas, if not ThreeJS will create one
  const canvas = document.querySelector('#c');

  const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

	// Create a PerspectiveCamera

	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	camera.position.z = 2;

	// Create a Scene
	const scene = new THREE.Scene();

	// Create a BoxGeometry
	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

	// Create a Material
	const material = new THREE.MeshBasicMaterial({color: 0x0000FF});

	// Create a cube mesh, from the Geometry + Material
	const cube = new THREE.Mesh(geometry, material);

	// Add the cube to the scene
	scene.add(cube);

	// Pass the Scene and Camera to the Renderer
	renderer.render(scene, camera)
}

main();

