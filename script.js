let rnd = (l, u) => Math.random() * (u - l) + l
// let scene, camera, potholes = [];
let scene, camera, bullets = [], mins =[];
let score, health, s = 0, h = 150; 
window.onload = function(){
  scene = document.querySelector("a-scene");
  cameraRig = document.querySelector("#cameraRig");
  camera = document.querySelector("#realCamera");
  // camera = document.querySelector("a-camera");
  score = document.getElementById("score");
  score.setAttribute("value",`Score: ${s}`);
  health = document.getElementById("hp");
  // health.setAttribute("value",`health: ${h}`);
  // console.log(health);
  document.getElementById("hp").setAttribute("value", `Health: ${h}`)


  for(let i = 0; i < 10; i++){
    let x = rnd(-120,120);
    let z = rnd(-250,250);
    let person = document.createElement("a-gltf-model");
    person.setAttribute("src","#tree");
    person.setAttribute("position",{x:x,y:0,z:z});
    scene.append(person);
  }
  for(let i = 0; i < 10; i++){
    let x = rnd(-250,250);
    let z = rnd(-250,250);
    let min = new Mino(x,z);
    // document.createElement("a-gltf-model");
    // min.setAttribute("src","#mino");
    // min.setAttribute("position",{x:x,y:0,z:z});
    // min.setAttribute("scale","0.1 0.1 0.1");
    mins.push(min);
    scene.append(min);
  }
  window.addEventListener("click", ()=>{
    console.log(1);
      bullets.push(new Bullet());      
  })

  setTimeout(loop,2000);
  
}
function loop(){
  health.setAttribute("value",`Health: ${h}`);
  score.setAttribute("value",`Score: ${s}`);
  light_source.object3D.rotation.z += 0.002;

    for(let bullet of bullets){
      bullet.move();
    }
  //console.log(camera.object3D.position.x + " " + camera.object3D.position.z)
  window.requestAnimationFrame( loop );


  if(s <= 9){
    for(let min of mins){
      min.walk();
      for(let bullet of bullets){
        if(distance(bullet.obj,min.obj) < 6){
          min.die()
          // bullet.move = false;
          // s += 1;
        }
      }
      //console.log(distance(camera,min.obj));
      if(distance(camera,min.obj) < 15){
        min.attack()
      }
    }
  }
  results();
  //result2();
}
  function results(){
    if(h <= 0){
      document.getElementById("over").setAttribute("opacity", 1);
      console.log(1)
    }
    else if(s == 1){
      document.getElementById("face").setAttribute("opacity", 1);
    }
    else if(s == 2){
      document.getElementById("face").setAttribute("opacity", 0);
    }
    else if(s == 5){
      document.getElementById("face").setAttribute("opacity", 1);
      document.getElementById("face").setAttribute("scale", "3 3 3");
    }
    else if(s == 6){
      document.getElementById("face").setAttribute("opacity", 0);
    }
    else if(s >= 9){
      // bullets.move = false;
      document.getElementById("end").setAttribute("opacity", 1);
    }

  }
  // function result2(){
  //   if(s = 0){
  //     this.obj = document.createElement("a-text");
  //     this.obj.setAttribute("value", "Hi");
  //   }
  // }

// function shoot(){
//   window.addEventListener("click", ()=>{
//     bullets.push(new Bullet());  
//       })
//     out();
//   }
// function out(){
//   for(let bullet of bullets){
//     bullet.move();
//   }
//   window.requestAnimationFrame( out );
// }





// class Pothole {
//   constructor(x, z) {
//     this.obj = document.createElement("a-cylinder");
//     this.obj.setAttribute("height", 0.1);
//     this.obj.setAttribute("radius", 3);
//     this.obj.setAttribute("color", "black");
//     this.obj.setAttribute("position", { x: x, y: 0.025, z: z });
//     scene.append(this.obj);
//   }
// }
// window.onload = function() {
//   scene = document.querySelector("a-scene");
//   camera = document.querySelector("#realCamera");
//   camera.drop = false;

//   for (let i = 0; i < 1; i++) {
//     let x = rnd(-30, 30);
//     let z = rnd(-30, 30);
//     potholes.push(new Pothole(x, z));
//   }

//   setTimeout(loo0p, 3000);
// }
// let hit = 0
// function loo0p() {

//   for (let pothole of potholes) {
//     console.log(distance(pothole.obj, camera) + " " + (distance(pothole.obj, camera) < 2));
//     if (distance(pothole.obj, camera) < 2) {

//       camera.drop = true;
//       console.log(distance(pothole.obj, camera) + " " + (distance(pothole.obj, camera) < 2));

//     }
//   }
//   //console.log(camera.drop);



//   if (camera.drop) {
//     //console.log("Drop")
//     camera.object3D.position.y -= 0.025;
//   }

//   window.requestAnimationFrame(loo0p);
// }

function distance(obj1, obj2) {
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
  return d;
}
