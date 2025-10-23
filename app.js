
let pronouns = ['the', 'our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger', 'racoon', "geeks"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjs.length; j++) {
    for (let h = 0; h < nouns.length; h++) {
      console.log(pronouns[i]+adjs[j]+nouns[h]+".com");
    }
  }
}