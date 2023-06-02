const shukay = document.getElementById('myButton');
var input = document.getElementById('myInput');
var resultDiv = document.getElementById('result');
var war = document.getElementById('war');
const radio1 = document.getElementById('tab-1');
const radio2 = document.getElementById('tab-2');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const save = document.getElementById('save');
const components = document.querySelector('.components');
const chip = document.querySelector('.chip');
var chipText = document.querySelector('.chip__text');
var xhr = new XMLHttpRequest();
const offline = document.querySelector('.offline');
const upload = document.querySelector('.upload');
const allert = document.querySelector('.alert');
var chipDiv = document.getElementById("message");
var wordUA = input1.value;
var wordENG = input2.value;
var definitionUA = input3.value;
var definitionENG = input4.value;
var data = {
  'word on UA': wordUA,
  'word on ENG': wordENG,
  'definition on UA': definitionUA,
  'definition on ENG': definitionENG
};
var jsonData = JSON.stringify(data);

shukay.addEventListener('click', function() {
  var inputValue = input.value;

  // Отправляем AJAX-запрос на сервер
  xhr.open('GET', 'db.php?keyword=' + encodeURIComponent(inputValue), true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Получаем ответ от сервера и выводим результат на страницу
      resultDiv.innerHTML = xhr.responseText; 
    }
  };

  xhr.send();

  resultDiv.style.display = 'block'; // Отображаем блок с информацией
});

input1.addEventListener(`click`, function(){
  chipDiv.style.display = "none";
})
input2.addEventListener(`click`, function(){
  chipDiv.style.display = "none";
})
input3.addEventListener(`click`, function(){
  chipDiv.style.display = "none";
})
input4.addEventListener(`click`, function(){
  chipDiv.style.display = "none";
})

save.addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  if (input1.value === "" || input2.value === "" || input3.value === "" || input4.value === "") {
    chipText.innerText = "Заповніть усі поля";
    chipDiv.style.display = 'flex';
    allert.style.display = "flex";
    upload.style.display = "none";
    offline.style.display = "none";
    return;
  } else {
    var checkRequest = new XMLHttpRequest();
  checkRequest.open('POST', 'check.php', true);
  checkRequest.setRequestHeader('Content-Type', 'application/json');
  checkRequest.onreadystatechange = function() {
    if (checkRequest.readyState === 4 && checkRequest.status === 200) {
      var response = JSON.parse(checkRequest.responseText);
      if (response.exists) {
        chipText.innerText = "Аналогічні дані вже існують";
        allert.style.display = "none";
        upload.style.display = "none";
        offline.style.display = "block";
      } else {
        // Отправляем AJAX-запрос на сервер для сохранения данных
        var saveRequest = new XMLHttpRequest();
        saveRequest.open('POST', 'save.php', true);
        saveRequest.setRequestHeader('Content-Type', 'application/json');
        saveRequest.onreadystatechange = function() {
          if (saveRequest.readyState === 4 && saveRequest.status === 200) {
            chipText.innerText = "Успішно записано";
            upload.style.display = "block";
            allert.style.display = "none";
            offline.style.display = "none";
            console.log(saveRequest.responseText);
            input1.value = '';
            input2.value = '';
            input3.value = '';
            input4.value = '';
          }
        };
        saveRequest.send(jsonData);
      }
    }
  };
  }


  checkRequest.send(jsonData);
  chipDiv.style.display = 'flex';
});

var closeIcon = document.querySelector('.chip__close');
closeIcon.addEventListener('click', function() {
  var chip = closeIcon.closest('.chip');
  chip.style.display = 'none'; // Скрытие элемента chip
});


const BUT = document.getElementById("button1");
const TOGGLE = () => {
  const IS_PRESSED = BUT.matches("[aria-pressed=true]");
  document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  BUT.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};
BUT.addEventListener("click", TOGGLE);

function handleRadioChange() {
  if (radio1.checked) {
    components.style.display = 'flex';
    input1.style.display = 'none';
    input2.style.display = 'none';
    input3.style.display = 'none';
    input4.style.display = 'none';
    save.style.display = 'none';
    chip.style.display = 'none';
  } else if (radio2.checked) {
    components.style.display = 'none';
    input1.style.display = 'block';
    input2.style.display = 'block';
    input3.style.display = 'block';
    input4.style.display = 'block';
    save.style.display = 'flex';
    chip.style.display = 'none';
  }
}
radio1.addEventListener('change', handleRadioChange);
radio2.addEventListener('change', handleRadioChange);

handleRadioChange();

(function (e) {
  "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {
    for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n;
    return Boolean(o[n])
  }), "function" != typeof e.closest && (e.closest = function (e) {
    for (var t = this; t && 1 === t.nodeType;) {
      if (t.matches(e)) return t;
      t = t.parentNode
    }
    return null
  })
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var chip = document.querySelector('.chip');
  var overlay = document.querySelector('.overlay');
  var closeButton = document.querySelector('.chip__close');

  save.addEventListener('click', function (e) {
    e.preventDefault();
    chip.classList.add('active');
    overlay.classList.add('active');
  });

  closeButton.addEventListener('click', function (e) {
    chip.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function () {
    chip.classList.remove('active');
    overlay.classList.remove('active');
  });
});