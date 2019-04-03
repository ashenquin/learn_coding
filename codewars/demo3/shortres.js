function findShort(str){
    // return (str.split(' ')).map(w => w.length).sort((a,b) => a - b)[0];
    return Math.min.apply(null,str.split(' ').map(w => w.length))
}

console.log(findShort('jadfl djklfa sdjkfalj dfjlkakdfjaldjf'));
// console.log('dsafasdfasdf dfasf fdaf fdafasd'.split(' '));