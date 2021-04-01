var trajVar = document.querySelector( '.trajVar' );
var ressourceVar = document.querySelector( '.ressourcejVar' );
var protecteurVar = document.querySelector( '.protecteurVar' );


var trajCounter = 0;
var ressourceCounter = 0;
var protecteurCounter = 0;
var rareCounter = 0;



var addTraj = function(){
    trajCounter++;
    render();
}

var remTraj = function(){
    trajCounter--;
    render();
}


// RESSOURCES //
var addRessource = function(){
    ressourceCounter++;
    render();
}

var remRessource = function(){
    ressourceCounter--;
    render();
}



var addProtecteur = function(){
    protecteurCounter++;
    ressourceCounter = ressourceCounter + 50;
    render();
}

var remProtecteur = function(){
    protecteurCounter--;
    ressourceCounter = ressourceCounter - 50;
    render();
}




var render = function(){
    trajVar.innerHTML = trajCounter;
    ressourceVar.innerHTML = ressourceCounter;
    protecteurVar.innerHTML = protecteurCounter;

}

