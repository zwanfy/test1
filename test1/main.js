//задание1

const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

//задание2
let counter = 1;

const intervalId = setInterval(() => {
    console.log("Прошла секунда", counter);
    counter++;

    if (counter > 3) {
        clearInterval(intervalId);
    }
}, 1000);

//задание3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;

        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
};

count();

//задание 4

const block = document.querySelector('#block')

block.onclick = () => {
    if(block.classList.contains('red')) {
        block.classList.remove('red')
    }else {
        block.classList.add('red')
    }
}

// задание5

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');

xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        console.log('Данные :', data);
    } else {
        console.log('Ошибка при загрузке данных');
    }
};


xhr.send();