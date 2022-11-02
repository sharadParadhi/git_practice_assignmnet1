let checkPalindrome=(str)=>{
    let bag="";
    for(let i=str.length-1;i>=0;i--){
        bag+=str[i];
    }
 
    return bag===str;
}
console.log(checkPalindrome("naman"))