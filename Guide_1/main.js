import * as THREE from 'three';

// Renderer and Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(new THREE.Color(0xff0000)); // red background
document.body.appendChild(renderer.domElement);

// Object
var geometry = new THREE.BufferGeometry();
var geometry2 = new THREE.BufferGeometry();

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
])
const vertices2 = new Float32Array([
    0.15, -0.95, 0.0,
    0.90, -0.7, 0.0,
    0.65, 0.10, 0.0,
    
]);

const colors = new Uint8Array([
    148, 0, 211, 
    148, 0, 211, 
    148, 0, 211,
    255, 255, 0, 
    255, 255, 0,
    255, 255, 0,
    255, 0, 0,
    0, 255, 0,
    0, 0, 255,
])

const colors2 = new Uint8Array([
    255, 255, 255,
    255, 255, 255,
    255, 255, 255,
]);


geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3, true) );
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry2.setAttribute( 'color', new THREE.BufferAttribute( colors2, 3, true) );
geometry2.setAttribute('position', new THREE.BufferAttribute(vertices2, 3));
// Create material for black triangle
const geometryMaterial = new THREE.MeshBasicMaterial( {vertexColors: true, side:THREE.DoubleSide} );
const geometryMaterial2 = new THREE.MeshBasicMaterial( {vertexColors: true, side:THREE.DoubleSide, wireframe: true} );
const triangle = new THREE.Mesh(geometry, geometryMaterial);
const triangle2 = new THREE.Mesh(geometry2, geometryMaterial2);
scene.add(triangle);
scene.add(triangle2);
camera.position.z = 2; 

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
