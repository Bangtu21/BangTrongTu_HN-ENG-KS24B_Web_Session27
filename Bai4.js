let choice;
let number=[];

function addNumber(){
    let numberLength = parseInt(prompt(`Nhập số lượng số nguyên tố`));
    for(let i=0; i<numberLength; i++){
        number.push(parseInt(prompt(`Nhập số thứ ${i+1}`)));
    }
}

function avgNumber(){
    let avg=0;
    let sum=0;
    for(let i=0; i<number.length; i++){
        sum += number[i];
    }
    avg = sum/number.length;
    console.log(`Trung bình các số: ${avg}`);
    
}

function bigEven(){
    let max=0;
    for(let i=0; i<number.length; i++){
        if(number[i]%2==0){
            if(number[i]>max){
                max=number[i];
            }
        }
    }
    console.log(`Số chẵn lớn nhất là ${max}`);   
}

function smallOdd(){
    let min=number.length;
    for(let i=0; i<number.length; i++){
        if(number[i]%2!=0){
            if(number[i]<min){
                min=number[i];
            }
        }
    }
    console.log(`Số lẻ nhỏ nhất là ${min}`);
    
}

do{
    
    console.log(`MENU`);
    console.log(`1. Nhập danh sách số nguyên`);
    console.log(`2. Tính trung bình các số`);
    console.log(`3. Tìm số chẵn lớn nhất`);
    console.log(`4. Tìm số lẻ nhỏ nhất`);
    console.log(`5. Thoát`);
    
    choice = +prompt(`Lựa chọn của bạn:`);

    switch (choice) {
        case 1:
            addNumber();
            break;
        case 2:
            avgNumber();
            break;
        case 3:
            bigEven();
            break;
        case 4:
            smallOdd();
            break;
        default:
            console.log(`Lựa chọn không hợp lệ`);           
    }
}while(choice !=5);