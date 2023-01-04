function fibonacci(num) {
    let result = [];
    let a = 1;
    let b = 0;
    let temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        result.push(b);
        num--;
    }

    return result;
}

let list = fibonacci(6);
console.log(list); 

