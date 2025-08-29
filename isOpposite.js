//Given two strings s and t, return true if t is an opposite of s, and false otherwise.
const s = "vay101";
const t = "101yav";

const isOpposite = (s, t) => {
  if (s.length != t.length) {
    return false;
  }

  for (let i = 0, j = s.length - 1; i < s.length, j >= 0; i++, j--) {
    if (s[i] !== t[j]) {
      return false;
    }
  }
  return true;
};

const output = isOpposite(s, t);
console.log(output);
