import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


export class SplashPage extends Component {
  static displayName = SplashPage.name;



  componentDidMount() {
    
    var meshArray = [];
    var cubesInSpace = 3000;

    let step = (mesh) => {
      mesh.rotation.x += .0005 * mesh.position.y;
      mesh.rotation.y += .0001 * mesh.position.x;
      mesh.position.y -= mesh.position.y < 100 || mesh.position.y > -100 ? Math.random() * (-.005) * mesh.position.y  : Math.random() * (.005) * mesh.position.y;
      mesh.position.x -= mesh.position.x < 100 || mesh.position.x > -100 ? Math.random() * (-.005) * mesh.position.x  : Math.random() * (.005) * mesh.position.x;
      mesh.position.z -= mesh.position.z < 100 || mesh.position.z > -100 ? Math.random() * (-.005) * mesh.position.z  : Math.random() * (.005) * mesh.position.z;

    };

    let setRandomPosition = (mesh) => {
      mesh.position.x = Math.random() * 50 - 25;
      mesh.position.y = Math.random() * 50 - 25;
      mesh.position.z = Math.random() * 50 - 25;
    }

    let makeMesh = () => {
      var mesh = new THREE.Mesh(geometry, material);
      setRandomPosition(mesh);
      return mesh;
    }

    let pushMeshIntoScene = () => {
      var mesh = makeMesh();
      meshArray.push(mesh);
      scene.add(mesh);
    }

    let repurposeMesh = (mesh) => {
      if (mesh.position.x + mesh.position.y + mesh.position.z > 300) {
        setRandomPosition(mesh);
      };
    }

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 500;//500 is perfect;
    var renderer = new THREE.WebGLRenderer({ antialias: true });



    renderer.setClearColor("#FFFFFF");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);




    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;

    });


    


    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

    for (var i = 0; i < cubesInSpace; i++)
    {
      pushMeshIntoScene();
    }

    var light = new THREE.PointLight(0xffffff, 1, 500);

    var spotLight = new THREE.SpotLight(0xff0000);
    spotLight.position.set(100, 1000, 100);

    light.position.set(10, 0, 25);
    scene.add(light);
    scene.add(spotLight);

    const vertices = [];

    for (let i = 0; i < 10; i++) {

      const x = THREE.MathUtils.randFloatSpread(50);
      const y = THREE.MathUtils.randFloatSpread(50);
      const z = THREE.MathUtils.randFloatSpread(50);

      vertices.push(x, y, z);

    }

    const vgeometry = new THREE.BufferGeometry();
    vgeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const vmaterial = new THREE.PointsMaterial({ color: 0xBBBBBB });

    const vpoints = new THREE.Points(vgeometry, vmaterial);

    scene.add(vpoints);

    var render = function () {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      for (var i = 0; i < cubesInSpace; i++) {
        step(meshArray[i]);
        repurposeMesh(meshArray[i]);
      }
      //if (Math.random() < .01) {
      //  pushMeshIntoScene();
      //}
      cubesInSpace = meshArray.length;
      //const controls = new OrbitControls(camera, renderer.domElement);
    }


    render();
  }

  render() {
    return (
      <div></div>
    );
  }
}