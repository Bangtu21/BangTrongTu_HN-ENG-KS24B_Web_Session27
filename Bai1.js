let choice;
let result;
function sum(firstNumber, secondNumber){
    return firstNumber+secondNumber;
}
function sub(firstNumber, secondNumber){
    return firstNumber-secondNumber;
}
function mul(firstNumber, secondNumber){
    return firstNumber*secondNumber;
}
function div(firstNumber, secondNumber){
    return firstNumber/secondNumber;
}

do{
    console.log(`MENU`);
    console.log(`1. Cộng hai số`);
    console.log(`2. Trừ hai số`);
    console.log(`3. Nhân hai số`);
    console.log(`4. Chia hai số`);
    console.log(`5. Thoát`);
    
    choice = +prompt(`Lựa chọn của bạn:`);

    switch (choice) {
        case 1:
            firstNumber = +prompt(`Nhập số thứ nhất`);
            secondNumber = +prompt(`Nhập số thứ hai`);
            result = sum(firstNumber, secondNumber);
            console.log(`Tổng hai số là ${firstNumber} + ${secondNumber} = ${result}`);           
            break;
        case 2:
            firstNumber = +prompt(`Nhập số thứ nhất`);
            secondNumber = +prompt(`Nhập số thứ hai`);
            result = sub(firstNumber, secondNumber);
            console.log(`Hiệu hai số là ${firstNumber} - ${secondNumber} = ${result}`);
            break;
        case 3:
            firstNumber = +prompt(`Nhập số thứ nhất`);
            secondNumber = +prompt(`Nhập số thứ hai`);
            result = mul(firstNumber, secondNumber);
            console.log(`Tích hai số là ${firstNumber} * ${secondNumber} = ${result}`);
            break;
        case 4:
            firstNumber = +prompt(`Nhập số thứ nhất`);
            secondNumber = +prompt(`Nhập số thứ hai`);
            result = div(firstNumber, secondNumber);
            console.log(`Chia hai số là ${firstNumber} / ${secondNumber} = ${result}`);
            break;
        default:
            console.log(`Lựa chọn không hợp lệ`);           
    }
}while(choice != 5);