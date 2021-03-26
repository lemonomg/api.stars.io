export const reg = {
    email: /^([a-zA-Z0-9]+[_||]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_||]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
    password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/,
    account: /^[A-Za-z0-9]{4,10}$/
}