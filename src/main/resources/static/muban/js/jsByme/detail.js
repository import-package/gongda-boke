var replyPage = 1;
/*
 * 加载帖子详情
 */
function loadPostDetail(){
	$.ajax({
		url : "post/findPostDetail.do",
		type : "post",
		data : {
			"postId" : postId[0]
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				var post = result.data;
				var replys = post.cn_post_replys;
				var title = post.cn_post_title;//获取标题
				var postBody = post.cn_post_body;
				var creatTime = post.cn_post_create_time;
				var likes = post.cn_post_likes;
				var looks = post.cn_post_looks;
				var userId = post.cn_user_id;
				var userNick = post.cn_user_nick;
				var time = Common.formatTime(creatTime,"yyyy-MM-dd HH:mm:ss");
				//新建li字符串
				createPost(title,postBody,likes,looks,userId,userNick,time,postId,replys);
				// 输出笔记题目
				$("#chuangzuozhe").text(userNick);
				$("#xiaobiaoti").text(title);
			}
		},
		error : function() {
			alert("加载笔记信息失败！");
		}
	});
};

function createPost(title,postBody,likes,looks,userId,userNick,time,postId,replys){
	var s_li =' 	<article class=" type-post format-standard hentry clearfix">';
		s_li +='		<h1 class="post-title"><a href="#">'+ title +'</a></h1>';
		s_li +='	 	<div class="post-meta clearfix">';
		s_li +='			<span class="date">'+ time +'</span>';
		s_li +='			<span class="category"><a href="#" title="View all posts in Server &amp; Database">'+ userNick +'</a></span>';
		s_li +='			<span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website" id="comment">'+ replys +'评论</a></span>';
		s_li +=' 			<span class="like-count" id="smallgreat">'+likes+'</span>';
	//	s_li +='            <span >◉ '+looks+' 浏览过... </span>';
		s_li +='		</div>';
		s_li +='		<div style="width: 750px;display:block;word-break: break-all;word-wrap: break-word;">' + postBody;
		s_li +='		</div>';
		s_li +='	</article>';
		s_li +='	 <div class="like-btn">';
		s_li +='	<form id="like-it-form" action="#" method="post">';
		s_li +='	<span class="like-it " id="great">'+likes+'</span>';
		s_li +='	<input type="hidden" name="post_id" value="99">';
		s_li +='	<input type="hidden" name="action" id="great" value="like_it">';
		s_li +='	</form>';
		s_li +='	<span class="tags">';
		//s_li +='	<strong>Tags:&nbsp;&nbsp;</strong><a href="#" rel="tag">basic</a>,';
		//s_li +='	<a href="#" rel="tag">setting</a>, <a href="http://knowledgebase.inspirythemes.com/tag/website/"rel="tag">website</a>';
		s_li +='	  </span>';
		s_li +='	 </div>';
		
		//将字符串转换为li对象
		var $li = $(s_li);
		//将id绑定到li中
		$li.data("userId",userId);
		$li.data("postId",postId);
		//将li插入到list中
		$("#postDetail").append($li);
};
/*
 * 加载评论
 */
function loadReplylist(){
	$.ajax({
		url : "reply/show.do",
		type : "post",
		data : {
			"postId" : postId[0],
			"replyPage" : replyPage
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				var replys = result.data;
				if(replys !=null ){
					$("#replyul").empty();
					for(var i=0;i<replys.length;i++){
						var replyId = replys[i].cn_reply_id;
						var replyBody = replys[i].cn_reply_body;
						var createTime = replys[i].cn_reply_create_time;
						var userId = replys[i].cn_user_id;
						var userNick = replys[i].cn_user_nick;
						var replyLikes = replys[i].cn_reply_likes;
						var time = Common.formatTime(createTime,"yyyy-MM-dd HH:mm:ss");
						//新建li字符串
						createReply(replyBody,userId,userNick,time,replyLikes,replyId);
					}
					if(replys.length < 10){
						$("#numbertwo").hide();
						$("#numberthree").hide();
					}else if(replys.length < 20){
						$("#numberthree").hide();
					}
				}
			}else if(result.status == 1){
				$("#pagination").hide();
				$("#pinglunyouwu").text("还没有评论哦~");
			}
		},
		error : function() {
			alert("加载笔记信息失败！");
		}
	});
};
function createReply(replyBody,userId,userNick,time,replyLikes,replyId){
	var s_li ='<li class="abc" >'
		s_li +='		<article class="format-standard type-post hentry clearfix">';
		s_li +='	 		<header class="clearfix">';
		//s_li +='				<h3 class="post-title">';
		//s_li +='					<a class="single1" target="_blank" href="single.html?postId='+postId+'"> △     </a>';
		//s_li +='				</h3>';
		s_li +=' 				<div class="post-meta clearfix">';
		s_li +='					<span class="date">'+time+'</span>';
		s_li +='					<span class="category"><a href="#" title="View all posts in Server &amp; Database">'+userNick+'</a></span>';
		//s_li +='					<span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">'+replys+'评论</a></span>';//这里把评论换成了点赞
		//s_li +='                  <span >◉ '+looks+' 浏览过... </span>';
		//s_li +='					<span class="like-count">'+replyLikes+'人点赞...</span>';
		s_li +='				</div>';
		s_li +=' 			</header>';
		s_li +='            <div style="width: 750px;display:block;word-break: break-all;word-wrap: break-word;">';
		s_li +='				<p>'+replyBody+'</p>';
		s_li +='            </div>';
		s_li +='		</article>';
		s_li +='    </li>';
		
		//将字符串转换为li对象
		var $li = $(s_li);
		//将id绑定到li中
		$li.data("userId",userId);
		$li.data("replyId",replyId);
		//将li插入到list中
		$("#replyul").append($li);
};
/*
 * 第一页按钮
 */
function numberOne(){
	$("#pagination a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	replyPage = parseInt($("#numberone").text());
	//发送ajax请求发送获取第一页列表
	loadReplylist();
};
/*
 * 第二页按钮
 */
function numberTwo(){
	$("#pagination a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	replyPage = parseInt($("#numbertwo").text());
	//发送ajax请求发送获取第二页列表
	loadReplylist();
};
/*
 * 第三个按钮
 */
function numberThree(){
	$("#pagination a").removeClass("active");// 删除之前选中的效果
	$(this).addClass("active");// 设置选中效果
	replyPage = parseInt($("#numberthree").text());
	//发送ajax请求发送获取第三页列表
	loadReplylist();
};

/*
 * 下一页按钮
 */
function numberNext(){
	replyPage += 1;
	//发送ajax请求发送获取下一页列表
	$.ajax({
		url : "reply/show.do",
		type : "post",
		data : {
			"postId" : postId[0],
			"replyPage":replyPage
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#pagination a").removeClass("active");// 删除之前选中的效果
				if(replyPage > (parseInt($("#numberthree").text()))){
					var one = (parseInt($("#numberthree").text()));
					one +=1;
					$("#numberone").text(one);
					one +=1;
					$("#numbertwo").text(one);
					one +=1;
					$("#numberthree").text(one);
				}
				
				if(parseInt($("#numberone").text()) == replyPage){
					$("#numberone").addClass("active");// 设置选中效果
				}else if(parseInt($("#numbertwo").text()) == replyPage){
					$("#numbertwo").addClass("active");// 设置选中效果
				}else if(parseInt($("#numberthree").text()) == replyPage){
					$("#numberthree").addClass("active");// 设置选中效果
				}
				
				$("#replyul").empty();
				//获取数据
				var posts = result.data;
				for(var i=0;i<replys.length;i++){
					var replyId = replys[i].cn_reply_id;
					var replyBody = replys[i].cn_reply_body;
					var createTime = replys[i].cn_reply_create_time;
					var userId = replys[i].cn_user_id;
					var userNick = replys[i].cn_user_nick;
					var replyLikes = replys[i].cn_reply_likes;
					var time = Common.formatTime(createTime,"yyyy-MM-dd HH:mm:ss");
					//新建li字符串
					createReply(replyBody,userId,userNick,time,replyLikes,replyId);
				}
			}else if(result.status==1){
				alert(result.msg);
				replyPage -= 1;
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};

/*
 * 上一页按钮
 */
function numberBefore(){
	if(replyPage == 1){
		
	}else{
		replyPage -= 1;
		//发送ajax请求发送获取下一页列表
		$.ajax({
			url : "reply/show.do",
			type : "post",
			data : {
				"postId" : postId[0],
				"replyPage":replyPage
			},
			dataType : "json",
			success : function(result) {
				if(result.status==0){
					$("#pagination a").removeClass("active");// 删除之前选中的效果
					if(replyPage < (parseInt($("#numberone").text()))){
						var one = (parseInt($("#numberone").text()));
						one -=1;
						$("#numberthree").text(one);
						one -=1;
						$("#numbertwo").text(one);
						one -=1;
						$("#numberone").text(one);
					}
					
					if(parseInt($("#numberone").text()) == replyPage){
						$("#numberone").addClass("active");// 设置选中效果
					}else if(parseInt($("#numbertwo").text()) == replyPage){
						$("#numbertwo").addClass("active");// 设置选中效果
					}else if(parseInt($("#numberthree").text()) == replyPage){
						$("#numberthree").addClass("active");// 设置选中效果
					}
					
					$("#replyul").empty();
					//获取数据
					var replys = result.data;
					for(var i=0;i<replys.length;i++){
						var replyId = replys[i].cn_reply_id;
						var replyBody = replys[i].cn_reply_body;
						var createTime = replys[i].cn_reply_create_time;
						var userId = replys[i].cn_user_id;
						var userNick = replys[i].cn_user_nick;
						var replyLikes = replys[i].cn_reply_likes;
						var time = Common.formatTime(createTime,"yyyy-MM-dd HH:mm:ss");
						//新建li字符串
						createReply(replyBody,userId,userNick,time,replyLikes,replyId);
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

/*
 * 发表评论
 */
function pubReply(){
	var replyBody = $("#wodepinglun").val();
	if((replyBody != null)&&replyBody!=""){
		var userId = getCookie("userId");
		if(userId == null){
			alert("只有登陆后才能评论哦~");
			//window.location.href = "log_in.html";
			window.open("log_in.html"); 
		}else if(userId != null){
			
			$.ajax({
				url : "reply/add.do",
				type : "post",
				data : {
					"replyBody" : replyBody,
					"userId" : userId,
					"postId" : postId[0]
				},
				dataType : "json",
				success : function(result) {
					if (result.status == 0) {
						$("#comment").text(parseInt($("#comment").text())+1);
						$("#replyul").empty;
						loadReplylist();
						$("#wodepinglun").val("");
					}
				},
				error : function() {
					alert("创建评论失败！");
				}
			});
		}
	}else{
		alert("请输入一点东西~");
	}
}


/*点赞
 */
function checkGreat(){
	var userId = getCookie("userId");
	if(userId != null){
		$.ajax({
			url : "great/great.do",
			type : "post",
			data : {
				"postId" : postId[0],
				"userId" : userId
			},
			dataType : "json",
			success : function(result) {
				if (result.status == 1) {
					$("#smallgreat").text(parseInt($("#smallgreat").text())-1);
					$("#great").text(parseInt($("#great").text())-1);
				}else if(result.status == 2){
					$("#smallgreat").text(parseInt($("#smallgreat").text())+1);
					$("#great").text(parseInt($("#great").text())+1);
				}
			},
			error : function() {
				alert("点赞失败！");
			}
		});
	}else {
		alert("登陆后才能点赞哦~");
		window.open("log_in.html"); 
	}
	
}