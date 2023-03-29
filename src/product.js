let productList = document.querySelector('#productList');

/*** Buttons ***/
let classicCars = document.querySelector('#classicCars');
let motorCycles = document.querySelector('#motorCycles');
let planes = document.querySelector('#planes');
let ships = document.querySelector('#ships');
let trains = document.querySelector('#trains');
let truckAndBuses = document.querySelector('#truckAndBuses');
let vintageCars = document.querySelector('#vintageCars');

/*** Functions ***/
fetch('http://localhost:3000/products')
.then(res => res.json())
.then(data => {
    printProducts(data, classicCars, 'Classic Cars');
    printProducts(data, motorCycles, 'Motorcycles');
    printProducts(data, planes, 'Planes');
    printProducts(data, ships, 'Ships');
    printProducts(data, trains, 'Trains');
    printProducts(data, truckAndBuses, 'Trucks and Buses');
    printProducts(data, vintageCars, 'Vintage Cars');
});

function printProducts(products, button, productLine) {
    button.addEventListener('click', () => {
        productList.innerHTML = '';
        let filteredProducts = products.filter(product => product.productLine === productLine);

        filteredProducts.map(product => {
            let li = document.createElement('li');
            li.id = product.productCode;
            li.innerText = `${product.productName} | ${product.productLine}  `;
            productList.appendChild(li);
        });
    });
}