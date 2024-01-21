function ecrire(value) {
    document.getElementById('screen').value += value;
  }
  function ecrire_sign(value) {
    let screenVal = document.getElementById('screen').value;

    if (screenVal !== '' ) {
        document.getElementById('screen').value += value;
    }
}
function change_sign(){
    document.getElementById('screen').value= -document.getElementById('screen').value;
}
function calcul() {
    try {
      document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch (error) {
      document.getElementById('screen').value = error;
    }
}
function inverser(){
    document.getElementById('screen').value = 1/document.getElementById('screen').value; 
}
function square(){
    if ( document.getElementById('screen').value !== '' && !isNaN( document.getElementById('screen').value)) {
        document.getElementById('screen').value =parseFloat(document.getElementById('screen').value)**2;
    }
}
function racine(){
    if ( document.getElementById('screen').value !== '' && !isNaN( document.getElementById('screen').value)) {
        document.getElementById('screen').value =Math.sqrt(parseFloat(document.getElementById('screen').value));
    }
}
function clear(){
    document.getElementById('screen').value = '';
}
document.getElementById('clearButton').addEventListener('click', clear);
document.getElementById('clearButtonC').addEventListener('click', clear);
function back(){
    document.getElementById('screen').value = document.getElementById('screen').value.slice(0,-1);
}
