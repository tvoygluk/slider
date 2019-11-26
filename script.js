// индекс слайдера по умолчанию
var slideIndex = 1; 

// основная функция
var dots = document.querySelectorAll('.slider-dots_item');
// добавляем обработчики событий на точки
dots.forEach(function (item, i) {
    item.addEventListener('click', function () {
        currentSlide(i+1);
    });
});

var showSlides = function (currNum) {
    var slidesFr = document.querySelectorAll('.item');
    var slidesBk = document.querySelectorAll('.item2');
    
    if (currNum > slidesFr.length) {
        slideIndex = 1;
    } else if (currNum < 1) {
        slideIndex = slidesFr.length;
    }

    slidesFr.forEach(function (item) {
        item.style.display = 'none';
    });

    slidesBk.forEach(function (item) {
        item.style.display = 'none';
    });

    dots.forEach(function (item) {
        item.classList.remove('active');
    });

    slidesFr[slideIndex - 1].style.display = 'block';
    slidesBk[slideIndex - 1].style.display = 'block';

    dots[slideIndex - 1].classList.add('active');

}

// фунекция увеличивает индекс слайдера - показывает следующий слайд
var plusSlide = function () {
    showSlides(++slideIndex);
}

var minusSlide = function () {
    showSlides(--slideIndex);
}

// установить текущий слайд
var currentSlide = function (numOfSlide) {
    showSlides(slideIndex = numOfSlide);
}

showSlides(slideIndex);

// добавляем обработчики событий на кнопки
var prev = document.querySelector('.prev');
var onPrevClick = function () {
    minusSlide();
};
prev.addEventListener('click', onPrevClick);

var next = document.querySelector('.next');
var onNextClick = function () {
    plusSlide();
};
next.addEventListener('click', onNextClick);