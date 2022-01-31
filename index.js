function createParagraph(){
    var word1 = document.getElementById('word1').value;
    var word2 = document.getElementById('word2').value;
    var word3 = document.getElementById('word3').value;
    var word4 = document.getElementById('word4').value;
    var word5 = document.getElementById('word5').value;
    var word6 = document.getElementById('word6').value;
    var word7 = document.getElementById('word7').value;
    var word8 = document.getElementById('word8').value;
    var paragraph = 'To start the game we need 5 ' + word2 +'. Each ' + word1 + '  will need to ' + word3 +', when they have ' + word4 + ' to each objective they will earn ' + word7 +'. The other team can use their ' + word5 + ' to get them out. This game requires everyone to run ' + word6 + ' and ' + word8 +'.'
    document.getElementById('answer').innerHTML = paragraph;
}