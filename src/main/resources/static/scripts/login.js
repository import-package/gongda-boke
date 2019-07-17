function userLogin(){
	//点击登陆以后触发事件
	//alert("事件测试");
	//获取参数，账号密码
	var adminCode = $("#count").val().trim();//trim去掉首尾空格
	var password = $("#password").val().trim();
	$("#count_span").html("");
	$("#password_span").html("");
	//alert(name + "," + password);
	//格式检测
	var ok = true;
	if(adminCode == ""){
		$("#count_span").html("用户名不能为空");
		ok = false;
	}
	if(password == ""){
		$("#password_span").html("密码不能为空");
		ok = false;
	}
	//检测格式通过
	if(ok){
		//发送ajax请求
		$.ajax({
			url:"user/login.do",//path是base.js里定义好的
			type:"post",
			data:{"adminCode":adminCode,"password":password},
			dataType:"json",//服务器返回数据类型
			success:function(result){
				//result是服务器返回的JSON结果
				if(result.status == 0){
					//登陆成功，将用户信息保存到Cookie
					var userId = result.data.cn_user_id;
					addCookie("userId",userId,24);//2是两个小时的意思
					window.location.href="edit.html?adminCode="+adminCode;//转到主界面
				}else if(result.status == 1){//用户名错
					$("#count_span").html(result.msg);
				}else if(result.status == 2){
					$("#password_span").html(result.msg);
				}
			},
			error:function(){
				alert("登陆失败！")
			}
		});
	}
};


function keydownLogin(){
	if (event.keyCode==13)  { //回车键的键值为13
		$("#login").click(userLogin);  //调用登录按钮的登录事件
	}
};
