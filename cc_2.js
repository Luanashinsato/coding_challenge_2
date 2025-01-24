// Task 1: Working with Arrays 
let products = ["Tshirt", "Pants", "Hoodie", "Hat", "Shoes"];
products.push("Jacket");
products.pop();
console.log("Updated Product List:", products);

// Task 2: Accessing and Modifying Arrays
let scores = [95, 80, 92, 77, 86];
scores[1] = 85;
console.log("Updated scores:", scores);
let total = scores.reduce((sum, score)=> sum + score, 0);
let average = total/scores.length;
console.log ("Average score:", average);

//Task 3: Working with Objects
let employee = {
    name: "Luana Shinsato",
    age: 26,
    department: "Sales",
    isActive: true
}
employee.department = "Marketing";
employee.position = "Team Lead";
console.log("Updated Employee Record:", employee);

//Task 4: Array of Objects
let customers = [
    { name: "Olivia Martinez", email: "olivia.martinez@example.com", purchaseAmount: 140 },
    { name: "Santiago Smith", email: "santiago.smith@example.com", purchaseAmount: 75 },
    { name: "Emma Carter", email: "emma.carter@example.com", purchaseAmount: 115 }
];
customers.push({ 
    name: "Harry Williams", 
    email: "harry.williams@example.com", 
    purchaseAmount: 150
  });
console.log("Customers List:", customers)
