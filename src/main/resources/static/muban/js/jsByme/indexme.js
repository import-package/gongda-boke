var page = 1;
function loadPostByCreatTime(){
	// 发送ajax
	$.ajax({
		url :"post/byCreateTime.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var replys = posts[i].cn_post_replys;//评论数
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
					createPostLi(title,postBody,likes,looks,userId,userNick,time,postId,replys);
				}
				if(posts.length < 5){
					$("#numbertwo").hide();
					$("#numberthree").hide();
				}else if(posts.length > 5 && posts.length < 10){
					$("#numberthree").hide();
				}
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};

function loadPostByfire(){
	// 发送ajax
	$.ajax({
		url : "post/byLikes.do",
		type : "post",
		data : {
			"page":page
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				//获取数据
				var posts = result.data;
				for(var i=0;i<posts.length;i++){
					var replys = posts[i].cn_post_replys;//评论数
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
					createPostLi2(title,postBody,likes,looks,userId,userNick,time,postId,replys);
				}
				if(posts.length < 5){
					$("#numbertwo2").hide();
					$("#numberthree2").hide();
				}else if(posts.length > 5 && posts.length < 10){
					$("#numberthree2").hide();
				}
			}
		},
		error : function() {
			alert("帖子加载失败！");
		}
	});
};
function createPostLi(title,postBody,likes,looks,userId,userNick,time,postId,replys){
	var s_li ='<li class="abc" >'
	s_li +='		<article class="format-standard type-post hentry clearfix">';
	s_li +='	 		<header class="clearfix">';
	s_li +='				<h3 class="post-title">';
	s_li +='					<a class="single1" target="_blank" href="single.html?postId='+postId+'"> △    '+title +'</a>';
	s_li +='				</h3>';
	s_li +=' 				<div class="post-meta clearfix">';
	s_li +='					<span class="date">'+time+'</span>';
	s_li +='					<span class="category"><a href="#" title="View all posts in Server &amp; Database">'+userNick+'</a></span>';
	s_li +='					<span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">'+replys+'评论</a></span>';//这里把评论换成了点赞
	s_li +='                    <span >◉ '+looks+' 浏览过... </span>';
	s_li +='					<span class="like-count">'+likes+'人点赞...</span>';
	s_li +='				</div>';
	s_li +=' 			</header>';
	s_li +='            <div style="width: 750px;display:block;word-break: break-all;word-wrap: break-word;margin-bottom:50px;">';
	s_li +='				<p>'+postBody+'</p>';
	s_li +='            </div>';
	s_li +='		</article>';
	s_li +='    </li>';
	//<a class="readmore-link" >阅读全文</a>
	//将字符串转换为li对象
	var $li = $(s_li);
	//将id绑定到li中
	$li.data("userId",userId);
	$li.data("postId",postId);
	//将li插入到list中
	$("#article_ul").append($li);
};
function createPostLi2(title,postBody,likes,looks,userId,userNick,time,postId,replys){
	var s_li ='<li class="abc" >'
	s_li +='		<article class="format-standard type-post hentry clearfix">';
	s_li +='	 		<header class="clearfix">';
	s_li +='				<h3 class="post-title">';
	s_li +='					<a class="single1" target="_blank" href="single.html?postId='+postId+'"> △    '+title +'</a>';
	s_li +='				</h3>';
	s_li +=' 				<div class="post-meta clearfix">';
	s_li +='					<span class="date">'+time+'</span>';
	s_li +='					<span class="category"><a href="#" title="View all posts in Server &amp; Database">'+userNick+'</a></span>';
	s_li +='					<span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">'+replys+'评论</a></span>';//这里把评论换成了点赞
	s_li +='                    <span >◉ '+looks+' 浏览过... </span>';
	s_li +='					<span class="like-count">'+likes+'人点赞...</span>';
	s_li +='				</div>';
	s_li +=' 			</header>';
	s_li +='            <div style="width: 750px;display:block;word-break: break-all;word-wrap: break-word;">';
	s_li +='				<p>'+postBody+'</p>';
	s_li +='            </div>';
	s_li +='		</article>';
	s_li +='    </li>';
	//<a class="readmore-link" >阅读全文</a>
	//将字符串转换为li对象
	var $li = $(s_li);
	//将id绑定到li中
	$li.data("userId",userId);
	$li.data("postId",postId);
	//将li插入到list中
	$("#article_ul2").append($li);
};

function getUserNickByUserId(){
	// 发送ajax
	$.ajax({
		url : "user/findUserNickByUserId.do",
		type : "post",
		data : {
			"userId":userId
		},
		dataType : "json",
		success : function(result) {
			if(result.status==0){
				$("#yonghuming").html('欢迎您，' + result.msg);
			}
			
		},
		error : function() {
			alert("用户昵称加载失败！");
		}
	});
};

function tuichuqu(){
	delCookie("userId");
	$("#fh5co-primary-menu").show();
	$("#yonghuyidenglu").hide();
}