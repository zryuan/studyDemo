
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    // console.log(xhr)
    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState === xhr.DONE) {
    //         if (xhr.status === 200) {
    //             console.log(xhr.responseText)
    //         }
    //     }
    // }

    xhr.onload = () => {
        console.log(xhr.responseText)
    }
    xhr.open('POST', '/app?id=1&type=2');
    xhr.send(JSON.stringify({
        name: 'zhansan',
        age: 45
    }))
})

