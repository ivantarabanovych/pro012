function calculateDiscount(discountPercent){
    return function(shopAmount){
        return shopAmount * discountPercent / 100;
    };
}

const discount10 = calculateDiscount(10);
const discount20 = calculateDiscount(20);

const shopAmount1 = 100;
const shopAmount2 = 400;

console.log(`знижка 10% на ${shopAmount1} грн: ${discount10(shopAmount1)} грн`);
console.log(`знижка 20% на ${shopAmount2} грн: ${discount20(shopAmount2)} грн`);
