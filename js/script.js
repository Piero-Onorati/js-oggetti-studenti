/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

var studente= {
    nome: 'Piero',
    cognome:'Onorati',
    eta: 28
};


for (var k in studente){
    document.getElementById('studente').innerHTML += studente[k] + '<br>';
}



var classe = [
    {
        nome:'Marco',
        cognome: 'Rossi',
        eta :22
    },
    {
        nome:'John',
        cognome: 'Doe',
        eta :29
    },
    {
        nome:'Harry',
        cognome: 'Potter',
        eta :25
    },
    {
        nome:'Hermione',
        cognome: 'Granger',
        eta :24
    },
];

classe.push(studente)


console.log(classe);
