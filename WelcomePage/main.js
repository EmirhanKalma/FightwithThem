async function connectToGame(){
    try {
        // 1. Отправляем запрос на FastAPI
        // Используем await, так как ждем ответа сети
        const response = await fetch('http://127.0.0.1:8000/play', {
            method: 'POST', // Метод отправки
            headers: {
                'Content-Type': 'application/json' // Говорим серверу, что шлем JSON
            },
            // Превращаем JS объект в строку JSON для передачи по сети
            body: JSON.stringify({ action_type: "play" }) 
        });

        // 2. Ждем, пока ответ сервера превратится в JS объект
        const result = await response.json();

        // 3. Проверяем, что ответил сервер (FastAPI)
        if (result.status === "success") {
            // ВОТ ОНО! САМОЕ ГЛАВНОЕ.
            // Так JS перенаправляет пользователя на другую страницу.
            // Берем URL, который нам прислал FastAPI (result.redirect_to)
            window.location.href = result.redirect_to; 
        } else {
            // Если ошибка (например status: 'error')
            alert("Ошибка сервера: " + result.message);
        }

    } catch (error) {
        // Если вообще нет связи с сервером (сервер упал, нет интернета)
        console.error("Произошла ошибка при запросе:", error);
    }
}