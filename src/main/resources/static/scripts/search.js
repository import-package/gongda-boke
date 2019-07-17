var page = 1;//搜索笔记的参数，页数默认为一
//确认搜索笔记
function sureSearchNote(event){
	var code = event.keyCode;
	if(code==13){//13是回车键的数字
		//$("#pc_part_6").show();//显示搜索区域
		$("#pc_part_4").hide();//隐藏回收站
		$("#pc_part_2").hide();//隐藏原笔记列表
		//$("#pc_part_6").animate({height: 'toggle', opacity: 'toggle'},"slow");
		$("#pc_part_6").show(300);
		//扫描搜索框中的内容
		var keyword = $("#search_note").val().trim();
		page = 1;
		//发送ajax请求
		$("#search_list").empty();//清空之前的搜索笔记
		loadPageShare(keyword,page);
	}
};

function closeSearch(){
	$("#pc_part_6").hide();//显示搜索区域
	$("#pc_part_4").hide();//隐藏回收站
	$("#pc_part_2").show();//隐藏原笔记列表
};

//让搜索出的分享笔记显示更多
function moreSearchShare(){
	//获取参数
	var keyword = $("#search_note").val().trim();
	page+=1;
	//发送ajax请求加载列表
	loadPageShare(keyword,page);
};

//搜索信号发送到服务器
function loadPageShare(keyword,page){
	$.ajax({
		url:"note/search.do",
		type:"post",
		data:{"keyword":keyword,"page":page},
		dataType:"json",
		success:function(result){ 
			if(result.status==0){
				//获取数据
				var notes = result.data;
				for(var i=0;i<notes.length;i++){
					var title = notes[i].cn_note_title;//获取标题
					var noteId = notes[i].cn_note_id;//获取id
					//新建li字符串
					if(notes[i].cn_note_status_id == 1){
					var s_li ='<li class="online">';
						s_li +='	<a>';
						s_li +='		<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>';
						s_li += title;
						s_li +='	</a>';
						s_li +='</li>';
					}else if(notes[i].cn_note_status_id == 2){
						var s_li = '<li class="disable"><a><i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>';    
						s_li += title;
						s_li += '<button type="button" class="btn btn-default btn-xs btn_position btn_delete"> <i class="fa fa-times"></i> </button>';
						s_li += '<button type="button" class="btn btn-default btn-xs btn_position_2 btn_replay"> <i class="fa fa-reply"></i> </button></a></li>';
					}
					//将字符串转换为li对象
					var $li = $(s_li);
					//将id绑定到li中
					$li.data("noteId",noteId);
					//将li插入到list中
					$("#search_list").append($li);
				}
			}
		},
		error:function(){
			alert("搜索失败！");
		}
	});
}

//预览搜索笔记
function viewShareNote() {
	// 获取Id
	var noteId = $(this).data("noteId");
	// 发送ajax请求
	$.ajax({
		url : "note/loadSearchNote.do",
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
			alert("预览搜索笔记失败！");
		}
	});
};

