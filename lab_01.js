// taskl 1
function addition(a, b) {
    return a + b;
}
console.log("Task 1:", addition(5, 10));

// task 2
function bitwiseAND(a, b) {
    return a & b;
}
function bitwiseOR(a, b) {
    return a | b;
}
function bitwiseXOR(a, b) {
    return a ^ b;
}
console.log("Task 2 AND (5 & 3):", bitwiseAND(5, 3)); 
console.log("Task 2 OR (5 | 3):", bitwiseOR(5, 3));   
console.log("Task 2 XOR (5 ^ 3):", bitwiseXOR(5, 3)); 

//task 3
function addUp(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log("Task 3:", addUp(4));

//task 4
function progressBar(a) {
    let filledSlots = Math.floor(a / 10); 
    let emptySlots = 10 - filledSlots;
    
    let bar = "";
    for (let i = 0; i < filledSlots; i++) {
        bar += "#";
    }
    for (let i = 0; i < emptySlots; i++) {
        bar += "-";
    }
    return bar;
}

console.log("Task 4 (40%):", progressBar(40)); 
console.log("Task 4 (49%):", progressBar(49)); 

//task 5
function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
}

console.log("Task 5:", minMax([1, 2, 3, 4, 5, 6]));

//task 6
function calculateReposStats(repos) {
    let starsArray = repos.map(function(repo) {
        return repo.stars;
    });

    let maxStars = Math.max(...starsArray);
    let minStars = Math.min(...starsArray);
    
    let sum = 0;
    for (let i = 0; i < starsArray.length; i++) {
        sum += starsArray[i];
    }
    let avgStars = Math.floor(sum / starsArray.length);
    let varianceScore = maxStars - minStars;

    return { maxStars, minStars, avgStars, varianceScore };
}

const repos = [{ stars: 12 }, { stars: 45 }, { stars: 3 }];
console.log("Task 6:", calculateReposStats(repos)); 


//task 7
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
    let discountedPrice = basePrice * (1 - (discountPercentage / 100));
    let priceWithTax = discountedPrice * (1 + (taxRate / 100));
    let finalPrice = Math.round(priceWithTax * 100) / 100;
    let loyaltyPoints = Math.ceil(finalPrice);
    
    return { finalPrice, loyaltyPoints };
}

console.log("Task 7:", calculateFinalPrice(100, 10, 20)); 

//task 8
function paginateData(items, pageNumber, pageSize = 5) {
    let totalItems = items.length;
    let totalPages = Math.ceil(totalItems / pageSize);

    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    let data = items.slice(startIndex, endIndex);

    let hasNext = pageNumber < totalPages;
    let hasPrev = pageNumber > 1;

    return { data, currentPage: pageNumber, totalPages, hasNext, hasPrev };
}

const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk', 'Chair', 'Webcam', 'Headphones'];
console.log("Task 8:", paginateData(allProducts, 2, 3));