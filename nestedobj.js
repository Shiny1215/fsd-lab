const person = {
    name: 'Shiny',
    address: {
        street: '123 Main St',
        city: 'Hyderabad',
        zip: '502001'
    },
    age: 20
};
const { 
    address: 
    { street, city } 
} = person;

console.log(street);
console.log(city); 
