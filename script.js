document.getElementById('play-first-btn').addEventListener('click', () => {
  removeScreen('first');
  showScreen('second');
});
document.getElementById('play-third-btn').addEventListener('click', () => {
  removeScreen('third');
  showScreen('second');
  document.getElementById('score-final').innerText = 0;
  document.getElementById('life').innerText = 3;
  document.getElementById('score').innerText = 0;
});

// random alphabet generate
changeAlpha();
// done

// kbd
document.getElementById('kbd').addEventListener('click', (event) => {
  if (
    event.target.innerText === document.getElementById('text-alp').innerText
  ) {
    changeAlpha();
    let scr = parseInt(document.getElementById('score').innerText);
    scr++;
    document.getElementById('score').innerText = scr;
  } else {
    let lfe = parseInt(document.getElementById('life').innerText);
    lfe--;
    if (lfe === 0) {
      removeScreen('second');
      showScreen('third');
      showScoreFinal();
    }
    document.getElementById('life').innerText = lfe;

    changeAlpha();
  }
});
