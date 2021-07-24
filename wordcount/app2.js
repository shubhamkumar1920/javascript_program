let word = document.getElementById('evaluatedText');
word.addEventListener('keyup', (e) => {
        // words=e.target.value.match(/\w+/g);
        // console.log(words);
        let words=e.target.value.length;
        console.log(words);
        document.getElementById('wordCount').innerText=words;
});