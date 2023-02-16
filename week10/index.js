// ### Практическое задание 💎

// 1. Создайте страницу, подключите скрипт. Создайте функцию, которая выведет сообщение в консоли «Я учу JavaScript!».
// 2. Создайте галерею переключения изображений. 
// В ней будет две кнопки: вперёд и назад, которые должны переключать изображение (в галерее пока будет 2 картинки, но если можете больше, то делайте).

function showMessage() {
    console.log("Я учу JavaScript!")
}
showMessage();


let numberImage = 1;


function showNextImage() {
    let image = document.getElementById('img1');
    numberImage = numberImage+1;
    image.src = `assets/img/${numberImage}.jpg`;
}

function showPreviousImage() {
    let image = document.getElementById('img1');
    numberImage = numberImage-1;
    image.src = `assets/img/${numberImage}.jpg`;

}

// ***** Задание под звездочкой**

// Напишите скрипт, который сможет определить, является ли данный год високосным в григорианском календаре. Чтобы определить, является ли год високосным, выполните следующие действия:
//     **Шаг 1**: Если год делится на 4 равномерно, перейдите к шагу 2. В противном случае    перейдите к шагу 5.
//     **Шаг 2**: Если год делится на 100 равномерно, перейдите к шагу 3. В противном случае   перейдите к шагу 4.
//     **Шаг 3**: Если год делится на 400 равномерно, перейдите к шагу 4. В противном случае перейдите к шагу 5.
//     **Шаг 4**: Год является високосным (366 дней).
//     **Шаг 5**: Год не високосный (у него 365 дней).

function yearCalculate() {
   let year = Number(document.getElementById('yearNumber').value);

    if (year % 4 !== 0) {
        document.getElementById('result').value = 'Год не високосный (у него 365 дней)';
    }
    else if (year % 100 !== 0) {
        document.getElementById('result').value = 'Год является високосным (366 дней).';
    }
    else if (year % 400 == 0) {
        document.getElementById('result').value = 'Год является високосным (366 дней).';
    }
    else {
        document.getElementById('result').value = 'Год не високосный (у него 365 дней)';
    }
}
