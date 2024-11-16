document.addEventListener('DOMContentLoaded', () => {
    const lightScreen = document.getElementById('lightScreen');
    const brightnessSlider = document.getElementById('brightness');
    const brightnessValue = document.getElementById('brightnessValue');
    const saturationSlider = document.getElementById('saturation');
    const saturationValue = document.getElementById('saturationValue');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const colorBtns = document.querySelectorAll('.color-btn');

    // 用于存储当前的滤镜值
    let currentBrightness = 1.0;
    let currentSaturation = 1.0;

    // 更新滤镜效果的函数
    const updateFilters = () => {
        lightScreen.style.filter = `brightness(${currentBrightness}) saturate(${currentSaturation})`;
    };

    // 颜色选择功能
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            lightScreen.style.backgroundColor = color;

            // 移除其他按钮的active类
            colorBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的active类
            btn.classList.add('active');
        });
    });

    // 亮度调节功能
    brightnessSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        brightnessValue.textContent = `${value}%`;

        // 使用滤镜调整亮度
        currentBrightness = 0.5 + (value / 100);
        updateFilters();
    });

    // 饱和度调节功能
    saturationSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        saturationValue.textContent = `${value}%`;

        // 使用滤镜调整饱和度
        currentSaturation = value / 100;
        updateFilters();
    });

    // 全屏模式
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
});