import React, { Component } from 'react';
import '../custom.css'
import * as THREE from "three";
import * as POSTPROCESSING from "postprocessing";
var smoke = require("./texture3.png");
var smoke2 = require("./texture4.png");


export class SplashPage extends Component {
  static displayName = SplashPage.name;

  componentDidMount() {

    var cloudParticles = [];

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    //var camera = new THREE.OrthographicCamera(60, window.innerWidth / window.innerHeight, 1, 1000, 1, 1000);
    var mouse = new THREE.Vector3(0, 0, 0.5);

    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    let ambient = new THREE.AmbientLight(0x777777);
    scene.add(ambient);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.fog = new THREE.FogExp2(0x03544e, 0.001); //0.001
    renderer.setClearColor(scene.fog.color);
    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    let loader = new THREE.TextureLoader();
    let texture = loader.load(smoke);
    let texture2 = loader.load(smoke2);
    let addCloudToScene = (mouse) => {

      var cloudGeo = new THREE.PlaneBufferGeometry(400, 400);
      var cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: 0.2
      });
      var cloudMaterial2 = new THREE.MeshLambertMaterial({
        map: texture2,
        transparent: true,
        opacity: 0.2
      });

      let cloud = new THREE.Mesh(cloudGeo, Math.random() < .5 ? cloudMaterial : cloudMaterial2);
      cloud.position.set(
        Math.random() * 800 - 400,
        500,
        Math.random() * 500 - 500
      );
      cloud.rotation.x = 1.16;
      cloud.rotation.y = -0.12;
      cloud.rotation.z = Math.random() * 2 * Math.PI;
      cloudParticles.push(cloud);
      scene.add(cloud);

    }

    loader.load(smoke,
      (texture) => {

        var cloudGeo = new THREE.PlaneBufferGeometry(400, 400);
        var cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true,
          opacity: 0.2
        });
        var cloudMaterial2 = new THREE.MeshLambertMaterial({
          map: texture2,
          transparent: true,
          opacity: 0.2
        });
        for (let p = 0; p < 50; p++) {
          let cloud = new THREE.Mesh(cloudGeo, Math.random() < .5 ? cloudMaterial : cloudMaterial2);
          cloud.position.set(
            Math.random() * 800 - 400,
            500,
            Math.random() * 500 - 500
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random() * 2 * Math.PI;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }
      });

    let directionalLight = new THREE.DirectionalLight(0xff7f00);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    let orangeLight = new THREE.PointLight(0xff7f00, 100, 500, 1.7);
    orangeLight.position.set(200, 300, 100);
    scene.add(orangeLight);
    let redLight = new THREE.PointLight(0x9f0033, 50, 500, 1.7);
    redLight.position.set(100, 300, 100);
    scene.add(redLight);
    let blueLight = new THREE.PointLight(0x005499, 50, 400, 1.7);
    blueLight.position.set(300, 300, 200);
    scene.add(blueLight);

    const bloomEffect = new POSTPROCESSING.BloomEffect({
      blendFunction: POSTPROCESSING.BlendFunction.SOFT_LIGHT,
      kernelSize: POSTPROCESSING.KernelSize.VERY_SMALL,
      useLuminanceFilter: true,
      luminanceThreshold: 0.1,
      luminanceSmoothing: 0.9
    });
    bloomEffect.blendMode.opacity.value = 1.25;
    const composer = new POSTPROCESSING.EffectComposer(renderer);
    composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));
    composer.addPass(new POSTPROCESSING.EffectPass(camera, bloomEffect));

    document.addEventListener('mousedown', onDocumentMouseDown, false);

    let addPoint = (mouse) => {
      //alert("clicked at " + mouse.x + " " + mouse.y);
      addCloudToScene(mouse);
    }

    let removeLastPoint = () => {
      var cloud = cloudParticles.pop();
      var curItem = scene.getObjectByProperty('uuid', cloud.uuid);
      curItem.geometry.dispose();
      curItem.material.dispose();
      scene.remove(curItem);

    }

    function onDocumentMouseDown(event) {

      event.preventDefault();

      switch (event.which) {
        case 1: // left mouse click

          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
          addPoint(mouse);
          break;
        default:
        case 2: // right mouse click
          removeLastPoint();
      }
    }

    //const controls = new OrbitControls(camera, renderer.domElement);

    var render = function () {
      //renderer.render(scene, camera);
      requestAnimationFrame(render);
      cloudParticles.forEach(p => p.rotation.z += .001);
      composer.render();
    }
    render();

  }



  render() {
    return (
      <div ref={ref => (this.mount = ref)}></div>
    );
  }
}