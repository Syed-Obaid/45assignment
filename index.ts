// 45 Assignment

// Qno:2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

// let personName:string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`)

//==================================================================================================

// Qno:3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let personName:string = "Syed Obaid";

// //inlowercase
// console.log("LowerCase :", personName.toLowerCase())

// // inuppercase
// console.log("UpperCase :",personName.toUpperCase())

// // intitlecase
// console.log("TitleCase :",personName.replace(/\b\w/g,c=> c.toUpperCase()))

//==================================================================================================

// Qno:4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// let quote:string = "A person who never made a mistake never tried anything new";
// let author:string = "Albert Einstein";

// console.log(`${author} once said, ${quote}`)

//==================================================================================================

// Qno:5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// let quote:string = "A person who never made a mistake never tried anything new";
// let famous_person:string = "Albert Einstein";
// let message:string = `${famous_person} once said, ${quote}`
// console.log(message) 

//==================================================================================================

// Qno:6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// let personName:string = "\t\n   Syed Obaid   \t\n"
// console.log("Original :", personName)
// console.log("Stripped :", personName.trim())

//==================================================================================================

// Qno:7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Qno:8 You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

// console.log(5 + 3)
// console.log(10 - 2)
// console.log(4 * 2)
// console.log(16 / 2)

//==================================================================================================

// Qno:9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// let favoriteNumber:number = 7;
// console.log(`My Favorite Number is ${favoriteNumber}`)

//==================================================================================================

// Qno:10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Author : [ Syed Obaid ]
//Date : [ Friday , April 26 , 2024 ]

// TAsk 9 : Printing My Favorite Number
// let favoriteNumber:number = 7;
// //Reveling my favorite number in a message format.
// console.log(`My Favorite Number is ${favoriteNumber}`)

//==================================================================================================

// Qno:11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// let names:string[] = ["Shaukat","Puneet","Sultan","Obama"]
// console.log(names)
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])

//==================================================================================================

// Qno:12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// let names:string[] = ["Shaukat","Puneet","Sultan","Obama"]
// let message:string = "Do You Like To Play Cricket?"
// console.log(names[0]+ " " + message)
// console.log(names[1]+ " " + message)
// console.log(names[2]+ " " + message)
// console.log(names[3]+ " " + message)

//==================================================================================================

// Qno:13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// let transportation:string[] = ["Honda MotorCycle","Audi","Corolla","Elantra"]
// transportation.map((Element) => console.log(`I Would Like To Own A ${Element}`))

//==================================================================================================

// Qno:14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// let guestList:string[] = ["Bhopinder jogi","Haji Naveed","Bhanu Pratab"];
// guestList.map((elem) => console.log(`Mr ${elem} , Your Invited To The Dinner!`))

//==================================================================================================

// Qno:15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// 1
// let guestList:string[] = ["Bhopinder jogi","Haji Naveed","Bhanu Pratab"];
// let canNotAttend:string = guestList[1];
// console.log(`Mr ${canNotAttend} Can Not Attend The Dinner!`)
// // 2
// let newGuest:string = "Elvish Bhai";
// guestList[guestList.indexOf(canNotAttend)] = newGuest;
// console.log(guestList)
// // 3
// guestList.map((elem)=> console.log(`Mr ${elem} , Your Invited To The Dinner!`))

//==================================================================================================

// Qno:16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.

// let guestList:string[] = ["Bhopinder jogi","Haji Naveed","Bhanu Pratab"];
// // 1
// guestList.map((elements)=>console.log(`Mr ${elements} , I Found A Bigger Dinner Table. So I Am Invited More Peoples`))
// // 2
// guestList.unshift("Surya")
// console.log(guestList)
// // 3
// let arrlength:number=guestList.length
// console.log(arrlength)
// guestList.splice(2,0,"Laddan Jaffery")
// console.log(guestList)
// // 4
// guestList.push("Shera")
// console.log(guestList)
// // 5
// guestList.map((elems)=>console.log(`Mr ${elems} , Your Invited With The More Peoples List On Dinner `))

//==================================================================================================

// Qno:17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// let guestList:string[] = ["Bhopinder jogi","Haji Naveed","Bhanu Pratab","Elvish Bhai","Suriya"];
// //informing that only two people can be invited
// // console.log("Dur To Limited Space, Only Two people Can Be Invited For Dinner.")

// // Removing guest
// while(guestList.length > 2){
//     const removeGuest =guestList.pop();
//     console.log(`Sorry ${removeGuest}, You're No Longer Invited To Dinner.`)
// }

// //Printing Invitations

// guestList.forEach((guest)=> console.log(`Mr ${guest}, You're Still Invited To Dinner.`))

// //Removing The Last Two
// guestList.pop()
// guestList.pop()

// //Printing The Final List 
// console.log(`Final Guest List ${guestList}`) 

//==================================================================================================

// Qno:18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// let placeToVisit :string[] = ["Pakistan","India","Australia","Turkey","America"]
// console.log("Original :",placeToVisit)

// //Print the array in Alphabetic order
// console.log("Alphabetical order :" ,[ ...placeToVisit].sort())

// //array is still in original order
// console.log("Original Order After Sorting :",placeToVisit)

// //print the Array in reverse alphabetic order without changing the original list

// console.log("Reverse Alphabetical Order :", [...placeToVisit].sort().reverse())

// //array is still in its original order
// console.log("Original order After Reverse Sorting :",placeToVisit)

// //reverse the order of the list
// placeToVisit.reverse()
// console.log("Reversed Order :",placeToVisit)

// //reverse the order of the list to get back its original order
// placeToVisit.reverse()
// console.log("Back To Original Order :",placeToVisit)

// //sort the arrat in Alphabetic order
// placeToVisit.sort()
// console.log("Sorted In Alphabetical Order :",placeToVisit)

// //sort the array in reverse alphabetic order
// placeToVisit.sort((a,b)=> b.localeCompare(a))
// console.log("Sorted In Reverse Alphabetical Order :",placeToVisit)

//==================================================================================================

// Qno:19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


// let guestList:string[] = ["Bhopinder jogi","Haji Naveed","Bhanu Pratab"];
// console.log(guestList.length , "People Are Invited To Dinner")

//==================================================================================================

// Qno:20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// let cities:string[] = ["Karachi","Islamabad","Lahore","Rawalpindi","Peshawar"]
// console.log("List OF Cities :")
// cities.map((city)=>console.log(city))

//==================================================================================================

// Qno:21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// let obj :{fName: string ,lName: string , age: number} = {fName: "syed", lName: "Obaid" , age: 22}
// console.log(obj)

//==================================================================================================

// Qno:22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// let days:string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// //error
// // console.log(days{8})
// console.log(days[5])

//==================================================================================================

// Qno:23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// let car:string = "subaru";

// console.log("Is car == 'subaru'? Show true")
// console.log(car == "subaru")
// console.log("Is car != 'Audi'? Show true")
// console.log(car != "Audi")
// console.log("Is car == 'Subaru'? Show false")
// console.log(car == "Subaru")
// console.log("Is car == 'SUBARU'? Show false")
// console.log(car == "SUBARU")
// console.log("Is car.length == 6 ? show true")
// console.log(car.length == 6)
// console.log("Is car.length == 9 ? show false")
// console.log(car.length == 9)
// console.log("Is car.length != 4 ? show true")
// console.log(car.length == 4)
// console.log("Is car.length != 6 ? show false")
// console.log(car.length != 6)
// console.log("Is 4 < 1 ? show false")
// console.log(4 < 1)
// console.log("Is 4 > 1 ? show true")
// console.log(4 > 1)

//==================================================================================================

// Qno:24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//equality and inequaity
// let name1:string = "Obaid";
// let name2:string = "Syed Obaid";
// let name3:string = "Syed Obaid-Ullah";

// if(name1 == name3){
//     console.log("Names are equal")
// }else{
//     console.log("Names are not equal")
// }

// if(name1 != name2){
//     console.log("Names are equal")
// }else{
//     console.log("Names are not equal")
// }

//lower case function

// if(name1 != name2){
//     console.log("Names are equal")
// }else{
//     console.log("Names are not equal")
// }

//numerical 

// let age1:number = 20;
// let age2:number = 22;

// if(age1 == 22){
//     console.log("Your Allowed To Ride")
// }else{
//     console.log("Not Allow")
// }

// if(age1 != 22){
//     console.log("Your highly recommended to Allow for ride")
// }else{
//     console.log("Don't Allow")
// }
// if(age1 <= age2){
//     console.log("Younger")
// }else{
//     console.log("older")
// }
// if(age2 >= age1){
//     console.log("Older")
// }else{
//     console.log("younger")
// }

// //and or operator
// if(age1 == 20 && age2 == 22){
//     console.log("Your Allowed to ride bike")
// }else{
//     console.log("Not Allowed")
// }

// if(age1 == 20 || age2 != 22){
//     console.log("Your Allowed to ride bike")
// }else{
//     console.log("Not Allowed")
// }

//test whether an items is in array

// let cities:string[] = ["Karachi","Islamabad","Lahore","Rawalpindi","Peshawar"]
// if(cities.includes("Lahore")){
//     console.log("Lahore is in city list")
// }else{
//     console.log("Not Found!")
// }

// // test whether an items is not in array
// if(!cities.includes("hyderabad")){
//     console.log("Hyderabad in not in array list")
// }else{
//     console.log("result found!")
// }

//==================================================================================================

// Qno:25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


// let alien_color:string = "green";
// if(alien_color == "green"){
// console.log("You Earn the 5 Points")
// }

// let alien_color:string = "red";
// if(alien_color == "green"){
//     console.log("No Output")
// }

//==================================================================================================

// Qno:26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// let alien_color:string = "green";
// if(alien_color == "green"){
// console.log("player just earned 5 points for shooting the alien")
// }else{
//     console.log("You Earn the 10 Points")
// }


// let alien_color:string = "red";
// if(alien_color == "green"){
// console.log("player just earned 5 points for shooting the alien")
// }else{
//     console.log("You Earn the 10 Points")
// }

//==================================================================================================

// Qno:27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


// let alien_color:string = "green";
// if(alien_color == "green"){
//     console.log("player earned 5 points")
// }else if (alien_color == "yellow"){
//     console.log("player earned 10 points")
// }else if(alien_color == "red"){
//     console.log("player earned 15 points")
// }

//==================================================================================================

// Qno:28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

// let age:number = 9;

// if (age < 2){
//     console.log("You Are A Baby!")
// }else if(age < 4){
//     console.log("You Are A Toddler!")
// }else if(age < 13){
//     console.log("You Are A Kid!")
// }else if (age < 20){
//     console.log("You Are A Teenager!")
// }else if(age < 65){
//     console.log("You Are An Adult!")
// }else {
//     console.log("You Are An Elder!")
// }

//==================================================================================================

// Qno:29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// let favorite_fruits :string[] = ["Apple","Banana","Orange"]

// if(favorite_fruits.includes("Apple")){
//     console.log("Yes Apple is in favorite fruits")
// }
// if(favorite_fruits.includes("Banana")){
//     console.log("You Really Likes Bananans")
// }
// if(favorite_fruits.includes("Orange")){
//     console.log("Yes Orange is in favorite fruits")
// }
// if(favorite_fruits.includes("Grapes")){
//     console.log("You Really Likes Bananan")
// }

// if(favorite_fruits.includes("Strawberry")){
//     console.log("Strawberry")
// }

//==================================================================================================

// Qno:30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let users : string[] = ["Admin","Puneet","Eric","Heera","BHopinder jogi"]

// for(let user of users){
//    if(user === "Admin"){
//     console.log("Hello admin, would you like to see a status report?")
//    }else{
//     console.log(`Hello ${user} , thank you for logging in again `)
//    }
// }

//==================================================================================================

// Qno:31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// let users : string[] = ["Admin","Puneet","Eric","Heera","BHopinder jogi"]

// if (users.length === 0){
//     console.log("We need to find some users!")
// }else{
//     for(let user of users){
//            if(user === "Admin"){
//             console.log("Hello admin, would you like to see a status report?")
//            }else{
//                 console.log(`Hello ${user} , thank you for logging in again `)
//                }
//             }
// }
// users = []
// if (users.length === 0){
//     console.log("We need to find some users!")
// }

//==================================================================================================

// Qno:32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// let current_users : string[] = ["Admin","Puneet","Eric","Heera","BHopinder jogi"]
// let new_users : string[] = ["Admin","Raees","Adeel","Heera","Imran"]
// let current_users_lower:string[] = current_users.map((items) => items.toLowerCase())

// for(let new_user of new_users){
//     if(current_users_lower.includes(new_user.toLowerCase())){
//         console.log(`Sorry ${new_user} , that name is taken!`)
//     }else{
//         console.log(`Yes ${new_user} , is still in available list!`)
//     }
// }

//==================================================================================================

// Qno:33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. 

// let numbers:number[] =[1,2,3,4,5,6,7,8,9]

// for(let number of numbers){
//     if(number === 1){
//         console.log(`${number}st`)
//     }else if(number === 2){
//         console.log(`${number}nd`)
//     }else if(number === 3){
//         console.log(`${number}rd`)
//     }else{
//         console.log(`${number}th`)
//     }
// }

//==================================================================================================

// Qno:34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// let favorite_pizza : string[] = ["pepperoni","cheese","mushroom","margherita"];
// for(let pizza of favorite_pizza){
//     console.log(pizza)
// }
// console.log("\n")

// for(let pizza of favorite_pizza){
//     console.log(`I Like ${pizza} pizza!`)
// }
// console.log("\n I really love pizza!")

//==================================================================================================

// Qno:35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// let animals:string[]=["Donkey","Monkey","Tiger"]

// for(let animal of animals){
//     console.log(animal)
// }
// console.log("\n")
// for(let animal of animals){
//     console.log(`A ${animal} has a cute animal`)
// }
// console.log("\n all of these are good but but tiger is my favorite pet!")

//==================================================================================================

// Qno:36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function makeShirt(size:string,text:string):void {
//     console.log(`I Order a ${size} Tshirt that says ${text}`)
// }
// makeShirt("large","I Love TypeScript")
// makeShirt("Medium","I Love Programming")
// makeShirt("Small","I Love JavaScript")

//==================================================================================================

// Qno:37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. 

// function makeShirt(size:string = "Small",text:string = "i love TypeScript"):void {
//     console.log(`I Order a ${size} Tshirt that says ${text}`)
// }
// makeShirt()
// makeShirt("Medium","I Love Programming")
// makeShirt("Large","I Love JavaScript")

//==================================================================================================

// Qno:38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// function descrie_city(city:string,country:string = "Pakistan") : void {
//     console.log(`${city} Is In ${country}`)
// }
// descrie_city("Karachi")
// descrie_city("Mumbai","India")

//==================================================================================================

// Qno:39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

// function city_country(city:string,country:string):string{
//     return `${city} , in  ${country}`
// }
// console.log(city_country ("Lahore","Pakistan")) 
// let contries1 = city_country("Karachi","Pakistan")
// let countries2 = city_country("Delhi","India")

//==================================================================================================

// Qno:40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. 

// function make_Album(artist:string,title:string): {artist:string,title:string}{
//     const dictionaries= {
//         artist:artist.charAt(0).toUpperCase() + artist.slice(1),
//         title:title.charAt(0).toUpperCase() + title.slice(1)
//     }
//     return dictionaries
// }
// let album = make_Album("Ubaid","puneet")
// console.log(album)
// console.log(make_Album("Ali"," hera"))
// album= make_Album("bilal","radhey")
// console.log(album)

//==================================================================================================

// Qno:41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// function show_magicians(magicians :string[]):void{
//     for(let magician of magicians ){
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
//     }
// }
// const magicians :string[] = ["Ritik","Puneet","Shahrukh","Radhey"]
// show_magicians(magicians)

//==================================================================================================

// Qno:42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// function make_great(magicians:string[]):void{
//     for( let i = 0; i < magicians.length; i++)
//         magicians[i] = magicians[i] +" " + "The Gteat"
// }

// const magicians_name:string[] = ["Ritik","Puneet","Shahrukh","Radhey"]
// make_great(magicians_name)
// show_magicians(magicians_name)

//==================================================================================================

// Qno:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// function make_great2(magicians:string[]):string[]{
//   const greatmagicians:string[] = [];
//   for(let i =0; i< magicians.length; i++){
//     greatmagicians.push(magicians[i] + " " + "The Great")
//   }
//   return greatmagicians;
// }

// const magicians3:string[] =["Ritik","Puneet","Shahrukh","Radhey"]
// const greatmagicians2:string[] = make_great2(magicians3)
// show_magicians(magicians3)
// show_magicians(greatmagicians2)

//==================================================================================================

// Qno:44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// function sandwiches(...items:string[]):void{
//     console.log("Order of Sandwiches :")
//     for(let i = 0; i < items.length; i++){
//         console.log(`- ${items[i]}`)
//     }
// }
// sandwiches("Chicken","tomato","cheese")
// sandwiches("Beef","tomato","Mayo")
// console.log("\n")
// console.log("Enjoy your meal!")

//==================================================================================================

// Qno:45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// type car = {
//  manufactured:string
//  model:string
//  [key:string] :any
// }

// function createcar(manufactured:string, model:string, optional: Record<string, any>):car{
//     return{
//         manufactured,
//         model,
//         ...optional
//     }
// }

// const mycars:car = createcar("Honda","civic",{color: "Silver", year: "2024"})
// console.log(mycars)


//                                           " THE END "