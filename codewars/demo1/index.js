function generateHashtag(str) {
    return (str.length > 140 || str.length === 0) ? false : '#' + str.split(' ').map(capitalize).join(' ');
}
function capitalize(w) {
    // console.log(w);
    return w.charAt(0).toUpperCase() + w.slice(1);
}
// 目标：#How Are You

console.log(generateHashtag(''));