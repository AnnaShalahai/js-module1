'use strict'
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const ADMIN_LOGIN = 'admin';
let login = prompt('Введите логин');

if (login === ADMIN_LOGIN) { 
 let password = prompt('Введите пароль')
  if (password === ADMIN_PASSWORD) {
    alert("Добро пожаловать!");
  } else if (password === null) {
    alert('Отменено пользователем!');
  } else {
    alert('Доступ запрещен!')
  };
} else if (login === null) { 
  alert('Отменено пользователем!');
} else {
  alert('Доступ запрещен!')
};
