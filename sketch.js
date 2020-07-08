var canvas, backgroundImage;

var PersonCount, FormDisplay = 0;

var database, form, person;

var PersonCount = 0, PersonDisplay = 0, Persons, answers = [];

function preload(){
    backgroundImage = loadImage("backgroundImage.png");
    secondImage = loadImage("survey.jpg");
    thumb = loadImage("Thumbs.png");
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 20);

    database = firebase.database();

    form = new Form();
    person = new Person();
    person.getCount();
    
}

function draw(){
    background(255, 255, 255);
    
   
    form.display();
}