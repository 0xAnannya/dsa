//Given two strings s and t, return true if t is an anagram (An anagram is a word or phrase formed by rearranging the letters of a
// different word or phrase, using all the original letters exactly once)     of s, and false otherwise.
const s = "rat",
  t = "car";

const isAnagram = (s, t) => {
  if (s.length != t.length) {
    return false;
  }
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!dict[char]) {
      dict[char] = 1;
    } else {
      dict[char] += 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    let char = t[j];
    if (!dict[char]) {
      return false;
    } else {
      dict[char] -= 1;
    }
  }

  const values = Object.values(dict);
  for (let i = 0; i < values.length; i++) {
    if (values[i] != 0) {
      return false;
    }
  }
  return true;
};

const output = isAnagram(s, t);
console.log(output);
