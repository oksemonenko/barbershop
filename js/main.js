'use strict';

(function() {
    var link = document.querySelector(".login");

    var overlay = document.querySelector(".modal-overlay");
    var popup = document.querySelector(".modal-content");
    var close = popup.querySelector(".modal-content-close");

    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");

    //Запись данных в localStorage
    var storage = localStorage.getItem("login");

    //Функция, показывающая попап
    function showPopup() {
        overlay.classList.add("modal-overlay-show");
        popup.classList.add("modal-content-show");
    }

    //Функция, скрывающая попап
    function hidePopup() {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
        removeError();
    }

    //Функция, добавляющая ошибку
    function setError() {
        popup.classList.add('modal-error');
    }

    //Функция, удаляющая ошибку
    function removeError() {
        popup.classList.remove("modal-error");
    }

    //Добавляет обработчик события кнопке входа
    link.addEventListener("click", function(event) {
        event.preventDefault();
        showPopup();

        if (storage) {
            login.value = storage;
            password.focus();
        } else {
            login.focus();
        }

    });

    //Добавляет обработчик события закрывающей кнопке
    close.addEventListener("click", function(event) {
        event.preventDefault();
        hidePopup();
    });

    //Обработчик события: форма не отправляется с пустыми полями
    form.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
            event.preventDefault();
            setError();
        } else {
            localStorage.setItem("login", login.value);
        }
    });

    //Обработчик события: закрытие попапа по нажатию клавиши esc
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("modal-content-show")) {
                hidePopup();
            }
        }
    });

    
    var mapOpen = document.querySelector(".js-open-map");

    var mapPopup = document.querySelector(".modal-content-map");
    var mapClose = mapPopup.querySelector(".modal-content-close");

    //Функция показа карты
    function showMap() {
        overlay.classList.add("modal-overlay-show");
        mapPopup.classList.add("modal-content-show");
    }

    //Функция, скрывающая карту
    function hideMap() {
        overlay.classList.remove("modal-overlay-show");
        mapPopup.classList.remove("modal-content-show");
    }

    //Добавляет обработчик события кнопке "Как проехать"
    mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        showMap();
    });

    //Добавляет обработчик события закрывающей кнопке
    mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        hideMap();
    });

    //Обработчик события: закрытие карты по нажатию клавиши esc
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (mapPopup.classList.contains("modal-content-show")) {
                hideMap();
            }
        }
    });
})();

