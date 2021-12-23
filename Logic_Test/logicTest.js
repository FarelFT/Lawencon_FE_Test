strs = ['kita', 'atik', 'aku', 'kia', 'makan', 'kua'];

var groupAnagrams = function (strs) {
  let groupAnagrams = {};

  for (const str of strs) {
    let count = getUniqueValue(str);
    groupAnagrams[count]
      ? groupAnagrams[count].push(str)
      : (groupAnagrams[count] = [str]);
  }

  return console.log(Object.values(groupAnagrams));
};

function getUniqueValue(word) {
  let output = new Array(26).fill(0);

  for (let i = 0; i < word.length; i++) {
    output[word.charCodeAt(i) - 97] = 1;
  }

  return output.join('');
}

groupAnagrams(strs);
