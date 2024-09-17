//Oppgave:
//Lag en liten historie med noen manglende or.
//Lag en liste over over som kan klikkes på - og la disse ordene fylle tomrommene i hostorien når de blir valgt.
//Løs oppgaven ved å dele opp koden i MVC.

//Vi trenger:
// - Knapper med adjektiv
// - Variabler for adjektiv
// - En historie med manglende ord
// - Tomrom/plassinger for nye ord
// - Noesom lagrer det valgte ordet i første ledige tomrom, og går videre til neste tomrom - må bruke arrays?

//NOTE - fordi jeg ikke har kommet til arrays i pensum, men ikke skjønner hvordan jeg skal løse oppgaven uten, og det eneste jeg kan om arrays
//er det vi har lært i timen, måtte jeg bruke chatGPT for å forsikre meg om at jeg hadde gjort det riktig ift MVC og en ekstra forklaring
//på hvorfor det funket fordi jeg ikke 100% skjønner hvorfor det funker (selv om jeg er glad for at jeg fikk det til lol)
//chatGPT ga forøvrig eksempler på hvordan gjøre koden bedre ift MVC da det visstnok ikke var fullstendig riktig bruk av MVC,
//men jeg brukte ikke noen av disse da det var mange uttrykk jeg ikke har vært borti før.


//MODEL - her skal alle variablene

//Gir en startverdi på tomrom i historien
// let beginningPhrase = '_____';

//Bytter ut tomrommet med ordet vi velger ved å trykke på knappene
let chosenAdjective = ['_____', '_____', '_____', '_____', '_____']

//Lagrer adjektivet vi velger i første ledige tomrom, og oppdateres til å gå videre til neste tomrom, når denne er fylt.
let currentAdjective = 0;


//VIEW - Det grafiske vi viser frem

//Viser nettsiden fra start med muligheter for endring pga funksjon med parameter i knappene, og referanser til variabelen chosenAdjective
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

//En funksjon for å hente ut adjekrivene som blir valgt og plassere det i første tomrom, deretter gå videre til neste tomrom
function placeAdjective(word){
    if (currentAdjective < chosenAdjective.length){
        chosenAdjective[currentAdjective] = word.innerHTML
        currentAdjective++
    }
    updateView()
}