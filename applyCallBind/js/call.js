


Function.prototype.myCall = function (target = window, ...args) {
    const key = Symbol();
    target[key] = this;
    const val = target[key](...args);
    Reflect.deleteProperty(target, key);
    return val;
}

function fn(a, b) {
    this.a = a;
    this.b = b;
}

const obj = {
    name: 'zhan',
    age: 18
}


fn.myCall(obj, 1, 2, 3);

console.log(obj);