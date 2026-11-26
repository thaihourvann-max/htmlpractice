function average(arr){
    let sum=0;
    let avg=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    avg=sum/arr.length;
    return avg;
}
let arr=[85,90,78,92];
console.log(average(arr));
arr=[10,20,30];
console.log(average(arr));
arr=[0];
console.log(average(arr));