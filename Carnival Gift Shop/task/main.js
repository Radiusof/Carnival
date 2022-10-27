const input = require('sync-input');

let gifts = [
        {
            "type" : "Teddy Bear",
            "price" : 10,
            "id" : 1
        },
        {
            "type" : "Big Red Ball",
            "price" : 5 ,
            "id" : 2
        },
        {
            "type" : "Huge Bear",
            "price" : 50,
            "id" : 3
        },
        {
            "type" : "Candy",
            "price" : 8,
            "id" : 4
        },
        {
            "type" : "Stuffed Tiger",
            "price" : 15 ,
            "id" : 5
        },
        {
            "type" : "Stuffed Dragon",
            "price" : 30 ,
            "id" : 6
        },
        {
            "type" : "Skateboard",
            "price" : 100,
            "id" : 7
        },
        {
            "type" :  "Toy Car",
            "price" : 25 ,
            "id" : 8
        },
        {
            "type" :  "Basketball",
            "price" : 20 ,
            "id" : 9
        },
        {
            "type" :  "Scary Mask",
            "price" : 75 ,
            "id" : 10
        }
];

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);

//Display the list of gifts left
const showGifts = () => {
    console.log(`Here's the list of gifts:
`);
    if (gifts.length === 0){
        return console.log(`Wow! There are no gifts to buy.`);
    }
    gifts.forEach((gift) => {
        console.log(gift.id + "- " + gift.type + ", Cost: " + gift.price + " tickets");
    });
}

//Allow user to buy a gift if there's any left and if he has enough tickets
const addGifts = () =>{
    if (gifts.length === 0){
        return console.log("Wow! There are no gifts to buy.");
    }
    let choiceGift = Number(input( "Enter the number of the gift you want to get:"));
    if (Number.isNaN(choiceGift)){
        return console.log ("Please enter a valid number!");
    }
    let chosenGift = gifts.find(g => g.id === choiceGift);
    if (chosenGift === undefined) {
        return console.log ("There is no gift with that number!")
    }
    let indexGift = gifts.findIndex(g => g.id === choiceGift);
    if (tickets < chosenGift.price){
        return console.log("You don't have enough tickets to buy this gift.");
    }
    console.log (`Here you go, one ${chosenGift.type}!`);
    tickets = tickets - chosenGift.price;
    gifts.splice(indexGift,1);
    return console.log (`Total tickets: ${tickets}`);
}

//Allow user to add tickets to his purse
const addTickets = () => {
    let userAddTickets = Number(input( "Enter the ticket amount:"));
    if (Number.isNaN(userAddTickets) || (userAddTickets < 0 || userAddTickets > 1000)){
        return console.log("Please enter a valid number between 0 and 1000.");
    }
    tickets = tickets + userAddTickets ;
    return console.log (`Total tickets: ${tickets}`);
}

//Show current tickets left.
const showTickets = () => console.log (`Total tickets: ${tickets}`);

//Number of tickets at the beginning
let tickets = 0;
//Flag that'll stop the while loop
let flag = false;
//undefined var that'll be used to store input's of the user
let choiceUser;

showGifts();

//Loop that give different actions possible to the user. Ended if flag trigger
while (flag === false){

    choiceUser = Number(input(`
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`));

    switch (choiceUser){
        case 1 :
            addGifts ();
            break;
        case 2 :
            addTickets ();
            break;
        case 3 :
            showTickets ();
            break;
        case 4 :
            showGifts();
            break;
        case 5 :
            flag = true;
            break;
        default :
            console.log("Please enter a valid number!")
            break;
    }
}

//Exit program
console.log("Have a nice day!");
process.exit(0);