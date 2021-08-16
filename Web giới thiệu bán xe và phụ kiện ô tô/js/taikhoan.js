$(function () {

    $('.btnLogin').click(function () {
        $('#LoginForm').css('transform', 'translateX(300px)');
        $('#RegForm').css('transform', 'translateX(300px)');
        $('#Indicator').css('transform', 'translateX(0px)');
    });

    $('.btnRegister').click(function () {
        $('#LoginForm').css('transform', 'translateX(0px)');
        $('#RegForm').css('transform', 'translateX(0px)');
        $('#Indicator').css('transform', 'translateX(100px)');
    });

    $('#LoginForm').submit(function(event) {
        event.preventDefault();

        if ( $('#username').val() === 'admin' && $('#password').val() === 'admin') {
            window.location.href = '../HTML/trangchu.html';
        } else {
            alert('Đăng nhập không thành công');
        }
    });

    
    function kiemTraName() {
        var re = /^[A-Z]+[a-z]*(\s[A-Z]+[a-z]*)*$/;
        if ($("#txtName").val() == "") {
            $("#tbName").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtName").val())) {
            $("#tbName").html("Tên phải nhập chữ hoa đầu tiên");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }

    $("#txtName").blur(kiemTraName);

    function kiemTraMail() {

        var re = /^[a-zA-Z0-9.\_\-]+@[gmail]+.\w{3}$/;
        if ($("#txtMail").val() == "") {
            $("#tbMail").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtMail").val())) {
            $("#tbMail").html("nhap dung dinh dang mail abc@gmail.com");
            return false;
        }
        $("#tbMail").html("*");
        return true;
    }
    $("#txtMail").blur(kiemTraMail);

    function kiemTraPassword() {
        var re = /^[1-9]{1}[0-9]{7}$/;
        if ($("#txtPassword").val() == "") {
            $("#tbPassword").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtPassword").val())) {
            $("#tbPassword").html("Phải 8 số ");
            return false;
        }
        $("#tbPassword").html("*");
        return true;
    }
    $("#txtPassword").blur(kiemTraPassword);

});