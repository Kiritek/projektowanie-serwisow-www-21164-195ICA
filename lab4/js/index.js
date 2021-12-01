
const canvas = document.getElementById('canvas');
canvas.width = 400; // Ustawienie szerokości gry na 400 px
canvas.height = 600; // Ustawienie długości gry na 600px
const c = canvas.getContext('2d'); 
let rightPressed= false; //zmienna do poruszania w prawo
let leftPressed = false; //zmienna do poruszania w lewo
let movementRight = true; // zmienna która określa w którym kierunku poruszają się przeciwnicy true w prawo false w lewo.

//Dodane Nasłuchiwanie wciśnięcia i odklinięcia przycisku i kliknięcia.

document.addEventListener("keydown",keyDownHandler)
document.addEventListener("keyup",keyUpHandler)
document.addEventListener("keypress",keyPressHandler)

//Przy przytrzymaniu przycisku sprawdzane jest czy jest to prawa czy lewa strzalka i ustawiana jest wartość która będzie użyta do przemieszczania gracza.
function keyDownHandler(e) {
    if(e.code  == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.code == 'ArrowLeft') {
        leftPressed = true;
    }
}
//Przy odklinięciu przycisku strzałkowego czyszczona jest wartość zmienniej co przestaje poruszać gracza.
function keyUpHandler(e) {
    if(e.code  == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.code == 'ArrowLeft') {
        leftPressed = false;
    }
}
//Gdy wciskamy spacje wystrzeliwany jest pocisk od gracza.
function keyPressHandler(e){
    if (e.code == "Space") {
        spawnProjectile();
    }
}
//Reprezentacja gracza
class Player { 
    //Konstruktor wywoływany przy tworzeniu gracza
   constructor(radius, color){
       this.x=canvas.width/2; //Współrzędna x gracza
       this.y=canvas.height-20;// Współrzędna y gracza
       this.radius = radius; // Promień koła reprezentującego gracza
       this.color = color; // Kolor Gracza
   }
   //Narysowanie koła gracza
   draw(){
       c.beginPath();
       c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
       c.fillStyle=this.color;
       c.fill();
       c.closePath();
   }
}
// To samo co wyżej tylko reprezentacja wroga
class Enemy{
    constructor(x,y,radius,color){
        this.x= x;
        this.y= y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle=this.color;
        c.fill();
        c.closePath();
    }
    // Funkcja która porusza przeciwników w zależności od zmiennej movementRight w prawo true w lewo false.
    move(){
       

        if(movementRight){
            this.x += 1;
        }
        else if (!movementRight ){
            this.x -=1;
        }

    }
    //Funkcja która sprawdza czy najdalej wysuniety przeciwnik w lewo/prawo nie wyszedłby poza mape gdy tak jest zmienia kierunek lotu przeciwników.
    checkMovement(){
        if(movementRight && this.x+10>canvas.width){
           movementRight = false;
        }
        if(!movementRight && this.x-10<0){
            movementRight =true;
        }
    }
    //Funkcja która tworzy pocisk w strone gracza
    shoot(){
        projectiles.push(new Projectile(this.x,this.y,this.color,3));
    }
}
 //Klasa platform które chronią gracza przed pociskami.
class Platform{
    constructor(x){
        this.x= x;
        this.y = canvas.height- 100;
        this.hitPoints=30; // Platforma zostanie usunięta po 30 trafieniach
    }
    //Rysowanie prostokąta platform

    draw(){
        c.beginPath();
        c.rect(this.x,this.y,40,10);
        c.fillStyle='blue';
        c.fill();
        c.closePath();
    }
}
// Klasa pocisku który jest wspólny dla przeciwników i gracza.
class Projectile{
    constructor(x,y,color,velocity){
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity; // Przyśpieszenie jakim będzie lecieć pocisk
    }
    draw(){
        c.beginPath();
        c.rect(this.x,this.y,8,15);
        c.fillStyle=this.color;
        c.fill();
        c.closePath();
    }
    //Funkcja która dodaje "prędkość" dodając wysokość lub ją odejmując w dół dodaje w góre odejmuje
    update(){
        if ((this.velocity<0 && (this.y + this.velocity)>0) || (this.velocity>0 && (this.y+this.velocity)<canvas.height)) {
            this.y += this.velocity;
        }
    }
}
//tabela na pociski.
const projectiles=[];
//tabela na przeciwników.
const enemies=[];
//tabela na paltformy.
const platforms=[];
//Generowanie platform.
platforms.push(new Platform(20))
platforms.push(new Platform(120))
platforms.push(new Platform(220))
platforms.push(new Platform(320))
//Generowanie gracza
const player = new Player(20,'red');

//Tworzenie przeciwników w wymiarach 5 na 6 
function createEnemies(){
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 6; y++) {
            enemies.push(new Enemy((20+x*50),(60+y*40),10,'green'));
        }
        
    }
}
//Funkcja która wykrywa kolizje
function colisionDetection(){
    if (projectiles.length>0) {
        projectiles.forEach((projectile,index) => {
            //W przypadku gdy przeciwnik będzie wystarczająco blisko pocisku zostanie usunięty wraz z nim a do określania dystansu służy funkcja hypot.
            enemies.forEach((enemy,enemyIndex) => {
                const enemyDist = Math.hypot(projectile.x - enemy.x,projectile.y- enemy.y);
                if (enemyDist-3-10 <1 && projectile.velocity<0) {
                    //Usuń przeciwnika
                    enemies.splice(enemyIndex,1);
                    //Usuń pocisk
                    projectiles.splice(index,1);
                    //W przypadku gdy nie będzie już przeciwników wyskakuje komunikat z wygraną
                    if(enemies.length==0){
                        alert("You won");
                    }
                }
            });
            // Gdy pocisk będzie w odległości od gracza 30 px gra zostaje przegrana
            if (projectile.velocity >0) {
                const playerDist = Math.hypot(projectile.x - player.x,projectile.y - player.y)
                if(playerDist <30){
                    alert("You lost");
                }
            }
            //Usunięcie pocisku gdy wyleci poza mape
            if(projectile.y<10||projectile.y>canvas.height-10){
                projectiles.splice(index,1);
            }
            //Gdy pocisk będzie na tej samej wysokości co platforma i będzie w zasięgu jej szerokości uszkodzi ją i zostanie usunięty
            if (projectile.y == canvas.height-100) {

            platforms.forEach((platform,platformIndex) => {
                if((projectile.x+4 >= platform.x-20 && projectile.x-4<=platform.x+20)){
                    //Zabranie punktu życia platofrmie
                    platform.hitPoints--;
                    //Usuniecie pocisku
                    projectiles.splice(index,1);
                    //Gdy platorma ma 0 pkt życia zostaje usunięta
                    if (platform.hitPoints==0) {
                        platforms.splice(platformIndex,1);
                    }
                }
            });
            
            
        }
        });
    }
}
//Dodawanie pocisku do tablicy tylko dla gracza
function spawnProjectile(){
    projectiles.push(new Projectile(player.x,player.y,'red',-5));
}
//Funkcja która rysuje grę
function drawGame(){
    //Wyczyszcenie poprzedniej klatki
    c.clearRect(0,0,canvas.width,canvas.height)
    //Wywołanie rysowania gracza
    player.draw();
    //Wywoawłanie kolizji detekcji
    colisionDetection();
    //Wywołanie rysowania platoform gdy jest jakaś
    if (platforms.length>0) {
        platforms.forEach(element => {
            element.draw();
        });
    }
    //Wywołanie rysowania i odświerzenia pocisków gdy są jakieś
    if (projectiles.length>0) {
        projectiles.forEach(element => {
            element.update();
            element.draw();
        });
    }
    //Wywołanie funkcji sprawdzenia kierunku wrogów, poruszania się nich i rysowania a także strzelania gdy funkcja random wylosuje strzał
        enemies.forEach(element => {
            element.checkMovement();
            element.move();
            element.draw();
            //Gdy liczba losowa -.09998 będzie większa lub równa 0 przeciwnik wystrzeli.
            if ((Math.random()-0.9998)>=0){
                element.shoot();
            }   
        });

        //Jeżeli jest wcisnieta strzałka w prawo gracz będzie sie poruszać o 5px tak długo jak nie wypadłby poza mape
    if(rightPressed && player.x < canvas.width - player.radius){
        player.x +=5;
    }
    //Jeżeli jest wcisnieta strzałka w lewo gracz będzie sie poruszać o 5px tak długo jak nie wypadłby poza mape
    else if(leftPressed && player.x >player.radius){
        player.x -=5;
    }
}
//Wywołanie stworzenia wrogów. 
createEnemies();
//Wywołanie funkcji rysującej gre co 10 milisekund.
let refreshGame = setInterval(drawGame, 10);