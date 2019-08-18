var kylo = {
    health: 110,
    strength: 5,
 
};

var maul = {
    health: 125,
    strength: 10,

};

var obi = {
    health: 150,
    strength: 20,
};

var yoda = {
    health: 180,
    strength: 25,
};
var heroArray = [kylo, maul, obi, yoda];
var enemyArray = [kylo, maul, obi, yoda];
var currentHero;
var currentEnemy;
var isHero = false;
var isEnemy = false;
var count = 0;

function heroSelect (selected) {
    $(selected).appendTo( $("#your-character"));
    console.log("you clicked " + selected);
    $("#at-start").appendTo( $("#enemies"));
}

function enemySelect (selected) {
    $(selected).prependTo( $("#defender"));
    console.log("defender is " + selected);
    $(selected).addClass("defender");
}

function reset() {
    currentHero;
    currentEnemy;
    isHero = false;
    isEnemy = false;
    count = 0;
    kylo.health = 110;
    kylo.strength = 5;
    maul.health = 125;
    maul.strength = 10;
    obi.health = 150;
    obi.strength = 20;
    yoda.health = 180;
    yoda.strength = 25;
}

$("#kylo-health").html(kylo.health);
$("#maul-health").html(maul.health);
$("#obi-health").html(obi.health);
$("#yoda-health").html(yoda.health);

// make if statements where if clicked at start, chooses your character and moves the rest to enemies

// $("#kylo-box").on("click", heroSelect("#kylo-box"));

$("#kylo-box").on("click", function(){
    if (isHero === false) {
    heroSelect("#kylo-box");
    isHero = true;
    currentHero = heroArray[0];
    } else if (isEnemy === false) {
        enemySelect("#kylo-box");
        isEnemy = true;
        currentEnemy = enemyArray[0];
    } else (alert("there's already an enemy selected!"));

});

$("#maul-box").on("click", function(){
    if (isHero === false) {
        heroSelect("#maul-box");
        isHero = true;
        currentHero = heroArray[1];
        } else if (isEnemy === false) {
            enemySelect("#maul-box");
            isEnemy = true;
            currentEnemy = enemyArray[1];
        } else (alert("there's already an enemy selected!"));
});

$("#obi-box").on("click", function(){
    if (isHero === false) {
        heroSelect("#obi-box");
        isHero = true;
        currentHero = heroArray[2];
        } else if (isEnemy === false) {
            enemySelect("#obi-box");
            isEnemy = true;
            currentEnemy = enemyArray[2];
        } else (alert("there's already an enemy selected!"));
});

$("#yoda-box").on("click", function(){
    if (isHero === false) {
        heroSelect("#yoda-box");
        isHero = true;
        currentHero = heroArray[3];
        console.log(currentHero);
        } else if (isEnemy === false) {
            enemySelect("#yoda-box");
            isEnemy = true;
            currentEnemy = enemyArray[3];
            console.log(currentEnemy.health);
        } else {alert("there's already an enemy selected!")};
});

// make an attack function and attach it to the onclick listener for the button
function attack(currentEnemy, currentHero) {
    if(currentEnemy.health > 0) {
    currentEnemy.health -= currentHero.strength;
    console.log("health: " + currentEnemy.health);
    currentHero.strength += 8;
    console.log("strength: " + currentHero.strength);
    } else {
        $("#defender").empty();
        isEnemy = false;
        count++;
        console.log(count);
        if (count === 3) {
            $("#messages").html("<h2>You Win!! Grab a Wookie, and Celebrate!</h2>");
            $("#reset").html("<button id='reset-button'>Reset</button")
        }
    } 
}


$("#attack-button").on("click", attack);
$("#reset-button").on("click", reset);
