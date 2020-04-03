let menuItem = document.createElement('li'), //создаю новый элемент в меню
    menu = document.querySelector('ul'),//Получаю элементы в меню
    title = document.getElementById('title'), // Получаю название элемента в массиве
    menuItems = document.querySelectorAll('.menu .menu-item'), //Получаю массив элементов в меню
    menuItemsSecond = menuItems[2], //Получаю третий элемент меню
    menuItemsThird = menuItems[1], //Получаю второй элемент меню
    adv = document.querySelector('div.adv'), //Получаю рекламный блок
    ans = prompt("Ваше отношение к технике Apple"), //Получаю ответ от пользователя
    promptClass = document.getElementById('prompt'); //Получаю элемент, куда вставить ответ пользователя

    console.log(menu);

adv.remove(); //удаляю рекламу
promptClass.innerHTML = ans; //вставляю ответ пользователя в нужные блок
menu.appendChild(menuItem); //добавляю новые элемент в меню
menuItem.classList.add('menu-item'); //добавляю в новый элемент класс
menuItem.innerHTML = 'Пятый пункт'; //Добавляю в новый элемент название
menu.insertBefore(menuItemsSecond, menuItemsThird); //переставляю местами пункты меню
title.innerHTML = 'Мы продаем только подлинную технику Apple'; //меняю надпись
document.body.style.backgroundImage = "url('./img/apple_true.jpg')"; //меняю фон




