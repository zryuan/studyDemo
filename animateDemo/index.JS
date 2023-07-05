$(function(){
    start('.animateEle1',-25,1000);
    loop('.animateEle1',50,4000);
    start('.animateEle2',-15,1200);
    loop('.animateEle2',30,4200);
    start('.animateEle3',-15,1400);
    loop('.animateEle3',30,4400);
    start('.animateEle4',25,1000);
    loop('.animateEle4',-50,4000);
    start('.animateEle5',15,1200);
    loop('.animateEle5',-30,4200);
    start('.animateEle6',15,1400);
    loop('.animateEle6',-30,4400);
    // start('.animateEle1',-40,1200);

    // setInterval(() => {
    //     let length = time * 100;
    //     $('.animateEle1')
    //         .css({
    //             "transform": `translateY(${length}px)`
    //         });
    //     $('.animateEle2')
    //         .css({
    //             "transform": `translateY(${length}px)`
    //         });
    //     time = -time;
    // },4000);


    function start(selec,len,timeOut){
        setTimeout(() => {
            $(selec).css({
                "transform": `translateY(${len}px)`
            })
        },timeOut);
    }

    function loop(selec,len,timeOut){
        let time = 1;
        setInterval(() => {
            let length = time * len;
            $(selec).css({
                "transform": `translateY(${length}px)`
            })
            time = -time;
        }, timeOut);
    }
});