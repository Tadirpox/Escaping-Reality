class Mino{
  constructor(x,z){
    this.z = z;
    this.dz = 1;

  this.obj = document.createElement("a-gltf-model");
  this.obj.setAttribute("src","#mino");
  this.obj.setAttribute("position",{x:x,y:0,z:z});
  this.obj.setAttribute("scale","0.1 0.1 0.1");
  scene.append(this.obj);   
  } 

  walk(){
    this.z += this.dz;
    this.obj.object3D.position.z = this.z; 
    if(this.z > 250 || this.z < -250){
      this.respawn();
    }
  }


  attack(){
    h -= 10;
    this.respawn();
  }

  die(){
    h += 5;
    s += 1;
    this.respawn();
  }

  respawn(){
    let x = rnd(-250, 250);
    this.z = rnd(-250, 250);
    this.obj.setAttribute("position",{x:x,y:0,z:this.z});
  }
}
