import { formatProductName } from '../utils/helpers'

async function getProducts() {
    const reponse = await fetch('https://boisetuxedoshop.azurewebsites.net/api/products');
    const data = await reponse.json();
    for (let product of data) {
        if (product.type === 'TuxedoSuit') {
            product.formattedName = formatProductName(product.name);
        }
        if (product.keyFeatures) {
            product.keyFeatures = product.keyFeatures.split(',');
        }
    }
    return data;
}

async function getProduct(id) {
    const response = await fetch(`https://boisetuxedoshop.azurewebsites.net/api/products/${id}`);
    const data = await response.json();
    if (data.keyFeatures) {
        data.keyFeatures = data.keyFeatures.split(',');
    }
    return data;
}

export { getProducts, getProduct };