function userRegist() {
	// 获取参数
	var name = $("#regist_username").val().trim();// trim()去掉空格
	var nick = $("#nickname").val().trim();
	var password = $("#regist_password").val().trim();
	var final_password = $("#final_password").val().trim();
	var varify = $("#regist_verify").val().trim();
	var right = window.right;
	//var right = $("#regist111").data("right");
	//var right = $("#regist111").data("right");
	// 进行数据格式的检测
	// 检查用户
	var ok = true;// ok是状态值，如果走进if,将其设为false,即不发送
	if (name == "") {
		ok = false;
		$("#warning_1 span").html("用户名不能为空");// 设置用户名后span的值
		$("#warning_1").show();// 让它显示出来
	}
	// 检测密码 1-非空 2-不能小于6位
	if (password == "") {
		ok = false;
		$("#warning_2 span").html("密码不能为空");
		$("#warning_2").show();
	} else if (password.length > 0 && password.length < 6) {
		ok = false;
		$("#warning_2 span").html("密码不能小于6位");
		$("#warning_2").show();
	}
	// 检测确认密码 1-非空 2-是否与密码一致
	if (final_password != password) {
		ok = false;
		// $("#warning_3 span").html("输入密码不一致");
		$("#warning_3").show();// 后面已经写好了，其实用不到上面那句代码。
	}
	//if (varify != right) {
	//	ok = false;
	//	console.log("有病");
	//	document.getElementById('warning_4').style.display='block';//添加笔记按钮显现
	//}
	var sex = 1;
	// 状态值ok为true时，执行发送
	if (ok) {
		$.ajax({
			url : "user/regist.do",
			type : "post",
			data : {
				"adminCode" : name,
				"nick" : nick,
				"password" : password,
				"sex" : sex,
				"varify" : varify,
				"right"  : right
			},
			dataType : "json",
			success : function(result) {
				// 注册成功
				if (result.status == 0) {
					alert(result.msg);
					alert("注册成功！请直接登陆！");
					// 返回登陆页面
					$("#back").click();
				} else if (result.status == 1) {// 用户名被占用
					$("#warning_1 span").html("用户名已被注册！");
					$("#warning_1").show();
				} else if(result.status == 2){
					$("#warning_5").show();
				}
			},
			error : function() {
				alert("注册失败");
			}
		});
	}
}

function changeVerifyCode(){ 
	$("#vcode").attr("src","VerifyCode/verify.do?flag="+Math.random()); 
	
	$.ajax({
 		url : "VerifyCode/right.do",
 		type : "post",
		data : {
 		},
 		dataType : "json",
 		success : function(result) {
 			window.right = result.msg;
 			//$("#regist111").data("right", right);
 			//var qqq = $("#pc_part_3").data("bookId", bookId);
 			//console.log("qqq:"+qqq);
 			//console.log("right:"+right);
 			//var lll = $("#regist111").data("right", right);
 			//console.log("lll:"+lll);
 			
		},
 		error : function() {
 			alert("验证码正确值传输失败！");
 		}
 	});
};

//$(function(){
//	$("#regist_button").click(function(){
//		//�����ʾ��Ϣ
//		$("#warning_1").hide();
//		$("#warning_2").hide();
//		$("#warning_3").hide();
//		$("#warning_4").hide();
//		//��ȡ�������
//		var name = $("#regist_username").val().trim();
//		var nick = $("#nickname").val().trim();
//		var password = $("#regist_password").val().trim();
//		var final_password = $("#final_password").val().trim();
//		//����ʽ
//		var ok = true;
	//	if(name==""){
//			ok = false;
//			$("#warning_1 span").html("�û���Ϊ��");
//			$("#warning_1").show();
//		}
//		if(nick==""){
//			ok = false;
//			$("#warning_4 span").html("�ǳ�Ϊ��");
//			$("#warning_4").show();
//		}
//		if(password==""){
//			ok = false;
//			$("#warning_2 span").html("����Ϊ��");
//			$("#warning_2").show();
//		}else{
//			if(password.length<6){
//				ok = false;
	//			$("#warning_2 span").html("������Ҫ6λ����");
//				$("#warning_2").show();
//			}
//		}
//		if(final_password != password){
//			ok = false;
//			$("#warning_3 span").html("�����벻һ��");
//			$("#warning_3").show();
//		}
//		//����Ajax
//		if(ok){
//			$.ajax({
//				url:base_url+"/user/regist.do",
//				type:"post",
//				data:{"name":name,"password":password,"nick":nick},
//				dataType:"json",
//				success:function(result){
//					if(result.status==0){//�ɹ�
//						alert(result.msg);//��ʾ
//						$("#back").click();//�л�����¼����
//					}else if(result.status==1){//�û���ռ��
//						$("#warning_1 span").html(result.msg);
//						$("#warning_1").show();
//					}
//				},
//				error:function(){
//					alert("ע��ʧ��,�Ժ�����");
//				}
//			});
//		}
//	});
//});