/**
 * Created by elle on 11/29/15.
 */

;(function() {

  function lexicographicSorting (arrayOfStrings, alphabet) {

    function comparator(firstStr, secondStr) {
      // get the length of longest string
      const maxStrLength = Math.max(firstStr.length, secondStr.length);

      // loop through characters
      for (var charIndex = 0; charIndex < maxStrLength; charIndex++) {
        var firstChar, secondChar, firstCharPos, secondCharPos;

        firstChar = firstStr[charIndex];
        secondChar = secondStr[charIndex];

        // if characters in compared strings equal --> continue for next
        if (firstChar === secondChar) {
          continue;
        }

        // get index of characters in given alphabet for both strings
        firstCharPos = alphabet.indexOf(firstChar);
        secondCharPos = alphabet.indexOf(secondChar);


        if (firstCharPos === -1) {
          // if first string is finished don't swap
          return -1
        }
        if (secondCharPos === -1) {
          // if second string is finished swap them
          return 1
        }

        // is character in first string has bigger index than in second string --> swap them
        // otherwise don't swap
        return firstCharPos > secondCharPos ? 1 : -1
      }
    }

    return  arrayOfStrings.sort(comparator);

  }

  console.log('Example 1 ["acb", "abc", "bca"], "abc": ',
    lexicographicSorting( ["acb", "abc", "bca"], "abc").join(','));

  console.log('Example 2 ["acb", "abc", "bca"], "cba": ',
    lexicographicSorting( ["acb", "abc", "bca"], "cba").join(','));

  console.log('Example 3: ["aaa","aa",""], "a": ',
    lexicographicSorting( ["aaa","aa",""], "a").join(','));

}());
