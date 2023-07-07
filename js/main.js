import observerScrollAnimated from './animateScriptGallery.js';

// Animation run
observerScrollAnimated();

// Validate letters only for form inputs


function openModalOfUbication () {

  const btnOpenModal = document.querySelector('#btnOpenModal'),
    modal = document.querySelector('#map-modal'),
    closeModal = document.querySelector('.modal__icon-close');

  btnOpenModal.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('modal--show');
  });

  closeModal.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('modal--show');
  });

}

function countDown () {
  const $days = document.querySelector('#days'),
    $hours = document.querySelector('#hours'),
    $minutes = document.querySelector('#minutes'),
    $seconds = document.querySelector('#seconds');

  // Date to special day
  const countDownDate = new Date('Jul 20, 2023 15:00:00').getTime();

  let interval = setInterval(function () {
    // get date now
    const now = new Date().getTime();

    let distance = countDownDate - now,
      days = Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
      seconds = Math.floor(distance % (1000 * 60) / (1000));

    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    // 
    if (distance < 0) {
      clearInterval(interval);
    }
  }, 1000);


}

function sendFormData () {

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbzJnaCSOzJZvG1n57-fe8XNJO9rYbng7Lwbs6lOmFvOcmiDKHLvCSG5WGcrAvChwpbslw/exec';
  const form = document.forms['assistance-form'];

  form.addEventListener('submit', e => {
    e.preventDefault();
    let data = new FormData(form);
    fetch(scriptUrl,
      {
        method: "POST",
        body: data
      })
      .then(res => res.text())
      .then(data => formModalAlert(data))
      .catch(err => console.log(data, err));
  });
}

function formModalAlert (info) {

  const modal = document.querySelector('#alert-modal'),
    closeModal = document.querySelector('.modal__icon-close'),
    messageModal = document.querySelector('#message-modal');

  modal.classList.add('modal--show');
  // messageModal.textContent = '¡Tu información fue enviada exitosamente! 😊';

  setTimeout(function () {
    modal.classList.remove('modal--show');
  }, 2500);

  if (info === 'Success') {
    messageModal.textContent = '¡Tu información fue enviada exitosamente! 😊';
  } else {
    messageModal.textContent = 'Ocurrió un error al enviar la información.';
  }


  closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
  });

}

function validateFormInputs () {

  let data = new FormData(document.forms['assistance-form']);
  data.forEach((e) => {
    if (!data[e] === '') {
      formModalAlert('none');
    } else {
      // sendFormData();
    }
  });

}

function seeBankDetails () {
  const btnAccountData = document.querySelector('#btn-gifts'),
    containerText = document.querySelector('.event-anypart__text--hidden');

  btnAccountData.addEventListener('click', () => {
    containerText.style.opacity = 1;
    btnAccountData.setAttribute('disabled', 'true');
  });
}


sendFormData();

seeBankDetails();

openModalOfUbication();
window.onload = (e) => {
  // console.log('Load of page: ' + e.timeStamp);
};

// Countdown
countDown();

validateFormInputs();