var output = [];
var count=1;
function fizzBuzz(){
    if (count % 3===0 && count%5===0) {
        output.push("FizzBuzz");
    count++;
    console.log(output);
    } else 
    if (count % 3===0) {
        output.push("Fizz");
    count++;
    console.log(output);
        
    }
    else if (count % 5===0) {
        output.push("Buzz");
    count++;
    console.log(output);        
    }else{        
    output.push(count);
    count++;
    console.log(output);
    }
    
}
