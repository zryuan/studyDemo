class Person{
    static SINGLE = null;
    constructor(name){
        this.name = name;

        if(!Person.SINGLE){
            Person.SINGLE = this;
        }

        return Person.SINGLE;
    }
};

export default function(...args){
    return new Person(...args);
};