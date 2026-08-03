// =====================================================================
// 1. ЗАХВАТ ЭЛЕМЕНТОВ ИЗ HTML
// =====================================================================
const nameInput = document.getElementById("inpt-in-1");
const passwordInput = document.getElementById("inpt-in-2");
const signBtn = document.getElementById("sign_btn");
const statusP = document.getElementById("status-p");

// =====================================================================
// 2. СЛУШАТЕЛЬ КЛИКА ДЛЯ ВХОДА
// =====================================================================
signBtn.addEventListener("click", async function (event) {
    // Отменяем перезагрузку страницы
    event.preventDefault();

    // Читаем текст из полей ввода
    const enteredName = nameInput.value;
    const enteredPassword = passwordInput.value;

    // Защита от пустых полей
    if (!enteredName || !enteredPassword) {
        statusP.innerText = "Заполни все поля!";
        statusP.style.color = "red";
        return; 
    }

    try {
        // =====================================================================
        // 3. ОТПРАВКА ДАННЫХ НА ЭНДПОИНТ /login
        // =====================================================================
        const response = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: enteredName,
                password: enteredPassword
            })
        });

        // Распаковываем ответ сервера
        const data = await response.json();

        // =====================================================================
        // 4. ПРОВЕРКА ОТВЕТА СЕРВЕРА
        // =====================================================================
        
        // Если сервер ответил ошибкой 400 (Неверный пароль) или 404 (Не найден)
        if (!response.ok) {
            statusP.innerText = "Ошибка: " + data.detail;
            statusP.style.color = "red";
            return;
        }

        // =====================================================================
        // 5. УСПЕШНЫЙ ВХОД (ПЕРЕНАПРАВЛЕНИЕ В ИГРУ)
        // =====================================================================
        statusP.innerText = data.message; // Выводим "Вход выполнен успешно!"
        statusP.style.color = "green";

        // КОГДА БУДЕШЬ ГОТОВ: раскомментируй строку ниже (убери две косые черты).
        // window.location.href принудительно перебросит пользователя на страницу игры!
        // Проверь только, чтобы путь к MainPage/index.html был правильным.
        
        // window.location.href = "../MainPage/index.html";

    } catch (error) {
        // Ошибка подключения (если сервер мертв)
        console.error("Ошибка сети:", error);
        statusP.innerText = "Сервер недоступен. Проверь консоль.";
        statusP.style.color = "red";
    }
});