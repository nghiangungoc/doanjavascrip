const array = [];
function check(Usename){
    var list = this.array;
    for (let i = 0; i < list.length; i++) {
        if(list[i].Usename == Usename){
            return true;
        }
    }
}

function dangnhap() {
   event.preventDefault()
    var Usename = document.getElementById('Usename').value;
    var password = document.getElementById('password').value;
    
    var usenameError = document.getElementById('Usename-error');
    var passwordError = document.getElementById('password-error');


    if(Usename==''){
        Usename='';
        usenameError.innerHTML='Usename còn trống';
    }else if(Usename.trim().length < 2){
        Usename='';
        usenameError.innerHTML='Usename phải lớn hơn 2 ký tự';
    }
    else if(Usename.trim().length > 50){
        Usename='';
        usenameError.innerHTML='Usename phải bé hơn 50 ký tự';
    }else{
        usenameError.innerHTML='';
    }
    
    if(password==''){
        password='';
        passwordError.innerHTML='password còn trống';
    }else if(password.trim().length <2){
        password='';
        passwordError.innerHTML='password phải lớn hơn 2 ký tự';
    }
    else if(password.trim().length>50){
        password='';
        passwordError.innerHTML='password phải bé hơn 50 ký tự';
    }else{
        passwordError.innerHTML='';
    }
    if(Usename && password ){
        //Lưu vào trong danh sách sinh viên
        //  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    }

}
function checkdangnhap(){
    event.preventDefault();
     dangnhap();
    var Usename = document.getElementById('Usename').value;
    var password = document.getElementById('password').value;
    var AC = JSON.parse(localStorage.getItem('username'))
    for (let i = 0; i < AC.length; i++) {
        if(Usename.trim().value == AC[i].usename &&  password.trim().value == AC[i].password){
            alert('đăng nhập thành công')
            break;
        }else{
            alert('tài khoản không tồn tại vui lòng đang ký')
            break;
        }
    }

}
