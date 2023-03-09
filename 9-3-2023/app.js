//-----------------------------------Assignment-------------------------------------------//
//Question No 1:
//Answer:
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");
//Question No 2:
//Answer:
// var phoneModel = prompt("What is your favorite mobile phone model?");
// var length = phoneModel.length;
// document.write("The length of your favorite mobile phone model is: " + length);
//Question No 3:
//Answer:
// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("The index of 'n' in the word 'Pakistani' is: " + index);
//Question No 4:
//Answer:
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);
//Question No 5:
//Answer:
// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);
//Question No 6:
//Answer:
// var word = "Pakistani";
// var character = word.charAt(3);
// var result = "The character at the 3rd index in the word 'Pakistani' is: ".concat(character);
// document.write(result);
//Question No 7:
//Answer:
// var word = "Hyderabad";
// var newWord = word.replace("Hyder", "Islam");
// document.write("The new word after replacement is: " + newWord);
//Question No 8:
//Answer:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write("The new message after replacement is: " + newMessage);
//Question No 9:
//Answer:
// var str = "472";
// var num = Number(str);
// document.write("The value of the string is: " + str + "<br>");
// document.write("The type of the string is: " + typeof(str) + "<br>");
// document.write("The value of the number is: " + num + "<br>");
// document.write("The type of the number is: " + typeof(num));
//Question No 10:
//Answer:
// var userInput = prompt("Enter some text:");
// var uppercaseInput = userInput.toUpperCase();
// document.write("The uppercase version of your input is: " + uppercaseInput);
//Question No 11:
//Answer:
// var userInput = prompt("Enter some text:");
// var words = userInput.split(" ");
// var titleCaseInput = "";
// for (var i = 0; i < words.length; i++) {
//   var word = words[i].toLowerCase();
//   titleCaseInput += word.charAt(0).toUpperCase() + word.slice(1) + " ";
// }
// document.write("The title case version of your input is: " + titleCaseInput);
//Question No 12:
//Answer:
// var num = 35.36;
// var str = num.toString();
// var result = str.replace(".", "");
// document.write("The original number is: " + num + "<br>");
// document.write("The string version of the number is: " + str + "<br>");
// document.write("The number with dot removed is: " + result);
//Question No 13:
//Answer:
// var username = prompt("Enter your username:");

// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//   alert("Please enter a valid username without any special symbols [@ . , !]");
// } else {
//   document.write("Welcome " + username);
// }
//Question No 14:
//Answer:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter item to search:");
// var isFound = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     isFound = true;
//     break;
//   }
// }

// if (isFound) {
//   alert(userInput + " is found in the list.");
// } else {
//   alert(userInput + " is not found in the list.");
// }
//Question No 15:
//Answer:
// var password = prompt("Enter your password:");

// var hasAlphabetsAndNumbers = /[a-zA-Z].*[0-9]|[0-9].*[a-zA-Z]/.test(password);
// var startsWithAlphabets = /^[a-zA-Z]/.test(password);
// var isAtLeast6CharsLong = password.length >= 6;

// if (!hasAlphabetsAndNumbers || !startsWithAlphabets || !isAtLeast6CharsLong) {
//   alert("Please enter a valid password that meets the following requirements:\n- It should contain alphabets and numbers\n- It should not start with a number\n- It must be at least 6 characters long");
// } else {
//   alert("Your password is valid!");
// }
//Question No 16:
//Answer:
// var university = "University of Karachi";
// var arr = university.split(" ");
// console.log(arr);
//Question No 17:
//Answer:
// var userInput = prompt("Enter a string:");
// var lastChar = userInput[userInput.length - 1];

// console.log("Last character: " + lastChar);
//Question No 18:
//Answer:
// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;

// str.split(" ").forEach(function(word) {
//   if (word.toLowerCase() === "the") {
//     count++;
//   }
// });

// console.log("Number of occurrences of 'the': " + count);





