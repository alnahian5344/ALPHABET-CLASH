function getAlphabet(){
    const alphabet=getRandomAlphabet();
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    setBackgroundColor(alphabet);
    
}

function play(){
  hideElementById('home-screen') ;
  showElementById('play-ground') ;
  getAlphabet();

  
}