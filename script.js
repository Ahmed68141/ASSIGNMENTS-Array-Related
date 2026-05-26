//  🟢 Level 1 — Asaan
// Q1 → Ye array banao aur teesra element print karo:

console.log( "Q1:");

let fruits =["Apple", "Mango", "Banana", "Orange"]
console.log(fruits[2]);



console.log( "Q2:");

// Q2 → Is array ki length nikalo:
let num = [10, 20, 30, 40, 50];
console.log(num.length);

console.log( "Q3:");



// 3 → Is array mein "Grapes" add karo end mein:
let fruits2 = ["Apple", "Mango"];
fruits2.push("Grapes")
console.log(fruits2);

console.log( "Q4:");

// Q4 → Is array ka pehla element (purple) add karo aur aakhri element delete karo:
let colors = ["Red", "Green", "Blue", "Yellow"];
colors.unshift("purple");
colors.pop();
console.log(colors);

console.log( "Q5:");


// 🟡 Level 2 — Thoda Mushkil
// Q5 → map use karke har number ko 3 se multiply karo:
let nums2 = [2, 4, 6, 8];
let n = nums2.map(function (val) {
    return val * 3
})
console.log(n);


console.log( "Q6;");


// Q6 → filter use karke sirf 50 se zyada wale nikalo:
let marks = [45, 78, 32, 91, 55];
let m = marks.filter(function (val) {
    return val > 50
})
console.log(m);


console.log( "Q7:");


// Q7 → forEach use karke har naam ko print karo:
let names = ["Ali", "Sara", "Zain", "Hina"]; 
let naam = names.forEach(function (val) {
   console.log(val);
    
})


console.log( "Q8:");


// Q8 → find use karke pehla even number dhundho:
let even = [3, 7, 2, 8, 5];
let f = even.find(function (val) {
    return val%2 === 0;
})
console.log(f);


console.log( "Q9:");


// Q9 → reduce use karke sab ka sum nikalo:
let sum = [5, 10, 15, 20];
let s = sum.reduce(function (a,b) {
    return a + b;
},0);
console.log(s);


console.log( "Q10:");


// Q10 → some use karke check karo kya koi negative number hai:
let neg = [3, 7, -2, 8, 5];
let negative = neg.some(function (val) {
    return val < 0;
})
console.log(negative);

console.log( "Q11:");


// Q11 → every use karke check karo kya sab numbers even hain:
let check = [2, 4, 6, 8];
let ch = check.every(function (val) {
    return val % 2 === 0
})
console.log(ch);


console.log( "Q12:");



// Q12 → map aur filter saath use karo:
// Pehle sirf odd nikalo
// Phir unhe double karo
let double = [1, 2, 3, 4, 5];
let d = double.filter(function (val) {
    return val%2 !== 0;
})
console.log(d);
let use_d = d.map(function (val) {
    return val * 2
}) 
console.log(use_d);


console.log( "Q13:");


// 🔴 Level 4 — Advanced
// Q13 → Is array of objects se sirf pass students ke 
// naam nikalo filter aur map se:
// 50 se zyada = pass
let students = [
  { naam: "Ali",  marks: 45 },
  { naam: "Sara", marks: 78 },
  { naam: "Zain", marks: 33 },
  { naam: "Hina", marks: 91 },
];
let ps = students.filter(function (students) {
  return students.marks > 50;
})
.map(function (students) {
    return students.naam
});
console.log(ps);

console.log( "Q14:");


// Q14 → reduce use karke sabse chota number nikalo:
let small = [8, 3, 11, 1, 9];
let sm = small.reduce(function (a,b) {
    if (a < b) {
        return a
    }else{
        return b
    }
})
console.log(sm);

console.log( "Q15:");


// Q15 → reduce use karke count karo kitne log 18 se zyada umar ke hain:
let users = [
  { naam: "Ali",  umar: 15 },
  { naam: "Sara", umar: 22 },
  { naam: "Zain", umar: 19 },
  { naam: "Hina", umar: 14 },
];

let u = users.reduce(function (a,b) {

    
       if (b.umar > 18) {
        return a + 1;
       }else{
        return a
       }
   
    
},0);
console.log(u);









