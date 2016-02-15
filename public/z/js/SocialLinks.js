function SocialLinks(){



  var gh ="https://github.com/flacoeterno/flaco.com.ar"
  var t = "http://twitter.com/share?text=" + encodeURIComponent("Descubri mas poesia #spinetteana http://flaco.com.ar/z/");
  var fb = "https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=http://flaco.com.ar/z/";
  var links = [

    [ "/z/img/icons/twitter_2.png" , t  ],
    [ "/z/img/icons/github_2.png"  , gh ],
    [ "/z/img/icons/facebook_2.png"  , fb ]
  ];

  var geo = new THREE.PlaneBufferGeometry( 1 , 1 );

  var body = new THREE.Object3D();

  for( var i = 0; i < links.length; i++ ){

    var l = links[i];
    var mat = new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture( l[0] ),
      opacity: .5,
      transparent: true
    })

    var m = new THREE.Mesh( geo , mat );

    m.link  = l[1];
    m.hoverOver = function(){
  
      this.material.opacity = 1.;

    }

    m.hoverOut = function(){

      this.material.opacity = .5;

    }
    
    m.select = function(){

      window.open( this.link , "_blank" );

    }

    objectControls.add( m );

    m.position.y = i * 1.1;
    body.add( m );

  } 

  return body; 


}
