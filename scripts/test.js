

function a() {
    if (document && document.getElementsByTagName && document.getElementById && document.body)
    {
        var flag = 1;
        console.log("功能已经加载");
        clearInterval(timer);
        $("#showUserTran").click(function() {
            $("#getUserTran").slideToggle("slow");
        });

        $("#addUserTran").click(function() {
            $("#setUserTran").slideToggle("slow");
        });

        $(function () {
            $("#praise").click(function () {
                var praise_img = $("#praise-img");
                var text_box = $("#add-num");
                var praise_txt = $("#praise-txt");
                var num = parseInt(praise_txt.text());
                if (praise_img.attr("src") == ("images/yizan.png")) {
                    $(this).html("<img src='images/zan.png' id='praise-img' class='animation' />");
                    praise_txt.removeClass("hover");
                    text_box.show().html("<em class='add-animation'>-1</em>");
                    $(".add-animation").removeClass("hover");
                    num -= 1;
                    praise_txt.text(num)
                } else {
                    $(this).html("<img src='images/yizan.png' id='praise-img' class='animation' />");
                    praise_txt.addClass("hover");
                    text_box.show().html("<em class='add-animation'>+1</em>");
                    $(".add-animation").addClass("hover");
                    num += 1;
                    praise_txt.text(num)
                }
            });
        });


        $("#addNewWord").click(function () {
            if (flag == 1) {
                document.body.contentEditable = 'true';
                document.designMode = 'on';
                flag++;
            }
            else {
                document.body.contentEditable = 'false';
                flag =  1;
            }

        });


            var textValue = window.getSelection().toString();
            $("#TransSubmit").click(function() {
                console.log("可以用这个部分");
                var a = document.getElementById("Trantext");
                var textStr = a.value.toString();

                function userTrans(username,word,TranslateText) {
                    this.username = username;
                    this.word = word;
                    this.TranslateText = TranslateText;
                }

                var userInstance = new userTrans("Tom","english",textStr);
                var josnObject = JSON.stringify(userInstance);


                var testData = {"username":"Tom","word":"english","TranslateText":"英语"}


                $.ajax({
                    type: "POST",
                    data: "testData",
                    url: "http://119.23.249.176:8081/proc/translation/submit",
                    contentType: "jsonp",
                    async: false,
                    success: function(data) {
                        console.log(data);
                    },
                    error: function(err) {
                        console.log(err);
                        console.log("err");
                        console.log(testData);
                    }
                });

            });


    }
}
    var timer = setInterval(a, 1000);


		

           
      
        



    

    



/* document.body.contentEditable = 'true';
document.designMode = 'on'; */
/* 
document.addEventListener('paste',function (a){
	a.preventDefault();
	var sel, range, a;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
			a =document.createElement("span");
		    var clipboarddata =  window.event.clipboardData.getData('text');    
			a.appendChild(document.createTextNode(clipboarddata))
            range.deleteContents();
            range.insertNode(a);
        }
    }
	else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = a;
    }
	}); */
