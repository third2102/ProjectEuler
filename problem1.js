// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

//This is what I came up with first: Runs through numbers 1-1000 and checks if they are divisible by 3 or 5 then adds them if they are or adds 0 if they aren't
console.log("\nVersion 1: check 1-1000");
timer(p1);
function p1(){
  var total = 0;
  for (var i = 1;i<1000;i++){
    total += (i % 3 == 0 || i % 5 == 0) ? i:0;
  }
  console.log("Result: " + total);
}


//After doing some more of these problems I came up with this version: it adds up all numbers divisible by three then all divisible by 5 then subtracts all divisible by 15 to remove duplicates. This runs roughly 600 operations vs the previous one which runs 1000 operations although they take roughly the same time on my computer.
console.log("\nVersion 2: add multiples of 3 and 5, subtract multiples of 15");
timer(p1v2);
function p1v2(){
  var threes = 0,fives = 0, fifteens = 0,total2=0;
  while (threes < 1000){
    total2+=threes;
    threes+=3;
  }
  while (fives < 1000){
    total2+=fives;
    fives+=5;
  }
  while (fifteens < 1000){
    total2-=fifteens;
    fifteens+=15;
  }
  console.log("Result: " + total2);
}
console.log("\nNote: The second program is faster due to caching, running them in reverse order yields approximately the same time");


//Custom Timer Function for measuring speed
function timer(someFunction){
  var time1 = process.hrtime();
  someFunction(); // run whatever needs to be timed in between the statements
  var time2 = process.hrtime();
  var seconds = time2[0] - time1[0];
  var nano = time2[1] - time1[1];
  var timedif = Math.floor(seconds*1000000 + nano/1000)/1000;
  var timedifstring = timedif.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  console.log("Took " + timedifstring + " ms");
  return timedif;
  //this should reset the cache
  var total = 0;
}
