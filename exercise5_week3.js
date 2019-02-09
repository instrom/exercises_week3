// Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
//  Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, 
// dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, 
// tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.

function palindrome(kata) {
    for (i=0; i < kata.length; i++) {
        var tampung ="";
        for (j = kata.length - 1; j >= 0; j--) {
            if (kata[i] === kata[j]) {
                return true
            } else {
                return false
            }
        }
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false