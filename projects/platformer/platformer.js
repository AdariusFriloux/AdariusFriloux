$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(400, 700, 150, 20)
    
    createPlatform(500,600,140,20)
    
    createPlatform(600,500,200,20)
    
    createPlatform(500,390,140,20)

    createPlatform(400,300,140,20)

    createPlatform(300,200,140,20)

    createPlatform(200,100,140,20)

    createPlatform(820,390,140,20)

    createPlatform(900,300,140,20)

    createPlatform(1000,200,140,20)

    createPlatform(1090,100,140,20)

    createPlatform(840,600,140,20)

    createPlatform(1000,700,140,20)
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    createCollectable("steve",400,400,20,0.5)

    createCollectable("steve",700,450,0,0)

    createCollectable("steve",1000,650,0,0)

    createCollectable("steve",300,50,0,0)
    
    createCollectable("steve",1090,50,0,0)
    
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)
    createCannon("left", 600, 2000);

    createCannon("right",500,2000);

    createCannon("left",030,2000);

    createCannon("left",200,2000)





    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
