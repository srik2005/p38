var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4;
var cars = [];
var track,c1i, c2i, c3i, c4i, ground; 

function preload(){
  track = loadImage("images/track.png");
  c1i = loadImage("images/beardedMan.png");
  c2i = loadImage("images/smileyface.png");
  c3i = loadImage("images/stickfigure.png");
  c4i = loadImage("images/smileyface.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  var firebaseConfig = {
    apiKey: "AIzaSyAkMbrt3EcFyAoW20oK0dK2G7g8w582lB4",
    authDomain: "hurdles-ac760.firebaseapp.com",
    databaseURL: "https://hurdles-ac760.firebaseio.com",
    projectId: "hurdles-ac760",
    storageBucket: "hurdles-ac760.appspot.com",
    messagingSenderId: "443814777095",
    appId: "1:443814777095:web:0336424bbd767818a8b5a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
