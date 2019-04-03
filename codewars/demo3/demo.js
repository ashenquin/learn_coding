const people = [
    {age:46,name:'roger'},
    {age:99,name:'dnmd'},
    {age:17,name:'cba'},
    {age:28,name:'qz'},
];
var orderPeople = function (people) {
    return people.sort((a,b)=>{
        return a.age - b.age > 0;
    })
}
console.log(orderPeople(people));