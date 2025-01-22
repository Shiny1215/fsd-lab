function createProfile({ name, age, interests }) {
    const [primaryInterest, secondaryInterest] = interests;
    return { name, age, primaryInterest, secondaryInterest };
}
const userInfo = { name: 'John', age: 25, interests: ['Reading', 'Traveling', 'Cooking'] };
console.log(createProfile(userInfo));
