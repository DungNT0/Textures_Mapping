import * as THREE from 'three';

const scene = new THREE.Scene();

//1 Bump mapping and normal mapping
const geometry1 = new THREE.BoxGeometry(1, 1, 1);

const crate_texture = new THREE.TextureLoader().load('public/Diffuse_Texture.png');
const bump_map_texture = new THREE.TextureLoader().load('public/Bump_Texture.png');
const normal_texture = new THREE.TextureLoader().load('public/Normal_Texture.png');

const material1 = new THREE.MeshPhongMaterial({
    map: crate_texture,
    bumpMap: bump_map_texture,
    normalMap: normal_texture
});

const crate1 = new THREE.Mesh(geometry1, material1);
scene.add(crate1);
crate1.position.x = 0;
crate1.position.z = 2;

const canvasWidth = 1345, canvasHeight = 720;
const fieldofViewY = 60, aspectRatio = canvasWidth / canvasHeight, near = 0.1, far = 100.0;
const camera = new THREE.PerspectiveCamera(fieldofViewY, aspectRatio, near, far);
camera.position.z = 7;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff, 0.8, 100.0);
pointLight1.position.set(0.1, 0.3, 3.5)
scene.add(pointLight1);

//2 Displacement and specular mapping
const geometry2 = new THREE.PlaneGeometry(20, 20, 32);
const grass_diffuse_texture = new THREE.TextureLoader().load('public/grass_diffus_texture.png');
const grass_normal_texture = new THREE.TextureLoader().load('public/grass_normal_texture.png');
const grass_disp_texture = new THREE.TextureLoader().load('public/grass_displacement_texture.png');
const grass_specular_texture = new THREE.TextureLoader().load('public/grass_specular_texture.png');
const material2 = new THREE.MeshPhongMaterial({
    map: grass_diffuse_texture,
    normalMap: grass_normal_texture,
    displacementMap: grass_disp_texture,
    specularMap: grass_specular_texture,
    specular: 0xffffff, shininess: 20
});

const ground = new THREE.Mesh(geometry2, material2);
ground.position.z = 0;
ground.position.y = 2;
ground.position.x = Math.PI / 2 - 0.2;
scene.add(ground);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(canvasWidth, canvasHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    crate1.rotation.x += 0.01;
    crate1.rotation.y += 0.01;

    ground.rotation.x += 0.01;
    ground.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();
