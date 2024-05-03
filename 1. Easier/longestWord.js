function findLongestWord(str) {
    str = str.split(" ");
    return str.sort((a,b) => b.length - a.length)[0]
  }
  
  console.log(findLongestWord('This is a sample sentence'));