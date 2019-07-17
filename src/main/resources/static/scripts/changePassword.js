function checkBeforePassword(){
	var userId = getCookie("userId");
	if (userId == null) {//未登录用户
		window.location.href = "log_in.html";
	} else {
		var beforePassword = $("#last_password").val().trim();//trim去掉首尾空格
		//发送ajax请求
		$.ajax({
			url:base+"/user/checkPassword.do",//path是base.js里定义好的
			type:"post",
			data:{"userId":userId,"beforePassword":beforePassword},
			dataType:"json",//服务器返回数据类型
			success:function(result){
				//result是服务器返回的JSON结果
				if(result.status == 0){
					//登陆成功，将用户信息保存到Cookie
					//var userId = result.data.cn_user_id;
					//addCookie("userId",userId,2);//2是两个小时的意思
					//window.location.href="edit.html";//转到主界面
					fixPassword();//执行修改密码
				}else{//原密码错
					$("#warning_1 span").html(result.msg);// 设置用户名后span的值
					get('warning_1').style.display='block';//获取元素style值并修改让其显示
				}
			},
			error:function(){
				alert("校对原始密码失败！")
			}
		});
	}
};

function fixPassword(){
	var newPassword = $("#new_password").val().trim();
	$.ajax({
		url:base+"/user/fixPassword.do",//path是base.js里定义好的
		type:"post",
		data:{"userId":userId,"newPassword":newPassword},
		dataType:"json",//服务器返回数据类型
		success:function(result){
			//result是服务器返回的JSON结果
			if(result.status == 0){
				alert("修改密码成功！");
				window.location.href="edit.html";//转到主界面
			}else{
				alert("哪里好像出了点问题。。");
			}
		},
		error:function(){
			alert("更改密码失败！")
		}
	});
};