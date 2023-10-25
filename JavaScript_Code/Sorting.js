const numbers = [5, 2, 9, 1, 5, 6];

// Using a custom sorting function to sort in descending order.
numbers.sort(function(a, b) {
    return b - a;
});

console.log("Sorted array in descending order: " + numbers);
