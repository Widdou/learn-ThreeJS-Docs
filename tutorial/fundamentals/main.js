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

	// Create a Light
	{
		const color =  0xFFFFFF;
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		scene.add(light);
	}

	// Create a BoxGeometry
	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

	// Create a Material
	// const material = new THREE.MeshBasicMaterial({color: 0x0000FF});	// This material is not affected by light
	 const material = new THREE.MeshPhongMaterial({color: 0xFF0000});

	// Create a cube mesh, from the Geometry + Material
	// const cube = new THREE.Mesh(geometry, material);

	// Add the cube to the scene
	// scene.add(cube);

	// Pass the Scene and Camera to the Renderer
	// renderer.render(scene, camera)

	function makeInstance(geometry, color, x) {
		const material = new THREE.MeshPhongMaterial({color});
		const cube = new THREE.Mesh(geometry, material);

		cube.position.x = x;

		scene.add(cube);

		return cube;
	}

	const cubes = [
		makeInstance(geometry, 0xFF0000, -2),	// RED
		makeInstance(geometry, 0x00FF00, 0),	// GREEN
		makeInstance(geometry, 0x0000FF, 2),	// BLUE
	]
	

	// Render function with cube rotation
	function render(time) {
		time *= 0.001; // Time is in seconds, therefore it's miliseconds
	
		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		// cube.rotation.x = time;
		// cube.rotation.y = time;

		cubes.forEach((cube, i) => {
			const speed = 1+i * .1;
			const rot = time * speed;
			
			cube.rotation.x = time;
			cube.rotation.y = time;
		})

		renderer.render(scene, camera);

		// This creates a loop
		requestAnimationFrame(render);
	}
	// requestAnimationFrame(render);
	render();

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

}


main();

