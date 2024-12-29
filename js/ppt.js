document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.ppt-slides img');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    const slideNumber = document.querySelector('.slide-number');
    let currentSlide = 0;

    // 显示第一张幻灯片
    slides[0].classList.add('active');

    // 更新幻灯片编号
    function updateSlideNumber() {
        slideNumber.textContent = `${currentSlide + 1} / ${slides.length}`;
    }

    // 切换到指定幻灯片
    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        updateSlideNumber();
    }

    // 上一页
    prevBtn.addEventListener('click', () => {
        const newIndex = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(newIndex);
    });

    // 下一页
    nextBtn.addEventListener('click', () => {
        const newIndex = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showSlide(newIndex);
    });

    // 初始化幻灯片编号
    updateSlideNumber();
}); 