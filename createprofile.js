function createProfile({ name, email }) {
    return { name, email };
}
const profile = { name: 'John', age: 30, email: 'john@example.com', address: '123 Street' };
console.log(createProfile(profile));
