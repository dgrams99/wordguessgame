window.onload = function(){

    var wins = 0;
    var losses = 0;
    var maxErrors = 9;
    var word ;
    var guess ;
    var guesses ;
    var counter ;
    var space;
    var categories;
    var chosenCategory;
    
    
    
    
    
    
    
    var wordlist = [
        "apple" , "cancel" , "green" , 'on the ranch' , 'thats my dog' , 'cites' , 'the lady is almost 90 years old'
    ]
    this.word = this.wordlist[Math.floor(Math.random() * this.wordlist.length)];
    console.log(word)
    this.guessedLetters = [];
    this.visibleLetters = [];
    
    for ( var i = 0; i < this.word.length; i++){
        this.visibleLetters[i] = true;
    }
    
    
    
    document.addEventListener('keypress' , (event) =>{
        const keyname = event.key;
        console.log('keypress event\n\n' + 'key: ' + keyname );
    
        document.getElementById("hold")
    
    })
    
     }
    