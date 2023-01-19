const regex = /\b(Apple)+\b/g;

const str = 'Apple Orange Apple Banana Apple Orange Apple';

for (const match of str.matchAll(regex)) {
    console.table(match);
}