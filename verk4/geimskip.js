function Geimflaug(name, life) {
  this.name = "SpaceRacer";
  this.life = 10;
  this.showName = function() {
	console.log(this.name);
  };
}

let geimflaug1 = new Geimflaug();
let geimflaug2 = new Geimflaug();
let geimflaug3 = new Geimflaug();

geimflaug2.name = "Jón";
geimflaug2.showName();

let geimflaugar = [geimflaug1, geimflaug2, geimflaug3];

for (let geim in geimflaugar) {
	geimflaugar[geim].speed = 5;
}

Geimflaug.prototype.fly = function() {
	this.speed += 1;
};

let geimflaug4 = new Geimflaug();

geimflaug4.speed = 5;

geimflaug4.damage = function() {
	this.life -= 1
};
