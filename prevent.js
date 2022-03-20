let radios = document.querySelectorAll('input[type=radio]');
const btnWeiter = document.getElementById('btn-weiter-req');
const aWeiter = document.getElementById('aWeiter');

document.addEventListener('click', () => {
for (let i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
    btnWeiter.removeAttribute('disabled');
  }
}
});