// Bai 1
function isEvenNumber(number) {
    if (number % 2 === 0) {
        return true
    }
    return false
}

console.log(isEvenNumber(10)); // Kết quả mong đợi: true
console.log(isEvenNumber(7));  // Kết quả mong đợi: false


// Bai 2
function getElectricityBill(kwh) {
    let total = 0;
    if (kwh > 400) {
        total += (kwh - 400) * 2927;
        kwh = 400;
    }
    if (kwh > 300) {
        total += (kwh - 300) * 2834;
        kwh = 300;
    }
    if (kwh > 200) {
        total += (kwh - 200) * 2536;
        kwh = 200;
    }
    if (kwh > 100) {
        total += (kwh - 100) * 2014;
        kwh = 100;
    }
    if (kwh > 50) {
        total += (kwh - 50) * 1734;
        kwh = 50;
    }
    if (kwh > 0) {
        total += kwh * 1678;
    }
    return total;
}

console.log(getElectricityBill(70)); 
// Mong đợi: (50 * 1678) + (20 * 1734) = 118580
console.log(getElectricityBill(120)); 
// Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880


// Bai 3
function cleanName(name, keyword) {
    let clean = name.trim().toLowerCase();
    let key = keyword.toLowerCase();
    return clean.includes(key);
}

console.log(cleanName('   NGUYEN Van An   ', 'an')); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(cleanName('   Tran Thi B ', 'hoang'));   // Mong đợi: false