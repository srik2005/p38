class Game {
    constructor(){
      
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
  
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
  
      }
  
      car1 = createSprite(100, 200);
      car2 = createSprite(300, 200);
      car3 = createSprite(500, 200);
      car4  = createSprite(700, 200);
      cars = [car1, car2, car3, car4];
  
      car1.addImage("car1", c1i);
      car2.addImage("car2", c2i);
      car3.addImage("car3", c3i);
      car4.addImage("car4", c4i);
  
    }
  
    play(){
      form.hide();
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        var display_position = 130;
        var x = 175;
        var index = 0;
        var y;
        background("#c68767");
        image(track, 0, -1*(displayHeight * 4), displayWidth, displayHeight*7);
      
        for(var plr in allPlayers){
          index += 1;
          x += 200;
          y = displayHeight - allPlayers[plr].distance;
          cars[index - 1].x = x;
          cars[index - 1].y = y;
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth / 2
            camera.position.y = cars[index - 1].y;
            
            noStroke();
            fill(0, 144, 255, 255);
            ellipse(x, y, 60, 60);
          }
      }
    }
    if (player.distance > 5500){
      gameState = 2;
    }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      drawSprites();
  
    }
    end(){
      console.log("The game is over!!");
      game.update(2);
    }
  }
  