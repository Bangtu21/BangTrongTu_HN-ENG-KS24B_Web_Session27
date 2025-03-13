let arr=[];
let arrLength = +prompt(`Nhập số lượng phần tử`);
for(let i=0; i<arrLength; i++){
    arr.push(parseInt(prompt(`Nhập số thứ ${i+1}`)));
}

function number(){
    let d=arr[1]-arr[0];
    for(let i=2; i<arr.length; i++){
        if(arr[i]-arr[i-1]!==d){
            return false;
        }
    }
    return true;
}

console.log(number());
