window.onload = function() {
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


//创建ajxs
    function createAJAX(){
        var ajax = null;
        try{
            ajax = new XMLHttpRequest();
        }catch(e1){
            try{
                ajax = new  ActiveXObject("microsoft.xmlhttp");
            }catch(e2){
                alert("你的浏览器不支持ajax，请更换浏览器");
            }
        }
        return ajax;
    }


    function user(username,password){

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

    }


//ajax给服务器提交信息
    document.getElementById("button").onclick= function(){
        var mail=checkEmail();
        if(mail)
        {
           var userInstance = new user("username","password");
           var jsonObject = JSON.stringify(userInstance);
           $.ajax({
               type:"POST",
               data: jsonObject,
               url:"119.23.249.176/proc/user/login",
               contentType:"application/json",
               success:function (data) {
                   console.log("data");

               }
           });


            //===========================================等待
            //NO4)
            ajax.onreadystatechange = function(){

                if(ajax.readyState == 4){
                    if(ajax.status == 200) {
                        //NO5)
                        var tip = ajax.responseText;


                       /*
                        //NO6)
                        //创建img标签
                        var imgElement = document.createElement("img");
                        //设置img标签的src/width/height的属性值
                        imgElement.src = tip;
                        imgElement.style.width = "12px";
                        imgElement.style.height = "12px";
                        //定位span标签
                        var spanElement = document.getElementById("resID");
                        //清空span标签中的内容
                        spanElement.innerHTML = "";
                        //将img标签加入到span标签中
                        spanElement.appendChild(imgElement);
                        */
                    }
                }
            }
        }
    }


}