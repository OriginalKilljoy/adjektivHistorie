//MODEL - her skal alle variablene

//Gir en startverdi på tomrom i historien
let beginningPhrase = '_____';

//Bytter ut tomrommet med ordet vi velger ved å trykke på knappene
let chosenAdjective = [beginningPhrase, beginningPhrase, beginningPhrase, beginningPhrase, beginningPhrase]

let currentAdjective = '';


//VIEW - Det grafiske vi viser frem

//Viser nettsiden fra start med muligheter for endring pga funksjon med paramet i knappene, og referanser til variabelen chosenAdjective
updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Det var en gang en ${chosenAdjective[0]} katt som gikk en ${chosenAdjective[1]} tur.<br> 
        På turen møtte katten en ${chosenAdjective[2]} kanin som sa:<br>
        "Hei du, du så veldig ${chosenAdjective[3]} ut i dag!"<br>
        "Jasså?" svarte katten, og gjorde seg så ${chosenAdjective[4]} som bare mulig.</div>
    <button onclick="placeAdjective(this)">søt</button>
    <button onclick="placeAdjective(this)">ekkel</button>
    <button onclick="placeAdjective(this)">susete</button>
    <button onclick="placeAdjective(this)">illeluktende</button>
    <button onclick="placeAdjective(this)">snill</button>
    <button onclick="placeAdjective(this)">rar</button>
    <button onclick="placeAdjective(this)">morsom</button>
    <button onclick="placeAdjective(this)">spirituell</button>
    
    `
}

//CONTROLLER - Funksjonene som oppdaterer det som skjer på siden

//En funksjon for å hente ut og lagre adjektivene.
function placeAdjective(word){
    chosenAdjective = word.innerHTML
    updateView()
}



//NY


//MODEL - her skal alle variablene
let adjective = '_';

//VIEW - Det grafiske vi viser frem
updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Det var en gang en ${adjective} katt som gikk en ${adjective} tur.<br> 
        På turen møtte katten en ${adjective} kanin som sa:<br>
        "Hei du, du så veldig ${adjective} ut i dag!"<br>
        "Jasså?" svarte katten, og gjorde seg så ${adjective} som bare mulig.</div>
    <button onclick="placeAdjective(this)">søt</button>
    <button onclick="placeAdjective(this)">ekkel</button>
    <button onclick="placeAdjective(this)">susete</button>
    <button onclick="placeAdjective(this)">illeluktende</button>
    <button onclick="placeAdjective(this)">snill</button>
    <button onclick="placeAdjective(this)">rar</button>
    <button onclick="placeAdjective(this)">morsom</button>
    <button onclick="placeAdjective(this)">spirituell</button>
    
    `
}

//CONTROLLER - Funksjonene som oppdaterer det som skjer på siden

//En funksjon for å hente ut og lagre adjektivene.
function placeAdjective(word){
    adjective = word.innerHTML
    updateView()
}