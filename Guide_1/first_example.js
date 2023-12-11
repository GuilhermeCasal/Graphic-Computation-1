import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(1,1,1);
const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
const geometry3 = new THREE.ConeGeometry(0.5, 1, 32);
const geometry4 = new THREE.TorusGeometry(0.7, 0.3, 16, 100);
const geometry5 = new THREE.DodecahedronGeometry(0.8);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } ); 
const cube = new THREE.Mesh( geometry, material ); 
const sphere = new THREE.Mesh( geometry2, material ); 
const cone = new THREE.Mesh( geometry3, material ); 
const torus = new THREE.Mesh( geometry4, material ); 
const hedron = new THREE.Mesh( geometry5, material ); 
scene.add( cube ); 
scene.add( sphere ); 
cone.position.set(-2, 0, 0);
scene.add( cone ); 
torus.position.set(2, 0, 0);
scene.add( torus ); 
hedron.position.set(0, 2, 0);
scene.add( hedron ); 
camera.position.z = 5;

function render() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
render();

window.addEventListener('resize', function () {				       
	camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
		});

// cube.rotation.x += 0.01; 
// cube.rotation.y += 0.01;