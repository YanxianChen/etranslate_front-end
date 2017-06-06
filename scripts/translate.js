/*
Copyright (C) 2014 Byron Li

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
//将浏览器上得到的页面翻译并输出//从数据库调其他用户的数据输出
(function() {
	'use strict';


	var Translator = function() {};

	Translator.prototype.initEvents = function() {
		var _self = this;
		var _timeFn = null;

		$(document).on('click', function(e) {
			var pagex = e.pageX;
			var pagey = e.pageY;
			var _text = $.trim(window.getSelection().toString());
			clearTimeout(_timeFn);

			_timeFn = setTimeout(function() {
				_self.translate(pagex, pagey, _text);
			}, 800);
		});

		$(document).on('dblclick', function(e) {
			var pagex = e.pageX;
			var pagey = e.pageY;
			var _text = $.trim(window.getSelection().toString());
			clearTimeout(_timeFn);
			_self.translate(pagex, pagey, _text);

		});
	};

	Translator.prototype.translate = function(pageX, pageY, text) {
		var strs = text;
		var _self = this;

		if (text != null && text.length > 0 && _self.isEnglish(text)) {
			chrome.extension.sendRequest({
				text: text
			}, function(response) {
				_self.showResult(pageX, pageY, response.text, strs);
			});
		} else { /*  $('#_popup_').hide('slow'); */
		}
	};

	Translator.prototype.showResult = function(pageX, pageY, data, str) {

		if (data == null) {
			return;
		}

		// Injects the window element which is used to show translated result.
		if ($('#_hook_').length <= 0) {
			var hook = '<div id=\'_hook_\'></div>';
			var url = chrome.extension.getURL('../default.html');
			var urlImage = chrome.extension.getURL('../images/zan.png');
			var urlImage2 = chrome.extension.getURL('../images/yizan.png');

			$('body').append(hook);

			// Synchronous load template.
			$.ajax({
				url: url,
				dataType: 'html',
				async: false,
				success: function(data) {
					$('#_hook_').append(data);
				}
			});
		} else {
			// Clear previous data.
			$('#_webresult_').empty();
		}
		//test

		// Sets the position of result window.
		$('#_popup_').css('left', pageX);
		$('#_popup_').css('top', pageY);

		// Traditional translated result
		if (data.translation != null && data.translation.length > 0) {
			$('#_result_').text(data.translation[0]);
		}

		// Web result.
		if (data.web != null && data.web.length > 0) {

			for (var i = 0; i < data.web.length; i++) {
				var eachWebResult = $('<li></li>')
				var eachResultText = data.web[i].key;
				var eachResultValue = '';

				for (var j = 0; j < data.web[i].value.length; j++) {
					eachResultValue += data.web[i].value[j] + '; ';
				}

				eachWebResult.text(eachResultText + ': ' + eachResultValue);
				$('#_webresult_').append(eachWebResult);
			}
		}

		//user result
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				var teturnJSONString = xmlhttp.responseText;
				var returnJSON = JSON.parse(teturnJSONString);

				for (var i = 0; i < returnJSON.length; i++) {
					var html1 = '<div class="translate">';
					var html2 = '</div><div class="praise"><span id="praise"><img src="images/zan.png" id="praise-img" /></span><span id="praise-txt">';
					var html3 = '</span></div>';
					var eachUserResult = $("<li></li>");
					var eachValue = html1+returnJSON[i].word + ":" + returnJSON[i].translateText + html2 + returnJSON[i].upvote + html3;

					eachUserResult.text(eachValue);
					$("_userresult_").append(eachUserResult);

				}
			}
		}
		xmlhttp.open("POST", "119.23.249.176/proc/translation/get" , true);
		xmlhttp.send("\"username\":\"123\"");


		$('#_popup_').show('slow');
	};

	Translator.prototype.isEnglish = function(text) {
		return /^[a-z]+$/ig.test(text);
	}

	var translor = new Translator();
	translor.initEvents();

}());