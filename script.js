var pizzas = [
    {
        "name": "Impreza",
        "category": "М'ясна піца",
        "categories": ["М'ясні", "З ананасами"],
        "description": "Бекон, салямі, курка, сир моцарела, сир рокфор, ананас, томатна паста, петрушка",
        "sizes": [30, 40],
        "weights": [370, 660],
        "prices": [99, 169],
        "image": "images/pizza_7.jpg",
        "badge": "Нова"
    },
    {
        "name": "BBQ",
        "category": "М'ясна піца",
        "categories": ["М'ясні", "З грибами"],
        "description": "Мисливські ковбаски, пепероні, цибуля, сир моцарелла, гриби, петрушка, оливки",
        "sizes": [30, 40],
        "weights": [460, 840],
        "prices": [139, 199],
        "image": "images/pizza_2.jpg",
        "badge": "Популярна"
    },
    {
        "name": "Міксовий поло",
        "category": "М'ясна піца",
        "categories": ["М'ясні", "З ананасами"],
        "description": "Балик, курячі ковбаски, сир моцарела, ананас, кукурудза, петрушка, томати",
        "sizes": [30, 40],
        "weights": [430, 780],
        "prices": [115, 179],
        "image": "images/pizza_1.jpg"
    },
    {
        "name": "Pocco Густо",
        "category": "З морепродуктами",
        "categories": ["З морепродуктами"],
        "description": "Сир моцарелла, лосось, ікра тобіко",
        "sizes": [30, 40],
        "weights": [370, 560],
        "prices": [130, 200],
        "image": "images/pizza_4.jpg"
    },
    {
        "name": "Колоріта",
        "category": "З грибами",
        "categories": ["М'ясні", "З грибами"],
        "description": "Томатний соус, сир моцарела, салямі, шинка, болгарський перець, печериці, листя базиліка",
        "sizes": [30, 40],
        "weights": [420, 750],
        "prices": [119, 199],
        "image": "images/pizza_5.jpg"
    },
    {
        "name": "Гурман",
        "category": "М'ясна піца",
        "categories": ["М'ясні", "З грибами"],
        "description": "Білий соус, сир моцарела, курка, мисливські ковбаски, мариновані огірки, червона цибуля, печериці, петрушка",
        "sizes": [30, 40],
        "weights": [390, 690],
        "prices": [115, 179],
        "image": "images/pizza_6.jpg"
    },
    {
        "name": "Маргарита",
        "category": "Вега",
        "categories": ["Вега"],
        "description": "Сир моцарела, томатний соус, томати, листя базиліку, оливова олія",
        "sizes": [30],
        "weights": [350],
        "prices": [99],
        "image": "images/pizza_3.jpg"
    },
    {
        "name": "М'ясна",
        "category": "М'ясна піца",
        "categories": ["М'ясні"],
        "description": "Сир моцарелла, твердий сир, курка, балик, салямі, петрушка",
        "sizes": [30, 40],
        "weights": [420, 840],
        "prices": [149, 209],
        "image": "images/pizza_9.jpg"
    },
    {
        "name": "Дольче Маре",
        "category": "З морепродуктами",
        "categories": ["З морепродуктами"],
        "description": "Сир моцарелла, білий соус, креветки, мідії, червона ікра, восьминіжки, кальмари",
        "sizes": [30, 40],
        "weights": [420, 750],
        "prices": [169, 259],
        "image": "images/pizza_8.jpg"
    }
]

function addPizzas(pizzas) {
    let pizzaItems = 0;
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    if (!gridContainer) {
        console.error('Grid container not found');
        return;
    }

    pizzas.forEach(pizza => {
        const pizzaItem = document.createElement('div');
        pizzaItem.classList.add('pizza-item');
        pizzaItems++;

        if (pizza.badge) {
            const badge = document.createElement('div');
            badge.classList.add('badge'); 
        
            if (pizza.badge === 'Нова') {
                badge.classList.add('new');
            } else if (pizza.badge === 'Популярна') {
                badge.classList.add('popular');
            }
        
            badge.textContent = pizza.badge;
            pizzaItem.appendChild(badge);
        }

        const img = document.createElement('img');
        img.src = pizza.image;
        img.alt = pizza.name;
        pizzaItem.appendChild(img);

        const name = document.createElement('h2');
        name.textContent = pizza.name;
        pizzaItem.appendChild(name);

        const category = document.createElement('p');
        category.classList.add('category');
        category.style.color = '#a9a9a9';
        category.textContent = pizza.category;
        pizzaItem.appendChild(category);

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = pizza.description;
        pizzaItem.appendChild(description);

        if (pizza.sizes.length === 1) {
            const sizeContainer = document.createElement('div');
            sizeContainer.classList.add('flex-container');
            const sizeImg = document.createElement('img');
            sizeImg.src = 'images/size-icon.svg';
            sizeImg.alt = 'size';
            sizeContainer.appendChild(sizeImg);
            const sizeSpan = document.createElement('span');
            sizeSpan.textContent = pizza.sizes[0];
            sizeContainer.appendChild(sizeSpan);
            pizzaItem.appendChild(sizeContainer);

            const weightContainer = document.createElement('div');
            weightContainer.classList.add('flex-container');
            const weightImg = document.createElement('img');
            weightImg.src = 'images/weight.svg';
            weightImg.alt = 'weight';
            weightImg.style.marginTop = '10px';
            weightContainer.appendChild(weightImg);
            const weightSpan = document.createElement('span');
            weightSpan.textContent = pizza.weights[0];
            weightSpan.style.marginTop = '10px';
            weightContainer.appendChild(weightSpan);
            pizzaItem.appendChild(weightContainer);

            const priceH1 = document.createElement('h1');
            priceH1.style.marginTop = '10px';
            priceH1.textContent = pizza.prices[0];
            pizzaItem.appendChild(priceH1);

            const priceUnit = document.createElement('h1');
            priceUnit.style.fontSize = 'smaller';
            priceUnit.textContent = 'грн.';
            pizzaItem.appendChild(priceUnit);

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Купити';
            pizzaItem.appendChild(buyButton);

        } else {
            const gridWeight = document.createElement('div');
            gridWeight.classList.add('grid-weight');

            pizza.sizes.forEach(size => {
                const sizeContainer = document.createElement('div');
                sizeContainer.classList.add('flex-container');
                const sizeImg = document.createElement('img');
                sizeImg.src = 'images/size-icon.svg';
                sizeImg.alt = 'size';
                sizeContainer.appendChild(sizeImg);
                const sizeSpan = document.createElement('span');
                sizeSpan.textContent = size;
                sizeContainer.appendChild(sizeSpan);
                gridWeight.appendChild(sizeContainer);
            });

            pizza.weights.forEach(weight => {
                const weightContainer = document.createElement('div');
                weightContainer.classList.add('flex-container');
                const weightImg = document.createElement('img');
                weightImg.src = 'images/weight.svg';
                weightImg.alt = 'weight';
                weightContainer.appendChild(weightImg);
                const weightSpan = document.createElement('span');
                weightSpan.textContent = weight;
                weightContainer.appendChild(weightSpan);
                gridWeight.appendChild(weightContainer);
            });

            pizzaItem.appendChild(gridWeight);

            const gridPrice = document.createElement('div');
            gridPrice.classList.add('grid-price');

            pizza.prices.forEach(price => {
                const priceH1 = document.createElement('h1');
                priceH1.textContent = price;
                gridPrice.appendChild(priceH1);
            });
            pizza.prices.forEach(price => {
                const priceUnit = document.createElement('h1');
                priceUnit.style.fontSize = 'smaller';
                priceUnit.textContent = 'грн.';
                gridPrice.appendChild(priceUnit);
            });

            pizzaItem.appendChild(gridPrice);

            const gridBuy = document.createElement('div');
            gridBuy.classList.add('grid-buy');

            pizza.prices.forEach(() => {
                const buyButton = document.createElement('button');
                buyButton.textContent = 'Купити';
                gridBuy.appendChild(buyButton);
            });

            pizzaItem.appendChild(gridBuy);

            gridContainer.appendChild(pizzaItem);
        }

        gridContainer.appendChild(pizzaItem);

        const numPizzas = document.querySelector('.num');
        if (numPizzas) {
            numPizzas.textContent = pizzaItems;
        }

    });
}

function filterPizzas(category) {
    const filteredPizzas = pizzas.filter(pizza => pizza.categories.includes(category));
    addPizzas(filteredPizzas);
    const titlePizzas = document.querySelector('h1');
    if (titlePizzas) {
        const numPizzas = filteredPizzas.length;
        titlePizzas.innerHTML = `<h1>${category}<span class="num">${numPizzas}</span><h1>`;
    }
}

function showAllPizzas() {
    addPizzas(pizzas);
    const titlePizzas = document.querySelector('h1');
    if (titlePizzas) {
        const numPizzas = 9;
        titlePizzas.innerHTML = `<h1>Усі піци<span class="num">${numPizzas}</span><h1>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    addPizzas(pizzas);

    //Зробити кнопку активною
    function setActiveButton(button) {
        const buttons = document.querySelectorAll('.pizza-category-buttons button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    }

    const allButton = document.getElementById('filter-all');

    allButton.classList.add('active');

    document.getElementById('filter-meat').addEventListener('click', () => {
        filterPizzas("М'ясні");
        setActiveButton(event.target);
    });

    document.getElementById('filter-pineapple').addEventListener('click', () => {
        filterPizzas("З ананасами");
        setActiveButton(event.target);
    });

    document.getElementById('filter-seafood').addEventListener('click', () => {
        filterPizzas('З морепродуктами');
        setActiveButton(event.target);
    });

    document.getElementById('filter-vegan').addEventListener('click', () => {
        filterPizzas('Вега');
        setActiveButton(event.target);
    });

    document.getElementById('filter-mushrooms').addEventListener('click', () => {
        filterPizzas('З грибами');
        setActiveButton(event.target);
    });

    document.getElementById('filter-all').addEventListener('click', () => {
        showAllPizzas();
        setActiveButton(allButton);
    });
});