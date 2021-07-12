import * as React from "react"
import { getCanvas } from "../VR/vrCanvas";
import { setUpGearSystem} from "./buildLabsComponents/testGearSystem"; 
import { setViewControls } from "./buildLabsComponents/orbitControls"; 
import * as THREE from 'three' ;

import { BuildItEditor } from "../UI/BuildItEditor/buildItEditor" ;
import * as Monad from "../../components/UI/BuildItEditor/libs/monads/definitions" ; 
import styles from "./BuildLab.module.scss" ; 

const gearTextureUrl = "https://3.bp.blogspot.com/-aVndKMqhFH0/TuLlCNWfxAI/AAAAAAAAAg8/vpTDf96sr3A/s1600/Metal+armour+plating.jpg";    


 
const _setLights = ( scene )=> {

    const directionalLight = new THREE.DirectionalLight("#fff", 2);
    directionalLight.position.set( 20, 50, -20 );
   
    const ambientLight = new THREE.AmbientLight("#ffffff", 1);
    ambientLight.position.set(0, 20, 20);

    scene.add( directionalLight );
    scene.add( ambientLight );
    return ; 
} ; 

const _setRenderer = ( canvas )=>{
    const renderer = new THREE.WebGLRenderer( { 
            canvas      : canvas, 
            antialias   : true, 
            alpha : true
        } );
    renderer.setSize( canvas.clientWidth, canvas.clientHeight ) ;  
    renderer.setPixelRatio( window.devicePixelRatio ) ;
    return renderer;  
} ; 

export class BuildLab extends React.Component {
  
  constructor( props ) {

    super( props ) ; 
    this.mounted = false;
    this.canvasHtmlId   = "buildCanvas" ;     
    this.animate        = this.animate.bind( this ) ;  
    this.onresize       = this.onresize.bind( this ) ; 
  }

  componentDidMount(){

    if( this.mounted ) return ;
    this.mounted = true;
    
    this.canvas = getCanvas( this.canvasHtmlId ) ;  
    this.editor = new BuildItEditor( this.canvas ) ;  
    this.renderer = _setRenderer(this.canvas) ; 
    setViewControls(this.editor, this.canvas); 
    _setLights( this.editor.scene ); 
    const loader = new THREE.TextureLoader();	
    const onLoadNucleusTexture = ( texture )=>{
      this.gearSystem = setUpGearSystem( this.editor.scene, texture ) ;
      this.setState({textureLoaded : true}) ; 
      this.onresize();
      this.animate();
    }
    loader.load( gearTextureUrl, onLoadNucleusTexture ); 

    window.addEventListener('resize', ()=>{
        this.onresize();
    })
 }

  onresize(){  
    this.editor.viewportCamera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.editor.viewportCamera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  animate(){ 
    if(this.gearSystem !== undefined) this.gearSystem.next() ; 
    this.renderer.render(this.editor.scene, this.editor.viewportCamera );  
    requestAnimationFrame(this.animate);
  }

  render(){
      return (
        <div>
          <div><canvas id={this.canvasHtmlId} className={styles.buildLab}></canvas></div>
          <div style={{color:'black'}}>BuildLab</div>

        </div>
      )
  }
}



