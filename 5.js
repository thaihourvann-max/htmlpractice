function count(text){
    let count=0;
    for(let i=0; i<text.length; i++){
        if(text[i]==" "){
            count=count+1;
        }
    }
        count+=1;
        return count;
}
let text="hello word";
console.log(count(text));
text="this is the best day";
console.log(count(text));
text="a bb ccc dddddd e";
console.log(count(text));