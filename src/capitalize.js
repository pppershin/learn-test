const capitalize = (text) => {
    if (text === '') return '';
    const [firstChar, ...restString] = text.split('');
    return `${firstChar.toUpperCase()}${restString.join('')}`;
};

export default capitalize;
