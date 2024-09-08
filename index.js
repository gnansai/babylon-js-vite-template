import { ArcRotateCamera, AxesViewer, Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";


import { Inspector } from '@babylonjs/inspector';



let canvas = document.getElementById("renderCanvas");

const engine =  new Engine(canvas,true);

const createScene = function(){
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera("camera1",0,0,10, new Vector3(0,0,0),scene);
    // camera.setTarget (Vector3.Zero());
    camera.attachControl(canvas, true);

    camera.lowerRadiusLimit = 5;
    camera.upperRadiusLimit = 20;

    const light = new HemisphericLight("light", new Vector3(0,1,0), scene);
    light.intensity = 0.7;

    const sphere = MeshBuilder.CreateSphere("sphere",{diameter:2, segments:32}, scene);
    sphere.position.y = 1;

    const ground = MeshBuilder.CreateGround("ground",{width:6,height:6},scene);
    return scene;
}

const scene = createScene();

const axes = new AxesViewer(scene);

// Inspector.Show(scene, {});


engine.runRenderLoop(function () {
    scene.render();
    
})

window.addEventListener("resize", function(){
    engine.resize();
})




console.log(canvas);

