var kylo = {
    name: "kylo",
    health: 110,
    strength: 10,
    counterStrike: 25, 
};

var maul = {
    name: "maul",
    health: 125,
    strength: 15,
    counterStrike: 20,
};

var obi = {
    name: "obi",
    health: 150,
    strength: 20,
    counterStrike: 15,
};

var yoda = {
    name: "yoda",
    health: 180,
    strength: 25,
    counterStrike: 10,
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
    showHealth();
    $("#kylo-box").appendTo( $("#at-start"));
    $("#maul-box").appendTo( $("#at-start"));
    $("#obi-box").appendTo( $("#at-start"));
    $("#yoda-box").appendTo( $("#at-start"));
}

function showHealth() {
$("#kylo-health").html(kylo.health);
$("#maul-health").html(maul.health);
$("#obi-health").html(obi.health);
$("#yoda-health").html(yoda.health);
}

showHealth();

function counterAttack(currentEnemy, currentHero) {
    currentHero.health -= currentEnemy.counterStrike;
    if (currentHero.health <= 0) {
        $("#" + currentHero.name + "-box").detach();
        $("#messages").html("<h2>The Force is Weak in This one! You Lost The Game!</h2>");
            $("#reset").html("<button>Reset</button").children().attr("id","reset-button");
            $("#reset-button").on("click", function(){
                location.reload();
                reset();
                console.log("reset button clicked");
                
                
            });         
    }

}

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
    if (currentEnemy.health > 0) {
    currentEnemy.health -= currentHero.strength;
    console.log("health: " + currentEnemy.health);
    currentHero.strength += currentHero.strength;
    console.log("strength: " + currentHero.strength);
    counterAttack(currentEnemy, currentHero);
    showHealth();
    if (currentEnemy.health <= 0) {
        $("#defender").empty();
        isEnemy = false;
        count++;
        console.log(count);
        if (count === 3) {
            $("#messages").html("<h2>You Win!! Grab a Wookie, and Celebrate!</h2>");
            $("#reset").html("<button>Reset</button").children().attr("id","reset-button");
            $("#reset-button").on("click", function(){
                location.reload();
                reset();
                console.log("reset button clicked");
            });         

            }
        } 
    } 
}


$("#attack-button").on("click", function(){
    if(isEnemy === true) {
    attack(currentEnemy, currentHero);
    } else {
        alert("You need to pick an emeny to attack!")
    }
});

