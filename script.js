var trajVar = document.querySelector( '.trajVar' );
var ressourceVar = document.querySelector( '.ressourcejVar' );
var protecteurVar = document.querySelector( '.protecteurVar' );
var rareVar = document.querySelector( '.rareVar' );
let inputRessourceName = document.querySelector('#ressourceNameInput')
let ressourceNameDOM = document.querySelector('#ressourceName')
let inputRareName = document.querySelector('#rareNameInput')
let rareNameDOM = document.querySelector('#rareName')


var trajCounter = 0;
var ressourceCounter = 0;
var protecteurCounter = 0;
var rareCounter = 0;

var ressourceName = 'Frostiz';
var rareName = 'Frostiz Soufflé';



var addTraj = function(){
    trajCounter++;
    render();
}

var remTraj = function(){
    if(trajCounter >=1 ){
    trajCounter--;
    render();
    }
}


// RESSOURCES //
var addRessource = function(){
    ressourceCounter++;
    render();
}

var remRessource = function(){
    if(ressourceCounter >=1){
    ressourceCounter--;
    render();
    }
}


// PROTECTEUR //
var addProtecteur = function(){
    protecteurCounter++;
    ressourceCounter = ressourceCounter + 50;
    render();
}

var remProtecteur = function(){
    if(protecteurCounter >=1 ){
    protecteurCounter--;
    ressourceCounter = ressourceCounter - 50;
    render();
    }
}

// RARE //
var addRare = function(){
    rareCounter++;
    render();
}

var remRare = function(){

if(rareCounter >=1 ){
    rareCounter--;
    render();
    }
}

//NAME //
var updateRessourceName = function(){
    ressourceName = inputRessourceName.value;
    ressourceNameDOM.innerText = inputRessourceName.value;
}
var updateRareName = function(){
    rareName = inputRareName.value;
    rareNameDOM.innerText = inputRareName.value;
}




var render = function(){
    trajVar.innerHTML = trajCounter;
    ressourceVar.innerHTML = ressourceCounter;
    protecteurVar.innerHTML = protecteurCounter;
    rareVar.innerHTML = rareCounter;

}

