document.getElementById("countButton").onclick = function () {
   // your code will go here ...
   let typedText = document.getElementById("textInput").value;
   // This changes all the letter to lower case.
   typedText = typedText.toLowerCase();
   // This gets rid of all the characters except letters, spaces, and apostrophes.
   typedText = typedText.replace(/[^a-z'\s]+/g, "");
   // do something for each letter.
   const letterCounts = {};
   for (let i = 0; i < typedText.length; i++) {
       currentLetter = typedText[i];
       //initialize the corresponding count to 1. Otherwise, you will add one to the count.
       if (letterCounts[currentLetter] === undefined)
           letterCounts[currentLetter] = 0;
           letterCounts[currentLetter]++;
   }
   for (let letter in letterCounts) {
       const span = document.createElement("span");
       const textContent = document.createTextNode(
           '"' + letter + '": ' + letterCounts[letter] + ", " ,
       );
       span.appendChild(textContent);
       document.getElementById("lettersDiv").appendChild(span);
   }
   const words = typedText.split(" ");
   typedText = words;
   const wordsCounts = {};
   for (let i = 0; i < typedText.length; i++) {
       currentWord = typedText[i];
       if (wordsCounts[currentWord] === undefined) 
       wordsCounts[currentWord] = 0;
       wordsCounts[currentWord]++;
   }
   for (let word in wordsCounts) {
       const span = document.createElement("span");
       const textContent = document.createTextNode(
           '"' + word + '": ' + wordsCounts[word] + ", "
       );
       span.appendChild(textContent);
       document.getElementById("wordsDiv").appendChild(span);
   }
}

