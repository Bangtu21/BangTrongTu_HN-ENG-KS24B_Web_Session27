let choice;

function SCircle(){
    let r = parseInt(prompt(`Nhập bán kính hình tròn`));
    let areaCircle = Math.PI * r *r;
    console.log(`Diện tích hình tròn ${areaCircle}`);  
}

function CCircle(){
    let r = parseInt(prompt(`Nhập bán kính hình tròn`));
    let c = 2 * Math.PI * r;
    console.log(`Chu vi hình tròn ${c}`);
    
}

function SRectangle(){
    let a = parseInt(prompt(`Nhập cạnh a hình chữ nhật`));
    let b = parseInt(prompt(`Nhập cạnh b hình chữ nhật`));
    let s = a*b;
    console.log(`Diện tích hình chữ nhật là ${s}`);
    
}

function CRectangle(){
    let a = parseInt(prompt(`Nhập cạnh a hình chữ nhật`));
    let b = parseInt(prompt(`Nhập cạnh b hình chữ nhật`));
    let c = (a+b)*2;
    console.log(`Chu vi hình chữ nhật là ${c}`);
    
}

do{
    
    console.log(`MENU`);
    console.log(`1. Tính diện tích hình tròn`);
    console.log(`2. Tính chu vi hình tròn`);
    console.log(`3. Tính diện tích hình chữ nhật`);
    console.log(`4. Tính chu vi hình chữ nhật`);
    console.log(`5. Thoát`);
    
    choice = +prompt(`Lựa chọn của bạn:`);

    switch (choice) {
        case 1:
            SCircle();
            break;
        case 2:
            CCircle();
            break;
        case 3:
            SRectangle();
            break;
        case 4:
            CRectangle();
            break;
        default:
            console.log(`Lựa chọn không hợp lệ`);           
    }
}while(choice !=5);