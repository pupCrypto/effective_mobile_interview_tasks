const ONE_HOUR = 3600;
const USERS_PER_PAGE = 10;
const RES_MSG = {
    USER_REGISTERED: 'Пользователь был успешно зарегистрирован',
    USER_ALREADY_EXISTS: 'Пользователь уже существует',
    USER_DOES_NOT_EXISTS: 'Пользователь не существует',
    ACCESS_DENIED: 'Доступ запрещен',
    USER_UPDATED: 'Данные пользователя были успешно обновлены',
    TOKEN_EXPIRED: 'Токен доступа истек',
    INTERNAL_ERROR: 'Internal Server Error',
    EMPTY_IMAGES: 'Вы не передали ни одного изображения',
    ONLY_IMG: 'Только изображения',
    UPLOADED: 'Успешно загружено',
};
const STATUS = {
    OK: 'ok',
    ERROR: 'error',
}

module.exports = {
    ONE_HOUR,
    STATUS,
    RES_MSG,
    USERS_PER_PAGE,
};
