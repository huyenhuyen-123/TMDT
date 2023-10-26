document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "" || password == ""){
        alert("Nhập tên và mật khẩu")
    }
    if(username === "tnmt" && password === "thuchanh"){
        alert("Đăng nhập thành công")
    }
    else{
        alert("Tên người dùng hoặc mật khẩu không đúng. Vui lòng nhập lại")
    }

})
