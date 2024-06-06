function getNowTimestamp() {
    return Math.floor(Date.now() / 1000);
}

function getEnumValues(enumObj) {
    return Object.values(enumObj);
}

module.exports = {
    getNowTimestamp,
    getEnumValues,
}
