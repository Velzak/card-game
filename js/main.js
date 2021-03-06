//get the deck
let deckId = ''
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    deckId = data.deck_id
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("button").addEventListener("click", getCards);

function getCards() {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let val1 = cardValue(data.cards[0].value)
      let val2 = cardValue(data.cards[1].value)
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image
  
      

    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

}

function cardValue(val){
  switch (val) {
    case 'ACE':
      return 14
      break;
    case 'KING':
      return 13
      break;
    case 'QUEEN':
      return 12
      break;
    case 'JACK':
      return 11
    default:
      break;
  }
  if (val === 'ACE'){
    return 14
  } else if (val === 'KING') {
    return 13
  } else if (val === 'QUEEN') {
    return 12
  } else if (val === 'JACK'){
    return 11
  }
}
