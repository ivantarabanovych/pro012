function generateUniqueId(){
    let idCounter = 0;

    return function(){
        idCounter +=1;
        return `id_${idCounter}`;
    };
}

const getUniqueId = generateUniqueId();

console.log(getUniqueId());
console.log(getUniqueId());
console.log(getUniqueId());
console.log(getUniqueId());
