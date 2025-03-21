// fiction db
const users = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: 18 + (i % 50),                                 // Возраст от 18 до 67
    city: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"][i % 5]
}));


export default users;