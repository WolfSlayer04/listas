/**
 * Ejercicio 1: Manejo de productos disponibles y retirados.
 * Esta sección administra una lista de productos con cantidades y precios, 
 * permitiendo agregar productos aleatoriamente y retirarlos.
 */
let availableProducts = []; // Productos disponibles en la tienda
let removedProducts = []; // Productos que han sido retirados
let productCounter = 1; // Contador para asignar nombres únicos a los productos

/**
 * Agrega un producto con cantidad y precio aleatorios a la lista de productos disponibles.
 */
function addProduct() {
    let quantity = Math.floor(Math.random() * 10) + 1;
    let price = Math.floor(Math.random() * 100) + 1;
    let product = { name: `Producto${productCounter}`, quantity: quantity, price: price };
    availableProducts.push(product);
    productCounter++;
    displayAvailableProducts(); // Muestra los productos actualizados
}

/**
 * Retira el último producto de la lista de productos disponibles y lo mueve a la lista de retirados.
 */
function removeProduct() {
    if (availableProducts.length > 0) {
        let removed = availableProducts.pop();
        removedProducts.push(removed);
        displayAvailableProducts();
        displayRemovedProducts();
    }
}

/**
 * Muestra la lista de productos disponibles en el DOM.
 */
function displayAvailableProducts() {
    let list = document.getElementById('availableProducts');
    list.innerHTML = '';
    availableProducts.forEach(product => {
        list.innerHTML += `<li>${product.name} - Cantidad: ${product.quantity}, Precio: $${product.price}</li>`;
    });
}

/**
 * Muestra la lista de productos retirados en el DOM.
 */
function displayRemovedProducts() {
    let list = document.getElementById('removedProducts');
    list.innerHTML = '';
    removedProducts.forEach(product => {
        list.innerHTML += `<li>${product.name}</li>`;
    });
}


/**
 * Ejercicio 2: Separación de números pares e impares.
 * Esta sección genera 10 números aleatorios y los separa en listas de números pares e impares.
 */
function generateRandomNumbers() {
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 100);
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    }
    displayEvenNumbers(evenNumbers);
    displayOddNumbers(oddNumbers);
}

/**
 * Muestra la lista de números pares en el DOM.
 */
function displayEvenNumbers(numbers) {
    let list = document.getElementById('evenNumbers');
    list.innerHTML = '';
    numbers.forEach(num => {
        list.innerHTML += `<li>${num}</li>`;
    });
}

/**
 * Muestra la lista de números impares en el DOM.
 */
function displayOddNumbers(numbers) {
    let list = document.getElementById('oddNumbers');
    list.innerHTML = '';
    numbers.forEach(num => {
        list.innerHTML += `<li>${num}</li>`;
    });
}


/**
 * Ejercicio 3: Gestión de estudiantes aprobados y reprobados.
 * Permite agregar alumnos con su calificación y los clasifica en aprobados o reprobados.
 */
let students = [];

/**
 * Agrega un estudiante con su nombre y calificación, luego actualiza la lista de aprobados y reprobados.
 */
function addStudent() {
    let name = document.getElementById('studentName').value;
    let grade = parseFloat(document.getElementById('studentGrade').value);
    if (name && !isNaN(grade)) {
        let student = { name: name, grade: grade };
        students.push(student);
        displayStudents(); // Actualiza la visualización de estudiantes
    }
}

/**
 * Muestra las listas de estudiantes aprobados y reprobados en el DOM.
 */
function displayStudents() {
    let approved = students.filter(student => student.grade >= 7);
    let failed = students.filter(student => student.grade < 7);

    let approvedList = document.getElementById('approvedStudents');
    let failedList = document.getElementById('failedStudents');
    approvedList.innerHTML = '';
    failedList.innerHTML = '';

    approved.forEach(student => {
        approvedList.innerHTML += `<li>${student.name} - Calificación: ${student.grade}</li>`;
    });

    failed.forEach(student => {
        failedList.innerHTML += `<li>${student.name} - Calificación: ${student.grade}</li>`;
    });
}

/**
 * Ejercicio 4: Manejo de productos en una tienda.
 * Permite agregar, eliminar y ordenar productos por nombre, y calcula el costo total.
 */
let storeProducts = [];
let productId = 1; // ID único para cada producto

/**
 * Agrega un producto a la tienda con su nombre y precio.
 */
function addStoreProduct() {
    let name = document.getElementById('productName').value;
    let price = parseFloat(document.getElementById('productPrice').value);
    
    if (name && !isNaN(price)) {
        // Añadir el nuevo producto a la lista
        storeProducts.push({ id: productId, name: name, price: price });
        productId++; // Incrementar el ID para el próximo producto
        
        // Limpiar los campos de entrada
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        
        // Actualizar la lista de productos y el costo total
        displayStoreProducts();
    } else {
        alert('Por favor, ingresa un nombre de producto válido y un precio numérico.');
    }
}

/**
 * Elimina un producto de la tienda con base en su ID.
 */
function deleteStoreProduct() {
    let deleteKey = parseInt(document.getElementById('deleteProductKey').value);
    
    if (!isNaN(deleteKey)) {
        // Filtrar los productos para eliminar el que coincida con el ID
        storeProducts = storeProducts.filter(product => product.id !== deleteKey);
        
        // Limpiar el campo de entrada
        document.getElementById('deleteProductKey').value = '';
        
        // Actualizar la lista de productos
        displayStoreProducts();
    } else {
        alert('Por favor, ingresa un ID de producto válido.');
    }
}

/**
 * Ordena los productos por nombre alfabéticamente y los muestra en el DOM.
 */
function sortProducts() {
    storeProducts.sort((a, b) => a.name.localeCompare(b.name));
    displayStoreProducts(); // Actualiza la lista de productos ordenados
}

/**
 * Muestra la lista de productos en la tienda y el costo total en el DOM.
 */
function displayStoreProducts() {
    let list = document.getElementById('storeProductList');
    let totalCost = 0;
    
    // Limpiar la lista actual antes de actualizar
    list.innerHTML = '';
    
    // Recorrer los productos y agregarlos al HTML
    storeProducts.forEach(product => {
        list.innerHTML += `<li>ID: ${product.id} - ${product.name} - Precio: $${product.price.toFixed(2)}</li>`;
        totalCost += product.price; // Sumar el costo total
    });
    
    // Mostrar el costo total en el DOM
    document.getElementById('totalCost').textContent = `Costo total: $${totalCost.toFixed(2)}`;
}


/**
 * Ejercicio 5: Listar palabras por letra inicial.
 * Almacena palabras ingresadas y las agrupa por su primera letra.
 */
let wordMap = {};

/**
 * Añade una palabra al mapa de palabras agrupadas por la letra inicial.
 */
function addWord() {
    let word = document.getElementById('wordInput').value;
    if (word) {
        let firstLetter = word[0].toLowerCase();
        if (!wordMap[firstLetter]) {
            wordMap[firstLetter] = [];
        }
        wordMap[firstLetter].push(word);
        displayWordLists(); // Actualiza la visualización de las palabras agrupadas
    }
}

/**
 * Muestra las listas de palabras agrupadas por letra inicial en el DOM.
 */
function displayWordLists() {
    let wordLists = document.getElementById('wordLists');
    wordLists.innerHTML = '';
    for (let letter in wordMap) {
        let wordList = `<h4>Palabras que empiezan con '${letter.toUpperCase()}':</h4><ul>`;
        wordMap[letter].forEach(word => {
            wordList += `<li>${word}</li>`;
        });
        wordList += '</ul>';
        wordLists.innerHTML += wordList;
    }
}
