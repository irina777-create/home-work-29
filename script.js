// ===== Домашнє завдання 29 =====
// Тема: createElement, appendChild, видалення елементів,
// addEventListener, об'єкт event, stopPropagation.

// Верстку і стилі зробити самостійно: index.html з порожнім списком
// для покупок і style.css, де описаний клас .done
// (наприклад, закреслений текст для купленого товару).

// Вихідні дані:

// const products = [`Молоко`, `Хліб`, `Сир`, `Яблука`, `Кава`];

// Завдання: «Список покупок».
//
// 1. Для кожного товару з масиву products створити елемент <li>
//    і додати його в список на сторінці.
//    Елементи створювати через document.createElement, а не через innerHTML списку.
//
// 2. Усередині кожного <li> — кнопка `✕`, яка видаляє саме цей пункт.
//
// 3. Клік по самому пункту перемикає на ньому клас done (куплено / не куплено).
//    Клік по кнопці `✕` при цьому НЕ повинен перемикати клас —
//    тільки видаляти пункт.
//
// Очікувано: клік по «Хліб» закреслює його, повторний клік знімає закреслення →
// клік по `✕` біля «Сир» прибирає пункт зі списку,
// решта пунктів залишаються без змін.

// Завдання: «Список покупок» .
const products = ['Молоко', 'Хліб', 'Сир', 'Яблука', 'Кава'];

const productList = document.querySelector('#products');

products.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.textContent = product;

    listItem.addEventListener('click', () => {
        listItem.classList.toggle('done');
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '✕';

    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    productList.appendChild(listItem);
});
