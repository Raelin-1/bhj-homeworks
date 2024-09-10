document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const items = document.getElementById('items');

    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
            // Hide loader once data is received
            loader.classList.remove('loader_active');

            // Loop through the currencies and create HTML elements
            const currencies = data.response.Valute;
            for (let code in currencies) {
                const currency = currencies[code];
                
                // Create the HTML structure for the currency
                const item = document.createElement('div');
                item.classList.add('item');

                const codeElem = document.createElement('div');
                codeElem.classList.add('item__code');
                codeElem.textContent = currency.CharCode;

                const valueElem = document.createElement('div');
                valueElem.classList.add('item__value');
                valueElem.textContent = currency.Value;

                const currencyElem = document.createElement('div');
                currencyElem.classList.add('item__currency');
                currencyElem.textContent = 'руб.';

                // Append the elements to the item and the item to the DOM
                item.appendChild(codeElem);
                item.appendChild(valueElem);
                item.appendChild(currencyElem);
                items.appendChild(item);
            }
        })
        .catch(error => {
            console.error('Error fetching currency data:', error);
        });
});
