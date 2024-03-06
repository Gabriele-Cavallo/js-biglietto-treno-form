// TASK -Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

//STRUCTURE:

// 1-Implementare due campi input e un bottone nell'HTMTL
// 2-Leggo tramite JS il valore inserito dall'utente nei campi input
    const userKm = parseInt (document.querySelector('#user-km').value);
    const userAge = parseInt (document.querySelector('#user-age').value);
    console.log(userKm);
    console.log(userAge);
// 3-Calcolo il prezzo del biglietto in base ai dati letti e calcolo eventuali sconti da applicare
    // 3-a -Calcolo del biglietto a prezzo pieno
    let userPriceKm = userKm * 0.21;
    userPriceKm = userPriceKm.toFixed(2);
    // 3-b -Calcolo del biglietto a prezzo scontato del 20%
    let discount20 = userPriceKm * 20 / 100;
    if (userAge < 18){
        userPriceKm = userPriceKm - discount20;
        userPriceKm = userPriceKm.toFixed(2);
    }
    // 3-c -Calcolo del biglietto a prezzo scontato del 40%
    let discount40 = userPriceKm * 40 / 100;
    if (userAge > 65){
        userPriceKm = userPriceKm - discount40;
        userPriceKm = userPriceKm.toFixed(2);
    }
    // 3-d stampa messagio in console log del prezzo in base ai dati forniti
    let userMessage = `Il prezzo del tuo biglietto è di ${userPriceKm}€`;
    console.log('userMessage' , userMessage);
