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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(30, 700, 100, 20, "white");
    createPlatform(250, 600, 200, 20,"purple");
    createPlatform(500, 615, 200, 20, "white");
    createPlatform(720, 550, 200, 20, "purple");
    createPlatform(1050, 500, 1300, 20, "white");// bright white for a finished platform




    // TODO 3 - Create Collectables
    createCollectable("max", 350, 250, 0.2);
    createCollectable("diamond", 1050, 0, 0.4);
    createCollectable("database", 700, 600, 0.2);


    
    // TODO 4 - Create Cannons
    createCannon("top", 700, 950);
    createCannon("left", 420, 950);
    createCannon("bottom", 1050, 950);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
