import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry1 = new THREE.BoxGeometry(1, 1, 1);
// const crate_texture = new THREE.TextureLoader().load('public/Diffuse_Texture.png');
// const material1 = new THREE.MeshPhongMaterial({ map: crate_texture });
// const cube1 = new THREE.Mesh(geometry1, crate_texture, material1);

// const geometry2 = new THREE.BoxGeometry(1, 1, 1);
// const bump_map_texture = new THREE.TextureLoader().load('public/Bump_Texture.png');
// const material2 = new THREE.MeshPhongMaterial({ bumpMap: bump_map_texture });
// const cube2 = new THREE.Mesh(geometry2, bump_map_texture, material2);

// const geometry3 = new THREE.BoxGeometry(1, 1, 1);
// const normal_texture = new THREE.TextureLoader().load('public/Normal_Texture.png');
// const material3 = new THREE.MeshPhongMaterial({ normalMap: normal_texture });
// const cube3 = new THREE.Mesh(geometry3, normal_texture, material3);

// scene.add(cube1);
// cube1.position.x = -4;

// scene.add(cube2);
// cube2.position.x = 0;

// scene.add(cube3);
// cube3.position.x = 4;

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 0.8, 100.0);
// pointLight.position.set(3, 1, 3)
// scene.add(pointLight);

// camera.position.z = 5;

// function animate() {
//     requestAnimationFrame(animate);
//     cube1.rotation.x += 0.01;
//     cube1.rotation.y += 0.01;

//     cube2.rotation.x += 0.01;
//     cube2.rotation.y += 0.01;

//     cube3.rotation.x += 0.01;
//     cube3.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }
// animate();

//----------------------

var create_crate = function () {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var crate_texture = new THREE.TextureLoader().load('public/Diffuse_Texture.png');
    var bump_map_texture = new THREE.TextureLoader().load('public/Bump_Texture.png');
    var normal_texture = new THREE.TextureLoader().load('public/Normal_Texture.png');
    var material = new THREE.MeshPhongMaterial({
        map: crate_texture, 
        bumpMap: bump_map_texture,
        normalMap: normal_texture
    });
    crate = new THREE.Mesh(geometry, material);
    scene.add(crate);
};

var init_app = function () {
    //1. Create the scene
    scene = new THREE.Scene();
    //2. Create and locate the camera
    var canvasWidth = 1280, canvasHeight = 720;
    var fieldofViewY = 60, aspectRatio = canvasWidth / canvasHeight, near = 0.1, far = 100.0;
    camera = new THREE.PerspectiveCamera(fieldofViewY, aspectRatio, near, far);
    camera.position.z = 5;

    var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    var pointLight = new THREE.PointLight(0xffffff, 0.8, 100.0);
    pointLight.position.set(3, 1, 3)
    scene.add(pointLight);

    //objects
    //create_ground();
    create_crate();
    //create_skybox();
    //create_envSphere();
    //3. Create the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasWidth, canvasHeight);
    document.body.appendChild(renderer.domElement);

};
