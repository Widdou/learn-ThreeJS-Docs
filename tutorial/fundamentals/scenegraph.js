import * as THREE from 'three';

function main() {

	const canvas = document.querySelector('#c');
	const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
		
	// Create a PerspectiveCamera
	const fov = 40;
	const aspect = 2;
	const near = 0.1;
	const far = 1000;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(0,50,0);
	camera.up.set(0,0,1);
	camera.lookAt(0,0,0);
	
	const scene = new THREE.Scene();
	{
		const color = 0xFFFFFF;
		const intensity = 1500;
		const light = new THREE.PointLight(color, intensity);
		scene.add(light);
	}

	// Solar System representation

	const objects = []; // Array of objects whose rotation to update
	
	// Will use just one Geometry for celestial objects
	const radius = 1;
	const withdSegments = 6;
	const heightSegments = 6;
	const sphereGeometry = new THREE.SphereGeometry(
		radius, withdSegments, heightSegments
	)

	const solarSystem = new THREE.Object3D();
	scene.add(solarSystem)
	objects.push(solarSystem);

		// Defining the Sun
		const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
		const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
		sunMesh.scale.set(5,5,5) // Make the sun larger - x5 Sun's size
		
		solarSystem.add(sunMesh);
		objects.push(sunMesh);
	
	
		// Defining the Earth
		const earthOrbit = new THREE.Group();
		earthOrbit.position.x = 10;
		solarSystem.add(earthOrbit)
		objects.push(earthOrbit);

		const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
		const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
		
		earthOrbit.add(earthMesh);
		objects.push(earthMesh);

		// Defining the Moon
		const moonOrbit = new THREE.Group();
		moonOrbit.position.x = 2;
		earthOrbit.add(moonOrbit);
		objects.push(moonOrbit);
		
		const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
		const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
		// moonMesh.position.x = 5;
		moonMesh.scale.set(.4,.4,.4)

		moonOrbit.add(moonMesh)

		function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	// Rendering simulation
	function render(time) {
		time *= 0.001;

		if ( resizeRendererToDisplaySize( renderer ) ) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		objects.forEach((obj) => {
			const axes = new THREE.AxesHelper();
			axes.material.depthTest = false;
			axes.renderOrder = 1;

			obj.add(axes)
			obj.rotation.y = time;
		});

		renderer.render(scene,camera)
		requestAnimationFrame(render)
	}

	render();

	// Utils

	function resizeRendererToDisplaySize( renderer ) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if ( needResize ) {
			renderer.setSize( width, height, false );
		}

		return needResize;
	}

}

main()
