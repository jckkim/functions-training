// TODO: add your solutions here!

/* 1 */
function combineWords(word1, word2) {
    var result = word1+word2;
    return result;

}

var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'

/* 2 */
function repeatPhrase(phrase, n) {

   for (var i = 0; i < n; i++) {
    console.log(phrase);
        }
}

repeatPhrase("Hello", 5);
