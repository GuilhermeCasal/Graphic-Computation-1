import * as THREE from 'three';

// Renderer and Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xff0000)); // red background
document.body.appendChild(renderer.domElement);

// Object
var geometry = new THREE.BufferGeometry();


const vertices = new Float32Array([
    0.0, 0.0, 0.0,
    0.5, 0.75, 0.0,
    1.0, 0.0, 0.0,
    0.0, 0.0, 0.0,
    -0.35, -1.0, 0.0,
    -0.7, 0.25, 0.0,
    -0.2, 0.15, 0.0,
    0.35, 0.65, 0.0,
    -0.85, 0.9, 0.0,
    0.15, -0.95, 0.0,
    0.90, -0.7, 0.0,
    0.65, 0.10, 0.0,
]);

const colors = new Uint8Array([
    255, 0, 0,
    0, 255, 0,
    0, 0, 255,
    255, 0, 0,
    0, 255, 0,
    0, 0, 255,
    255, 0, 0,
    0, 255, 0,
    0, 0, 255,
    255, 0, 0,
    0, 255, 0,
    0, 0, 255,
]);


geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3, true) );
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Create material for black triangle
const geometryMaterial = new THREE.MeshBasicMaterial( {vertexColors: true, side:THREE.DoubleSide} );
const triangle = new THREE.Mesh(geometry, geometryMaterial);
scene.add(triangle);

camera.position.z = 2; 

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
