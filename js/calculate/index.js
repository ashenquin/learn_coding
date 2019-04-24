let stratigies = {
    'S':function(salary) {
        return salary * 5;
    },
    'A':function(salary) {
        return salary * 3;
    },
    'B':function(salary) {
        return salary * 2;
    }
}

function calculate(level, salary) {
    return stratigies[level](salary);
}
console.log(calculate('A',1000));