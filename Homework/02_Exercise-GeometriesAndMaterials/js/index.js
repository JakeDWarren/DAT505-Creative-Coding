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

  // Create a geometry
  smallTorus = new THREE.TorusGeometry(30, 3, 16, 100);

  //Create material
  materialNormal = new THREE.MeshNormalMaterial();

  //Megre material and geometry
  smallTorus = new THREE.Mesh( smallTorus, materialNormal);

  //Set position of mesh
  smallTorus.position.z = -500;

  // Add mesh to scene
  scene.add( smallTorus );
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  //Animated rotation
  smallTorus.rotation.y += 0.1;
  smallTorus.rotation.x += 0.1;


  renderer.setClearColor("#e0e0e0");

  // Render the scene
  renderer.render(scene, camera);

};

init();
geometry();
render();
