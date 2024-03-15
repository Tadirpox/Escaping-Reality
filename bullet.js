// let scene, camera, balls = [];

// window.onload = function(){
//   // scene = document.querySelector("a-scene");
//   camera = document.querySelector("a-camera");

//   window.addEventListener("click", ()=>{
//     bullets.push(new Bullet());  
//     })
//     out();
//   }
// function out(){
//   for(let bullet of bullets){
//     bullet.move();
//   }
//   window.requestAnimationFrame( out );
// }



class Bullet{
  constructor(){
    this.x = camera.object3D.position.x + 2;
    this.y = 5;
    this.z = camera.object3D.position.z ;

    let angle = camera.object3D.rotation.y + Math.PI;
    this.dx = Math.sin(angle) / .1;
    this.dz = Math.cos(angle) / .1;

    this.fx = 1;
    this.fz = 1;

    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj)
  }
  move(){
    this.x += this.dx;
    this.z += this.dz;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}
