const passbox=document.getElementById("password");
const length = 16;
const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "~!@#$%^&*()_[]{}?";
 
const allchar = uppercase+lowercase+num+symbol;

function gpass(){
    let password = "";
    password+= uppercase[Math.floor(Math.random()*uppercase.length)];
    password+= lowercase[Math.floor(Math.random()*lowercase.length)];
    password+= num[Math.floor(Math.random()*num.length)];
    password+= symbol[Math.floor(Math.random()*symbol.length)];

    while(length> password.length){
        password+= allchar[Math.floor(Math.random()*allchar.length)];
    }
    passbox.value = password;
} 

function copypass(){
    passbox.select();
    document.execCommand("copy")
};