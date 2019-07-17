//function loadArticleDetail(){
//	/**
//	 * 发送ajax请求请求帖子内容
//	 */
//	var $li = $(this).parent().parent().parent().parent();// 选中笔记
//	var postId = $li.data("postId");
//	$.ajax({
//		url : base + "/post/findPostDetail.do",
//		type : "post",
//		data : {
//			"postId" : postId
//		},
//		dataType : "json",
//		success : function(result) {
//			if (result.status == 0) {
//				var content = result.data.cn_post_body;
//				console.log(content);
//			}
//		},
//		error : function() {
//			alert("帖子详细加载失败！");
//		}
//	});
//};

/**
 * 帖子换页
 * @returns
 */
function numberOne(){
	$("#pagination a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	page = parseInt($("#numberone").text());
	//发送ajax请求发送获取第一页列表
	$.ajax({
		url : "post/byCreateTime.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#article_ul").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var title = posts[i].cn_post_title;//获取标题
					var postId = posts[i].cn_post_id;//获取id
					var postBody = posts[i].cn_post_body;
					var creatTime = posts[i].cn_post_create_time;
					var likes = posts[i].cn_post_likes;
					var looks = posts[i].cn_post_looks;
					var userId = posts[i].cn_user_id;
					var userNick = posts[i].cn_user_nick;
					var postId = posts[i].cn_post_id;
					var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createPostLi(title,postBody,likes,looks,userId,userNick,time,postId);
				}
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};
function numberTwo(){
	$("#pagination a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	page = parseInt($("#numbertwo").text());
	//发送ajax请求发送获取第二页列表
	$.ajax({
		url : "post/byCreateTime.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#article_ul").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var title = posts[i].cn_post_title;//获取标题
					var postId = posts[i].cn_post_id;//获取id
					var postBody = posts[i].cn_post_body;
					var creatTime = posts[i].cn_post_create_time;
					var likes = posts[i].cn_post_likes;
					var looks = posts[i].cn_post_looks;
					var userId = posts[i].cn_user_id;
					var userNick = posts[i].cn_user_nick;
					var postId = posts[i].cn_post_id;
					var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createPostLi(title,postBody,likes,looks,userId,userNick,time,postId);
				}
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};
function numberThree(){
	$("#pagination a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	page = parseInt($("#numberthree").text());
	//发送ajax请求发送获取第三页列表
	$.ajax({
		url : "post/byCreateTime.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#article_ul").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var title = posts[i].cn_post_title;//获取标题
					var postId = posts[i].cn_post_id;//获取id
					var postBody = posts[i].cn_post_body;
					var creatTime = posts[i].cn_post_create_time;
					var likes = posts[i].cn_post_likes;
					var looks = posts[i].cn_post_looks;
					var userId = posts[i].cn_user_id;
					var userNick = posts[i].cn_user_nick;
					var postId = posts[i].cn_post_id;
					var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createPostLi(title,postBody,likes,looks,userId,userNick,time,postId);
				}
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};
function numberNext(){
	page += 1;
	//发送ajax请求发送获取下一页列表
	$.ajax({
		url : "post/byCreateTime.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#pagination a").removeClass("active");// 删除之前选中的效果
				if(page > (parseInt($("#numberthree").text()))){
					var one = (parseInt($("#numberthree").text()));
					console.log(one);
					one +=1;
					$("#numberone").text(one);
					one +=1;
					$("#numbertwo").text(one);
					one +=1;
					$("#numberthree").text(one);
				}
				
				if(parseInt($("#numberone").text()) == page){
					$("#numberone").addClass("active");// 设置选中效果
				}else if(parseInt($("#numbertwo").text()) == page){
					$("#numbertwo").addClass("active");// 设置选中效果
				}else if(parseInt($("#numberthree").text()) == page){
					$("#numberthree").addClass("active");// 设置选中效果
				}
				
				$("#article_ul").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var title = posts[i].cn_post_title;//获取标题
					var postId = posts[i].cn_post_id;//获取id
					var postBody = posts[i].cn_post_body;
					var creatTime = posts[i].cn_post_create_time;
					var likes = posts[i].cn_post_likes;
					var looks = posts[i].cn_post_looks;
					var userId = posts[i].cn_user_id;
					var userNick = posts[i].cn_user_nick;
					var postId = posts[i].cn_post_id;
					var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createPostLi(title,postBody,likes,looks,userId,userNick,time,postId);
				}
			}else if(result.status==1){
				alert(result.msg);
				page -= 1;
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};


function numberBefore(){
	if(page == 1){
		
	}else{
		page -= 1;
		//发送ajax请求发送获取下一页列表
		$.ajax({
			url : "post/byCreateTime.do",
			type : "post",
			data : {
				"page":page
			},
			dataType : "json",
			success : function(result) {
				if(result.status==0){
					$("#pagination a").removeClass("active");// 删除之前选中的效果
					if(page < (parseInt($("#numberone").text()))){
						var one = (parseInt($("#numberone").text()));
						console.log(one);
						one -=1;
						$("#numberthree").text(one);
						one -=1;
						$("#numbertwo").text(one);
						one -=1;
						$("#numberone").text(one);
					}
					
					if(parseInt($("#numberone").text()) == page){
						$("#numberone").addClass("active");// 设置选中效果
					}else if(parseInt($("#numbertwo").text()) == page){
						$("#numbertwo").addClass("active");// 设置选中效果
					}else if(parseInt($("#numberthree").text()) == page){
						$("#numberthree").addClass("active");// 设置选中效果
					}
					
					$("#article_ul").empty();
					//获取数据
					var posts = result.data;
					for(var i=0;i<posts.length;i++){
						var title = posts[i].cn_post_title;//获取标题
						var postId = posts[i].cn_post_id;//获取id
						var postBody = posts[i].cn_post_body;
						var creatTime = posts[i].cn_post_create_time;
						var likes = posts[i].cn_post_likes;
						var looks = posts[i].cn_post_looks;
						var userId = posts[i].cn_user_id;
						var userNick = posts[i].cn_user_nick;
						var postId = posts[i].cn_post_id;
						var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
						//新建li字符串
						createPostLi(title,postBody,likes,looks,userId,userNick,time,postId);
					}
				}
			},
			error : function() {
				alert("帖子加载失败！");
				page += 1;
			}
		});
	}
};
function fireOrderShow(){
	page = 1;
	$("#article_div").hide();
	$("#article_div2").show(300);
};
function timeOrderShow(){
	page = 1;
	$("#article_div2").hide();
	$("#article_div").show(300);
};

/**
 * fire系列
 * @returns
 */
function numberOne2(){
	$("#pagination2 a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	page = parseInt($("#numberone2").text());
	//发送ajax请求发送获取第一页列表
	$.ajax({
		url : "post/byLikes.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#article_ul2").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var title = posts[i].cn_post_title;//获取标题
					var postId = posts[i].cn_post_id;//获取id
					var postBody = posts[i].cn_post_body;
					var creatTime = posts[i].cn_post_create_time;
					var likes = posts[i].cn_post_likes;
					var looks = posts[i].cn_post_looks;
					var userId = posts[i].cn_user_id;
					var userNick = posts[i].cn_user_nick;
					var postId = posts[i].cn_post_id;
					var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createPostLi2(title,postBody,likes,looks,userId,userNick,time,postId);
				}
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};
function numberTwo2(){
	$("#pagination2 a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	page = parseInt($("#numbertwo2").text());
	//发送ajax请求发送获取第二页列表
	$.ajax({
		url : "post/byLikes.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#article_ul2").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var title = posts[i].cn_post_title;//获取标题
					var postId = posts[i].cn_post_id;//获取id
					var postBody = posts[i].cn_post_body;
					var creatTime = posts[i].cn_post_create_time;
					var likes = posts[i].cn_post_likes;
					var looks = posts[i].cn_post_looks;
					var userId = posts[i].cn_user_id;
					var userNick = posts[i].cn_user_nick;
					var postId = posts[i].cn_post_id;
					var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createPostLi2(title,postBody,likes,looks,userId,userNick,time,postId);
				}
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};
function numberThree2(){
	$("#pagination2 a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	page = parseInt($("#numberthree2").text());
	//发送ajax请求发送获取第三页列表
	$.ajax({
		url : "post/byLikes.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#article_ul2").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var title = posts[i].cn_post_title;//获取标题
					var postId = posts[i].cn_post_id;//获取id
					var postBody = posts[i].cn_post_body;
					var creatTime = posts[i].cn_post_create_time;
					var likes = posts[i].cn_post_likes;
					var looks = posts[i].cn_post_looks;
					var userId = posts[i].cn_user_id;
					var userNick = posts[i].cn_user_nick;
					var postId = posts[i].cn_post_id;
					var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createPostLi2(title,postBody,likes,looks,userId,userNick,time,postId);
				}
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};
function numberNext2(){
	page += 1;
	//发送ajax请求发送获取下一页列表
	$.ajax({
		url : "post/byLikes.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#pagination2 a").removeClass("active");// 删除之前选中的效果
				if(page > (parseInt($("#numberthree2").text()))){
					var one = (parseInt($("#numberthree2").text()));
					one +=1;
					$("#numberone2").text(one);
					one +=1;
					$("#numbertwo2").text(one);
					one +=1;
					$("#numberthree2").text(one);
				}
				
				if(parseInt($("#numberone2").text()) == page){
					$("#numberone2").addClass("active");// 设置选中效果
				}else if(parseInt($("#numbertwo2").text()) == page){
					$("#numbertwo2").addClass("active");// 设置选中效果
				}else if(parseInt($("#numberthree2").text()) == page){
					$("#numberthree2").addClass("active");// 设置选中效果
				}
				
				$("#article_ul2").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var title = posts[i].cn_post_title;//获取标题
					var postId = posts[i].cn_post_id;//获取id
					var postBody = posts[i].cn_post_body;
					var creatTime = posts[i].cn_post_create_time;
					var likes = posts[i].cn_post_likes;
					var looks = posts[i].cn_post_looks;
					var userId = posts[i].cn_user_id;
					var userNick = posts[i].cn_user_nick;
					var postId = posts[i].cn_post_id;
					var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createPostLi2(title,postBody,likes,looks,userId,userNick,time,postId);
				}
			}else if(result.status==1){
				alert(result.msg);
				page -=1;
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};
function numberBefore2(){
	if(page == 1){
	}else{
		page -= 1;
		//发送ajax请求发送获取下一页列表
		$.ajax({
			url : "post/byLikes.do",
			type : "post",
			data : {
				"page":page
			},
			dataType : "json",
			success : function(result) {
				if(result.status==0){
					$("#pagination2 a").removeClass("active");// 删除之前选中的效果
					if(page < (parseInt($("#numberone2").text()))){
						var one = (parseInt($("#numberone2").text()));
						console.log(one);
						one -=1;
						$("#numberthree2").text(one);
						one -=1;
						$("#numbertwo2").text(one);
						one -=1;
						$("#numberone2").text(one);
					}
					
					if(parseInt($("#numberone2").text()) == page){
						$("#numberone2").addClass("active");// 设置选中效果
					}else if(parseInt($("#numbertwo2").text()) == page){
						$("#numbertwo2").addClass("active");// 设置选中效果
					}else if(parseInt($("#numberthree2").text()) == page){
						$("#numberthree2").addClass("active");// 设置选中效果
					}
					
					$("#article_ul2").empty();
					//获取数据
					var posts = result.data;
					for(var i=0;i<posts.length;i++){
						var title = posts[i].cn_post_title;//获取标题
						var postId = posts[i].cn_post_id;//获取id
						var postBody = posts[i].cn_post_body;
						var creatTime = posts[i].cn_post_create_time;
						var likes = posts[i].cn_post_likes;
						var looks = posts[i].cn_post_looks;
						var userId = posts[i].cn_user_id;
						var userNick = posts[i].cn_user_nick;
						var postId = posts[i].cn_post_id;
						var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
						//新建li字符串
						createPostLi2(title,postBody,likes,looks,userId,userNick,time,postId);
					}
				}
			},
			error : function() {
				alert("帖子加载失败！");
				page += 1;
			}
		});
	}
};//function numberLast(){
//$("#pagination a").removeClass("active");// 删除之前选中的效果
//$(this).addClass("active");// 设置选中效果
//$("#article_ul").empty();
//page = last;
////发送ajax请求发送获取第一页列表
//$.ajax({
//	url : base + "/post/byCreateTime.do",
//	type : "post",
//	data : {
//		"page":page
//	},
//	dataType : "json",
//	success : function(result) {
//		if(result.status==0){
//			//获取数据
//			var posts = result.data;
//			for(var i=0;i<posts.length;i++){
//				var title = posts[i].cn_post_title;//获取标题
//				var postId = posts[i].cn_post_id;//获取id
//				var postBody = posts[i].cn_post_body;
//				var creatTime = posts[i].cn_post_create_time;
//				var likes = posts[i].cn_post_likes;
//				var looks = posts[i].cn_post_looks;
//				var userId = posts[i].cn_user_id;
//				var userNick = posts[i].cn_user_nick;
//				var postId = posts[i].cn_post_id;
//				var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
//				//新建li字符串
//				createPostLi(title,postBody,likes,looks,userId,userNick,time,postId);
//			}
//		}
//	},
//	error : function() {
//		alert("帖子加载失败！");
//	}
//});
//};