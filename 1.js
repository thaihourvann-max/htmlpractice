function challenge(width,height){
    let reactanglestring='';
    let i=0;
    let j=0;
    if(i>=0&&j>=0){
    for( i=0; i<width ; i++){
        for( j=0; j<height; j++){
            reactanglestring+='* ';
        }
        reactanglestring+='\n';
    }
    return reactanglestring;
}
}
console.log(challenge(3,4));
console.log(challenge(5,-2));