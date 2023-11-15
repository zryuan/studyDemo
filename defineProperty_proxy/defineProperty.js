// const person = {
//     name: 'zhangsan',
//     age: 18
// }

// let height = 183;
// Object.defineProperty(person, 'height', {
//     get() {
//         return height;
//     },
//     set(val) {
//         console.log(val);
//         height = val;
//     }
// });
// person.height = 190
// console.log(person.height);


// enumerable 描述符
// Object.defineProperty(person, 'height', {
//     value: 183,
//     // enumerable: true
// })

// const keys = Object.keys(person);
// const values = Object.values(person);
// const entries = Object.entries(person);
// const newPerson = { ...person }

// for (const key in person) {
//     console.log(key, person[key])
// }

// console.log("keys", keys)
// console.log("values", values)
// console.log("entries", entries)
// console.log('newPerson', newPerson)

// configurable
// Object.defineProperty(person, 'height', {
//     value: 183,
//     writable: true,
//     configurable: false
//     // get() {
//     //     return 190
//     // }
//     // configurable: true
// });
// Object.defineProperty(person, 'height', {
//     // enumerable: true
//     // get() {
//     //     return 189
//     // }
//     value: 190
// })
// person.height = 196
// const keys = Object.keys(person)
// console.log(keys)
// Reflect.deleteProperty(person, 'height');
//delete person.height
// console.log('height' in person)
// console.log(person.height)

// Object.defineProperty(person, 'height', {
//     writable: false
// })

// person.height = 190;

// console.log(person.height)

// proxy
// const person = {
//     name: 'zhangsan',
//     age: 19
// }

// const personProxy = new Proxy(person, {
//     get(target, key, receiver) {
//         return target[key]
//     },
//     set(target, key, val, receiver) {
//         target[key] = val
//     }
// })

// personProxy.age = 20

// for (let key in personProxy) {
//     console.log(key, personProxy[key])
// }

// console.log()


// 数组
const arr = ['zhangsan', 19]

// const proxyObj = new Proxy(arr, {
//     get(target, key) {
//         return 'proxy' + key + target[key]
//     },
//     set(target, key, val) {
//         target[key] = val
//     }
// })
// proxyObj[1] = 90
// console.log(proxyObj[1]);

Object.defineProperty(arr, '0', {
    get() {
        return 'define0'
    }
})

console.log(arr[0])