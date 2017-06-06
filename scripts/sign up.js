//检查用户名
window.onload = function() {
    function checkName() {
        //var inputNode = document.getElementById("userName");
        var spanNode = document.getElementById("userId");
        //获取输入框的内容
        var content = Name.value;
        //用户名的规则： 六位的英文与数字组成。数字不能开头
        var reg = /^[a-z][a-z0-9]{5}$/i;
        if (reg.test(content)) {
            //符合规则
            spanNode.innerHTML = "正确".fontcolor("green");
            return  true;
        } else {
            //不符合规则
            spanNode.innerHTML = "错误".fontcolor("red");

            return  false;
        }
    }

    var Name = document.getElementById("userName");
    Name.onblur = checkName;

//检查邮箱
    function checkEmail() {
        //var email = document.getElementById("email").value;
        var spanNode = document.getElementById("emailspan");

        //编写邮箱的正则       13456@qq.com  13456@qq.net  13456@qq.com.cn
        var reg = /^[a-z0-9]\w+@[a-z0-9]+(\.[a-z]{2,3}){1,2}$/i;
        var content = Mail.value;
        if (reg.test(content)) {
            //符合规则
            spanNode.innerHTML = "正确".fontcolor("green");
            return  true;
        } else {
            //不符合规则
            spanNode.innerHTML = "错误".fontcolor("red");

            return  false;
        }
    }

    var Mail = document.getElementById("email");
    Mail.onblur = checkEmail;

    function checkPwd() {
        //var pwd = document.getElementById("pwd").value;
        var spanNode = document.getElementById("passId");
        //编写密码的正则  长度为6-16个字符,只能有数字和英文组成
        var reg = /^[a-zA-Z0-9]{6,16}$/i;
        var content = Password.value;
        if (reg.test(content)) {
            //符合规则
            spanNode.innerHTML = "正确".fontcolor("green");
          return  true;
        } else {
            //不符合规则
            spanNode.innerHTML = "错误".fontcolor("red");
            return  false;
        }
    }

    var Password = document.getElementById("password");
    Password.onblur = checkPwd;

    function ensurePwd() {
        var pwd = document.getElementById("password").value;
        // var ensurepwd = document.getElementById("ensurepwd").value;
        var spanNode = document.getElementById("ensure");
        var content = Ensurepwd.value;
        if (pwd == content && pwd) {
            //符合规则
            spanNode.innerHTML = "正确".fontcolor("green");
            return  true;
        } else {
            //不符合规则
            spanNode.innerHTML = "错误".fontcolor("red");
           return  false;
        }
    }

    var Ensurepwd = document.getElementById("ensurepwd");
    Ensurepwd.onblur = ensurePwd;


    function checkAll() {
        var userName = checkName();
        var email = checkEmail();
        var pwd = checkPwd();
       var ensurepwd = ensurePwd()
        if (userName && email && pwd && ensurepwd) {
            alert("提交成功");
            return true;
        } else {
            alert("提交失败");
            return false;
        }
    }

    var  Button=document.getElementById("button");
    Button.onclick=checkAll;

}

