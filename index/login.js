function login(){
    var u = document.getElementById("input-username").value;
    var p = document.getElementById("input-pwd").value;
    if("123" == u && "123" == p){
        return true;
    }
    else{
        alert("用户名或密码错误")
        return false;
    }
}