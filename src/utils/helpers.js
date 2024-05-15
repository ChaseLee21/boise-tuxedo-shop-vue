function sortColorSwatchArray(colorSwatchesArray) {
    colorSwatchesArray.sort((a, b) => {
        if (a.position === b.position) {
            return sortByColor(a.color, b.color);
        }
        return a.position > b.position ? 1 : -1;
    });
}

function sortAlphabetically(a, b) {
    return a > b ? 1 : -1;
}

function sortByColor(a, b) {
    return a.hexCode > b.hexCode ? 1 : -1;
}

export { sortColorSwatchArray, sortAlphabetically };