const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const message = document.getElementById('message');
const carouselContainer = document.getElementById('carousel-container');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel__item');

let noBtnClickCount = 0;

// 点击“可以”按钮
yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html'; // 跳转到“可以”页面
});

// 点击“不要”按钮
noBtn.addEventListener('click', () => {
    noBtnClickCount++;
    if (noBtnClickCount === 1) {
        message.textContent = '你确定？';
        carouselContainer.classList.remove('hidden'); // 显示3D轮播图
    } else if (noBtnClickCount === 2) {
        message.textContent = '再考虑一下嘛';
    } else if (noBtnClickCount === 3) {
        window.location.href = 'no.html'; // 跳转到“不要”页面
    }
});

// 鼠标移动到图片上时停止转动并放大
carouselItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused'; // 暂停动画
    });

    item.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running'; // 恢复动画
    });
});