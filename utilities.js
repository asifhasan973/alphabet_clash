function removeScreen(id) {
  document.getElementById(id).classList.add('hidden');
}
function showScreen(id) {
  document.getElementById(id).classList.remove('hidden');
}
function orangeColor(id) {
  document.getElementById(id).classList.add('bg-orange-400');
}
function removeOrange(id) {
  document.getElementById(id).classList.remove('bg-orange-400');
  //   console.log(id);
}
function changeAlpha() {
  let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let alphabets = alph.split('');

  let rnd = Math.round(Math.random() * 25);

  document.getElementById('text-alp').innerText = alphabets[rnd];
  orangeColor(document.getElementById('text-alp').innerText.toLowerCase());
}
function showScoreFinal() {
  document.getElementById('score-final').innerText =
    document.getElementById('score').innerText;
}
