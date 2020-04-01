export default (messages) => {

    let errors = {};

    // Name errors
    if (!messages.name) {
        errors.name = 'Необходимо ввести Имя';
    } else if (!/^[a-zа-яё \s]+$/iu.test(messages.name)) {
        errors.name = 'Используйте только буквы и пробел';
    }
    // Email errors
    if (!messages.email) {
        errors.email = 'Необходимо ввести E-mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(messages.email)) {
        errors.email = 'Неверный формат адреса';
    }
    // Phone errors
    if (messages.phone && !/^[\d\s]+$/g.test(messages.phone)) {
        errors.phone = 'Телефон не должен содержать букв';
    }

    // Message errors
    if (!messages.message) {
        errors.message = 'Кажется Вы забыли про сообщение';
    }

    return errors;

}

