var kylo = {
    health: 110,
    strength: 5
};

var maul = {
    health: 125,
    strength: 10,
};

var obi = {
    health: 150,
    strength: 20
};

var yoda = {
    health: 180,
    strength: 25,
};

function heroSelect (selected) {
    $(selected).appendTo( $("#your-character"));
    console.log("you clicked " + selected);
    $("#at-start").appendTo( $("#enemies"));
}

function enemySelect (selected) {
    $(selected).appendTo( $("#defender"));
    console.log("defender is " + selected);
    $(selected).addClass("defender");
}

// make an attack function and attach it to the onclick listener for the button
function attack(hero, enemy) {
    enemy.health -= hero.strength;
    console.log("health: " + enemy.health);
    hero.strength += 8;
    console.log("strength: " + hero.strength);
}

$("#attack-button").on("click", attack);

// make if statements where if clicked at start, chooses your character and moves the rest to enemies

// $("#kylo-box").on("click", heroSelect("#kylo-box"));

$("#kylo-box").on("click", function(){
    heroSelect("#kylo-box");
    $("#maul-box").on("click", function(){
        enemySelect("#maul-box")});

});

$("#maul-box").on("click", function(){
    heroSelect("#maul-box");
});

$("#obi-box").on("click", function(){
    heroSelect("#obi-box");
});

$("#yoda-box").on("click", function(){
    heroSelect("#yoda-box");
});
// make border of your character white and border of enemies red

