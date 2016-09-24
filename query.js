var num1 = prompt("Enter firsh number ", "1");
var opt = prompt("Enter Operator" , "+");
var num2 = prompt("Enter second number","1");
num1  = Number(num1);
num2 = Number(num2);
var add;
if(opt === "+"){
    add = num1 + num2;
	document.write(num1 + " + " +   num2 +  " = "  + add);	
}
else if(opt === "-"){
    add = num1 - num2;	
	document.write(num1 + " - " +   num2 +  " = "  + add);
}
else if(opt === "*"){
    add = num1 * num2;	
	document.write(num1 + " * " +   num2 +  " = "  + add);
}
else if(opt === "/"){
    add = num1 / num2;	
	document.write( num1 + " / " +   num2 +  " = "  + add);
}
else if(opt === "%"){
    add = num1 % num2;	
	document.write( num1 + " % " +   num2 +  " = "  + add);
}
else{
	document.write("something error generate");
}

