const phrases = ['4x de R$ 17,48* sem juros no cartão Renner',
 '12x de R$ 325,12 sem juros',
  '1x de R$ 1850,00* sem juros']
let phraseArray = [];
for (let i=0; i < phrases.length; i++) {
    phraseArray.push(phrases[i].split(/(?= sem)/));
}
console.log(phraseArray)
