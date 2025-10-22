
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', "geeks"];


for (let i = 0; i <= pronoun.length - 1; i++) {

  for (let j = 0; j <= 1; j++) {

    for (let h = 0; h <= noun.length-1; h++) {

      console.log(pronoun[i],adj[j],noun[h],".com");

    }
  }
}