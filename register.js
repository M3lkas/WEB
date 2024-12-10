document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("registerButton");
    const notification = document.getElementById("notification");
    const formFields = [
        document.getElementById("username"),
        document.getElementById("email"),
        document.getElementById("password"),
        document.getElementById("confirm-password")
    ];

    registerButton.addEventListener("click", () => {
        // Проверяем, есть ли введённые данные хотя бы в одном поле
        const hasInput = formFields.some(field => field.value.trim() !== "");

        if (hasInput) {
            showNotification("Вы зарегистрированы!");
        } else {
            showNotification("Пожалуйста, заполните хотя бы одно поле!", "error");
        }
    });

    function showNotification(message, type = "success") {
        notification.textContent = message;
        notification.style.backgroundColor = type === "success" ? "#28a745" : "#dc3545"; // Зелёный для успеха, красный для ошибки
        notification.style.display = "block";

        // Скрываем уведомление через 5 секунд
        setTimeout(() => {
            notification.style.display = "none";
        }, 5000);
    }
});
