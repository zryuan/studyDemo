class Observer{
    constructor(){
        this.myEvent = {};
        this.myEventArgus = {};
    }

    addEvent(eventName,fn,...args){
        if(!eventName || !fn){
            console.warn('参数不正确');
            return;
        }

        if(typeof eventName !== 'string'){
            console.warn('第一个参数必须是一个字符串');
            return;
        }

        if(typeof fn !== 'function'){
            console.warn('第二个参数必须是一个函数');
            return;
        }

        if(!this.myEvent[eventName]){
            this.myEvent[eventName] = [];
            this.myEventArgus[eventName] = [];
        }

        this.myEvent[eventName].push(fn);
        this.myEventArgus[eventName].push(args);
    }

    triggerEvent(eventName){
        if(!eventName || typeof eventName !== 'string'){
            console.warn('参数格式不正确');
            return;
        }

        if(!this.myEvent[eventName] || this.myEvent[eventName].length === 0){
            return;
        }

        this.myEvent[eventName].forEach((fn,index) => {
            const argus = this.myEventArgus[eventName][index];
            fn(...argus);
        });
    }

    removeEvent(eventName,fn){
        if(!eventName){
            console.warn('参数不正确');
            return;
        }

        if(typeof eventName !== 'string'){
            console.warn('第一个参数必须是一个字符串');
            return;
        }

        if(!this.myEvent[eventName] || this.myEvent[eventName].length === 0){
            return;
        }

        if(!fn){
            this.myEvent[eventName] = [];
            this.myEventArgus[eventName] = [];
            return;
        }

        if(typeof fn !== 'function'){
            console.warn('第二个参数必须是一个函数');
            return;
        }

        const eventIndex = this.myEvent[eventName].indexOf(fn);

        console.log(eventIndex);

        if(eventIndex === -1){
            return;
        }

        this.myEvent[eventName].splice(eventIndex,1);
        this.myEventArgus[eventName].splice(eventIndex,1);
    }

}

let instanse = null;

export default function(){
    if(!instanse){
        instanse = new Observer();
    }

    return instanse;
}