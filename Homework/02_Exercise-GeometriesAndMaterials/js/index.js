//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#e0e0e0");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
    var light1 = new THREE.AmbientLight(0xfffff, 0.8);
      scene.add(light1);

    var light2 = new THREE.PointLight(0x6bd2ff, 0.5);
    scene.add(light2);

  // Create a Cube Mesh with basic material
  sphere = new THREE.SphereGeometry(10, 40, 75);
  smallTorus = new THREE.TorusGeometry(30, 3, 16, 100);
  mediumTorus = new THREE.TorusGeometry(40, 6, 16, 100);
  largeTorus= new THREE.TorusGeometry(60, 9, 16, 100);
  XLTorus= new THREE.TorusGeometry(90, 11, 16, 100);

  materialNormal = new THREE.MeshNormalMaterial();
  materialLambert = new THREE.MeshLambertMaterial({
  color: "#42cbf4",
  transparent: true,
  opacity: 1
});
  materialWireBlue = new THREE.MeshBasicMaterial( { color: "#42cbf4", wireframe: true } );
  materialPhong = new THREE.MeshPhongMaterial({
  color: 0x42cbf4,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});
materialStandard = new THREE.MeshStandardMaterial({
  color: 0x42cbf4,
  roughness: 0.5,
  metalness: 0.5
});

  sphere = new THREE.Mesh( sphere, materialLambert);
  smallTorus = new THREE.Mesh( smallTorus, materialNormal);
  mediumTorus = new THREE.Mesh( mediumTorus, materialPhong );
  largeTorus = new THREE.Mesh( largeTorus, materialStandard );
  XLTorus = new THREE.Mesh( XLTorus, materialWireBlue );

  sphere.position.z = -500;
  smallTorus.position.z = -500;
  mediumTorus.position.z = -500;
  largeTorus.position.z = -500;
  XLTorus.position.z = -500;

  // Add mesh to scene
  scene.add( sphere );
  scene.add( smallTorus );
  scene.add( mediumTorus );
  scene.add( largeTorus );
  scene.add( XLTorus );
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  smallTorus.rotation.y += 0.03;
  smallTorus.rotation.x += 0.03;
  mediumTorus.rotation.y += 0.04;
  mediumTorus.rotation.x -= 0.04;
  largeTorus.rotation.y -= 0.05;
  largeTorus.rotation.x -= 0.05;
  XLTorus.rotation.y -= 0.06;
  XLTorus.rotation.x += 0.06;

  renderer.setClearColor("#e0e0e0");

  // Render the scene
  renderer.render(scene, camera);

};

init();
geometry();
render();
