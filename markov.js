/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    // MORE CODE HERE
    let markovChain = this.makeChains(words)
    this.markovChain = markovChain
    this.words = words
    // console.log(markovChain)
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    // MORE CODE HERE
    //loop over words
    let mChains = {}
    for (let i=0; i < words.length; i++){
      if (words[i+1] === undefined) {
        if (mChains[words[i]] === undefined){
          mChains[words[i]] = [null]
        }
        else {
          mChains[words[i]].push(null)
        }
      }
      else {
        if (mChains[words[i]] === undefined){
          mChains[words[i]] = [words[i+1].toLowerCase()]
        }
        else {
          mChains[words[i]].push(words[i+1].toLowerCase())
        }
      }
    }
    return mChains;
  }

  /** return random text from chains */

  getText(numWords = 100) {
    for (let i =0; i < 100; i++){

    }

    // for (let key in this.markovChain){
    //   let randNum = Math.floor(Math.random()*this.markovChain[key].length)
    //   //for a given key, grab the random number from the key's array
    //   //loop over this until i = 100
    // }
  }
}

let mm = new MarkovMachine('the cat in the cat')

// console.log(mm.markovChain);