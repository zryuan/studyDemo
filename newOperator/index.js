

function newFn(constructor, ...args) {
    if (!(constructor instanceof Function)) {
        throw new Error('The first argument must be a function')
    }
    const obj = Object.create(constructor.prototype);
    const rtnValue = constructor.apply(obj, args);
    return typeof rtnValue === 'Object' ? rtnValue : obj;
}

function person(name, age) {
    this.name = name;
    this.age = age;
    const r = new Number(1);
    return r;
}
// const person = (name, age) => {
//     this.name = name;
//     this.age = age;
// }
person.prototype.run = function () {
    console.log("running....");
}
// const p = new person('zhangsan', 18);
const p = newFn(person, 'zhansan', 15)
console.log(p)
p.run();