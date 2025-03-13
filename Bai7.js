let arr=[];
let arrLength = +prompt(`Nhập số lượng phần tử`);
for(let i=0; i<arrLength; i++){
    arr.push(parseInt(prompt(`Nhập số thứ ${i+1}`)));
}

function lostNumber(){
    let sum1=0;
    for(let i=0; i<arr.length; i++){
        sum1+=arr[i];
    }
    let max=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    let sum2=0;
    for(let i=0; i<=max; i++){
        sum2+=i;
    }
    let lost = sum2-sum1;
    return `Số còn thiếu là ${lost}`;
}

console.log(lostNumber());



