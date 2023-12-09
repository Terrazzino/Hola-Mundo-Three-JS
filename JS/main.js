import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();

var saludo = "HOLA MUNDO EN THREE.JS";


//****************** ESCENA, CAMARA Y RENDER ******************
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(85,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);


//****************** CREACION DEL CUBO ******************
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0x2AB742});
const cube = new THREE.Mesh(geometry, material);

//Creamos bordes en los vertices y las caras del cubo
// const outlineMaterial = new THREE.MeshBasicMaterial({color:0x000000, wireframe:true});
// const outlineCube = new THREE.Mesh(geometry,outlineMaterial);

// outlineCube.scale.multiplyScalar(1);

//Creamos vertices solo en los bordes del cubo
const edges = new THREE.EdgesGeometry(geometry);
const outlineEdgeMaterial = new THREE.LineBasicMaterial({color:0xCF26E3});

const outlineEdge = new THREE.LineSegments(edges,outlineEdgeMaterial);


scene.add(cube);
// scene.add(outlineCube);
scene.add(outlineEdge);

camera.position.z = 5;


//****************** CREACION DE LA FUNCION DE ANIMACION ******************
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;

    // outlineCube.rotation.x +=0.01;
    // outlineCube.rotation.y +=0.01;

    outlineEdge.rotation.x +=0.01;
    outlineEdge.rotation.y +=0.01;

    renderer.render(scene,camera);
}

animate();

document.getElementById("tituloProyecto").appendChild("<h1>HOLA</h1>");