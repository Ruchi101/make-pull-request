<!DOCTYPE html>
<html>
<body>

<h2>Fibonacci Series with a Twist", Add following functionalities to it :</h2>

<p>Take input the value of 'n', upto which you will print.</p>
<p>Press Try it and give value of n</p>

<button onclick="myFunction()">Try it</button>

<script>
function isPrime(num){
  if(num===1){
    return false;
  }
  for(let i = 2; i <=num/2; i++)
    if(num % i === 0) return false;
  return true;
}
function fibonacci(num) 
{ 
    var num1=1; 
    var num2=1; 
    var sum; 
    var i=0; 
    for (i = 0; i <num; i++)  
    { 
    
         if(num1%5===0||isPrime(num1)){
         // document.write(0+" ");  
            arr.push(0);           
    }
    else{
       // document.write(num1+" ");
       arr.push(num1);
    }
    
    
    
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
  
 
} 
let arr = [];

function myFunction() {
  var n = prompt("Enter your value");
  if (n != null) {
   fibonacci(n);
   document.write(arr.toString());
document.write("<br>");
  }
}
// fibonacci(12);

// document.write(arr.toString());
// document.write("<br>");
// fibonacci(27); 
// document.write(arr.toString());

</script>

</body>
</html>
