/* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* */
//Inizio del programma
/*
// MILESTONE 1: Implementazione estetica
1. Chiedi all'utente di inserire il numero di chilometri da percorrere.
2. Chiedi all'utente di inserire l'età del passaggero.
3. Calcoliamo il prezzo del biglietto.
4. Se l'età è inferiore o uguale a 18, appliciamo uno sconto del 20% al prezzo.
5. Se l'età è superiore o uguale a 65, applica uno sconto del 40% al prezzo.
6. Stampa il prezzo finale formattato con massimo due decimali.
*/

/*
//MILESTONE 2: Implementazione con form in pagina
7. Creiamo un forma HTML con due campi di input (chilometri e età) e un pulsante 'Calcola.'
8. Creiamo un elemento in pagina per visualizzare il risulatato.
9. Aggiungiamo un evento al pulsante 'Calcola' per eseguire il calcolo quando viene premuto.
10. Mostriamo il risultato in una parte dedicata della pagina, formattando il prezzo con massimo due decimali.
11. Mostriamo anche un recap dei dati inseriti dall'utente.
//Fine del programma
*/
/* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* *//* */

// Seleziona gli elementi del DOM
const btnGenera = document.querySelector('.generate');
const btnAnnulla = document.querySelector('.cancel');
const ticket = document.querySelector('.ticket');
const nameSurnameInput = document.getElementById('name-surname');
const kmInput = document.getElementById('km');
const ageInput = document.getElementById('age');
const adultOption = document.querySelector('.adult');
const underageOption = document.querySelector('.underage');
const over65Option = document.querySelector('.over-65');
const finalPriceElement = document.querySelector('.finalPrice');
const tipodibigliettoElement = document.querySelector('.tipo-di-biglietto');
const nomepasseggeroeElement = document.querySelector('.nome-passeggero');
const carrozzaElement = document.querySelector('.carrozza');

// Aggiungi un gestore di eventi al clic sul pulsante 'Genera'
btnGenera.addEventListener('click', function() {
    //Ottieni i valori dai campi di input
    const nameSurname = nameSurnameInput.value;
    const km = kmInput.value;
    const age = ageInput.value;

    
})