let word = document.getElementById('evaluatedText');
word.addEventListener('keyup', (e) => {
        let words=e.target.value.match(/\w+/g);
        try{
            words=words.length;
            document.getElementById('wordCount').innerText=words;
        }catch(err){
            document.getElementById('wordCount').innerText=0;
        }
        
       
        
});
