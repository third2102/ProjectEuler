// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?


//this version doesn't rely on a pregenerated list of prime numbers
console.log("\nNot Pre-generated: ")
timer(p3,600851475143,2);
timer(p3,64,2);
timer(p3,13195,2);
function p3(num,i){
  for (true;i<=Math.floor(Math.sqrt(num));i++){
    if (num % i == 0){
      return " " + i + p3(num/i,i);
    }
  }
  return " " + num;
}


//This version uses a pregenerated list of prime numbers to only check primes which is advantageous if you have access to a pre-generated list and you have large numbers
console.log("\nPre-generated:")
var primenums = primetime(Math.sqrt(600851475143)); //luckily all the numbers are less than the squareroot, but normally you'd have to generate all primes below the number
timer(p3v2,600851475143,0);
timer(p3v2,64,0);
timer(p3v2,13195,0);
function p3v2(num,i){
  for (true;i<Math.floor(Math.sqrt(num));i++){
    if (num % primenums[i] == 0){
      return " " + primenums[i] + p3v2(num/primenums[i],i);
    }
  }
  if (num != 1){
    return " " + num;
  }
  return " ";
}

//Custom Timer Function for measuring speed
function timer(someFunction,param1,param2){
  var time1 = process.hrtime();
  console.log("Prime factors: " + someFunction(param1,param2)); // run whatever needs to be timed in between the statements
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

//prime generating function
function primetime(num){
  var list = [2];
  for (var x=3;x <= num;x+=2){
    var tops = Math.sqrt(x);
    var prime = true;
    for (var y=0;y<tops;y++){
      if(x%list[y] == 0){
        prime = false;
        y+=x;
      }
    }
    if (prime){
      list.push(x);
    }
  }
  return list;
}
