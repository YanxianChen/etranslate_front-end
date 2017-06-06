(function() {

	//用户翻译页面显示 
	/*$(window).load(function() {
		$("#showUserTran").click(function() {
			$("#getUserTran").slideToggle("slow");
		});
	});


	//用户翻译输入页面显示
	$(window).load(function() {
		$("#addUserTran").click(function() {
			$("#setUserTran").slideToggle("slow");
		});
	});*/

	//点赞按钮放大缩小+1






	//上传译文数据
	/* $(window).load(function() {
        var textValue = window.getSelection().toString();
        $("#TransSubmit").click(function() {
            console.log("可以用这个部分");
            var a = document.getElementById("Trantext");
            var textStr = a.value.toString();

            function userTrans(word,Trans) {
                this.word = word;
                this.Trans = Trans;
            }

            var userInstance = new userTrans(textValue,textStr);
            var josnObject = JSON.stringify(userInstance);



            $.ajax({
                type: "POST",
                data: "jsonObject",
                url: "119.23.249.176//submitUserTrans.spring",
                contentType: "application/json",
                success: function(data) {
                    console.log(data);
                },
                error: function(err) {
                    console.log(err);
                }
            });

        });
    }); */
//替换
/* var flag = 1;

$("#addNewWord").click(function() {
		if(flag == 1){
            document.body.contentEditable='true';
            document.designMode='on';
            flag++;
        }
        else{
            document.body.contentEditable='flase';
        }
		}); */

/* 
	//加入生词本
	$("#addNewWord").click(function() {
		if (window.getSelection) {
			var text_ = window.getSelection();
			text_ = text_.toString();

			function newwords(newword) {
				this.newword = newword;
			}
			var wordInstance = new newwords(text_);
			var josnObject = JSON.stringify(wordInstance);

			$.ajax({
				type: "POST",
				data: "jsonObject",
				url: "119.23.249.176//newWorld.spring",
				contentType: "application/json"
			});

		};
	}); */

	//find cookie

	function getCookies(cname) {
		var name = cname;
		var ca = document.cookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name) == 0) {
				return c.substring(name.length+1, c.length);
			}
			return "";
		}
	};

    }());