function removeAds() {
    document.querySelector('.adv').remove();
}

function setTitle(title) {
    document.getElementById('title').innerText = title;
}

function changeBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = `url("${imageUrl}")`;
}

function askUser() {
    const userAnswer = window.prompt("Ваше отношение к технике Apple");

    document.getElementById('prompt').innerText = userAnswer;
}

function addMenuItem(itemText) {
    const newMenuItemElement = document.createElement('li');

    newMenuItemElement.innerText = itemText;
    newMenuItemElement.classList.add('menu-item');

    document.querySelector('ul.menu').appendChild(newMenuItemElement);
}

/**
 * @param {Number} currentIndex Zero-based current element index
 * @param {Number} newIndex Zero-based new element index
 */
function setMenuItemIndex(currentIndex, newIndex) {
    if (currentIndex === newIndex) {
        return console.warn('Какого доебался? Оно и так на том месте');
    }

    const menuItems = document.querySelectorAll('ul.menu > li');
    const itemToMove = menuItems[currentIndex];
    const itemToMoveBeforeOrAfter = menuItems[newIndex];

    if (newIndex < currentIndex ) {
        itemToMove.parentNode.insertBefore(itemToMove, itemToMoveBeforeOrAfter);
    } else if (newIndex > currentIndex) {
        itemToMove.parentNode.insertBefore(itemToMove, itemToMoveBeforeOrAfter.nextSibling);
    }
}

// html готов, но еще не нарисован, можно редачить
window.addEventListener('DOMContentLoaded', () => {
    removeAds();
    setTitle('Мы продаем только подлинную технику Apple');
    changeBackgroundImage('./img/apple_true.jpg');
    addMenuItem('Пятый пункт');

    // меняем местами 3й и 2й
    setMenuItemIndex(2, 1);
});

// вся страница готова и нарисована
window.addEventListener('load', askUser);
