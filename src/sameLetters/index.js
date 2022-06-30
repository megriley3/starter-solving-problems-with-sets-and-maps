/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    const results = new Map();
    words.forEach((word) => {
        word = word.toLowerCase();
        const noDupes = new Set(word);
        let letters = [...noDupes];
        letters.sort();
        const letString = letters.join("");
        if(results.has(letString)){
            results.get(letString).push(word)
        } else {
            results.set(letString, [word])
        }
    })
    return results
}

module.exports = sameLetters;
