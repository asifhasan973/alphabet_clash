function removeScreen(id) {
  document.getElementById(id).classList.add('hidden');
}
function showScreen(id) {
  document.getElementById(id).classList.remove('hidden');
}
function changeAlpha() {
  let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let alphabets = alph.split('');

  let rnd = Math.round(Math.random() * 25);

  document.getElementById('text-alp').innerText = alphabets[rnd];
}
function showScoreFinal() {
  document.getElementById('score-final').innerText =
    document.getElementById('score').innerText;
}
