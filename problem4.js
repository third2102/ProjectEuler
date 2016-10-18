// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

timer(findpalindrome);
function findpalindrome(){
  var x = 999,y = 999,best = 0,testnum = 0;
  //Main Loop: We can stop looking when either x hits zero indicating no palindrom was found or the best is greater than what can be produced with x and 999
  for(x=999;x>0 && best<999*x;x--){
    //Start with y=x and then increase so we only check the biggest values and don't duplicate values later
    for(y=x;y<=999;y++){
      testnum = x*y; //storing the result saves a few operations
      //check for a palindrome and replace 'best' if this is bigger
      palindrome(testnum) ? best = Math.max(best,testnum):1;
    }
  }
  console.log('The best palindrome product is: '+best);
}

//simple function to determine if a number is a palindrome. Returns true or false.
function palindrome(num){
  return num == Number(num.toString().split('').reverse().join(''));
}

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
}
