let choice;
let students=[];
function inputStudents(){
    let amount = +prompt(`Nhập số lượng sinh viên`);
    for (let i=0; i<amount; i++){
        students.push(prompt(`Nhập họ tên sinh viên thứ ${i+1}`));      
    }
}
function printStudent(){
    students.forEach(function(students, index){
        console.log(`${index + 1}: ${students}`);       
    })
}
function searchStudent(){
    let search = prompt(`Nhập tên sinh viên bạn muốn tìm`);
    let searchStudents = students.filter((students) => students === search);
    if(searchStudents.length !==0){
        console.log(searchStudents);
        return true;
    }
    console.log(`Không tìm thấy`);
    return false;
}
function deleteStudent(){
    let input = prompt(`Nhập tên muốn xóa`);
    for(let i=0; i<students.length; i++){
        if(input === students[i]){
            students.splice(i, 1);
            return;
        }
    }
}
do{
    console.log(`MENU`);
    console.log(`1. Nhập danh sách sinh viên`);
    console.log(`2. Hiên thị danh sách sinh viên`);
    console.log(`3. Tìm sinh viên theo tên`);
    console.log(`4. Xóa sinh viên khỏi danh sách`);
    console.log(`5. Thoát`);
    
    choice = +prompt(`Lựa chọn của bạn:`);

    switch (choice) {
        case 1:
            inputStudents();
            break;
        case 2:
            printStudent();
            break;
        case 3:
            searchStudent();
            break;
        case 4:
            deleteStudent()
            break;
        default:
            console.log(`Lựa chọn không hợp lệ`);           
    }
}while(choice != 5);