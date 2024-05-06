document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');
    const envelope = document.querySelector('.envelope');
    const text = document.querySelector('.text');

    envelope.addEventListener('click', function () {
        card.style.top = '-100px';
        setTimeout(() => {
            text.classList.toggle('hidden');
        }, 500);
    });
});
