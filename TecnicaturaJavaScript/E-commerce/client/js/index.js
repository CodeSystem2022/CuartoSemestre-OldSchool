const shopContent = document.getElementById("shopContent");
const cart = [];

productos.forEach(product => { // Cambié la sintaxis del forEach
    const content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p class="price">${product.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button"); // Cambié "buyBotton" a "buyButton" para que coincida con la variable posteriormente usada.
    buyButton.innerText = "Comprar";

    content.append(buyButton);

    buyButton.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            cart.forEach((prod) => { // Cambié "map" a "forEach" para actualizar el carrito correctamente.
                if (prod.id === product.id) {
                    prod.quanty++;
                }
            });
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: 1, // Inicializar la cantidad en 1 si el producto es nuevo
                img: product.img,
            });
        }
    });
});
