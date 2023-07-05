class Dialog extends EventTarget {
    constructor(options){
        super();
        const defaultOptions = {
            width : '300px',
            isCancleBtn : true,
            isOverly : false,
            isDrag : false,
            title : '默认标题',
            content : '默认内容',
            confirmBtnText : '确认',
            cancleBtnText : '取消',
            success(){},
            error(){},
        };

        this.opts = Object.assign(defaultOptions,options);

        this.init()
    }

    init(){
        _createElement.apply(this);
        this.addEventListener('success',this.opts.success);
        this.addEventListener('error',this.opts.error);
    }

    // 显示弹窗
    show(){
       divEles.style.display = 'block';
    }

    close(){
        divEles.style.display = 'none';
    }

}

let divEles = '';

function _createElement(){
    divEles = document.createElement('div');

    divEles.innerHTML = `<div class="dialogContainer" style="width:${this.opts.width}">
        <div class="title">${this.opts.title}</div>
        <div class="content">${this.opts.content}</div>
        <div class="footerBtn">
            ${this.opts.isCancleBtn ? `<div class="cancleBtn" data-type="cancel">${this.opts.cancleBtnText}</div>` : ''}
            <div class="confirmBtn" data-type="confirm">${this.opts.confirmBtnText}</div>
        </div>
    </div>`;

    divEles.style.display = 'none';

    document.body.appendChild(divEles);

     _addEvent.apply(this);
}

function _addEvent(){
    // document.querySelector().addEventListener
    // divEles.querySelector('.cancleBtn').addEventListener('click',() => {
    //     this.close();
    // });
    divEles.querySelector('.dialogContainer').addEventListener('click', e => {
        const type = e.target.dataset.type ? e.target.dataset.type : '';
        switch(type){
            case 'confirm': 
                const successObj = new CustomEvent('success');
                this.dispatchEvent(successObj);
                this.close();
                break;
            case 'cancel': 
                // this.opts.error();
                const errorObj = new CustomEvent('error');
                this.dispatchEvent(errorObj);
                this.close();
                break;
            default: 
                break;
        }
    })
}

export default function(options){
    return new Dialog(options)
};