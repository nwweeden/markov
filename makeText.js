/** Command-line tool to generate Markov text. */

const { MarkovMachine } = require('./markov.js')
const axios = require('axios')
const FsP = require('fs/promises')

// $ node makeText.js file eggs.txt
// ... generated text from file 'eggs.txt' ...

// $ node makeText.js url http://www.gutenberg.org/files/11/11-0.txt
// ... generated text from that URL ...

async function everything(){
    let contents = ''

    if (process.argv[2] === 'file'){
        contents = await FsP.readFile(process.argv[3], 'utf8') //add ./
    }
    else{
        contents = await axios({url: process.argv[3]})
        contents = contents.data
    }
    // console.log(contents)
    let m = new MarkovMachine(contents)
    console.log(m.getText())
}

everything()