let radios = document.querySelectorAll('input[type=radio]');
let aWeiter = document.getElementById('aWeiter');

document.addEventListener('click', () => {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      aWeiter.innerHTML = 'Weiter';
    }
  }
});
