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

function convertRangeInputToHeight(rangeValue) {
    const rangeInputToHeightConversion = [
        `<2'0"`,
        `2'1"`,
        `2'2"`,
        `2'3"`,
        `2'4"`,
        `2'5"`,
        `2'6"`,
        `2'7"`,
        `2'8"`,
        `2'9"`,
        `2'10"`,
        `2'11"`,
        `3'0"`,
        `3'1"`,
        `3'2"`,
        `3'3"`,
        `3'4"`,
        `3'5"`,
        `3'6"`,
        `3'7"`,
        `3'8"`,
        `3'9"`,
        `3'10"`,
        `3'11"`,
        `4'0"`,
        `4'1"`,
        `4'2"`,
        `4'3"`,
        `4'4"`,
        `4'5"`,
        `4'6"`,
        `4'7"`,
        `4'8"`,
        `4'9"`,
        `4'10"`,
        `4'11"`,
        `5'0"`,
        `5'1"`,
        `5'2"`,
        `5'3"`,
        `5'4"`,
        `5'5"`,
        `5'6"`,
        `5'7"`,
        `5'8"`,
        `5'9"`,
        `5'10"`,
        `5'11"`,
        `6'0"`,
        `6'1"`,
        `6'2"`,
        `6'3"`,
        `6'4"`,
        `6'5"`,
        `6'6"`,
        `6'7"`,
        `6'8"`,
        `6'9"`,
        `6'10"`,
        `6'11"`,
        `7'0"`,
        `7'1"`,
        `7'2"`,
        `7'3"`,
        `7'4"`,
        `7'5"`,
        `7'6"`,
        `7'7"`,
        `7'8"`,
        `7'9"`,
        `7'10"`,
        `7'11"`,
    ]
    return rangeInputToHeightConversion[rangeValue]
}

export { sortColorSwatchArray, sortAlphabetically, convertRangeInputToHeight };