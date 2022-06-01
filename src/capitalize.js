const capitalize = (text) => {
    if (text === '') return '';
    const firstChar = text[0].toUpperCase();
    const restString = text.slice(1);
    return `${firstChar}${restString}`;
};

export default capitalize;
