class Jquery {
    constructor(arg,nodeList){

        if(typeof nodeList === 'object'){
            this.prevJq = nodeList;
        }else{
            this.prevJq = '[element]';
        }

        if(typeof arg === 'function'){
            window.addEventListener('DOMContentLoaded',arg());
        }else if(typeof arg === 'string'){
            const eles = document.querySelectorAll(arg);

            for(let i=0;i<eles.length;i++){
                this[i] = eles[i]
            }

            this.length = eles.length;
        }else{
            if(!arg.length){
                this[0] = arg;
                this.length = 1;
            }else{
                for(let i=0;i<arg.length;i++){
                    this[i] = arg[i]
                }
    
                this.length = arg.length;
            }
        }
    }

    click(fn){
        for(let i=0;i<this.length;i++){
            this[i].addEventListener('click',fn);
        }

        return this;
    }

    eq(index){
        return new Jquery(this[index],this);
    }

    on(eventName,cb){
        const eventList = eventName.split(' ');
        for(let i=0;i<this.length;i++){
            for(let j=0;j<eventList.length;j++){
                this[i].addEventListener(eventList[j],cb);
            }
        }
    }

    css(...args){
        if(args.length === 1){

            if(typeof args[0] === 'string'){
                return window.getComputedStyle(this[0],null)[args];
            }else{
                for(let key in args[0]){
                    for(let i=0;i<this.length;i++){
                        this[i].style[key] = args[0][key];
                    }
                }
            }

        }else if(args.length === 2){
            for(let i=0;i<this.length;i++){
                this[i].style[args[0]] = args[1];
            }
        }else{
            console.log('参数错误');
        }

        return this;
    }

    end(){
        return this.prevJq;
    }
}

function $(...args){
    if(args.length === 0){
        return false;
    }
    return new Jquery(args[0]);
}