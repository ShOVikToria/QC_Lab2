// Верхні вкладки: US1, US3, US5
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Внутрішні вкладки US3
const tabButtonsUS3 = document.querySelectorAll('.tab-btn-US3');
const tabContentsUS3 = document.querySelectorAll('.tab-content-US3');

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // прибираємо активність з усіх верхніх кнопок
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const tabId = button.getAttribute("data-tab");

        // ховаємо всі верхні контенти
        tabContents.forEach(content => content.classList.remove("active"));

        // показуємо потрібний верхній контент
        const activeTab = document.getElementById(tabId);
        activeTab.classList.add("active");

        // Якщо це US3, робимо вкладку Details активною за замовчуванням
        if(tabId === "US3") {
            const detailsBtn = activeTab.querySelector('.tab-btn-US3[data-tab="Details"]');
            const detailsContent = activeTab.querySelector('#Details');

            // кнопки US3
            activeTab.querySelectorAll('.tab-btn-US3').forEach(b => b.classList.remove('active'));
            detailsBtn.classList.add('active');

            // контенти US3
            activeTab.querySelectorAll('.tab-content-US3').forEach(c => c.classList.remove('active'));
            detailsContent.classList.add('active');
        }
    });
});

// Обробник внутрішніх вкладок US3
tabButtonsUS3.forEach(btn => {
    btn.addEventListener('click', () => {
        // кнопки
        tabButtonsUS3.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // контенти
        tabContentsUS3.forEach(tc => tc.classList.remove('active'));
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});
