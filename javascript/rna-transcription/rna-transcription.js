// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`
class DnaTranscriber {
  toRna(str) {
    return str.split('').map(char => {
      switch (char) {
        case 'G':
          return 'C';
        case 'C':
          return 'G';
        case 'T':
          return 'A';
        case 'A':
          return 'U';
        default:
          throw Error('Invalid input')
      } 
    }).join('');
  }
}

module.exports = DnaTranscriber;