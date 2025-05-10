"use strict"
//Array

//HWTask#14
// const students = ["דני", "נועה", "רן", "תמר"];
// students.forEach(function(stu){
//   console.log("שלום, "+stu+"! בהצלחה במבחן!")
// })

//HWTask#15
// תוצאה: [28.57, 71.43, 21.43, 91.43]
// const pricesILS = [100, 250, 75, 320];
// const pricesDL = pricesILS.map(function(item){
//   return item/3.5
// })
// console.log(pricesDL)

//HWTask#16
// const users = [
//   { username: "Tom", isLoggedIn: true },
//   { username: "Jerry", isLoggedIn: false },
//   { username: "Spike", isLoggedIn: true }
// ];
// const newArr = users.filter(function(item){
//   if(item.isLoggedIn)
//     return true
// })
// console.log(newArr)

//HWTask#17
// const products = [
//   { name: "Book", quantity: 3 },
//   { name: "Pen", quantity: 0 },
//   { name: "Notebook", quantity: 5 }
// ];
// console.log(products.some(function(item){
//   if(item.quantity ==0)
//     return true
// }))

//HWTask#18
// const grades = [72, 85, 90, 67, 58];
// console.log(grades.every(function(item){
//   if(item >= 60 )
//     return true
// }))

//HWTask#19
// const employees = [
//   { name: "Sharon", salary: 9500 },
//   { name: "David", salary: 7800 },
//   { name: "Lior", salary: 12000 }
// ];

// function getHighEarners(employees) {
//   return employees
//     .filter(function (item) {
//       return item.salary > 8000;
//     })
//     .map(function (item) {
//       return item.name.toUpperCase();
//     });
// }

// console.log(getHighEarners(employees));


//HWTask#20
// const books = [
//   { title: "Book A", pages: 450 },
//   { title: "Book B", pages: 520 },
//   { title: "Book C", pages: 600 }
// ];

// const newArr = books.filter(function (item) {
//   if (books.some(function (book) { return book.pages < 500 })) {
//     return item.pages > 500;
//   }
// });

// console.log(newArr);

