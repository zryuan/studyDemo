


Function.prototype.myBind = function (target = window, ...args) {
    const key = Symbol();
    const self = this;
    function fn(...args2) {
        if (this instanceof fn) {
            return new self(...args, ...args2);
        }
        target[key] = self;
        const val = target[key](...args, ...args2);
        Reflect.deleteProperty(target, key);
        return val;
    }

    return fn;
}


function fn(a, b) {
    this.a = a;
    this.b = b;
}

fn.prototype.run = function () {
    console.log('running....')
}

const obj = {
    name: 'zhan',
    age: 18
}


const myFn = fn.myBind(obj);

const newObj = new myFn(5, 6)

console.log(newObj);

// const arrawFn = (a, b) => {
//     debugger
//     this.a = a;
//     this.b = b;
// }

// const afn = arrawFn.myBind(obj);

// afn(1, 2);

// console.log(obj)

const fnObj = {
    aa: 11,
    bb: 22,
    create: function (a, b) {
        this.a = a;
        this.b = b;
    }
}
const fnBn = fnObj.create.bind(obj, 1, 2);

fnBn();

console.log(fnObj, obj)

// new fnObj.create(1, 2)