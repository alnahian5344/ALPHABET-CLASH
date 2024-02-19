
function hideElementById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
    // const elementShow=document
}

function showElementById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
    // const elementShow=document
}


function setBackgroundColor(elementID) {
    const setColor = document.getElementById(elementID);
    setColor.classList.add('bg-orange-400');
}

function getRandomAlphabet() {
    const randomText = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = randomText.split('');
    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
    const alphabet = alphabets[index];
    // console.log(index);
    // console.log(alphabet);
    return alphabet;
}

