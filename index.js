for (var number=1; number<=10; number++){
    if (number%2==0) {
        //skip, bypass the even numbers
        continue;
    }
    console.log(number);
}

var count = 1;
for(var i=1; i<=10; i++){
    count++;
    if(i==5){
       continue;
    }
}
console.log(count)