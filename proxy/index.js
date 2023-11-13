

const o = {
    a: 1,
    b: 2,
    c: {
        ac: 1,
        bc: 2
    }
}

const po = new Proxy(o, {
    get(target, props) {
        console.log('111111')
        return Reflect.get(target, props);
    },

    set(target, props, value) {
        Reflect.set(target, props, value);
    }
})


console.log(po.c.ac)