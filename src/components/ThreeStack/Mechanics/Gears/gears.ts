import * as Shapes      from "../../BasicShapes/types" ; 
import * as Circulars   from "../../BasicShapes/ball" ;
import { Gear } from "./definitions" ; 
const defaultTextureAnisotropy = 16; 



export const gear = ( specs: Shapes.Round, texture, scene ) : Gear =>{

    texture.anisotropy = defaultTextureAnisotropy ;
    const mesh  = Circulars.torus( specs, texture );
    scene.add( mesh ); 

    const nucleusSpecs = { radius : specs.radius /3 } ; 
    const meshNucleus = Circulars.torus(nucleusSpecs, texture);
    scene.add( meshNucleus ); 

    return {

        radius : specs.radius,

        getMesh : () => mesh,

        turn : (angle) => {
            mesh.rotation.z += (angle); 
        }, 

        translateX : (distance) => {
            mesh.translateX(distance); 
            meshNucleus.translateX(distance); 
        }, 
        translateY : (distance) => {
            mesh.translateY(distance); 
            meshNucleus.translateY(distance); 
        }, 
        translateZ : (distance) => {
            mesh.translateZ(distance); 
            meshNucleus.translateZ(distance); 
        }, 

        rotateX : (angle)=>{
            mesh.rotation.z = angle
        }
    }
} ;






