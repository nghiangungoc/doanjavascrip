var array = [];
function checkuse(usename){
    var list = this.array;
    for (let i = 0; i < list.length; i++) {
        if(list[i].usename == usename){
            return true;
        }
    }
}
const array = [];
function check(Usename){
    var list = this.array;
    for (let i = 0; i < list.length; i++) {
        if(list[i].Usename == Usename){
            return true;
        }
    }
}
function checkdangky(){
    var usename = document.getElementById('usename').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    var tongdocument = document.getElementById('usename-error');

    if(usename == ''){
        tongdocument.innerHTML = ' không để trống usename '
    }else if(usename.trim().length < 5){
        tongdocument.innerHTML = ' không dưới 5 ký tự usename '
    }else if(usename.trim().length > 50){
        tongdocument.innerHTML = ' không lớn hơn 50 ký tự usename '
    }else{
        tongdocument.innerHTML = ' '
    }

    if(password == ''){
        tongdocument.innerHTML = ' không để trống password '
    }else if(password.trim().length < 5){
        tongdocument.innerHTML = ' không dưới 5 ký tự password '
    }else if(password.trim().length > 50){
        tongdocument.innerHTML = ' không lớn hơn 50 ký tự password '
    }else{
        tongdocument.innerHTML = ''
    }

    if(repassword == ''){
        tongdocument.innerHTML = ' không để trống repassword '
    }else if(repassword.trim().length < 5){
        tongdocument.innerHTML = ' không dưới 5 ký tự repassword '
    }else if(repassword.trim().length > 50){
        tongdocument.innerHTML = ' không lớn hơn 50 ký tự repassword '
    }else if(repassword != password){
        tongdocument.innerHTML = '  password không trùng khới  '
    }else{
        tongdocument.innerHTML = ''
    }

    if((usename && password.length > 5) && (repassword == password)){
        return true;
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
function dangKy(){
    event.preventDefault();
    var usename = document.getElementById('usename').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    if(checkuse(usename)){
        alert('tài khản đã tồn tại')
    }else if(checkdangky()){
        alert('Đăng ký thành công')
        var account = {
            usename: usename,
            password: password,
        }
        array.push(account);
        console.log(array);
        localStorage.setItem('username', JSON.stringify(array));
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

