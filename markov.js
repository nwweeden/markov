/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    let markovChain = this.makeChains(words)
    this.markovChain = markovChain
    this.words = words
    // console.log(this.getText())
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
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
    let currentWord = ''
    let text = ''
    let newWord = ''

    for (let i =0; i < numWords; i++){
      if (i === 0){
        currentWord = this.words[0]
        // console.log('@&#^$%#*&^$%#@*&^$%#@$', this.words[0])
        text = currentWord + ' '//Add seed word to text
      }
      //new word
      console.log(this.markovChain)
      console.log('Loop #: ' + i + ', currentWord: ' + currentWord + ' \n' )
       console.log(this.markovChain['project'])
      newWord = this.markovChain[currentWord][Math.floor(Math.random()*this.markovChain[currentWord].length)]
      while (newWord === null){
        newWord = this.markovChain[currentWord][Math.floor(Math.random()*this.markovChain[currentWord].length)]
      }
      text += newWord + ' '
      currentWord = newWord
    }
    console.log(text)
  }
}

module.exports = {
  MarkovMachine: MarkovMachine
}