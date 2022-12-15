alert('Здравствуйте ! ');
let userlogin = prompt('Введите логин');



if (userlogin === 'Админ'){
    // alert('Приветствую , ' + userlogin + '!!!');
    let password = prompt('Введите пароль');

    if (password === 'Король'){
        alert('Приветствую , '+ password + '!!!');
    } else
    if (password === '' || password === null) {
        alert ('Действие отменено' );
    } else {
        alert(password + ' - Вы не король ' );
    }

} else
if (userlogin === '' || userlogin === null) {
    alert ('Действие отменено');
} else {
    alert(userlogin + ' - Я вас не знаю ' );
}
