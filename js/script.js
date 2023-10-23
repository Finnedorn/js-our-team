/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

BONUS :
Organizzare i singoli membri in card/schede
Aggiungere un nuovo membro al team
*/


//creo un prototipo dall'html di quello che sarà poi il contenuto che andrò a creare tramite js
/*
<div class="col-4">
    <div class="card">
        <img class="card-img-top" src="img/ " alt="photo of ">
        <div class="card-body">
            <h3 class="card-title">nome e cognome</h3>
            <h4 class="card-text">t-lavorativo</h4>
        </div>
    </div> 
</div>
*/

//creo una array coi vari obj dei membri del team
const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg',
    }
];

//richiamo il div dove inserirò le card
const cardContainer = document.querySelector('.row');
console.dir(cardContainer);
//creo una const in cui inserisco il testo da stampare nell'html
let html = '';


//creo un ciclo for che stampi ogni card
for(let i = 0; i < ourTeam.length; i++) {
    //richiamo la funzione e mi stampo per ogni ciclo il div della card in console 
    html += cardMaker(ourTeam[i]);
};

console.log(html);
//stampo nell'html gli elementi div delle card con le info degli obj
cardContainer.innerHTML = html;

//creo una funzione che mi stampi nell'html una card con delle info settate sulle proprietà dei vari obj nell'array
function cardMaker(member) {
    //creo una const con il template della card 
    const card = `
        <div class="col-4">
            <div class="card my-3">
                <img class="card-img-top" src="img/${member.picture} " alt="photo of ${member.name}">
                <div class="card-body text-center">
                    <h3 class="card-title fs-4">${member.name}</h3>
                    <h4 class="card-text fs-5">${member.role}</h4>
                </div>
            </div> 
        </div>    
    `;
    //la const è dichiarata nella funzione quindi devo fare un return per averla fuori 
    return card;
};

//richiamo il pulsante di invio del form 
const btn = document.getElementById('addMember');

//creo una funzione al click del bottone add member
btn.addEventListener('click', function() {
    //creo un obj che peschi i value dai form nell'html
    const newMember = {
        name: document.getElementById('memberName').value,
        role: document.getElementById('memberRole').value,
        picture: document.getElementById('memberPicture').value
    };
    console.log(newMember);
    //pusha tutto nel macro array del team 
    ourTeam.push(newMember);
    //aggiungi nell'html dentro al row delle card il prodotot della funzione 
    cardContainer.innerHTML += newcardMaker(newMember);
    
});


//creo una nuova funzione che aggiunga una card nuova ma stavolta con img non vincolata alla cartella del sistema 
function newcardMaker(member) {
    //creo una const con il template della card 
    let card = `
        <div class="col-4">
            <div class="card my-3">
                <img class="card-img-top" src="${(member.picture.startsWith('http')) ? member.picture : 'img/' + member.picture}" alt="photo of ${member.name}">
                <div class="card-body text-center">
                    <h3 class="card-title fs-4">${member.name}</h3>
                    <h4 class="card-text fs-5">${member.role}</h4>
                </div>
            </div> 
        </div>    
    `;
    console.log(card);
    //la const è dichiarata nella funzione quindi devo fare un return per averla fuori 
    return card;
};








