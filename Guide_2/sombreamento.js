import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//For Shading

// const sphereGeometry1 = new THREE.SphereGeometry(1, 10, 10); // 10 segments in both width and height
// const emerald = new THREE.MeshPhongMaterial({
//     shading: THREE.SmoothShading	});
//     emerald.color = new THREE.Color(0.07568, 0.61424, 0.07568);
//     emerald.specular= new THREE.Color(0.633, 0.7278, 0.633);
//     emerald.shininess = 0.6 * 256;
// const sphere1 = new THREE.Mesh(sphereGeometry1, emerald);
// sphere1.position.x = -2.5;
// scene.add(sphere1);




// const sphereGeometry2 = new THREE.SphereGeometry(1, 10, 10); // 10 segments in both width and height
// const gold = new THREE.MeshPhongMaterial({
//     shading: THREE.SmoothShading	});
//     gold.color = new THREE.Color(0.75164, 0.60648, 0.22648);
//     gold.specular= new THREE.Color(0.628281, 0.555802, 0.366065);
//     gold.shininess = 0.4 * 256;
// const sphere2 = new THREE.Mesh(sphereGeometry2, gold);
// sphere2.position.x = 2.5;
// scene.add(sphere2);


// for transparency

const sphereGeometry1 = new THREE.SphereGeometry(1, 10, 10); // 10 segments in both width and height
const glassMaterial = new THREE.MeshPhongMaterial( { 
    color: 0x222222, 
    specular: 0xFFFFFF,
    shininess: 100, 
    opacity: 0.9, 
    transparent: true 
    } );
const sphere1 = new THREE.Mesh(sphereGeometry1, glassMaterial);
sphere1.position.x = -2.5;
scene.add(sphere1);


const sphereGeometry2 = new THREE.SphereGeometry(1, 10, 10); // 10 segments in both width and height
const sphere2 = new THREE.Mesh(sphereGeometry2, glassMaterial);
sphere2.position.x = 2.5;
scene.add(sphere2);


// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(0, 5, 0);
scene.add(directionalLight);

function render() {
    sphere1.rotation.x += 0.01;
    sphere1.rotation.y += 0.01;

    sphere2.rotation.x += 0.01;
    sphere2.rotation.y += 0.01;

    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
