function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = 2 + Math.random() * 3 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Crear más copos por intervalo y reducir tiempo entre intervalos
setInterval(() => {
    // Crear entre 5 y 10 copos por intervalo
    const flakesCount = Math.floor(Math.random() * 6) + 5;
    for (let i = 0; i < flakesCount; i++) {
        createSnowflake();
    }
}, 100); // cada 100ms

