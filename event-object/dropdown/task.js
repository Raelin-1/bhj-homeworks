document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        // Toggle dropdown list visibility
        valueElement.addEventListener('click', () => {
            listElement.classList.toggle('dropdown__list_active');
        });

        // Item selection
        items.forEach(item => {
            const link = item.querySelector('.dropdown__link');

            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent navigation
                valueElement.textContent = link.textContent; // Update the dropdown value
                listElement.classList.remove('dropdown__list_active'); 
            });
        });
    });
});
