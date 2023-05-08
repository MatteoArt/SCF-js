var sceltaCPU = document.querySelector(".scelta-cpu");

var scelteUtente = document.querySelectorAll(".scelta");

var messaggio = document.querySelector(".messaggio");

var nuovaPartita = document.querySelector(".gioca-di-nuovo");

scelteUtente.forEach((scelta) => {
    scelta.addEventListener("click", giocataCPU); //al click viene richiamata la funzione giocataCPU
});
nuovaPartita.addEventListener("click", giocaDiNuovo);

function giocataCPU(evento) {  //dall'evento intercettiamo la scelta dell'utente
    const sceltaUtente = evento.target.dataset.scelta;//carta, forbice o sasso
    
    const sceltePossibili = ["carta","forbice","sasso"];

    const mossaCPU = sceltePossibili[generaNumeroRandomico(0, sceltePossibili.length-1)];

    //console.log(sceltaCPU);

    switch (mossaCPU) {
        case "carta":
            sceltaCPU.innerText = "🤚";
            break;
        case "forbice":
            sceltaCPU.innerText = "✌️";
            break;
        case "sasso":
            sceltaCPU.innerText = "✊";
            break;
    }

    determinaVittoria(sceltaUtente, mossaCPU);
    mostraBottone();

    scelteUtente.forEach((scelta) => {
        scelta.disabled = "disabled";
    })
}

function generaNumeroRandomico(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function determinaVittoria(mossaUtente, mossaCPU) {
    if ((mossaUtente === "carta" && mossaCPU === "sasso") || (mossaUtente === "forbice" 
    && mossaCPU === "carta") || (mossaUtente === "sasso" && mossaCPU === "forbice") ) {
        messaggio.innerText = "Hai vinto! 🥳";
    } else if ((mossaUtente === "sasso" && mossaCPU === "carta") || (mossaUtente === "carta" 
    && mossaCPU === "forbice") || (mossaUtente === "forbice" && mossaCPU === "sasso") ) {
        messaggio.innerText = "Ha vinto il computer";
    } else {
        messaggio.innerText = "Pareggio";
    }
}

function giocaDiNuovo() {
    sceltaCPU.innerText = "";
    messaggio.innerText = "";
    nuovaPartita.style.display = "none";
    scelteUtente.forEach((scelta) => {
        scelta.removeAttribute("disabled");
    })
}

function mostraBottone() {
    nuovaPartita.style.display = "block";
}