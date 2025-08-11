const favMovie ="Panchayat";

let guess = prompt("guess my favorite movie");

while ( (guess ! = favMovie) && ( guess ! = "quite")){
    guess=prompt("guess wrong ,  please try again");
}

if(guess == favMovie){
    console.log("congrats !")
}
else{
    console.log("You Quite")
}