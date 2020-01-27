window.onload = init;

function init() {
    console.log("hello");
    
    
 var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 1,   {x: "-20%" })	
  .to("#js-slideContainer", 1,   {x: "-40%" })



  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    .addTo(controller);
  
  
  var animation = new bodymovin.loadAnimation({
      container: document.getElementById('home'),
      rendered: 'svg',
      loop: true,
      autoplay: true,
      path: 'home.json'
  })
  
   var animation = new bodymovin.loadAnimation({
      container: document.getElementById('lighthouse'),
      rendered: 'svg',
      loop: true,
      autoplay: true,
      path: 'lightbeam.json'
  })

     
   var animation = new bodymovin.loadAnimation({
      container: document.getElementById('seabottom'),
      rendered: 'svg',
      loop: true,
      autoplay: true,
      path: 'seafloor.json'
  })
   
    var animation = new bodymovin.loadAnimation({
      container: document.getElementById('barnyard'),
      rendered: 'svg',
      loop: true,
      autoplay: true,
      path: 'barnyard.json'
  })
    
        var animation = new bodymovin.loadAnimation({
      container: document.getElementById('tea'),
      rendered: 'svg',
      loop: true,
      autoplay: true,
      path: 'Tea.json'
  })
    

};


