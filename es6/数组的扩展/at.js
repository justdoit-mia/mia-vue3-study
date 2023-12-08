const arr = [5, 12, 8, 130, 44];
arr.at(2) // 8
arr.at(-2) // 130

const sentence = 'This is a sample sentence';

sentence.at(0); // 'T'
sentence.at(-1); // 'e'

sentence.at(-100) // undefined
sentence.at(100) // undefined