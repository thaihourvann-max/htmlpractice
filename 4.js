function count(text, letter){
    let count=0; 
    for(let i=0 ;i<text.length; i++){
        if(text[i]==letter){
            count++;
        }
    }
        return count;
}
let text="hello word";
console.log(count(text, 'o'));
text="aaa bbb a";
console.log(count(text, 'a'));
text="abc";
console.log(count(text, 'd'));