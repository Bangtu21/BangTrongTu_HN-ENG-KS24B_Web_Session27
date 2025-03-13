let arr=[];
let arrLength = +prompt(`Nhập số lượng phần tử`);
for(let i=0; i<arrLength; i++){
    arr.push(parseInt(prompt(`Nhập số thứ ${i+1}`)));
}
let split=+prompt(`Nhập số lượng mảng con:`);

function check(){
    for(let i=0; i<arr.length; i++){
        if(isNaN(arr[i])){
            console.log(`Dữ liệu không hợp lệ`);
            return;     
        }
    }
    
    let bigArr=[];
    let smallArr=[];
    for(let i=0; i<arr.length; i++){
        smallArr.push(arr[i]);
        if(smallArr.length===split || i === arr.length-1){
            bigArr.push(smallArr);
            smallArr=[];
        }
    }
    return bigArr;
}

console.log(check());




