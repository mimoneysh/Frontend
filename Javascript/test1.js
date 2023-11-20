var name = prompt("What is your name?");
name=name.toLocaleLowerCase();
var char1=name.slice(0,1);
uChar1=char1.toLocaleUpperCase();

rChar=name.slice(1,name.length);

name=uChar1+rChar; 
alert(name);