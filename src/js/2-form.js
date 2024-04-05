//Відстеження події input і збереження значень у локальне сховище
const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

//Заповнення полів форми з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const formData = JSON.parse(savedData);
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Отримання значень полів форми
    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();
    
    if (emailValue === '' || messageValue === '') {
        alert('Поля форми не можуть бути порожніми.');
        return;
    }
    
    
    const formData = {
        email: emailValue,
        message: messageValue
    };
    console.log(formData);
    
    // Очищення локального сховища та полів форми
    localStorage.removeItem('feedback-form-state');
    form.reset();
});