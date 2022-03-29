/* 
ESERCIZIO 1: MAIL

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

const userEmailInput = document.getElementById("email");

const userEmail = userEmailInput.value;

const button = document.getElementById("submit-btn");

const emailList = ["tanjirokamado@gmail.com", "uzumaki_naruto@gmail.com", "monkeydluffy@gmail.com", "erenjager@gmail.com"];

button.addEventListener("click", 

    function() {

        for (let index = 0; index < emailList.length; index++) {

            if (userEmail === emailList[index]) {

                console.log("Hai effettuato l'accesso");

            } else {

                console.log("Mi dispiace ma la tua email non è stata riconosciuta");

            }
        
        }

    }

)













/* 
ESERCIZIO 2: GIOCO DEI DADI

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let user_play_input = document.getElementById("dice-input");
let user_play = Math.floor(Math.random() * 6 + 1);
let computer_play = Math.floor(Math.random() * 6 + 1);
let play_btn = document.getElementById("play");

play_btn.addEventListener("click", 

    function() {
        if (user_play > computer_play) {

            alert(`Hai lanciato il numero ${user_play}. Hai vinto! Il computer ha giocato il numero ${computer_play}.`)

        } else {
            alert(`Mi dispiace hai perso! Il computer ha giocato il numero ${computer_play} ed è più alto. La tua giocata è ${user_play}.`)
        }
    }

)