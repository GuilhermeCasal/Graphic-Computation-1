import * as THREE from 'three';

const DISTANCE_FROM_EARTH = 356400;
const PERIOD = 28;
const INCLINATION = 0.089;
const SIZE_IN_EARTHS = 1 / 3.7;
const EARTH_RADIUS = 6371;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var texloader = new THREE.TextureLoader();
var tex=texloader.load("lena.jpg");

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { map: tex } );
// const materials = [];
// materials.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Im1.jpg') }));
// materials.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Im2.jpg') }));
// materials.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Im3.jpg') }));
// materials.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Im4.jpg') }));
// materials.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Im5.jpg') }));
// materials.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('Im6.jpg') }));
// const cube = new THREE.Mesh( geometry, materials );
// scene.add( cube );

const geometry2 = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('earth_surface_2048.jpg') } );
const sphere = new THREE.Mesh( geometry2, material);
scene.add( sphere );

const moonGeometry = new THREE.SphereGeometry(SIZE_IN_EARTHS, 32, 32);
const moonMaterial = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('moon_1024.jpg') });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
sphere.add(moon);

var distance = DISTANCE_FROM_EARTH / EARTH_RADIUS;
moon.position.set(Math.sqrt(distance / 2), 0,-Math.sqrt(distance / 2));

// Rotate the moon so it shows its moon-face toward earth
moon.rotation.y = Math.PI;
moon.rotation.x = INCLINATION;
// For animation 
// moon.rotation.y += (earth.rotation.y / PERIOD);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xfffff);
directionalLight.position.set(1, 0, 0);
scene.add(directionalLight);

camera.position.z = 5;

document.addEventListener("keydown", onDocumentKeyDown, false);
let isOn = true
let light = 1
let speed = 0.0025
let inclination = 0.41

function animate() {
	requestAnimationFrame( animate );

	// sphere.rotation.x += 0.01;
	sphere.rotation.z = inclination
	sphere.rotation.y += speed;
	moon.rotation.y += (sphere.rotation.y / PERIOD);

	renderer.render( scene, camera );
}

animate();

function onDocumentKeyDown(event){ 
	// Get the key code of the pressed key 
	var keyCode = event.which;
	console.log("tecla " + keyCode);

	if(keyCode == 76){
		if(isOn){
			isOn = false
			scene.remove(ambientLight,directionalLight)
		}else{
			isOn = true
			scene.add(ambientLight,directionalLight)
		}
	}

	if(keyCode == 171){
		if(light < 10){
			light += 1
			directionalLight.intensity = light
		}
	}

	if(keyCode == 173){
		if(light > 0){
			light -= 1
			directionalLight.intensity = light
		}
	}

	if(keyCode == 39){
		if(speed < 10){
			speed -= 0.0005
		}
	}

	if(keyCode == 37){
		if(speed > 0.001){
			speed += 0.0005
		}
	}

	if(keyCode == 38){
		if(inclination < 15){
			inclination += 0.05
		}
	}

	if(keyCode == 40){
		if(inclination > 0.5){
			inclination -= 0.05
		}
	}
}