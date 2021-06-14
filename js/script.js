/* 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti.
4. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


// punto 1
var studente= {
    nome: 'Piero',
    cognome:'Onorati',
    eta: 28
};


// punto 2
for (var k in studente){
    document.getElementById('studente').innerHTML += studente[k] + '<br>';
}


// punto 3
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

// console.log(classe);

// for (var i = 0; i < classe.length; i++) {
//     for (var k in classe[i]) {
//         document.getElementById('classe').innerHTML += classe[i][k] + '<br>';
//     }
// }


// punto 4
for (var i = 0; i < classe.length; i++) {
    document.getElementById('nomicognomi').innerHTML += classe[i].nome + ' ' + classe[i].cognome + '<br>' ;
}


// punto 5
var nuovoNome = capitalize(prompt('Inserisci il nome'));
var nuovoCognome = capitalize(prompt('Inserisci il cognome'));
var nuovaEta = parseInt(prompt('Inserisci l\'età'));

var nuovoStudente = {
    nome: nuovoNome,
    cognome: nuovoCognome,
    eta: nuovaEta
}

classe.push(nuovoStudente)

console.log(classe);


// FUNZIONI

function capitalize(string) {

    var capString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    return capString;
    
}
