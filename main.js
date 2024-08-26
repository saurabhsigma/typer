const { faker } = require('@faker-js/faker');// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

console.log(randomEmail);
console.log(randomName)