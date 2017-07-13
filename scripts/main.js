/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// ------- 1) Create your deck -------------

//   let hand = [];
//
//   let val = ['2 of ', '3 of ', '4 of ', '5 of ', '6 of ', '7 of ', '8 of ', '9 of ', '10 of ', 'Jack of ', 'Queen of ', 'King of ', 'Ace of ']
//   let suit = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
//
//   for (let i = 0; i < val.length; i++) {
//     for (let j = 0; i < suit.length; i++) {
//       hand.push ([val[j], suit[i]]);
//     }
//   }
//
//   console.log (hand);
// }

// ************* didn't quite work, (val, suit) would create four of
// each number but only the number 2 & (suit, val) will create suits
// of each number but return 'undefined' a bunch of times afterwards

function handValue (hand) {
  let inHand = 0;

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "K" || hand[i] ===  "Q" || hand[i] === "J") {
      inHand += 10;
    } else if (hand[i] != "A" ){
      inHand += hand[i];
    } else {
      aceFunction();

      function aceFunction() {
        if(inHand <= 7) {
          inHand += 11;
        } else if (inHand <= 8) {
          inHand += 1;
        } else if (inHand <= 10) {
          inHand += 11;
          } else {
          inHand += 1;
          }
        }
      }
    }
    console.log('in hand at the end', inHand);
    return inHand;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
