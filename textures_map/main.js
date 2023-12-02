import * as THREE from 'three';

var create_crate = function () {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var crate_texture = new THREE.TextureLoader().load('./public/Diffuse_Texture.png');
    var bump_map_texture = new THREE.TextureLoader().load('./public/Bump_Texture.png');
    var normal_texture = new THREE.TextureLoader().load('./public/Normal_Texture.png');
    var material = new THREE.MeshPhongMaterial({
        map: crate_texture, bumpMap: bump_map_texture,
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
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(canvasWidth, canvasHeight);
    document.body.appendChild(renderer.domElement);
};
