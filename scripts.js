const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // знімаємо активність з усіх кнопок
    tabButtons.forEach(btn => btn.classList.remove("active"));
    // ставимо активність на натиснуту кнопку
    button.classList.add("active");

    const tabId = button.getAttribute("data-tab");

    // ховаємо усі вкладки
    tabContents.forEach(content => content.classList.remove("active"));
    // показуємо обрану
    document.getElementById(tabId).classList.add("active");
  });
});

document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");

            // прибираємо active у кнопок
            document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // ховаємо всі контенти
            document.querySelectorAll(".tab-content-US3").forEach(content => content.classList.remove("active"));

            // показуємо потрібний
            document.getElementById(tabId).classList.add("active");
        });
    });