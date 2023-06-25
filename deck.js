var deckID = "";
var ready = false;
$cards = $('#cardHolder')[0]
$form = $('#cardform')[0]

axios.get('https://deckofcardsapi.com/api/deck/new/')
    .then(deck =>{if (deck.data.success == true){deckID = deck.data.deck_id; return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`)}})
    .then(deck => {if(deck.data.success == true){ready = true}})
    .catch(err =>{console.log(`${err}`)})

$form.addEventListener('submit', function(evt){
    evt.preventDefault();
    if (ready == true){
        axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        .then(card => {
            let cardimage = card.data.cards[0].image;
            let skew = (Math.random()-.5)*40;
            let newimg = $(`<img style="rotate:${skew}deg" class="card" src="${cardimage}">`)[0];
            $cards.append(newimg);
        })
        .catch(err=>{console.log(`${err}`)})
    }
})