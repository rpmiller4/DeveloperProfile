import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


export class SplashPage extends Component {
  static displayName = SplashPage.name;



  componentDidMount() {
    
    var meshArray = [];
    var cubesInSpace = 1500;

    let step = (mesh) => {
      mesh.rotation.x += .0005 * mesh.position.y;
      mesh.rotation.y += .0001 * mesh.position.x;
      mesh.position.y -= mesh.position.y < 100 || mesh.position.y > -100 ? -.0005 * mesh.position.y  :  (.0005) * mesh.position.y;
      mesh.position.x -= mesh.position.x < 100 || mesh.position.x > -100 ? -.0005 * mesh.position.x  :  (.0005) * mesh.position.x;
      mesh.position.z -= mesh.position.z < 100 || mesh.position.z > -100 ? -.0005 * mesh.position.z : (.0005) * mesh.position.z;
      //mesh.material.color.r = Math.random();
      mesh.material.color.r = mesh.position.x / 5 / mesh.rotation.x % 1 ;
      mesh.material.color.b = mesh.position.y / 5 / mesh.rotation.x % 1 ;
    };

    let setRandomPosition = (mesh) => {
      mesh.position.x = Math.random() * 50 - 25;
      mesh.position.y = Math.random() * 50 - 25;
      mesh.position.z = Math.random() * 50 - 25;
    }

    let makeMesh = () => {
      var mesh = new THREE.Mesh(new THREE.SphereGeometry(Math.random()), new THREE.MeshLambertMaterial());
      setRandomPosition(mesh);
      mesh.material.color.g = mesh.material.color.g + Math.random(1) % 1;
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
    camera.position.z = 200;//500 is perfect;
    var renderer = new THREE.WebGLRenderer({ antialias: true });



    renderer.setClearColor("#FFFFFF");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);




    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });


    for (var i = 0; i < cubesInSpace; i++)
    {
      pushMeshIntoScene();
    }

    var light = new THREE.PointLight(0xffffff, 1, 500);

    var spotLight = new THREE.SpotLight(0xff0000);
    spotLight.position.set(100, 1000, 100);

    light.position.set(10, 0, 50);
    scene.add(light);
    //scene.add(spotLight);

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