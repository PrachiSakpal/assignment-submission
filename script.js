// 1.In range of 100 if no ;is divisble by 3 print fizz,by 5 buzz , by 15 fizzbuzz wiyhout using modulus.

let i;
for(i=1;i<=100;i++){
    
    if(i%15==0){
        console.log("FizzBuzz" +" ");
    }
    if(i%3==0){
        console.log("Fizz" + " ");
    }
    else if(i%5==0){
        console.log("Buzz" +" ");
    }
    else{
        console.log(i + " ");
    }
}


//2.find the palindrome in the sentence
a="the racecar went of the radar";
const b=a.split("");

for(i in b){
    c=b[i];
    const d =c.split("")
    const e=d.reverse();
    const f=e.join("");
    if(b[i]==f){
        console.log(b[i]);
    }
}