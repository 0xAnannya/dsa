const input = ["a"];

const longestCommonPrefix = (input = []) => {
  let commonPrefix = "";
  if (input.length === 0) return "";
  if (input.includes("")) return "";

  input.sort((a, b) => a.length - b.length);

  let shortestWord = input[0];
  for (let i = 0; i < shortestWord.length; i++) {
    console.log(i);
    for (let j = 0; j < input.length; j++) {
      let word = input[j];
      console.log(word);
      if (shortestWord[i] != word[i]) {
        return commonPrefix;
      }
    }

    commonPrefix += shortestWord[i];
  }
  return commonPrefix;
};

const result = longestCommonPrefix(input);
console.log(result);
