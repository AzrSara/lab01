const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log('Huvudmeny. Valj ett alternativ:');
  console.log('0. Figur 1');
  console.log('1. Figur 2');
  console.log('2. Figur 3');
  console.log('3. Figur 4');
  console.log('Q. Avsluta');
}

function question(query) {
  return new Promise((resolve, reject) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  let input = '';
  while (input.toLowerCase() !== 'q') {
    displayMenu();
    input = await question('Valj en siffra for att visa en figur: ');
    const size = 6;

    if (input === '0') {
      for (let i = 1; i <= size; i++) {
        let text = '#';
        for (let j = 2; j <= size + 1; j++) {
          text += ' .';
        }
        console.log(text);
      }
    } else if (input === '1') {
      for (let i = 1; i <= size; i++) {
        let text = '';
        for (let j = 1; j <= size + 1; j++) {
          if (i === j) {
            text += '# ';
          } else {
            text += '. ';
          }
        }
        console.log(text);
      }
    } else if (input === '2') {
      for (let i = 1; i <= size; i++) {
        let text = '';
        for (let j = 1; j <= size + 1; j++) {
          if (j > 2 && j < size) {
            text += '# ';
          } else {
            text += '. ';
          }
        }
        console.log(text);
      }
    } else if (input === '3') {
      for (let i = 1; i <= size; i++) {
        let text = '';
        for (let j = 1; j <= size + 3; j++) {
          if (i === Math.floor(size / 2) + 1) {
            text += '# ';
          } else if (j === Math.floor(size / 2) + 2 || j === Math.floor(size / 2) + 3) {
            text += '# ';
          } else {
            text += '. ';
          }
        }
        console.log(text);
      }
    } else if (input.toLowerCase() !== 'q') {
      console.log('Ogiltigt val. Avslutar programmet.');
      rl.close();
      break;
    }
  }

  rl.close();
}

main();

