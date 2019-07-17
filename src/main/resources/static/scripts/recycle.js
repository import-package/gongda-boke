/***********************展示回收站***********************/
function showRecycle(){
	var userId = getCookie("userId");
	$.ajax({
		url:"note/loadRecycleNotes.do",
		type:"post",
		data:{"userId":userId},
		dataType:"json",
		success:function(result){ 
			if(result.status==0){
				$("#pc_part_2").hide();//隐藏原笔记列表
				$("#pc_part_3").hide();//显示区域
				$("#pc_part_6").hide();//隐藏区域
				//$("#pc_part_4").show();//显示区域
				//$("#pc_part_4").animate({height: 'toggle', opacity: 'toggle'},"slow");
				$("#pc_part_4").show(300);
				$("#pc_part_5").show();//显示区域
				$("#recycle_list").empty();// 清空之前的记录
				//获取数据
				var notes = result.data;
				for(var i=0;i<notes.length;i++){
					var title = notes[i].cn_note_title;//获取标题
					var noteId = notes[i].cn_note_id;//获取id
					//新建li字符串
					var s_li = '<li class="disable"><a><i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>';    
						s_li += title;
						s_li += '<button type="button" class="btn btn-default btn-xs btn_position btn_delete"> <i class="fa fa-times"></i> </button>';
						s_li += '<button type="button" class="btn btn-default btn-xs btn_position_2 btn_replay"> <i class="fa fa-reply"></i> </button></a></li>';
					//将字符串转换为li对象
					var $li = $(s_li);
					//将id绑定到li中
					$li.data("noteId",noteId);
					//将li插入到list中
					$("#recycle_list").append($li);
				}
			}
		},
		error:function(){
			alert("加载回收站失败！");
		}
	});
};
//关闭回收站
function closeRecycle(){
	$("#pc_part_2").show();//隐藏原笔记列表
	$("#pc_part_3").show();//显示区域
	$("#pc_part_6").hide();//隐藏区域
	$("#pc_part_4").hide();
	$("#pc_part_5").hide();
};

//将回收站笔记撤回
function leaveRecycle() {
	$("#recycle_list li a").removeClass("checked");
	$(this).parent().addClass("checked");
	// 获取元素
	var userId = getCookie("userId");
	var $li = $("#recycle_list a.checked").parent();// 选中笔记
	if($("#pc_part_5").is(":hidden")){
		 $li = $("#search_list a.checked").parent();// 选中笔记
	}
	var noteId = $li.data("noteId");// 获取笔记ID
	
	// 发送ajax请求
	$.ajax({
		url: "note/leaveRecycle.do",
		type : "post",
		data : {
			"noteId" : noteId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				$li.remove();// 移除这一项
				alert(result.msg);// 提示移出回收站成功
			}
		},
		error : function(result) {
			alert(result.msg);// 提示删除没成功
		}
	});
	return false;
};

//将回收站笔记彻底删除
function deleteRecycle() {
	$("#recycle_list li a").removeClass("checked");
	$(this).parent().addClass("checked");
	// 获取元素
	var userId = getCookie("userId");
	
	if($("#pc_part_4").is(":hidden")){
		 $li = $("#search_list a.checked").parent();// 选中笔记
	}else{
		 $li = $("#recycle_list a.checked").parent();// 选中笔记
	}
	
	var noteId = $li.data("noteId");// 获取笔记ID
	
	// 发送ajax请求
	$.ajax({
		url:"note/delete.do",
		type : "post",
		data : {
			"noteId" : noteId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				$li.remove();// 移除这一项
				alert(result.msg);// 提示移出回收站成功
			}
		},
		error : function(result) {
			alert(result.msg);// 提示删除没成功
		}
	});
	return false;
};

//预览回收站的笔记
function viewRecycleNote() {
	// 设置选中效果״̬
	$("#recycle_list li a").removeClass("checked");
	$(this).find("a").addClass("checked");
	// 获取Id
	var noteId = $(this).data("noteId");
	// 发送ajax请求
	$.ajax({
		url : "note/loadNote.do",
		type : "post",
		data : {
			"noteId" : noteId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				var title = result.data.cn_note_title;
				var body = result.data.cn_note_body;
				$("#pc_part_3").hide();//显示区域
				$("#pc_part_5").show();//显示区域
				$("#noput_note_title").html(title);
				$("#noput_note_body").html(body);
			}
		},
		error : function() {
			alert("预览回收站笔记失败！");
		}
	});
};







/***********************关于搜索***********************/
//var page = 1;//搜索笔记的参数，页数默认为一
//确认搜索笔记
//function sureSearchShare(event){
//	var code = event.keyCode;
//	if(code==13){//13是回车键的数字
//		alert("cao");
//		$("#pc_part_6").show();//显示搜索区域
//		$("#pc_part_4").hide();//隐藏回收站
//		$("#pc_part_2").hide();//隐藏原笔记列表
//		
//		//扫描搜索框中的内容
//		var keyword = $("#search_note").val().trim();
	//	page = 1;
//		
//		//发送ajax请求
///		$("#search_list").empty();//清空之前的搜索笔记
///		loadPageShare(keyword,page);
//	}
//};


//搜索信号发送到服务器
//function loadPageShare(keyword,page){
//	$.ajax({
//		url:base + "/share/search.do",
//		type:"post",
//		data:{"keyword":keyword,"page":page},
//		dataType:"json",
	//	success:function(result){ 
//			if(result.status==0){
//				
//				//获取数据
///				var notes = result.data;
//				for(var i=0;i<notes.length;i++){
//					var title = notes[i].cn_share_title;//获取标题
//					var shareId = notes[i].cn_share_id;//获取id
//					//新建li字符串
//					var s_li ='<li class="online">';
//						s_li +='	<a>';
//						s_li +='		<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>';
//						s_li += title;
//						s_li +='	</a>';
//						s_li +='</li>';
//					//将字符串转换为li对象
//					var $li = $(s_li);
//					//将id绑定到li中
///					$li.data("shareId",shareId);
//					//将li插入到list中
//					$("#search_list").append($li);
//				}
//			}
//		},
///		error:function(){
//			alert("搜索失败！");
//		}
//	});
//}

//让搜索出的分享笔记显示更多
//function moreSearchShare(){
//	//获取参数
//	var keyword = $("#search_note").val().trim();
//	page+=1;
//	//发送ajax请求加载列表
//	loadPageShare(keyword,page);
//};

