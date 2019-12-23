//笔记本单机绑定事件,加载笔记列表
function loadBookNotes() {
	document.getElementById('add_note').style.display='block';//添加笔记按钮显现
	//$('#add_note').style.display='block';
	// showNoteList(2);
	$("#pc_part_6").hide();// 隐藏搜索区域
	$("#pc_part_4").hide();// 隐藏回收站区域
	$("#pc_part_2").show(300);
	//$("#pc_part_2").show();// 展示原笔记列表
	//$("#pc_part_2").animate({height: 'toggle', opacity: 'toggle'},"slow");
	
	$("#book_ul li a").removeClass("checked");// 删除之前选中的效果
	$(this).find("a").addClass("checked");// 设置选中效果
	// 获取笔记本id
	var bookId = $(this).data("bookId");
	// 发送ajax
	$.ajax({
		url : "note/loadNotesList.do",
		type : "post",
		data : {
			"bookId" : bookId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				var notes = result.data;// 获取笔记
				$("#note_list").empty();// 清空之前的记录
				// $("note_list li").remove();也可以进行清除
				// 将多条笔记分别插入
				for (var i = 0; i < notes.length; i++) {
					// 获取笔记标题
					var noteTitle = notes[i].cn_note_title;
					// 获取笔记ID
					var noteId = notes[i].cn_note_id;
					// 获取笔记状态值
					var status = notes[i].cn_note_status_id;
					console.log(noteTitle+noteId+status);
					// 创建li
					createNoteLi(noteTitle, noteId, status ,bookId);
				}
			}
		},
		error : function() {
			alert("笔记本加载失败！");
		}
	});
};

// 动态创建笔记li
function createNoteLi(noteTitle, noteId, status ,bookId) {
	var s_li = '<li class="online">';
	s_li += '	<a>';
	s_li += '		<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>'
			+ noteTitle
			+ '<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button>';
	s_li += '	</a>';
	s_li += '	<div class="note_menu" tabindex="-1">';
	s_li += '	<dl>';
	s_li += '		<dt><button type="button" class="btn btn-default btn-xs btn_move" title="移动至..."><i class="fa fa-random"></i></button></dt>';
	s_li += '		<dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt>';
	s_li += '		<dt><button type="button" class="btn btn-default btn-xs btn_delete" title="放入回收站"><i class="fa fa-times"></i></button></dt>';
	s_li += '   </dl>';
	s_li += '   </div>';
	s_li += '</li>';
	// 转换成li对象
	if (status == 3) {
		var s_li = '<li class="online">';
		s_li += '	<a>';
		s_li += '<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>';
		s_li += noteTitle;
		s_li += '<i class="fa fa-sitemap"></i><button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button>';
		s_li += '	</a>';
		s_li += '	<div class="note_menu" tabindex="-1">';
		s_li += '	<dl>';
		s_li += '		<dt><button type="button" class="btn btn-default btn-xs btn_move" title="移动至..."><i class="fa fa-random"></i></button></dt>';
		s_li += '		<dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt>';
		s_li += '		<dt><button type="button" class="btn btn-default btn-xs btn_delete" title="删除"><i class="fa fa-times"></i></button></dt>';
		s_li += '   </dl>';
		s_li += '   </div>';
		s_li += '</li>';
	}
	var $li = $(s_li);
	$li.data("noteId", noteId);
	$li.data("noteBookId", bookId);
	// 将li对象添加到ul中
	$("#note_list").append($li);
};

// 加载笔记内容
function loadNoteDetail() {
	$("#pc_part_6").hide();// 隐藏搜索区域
	$("#pc_part_4").hide();// 隐藏回收站区域
	$("#pc_part_2").show(300);
	$("#pc_part_3").show(300);
	// 设置选中效果״̬
	$("#note_list li a").removeClass("checked");
	$(this).find("a").addClass("checked");
	// 获取请求参数
	var noteId = $(this).data("noteId");
	var bookId = $(this).data("noteBookId");
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
				// 获取返回的笔记标题
				var noteTitle = result.data.cn_note_title;
				// 获取返回的笔记内容
				var noteBody = result.data.cn_note_body;
				$("#pc_part_5").hide();//显示区域
				//$("#pc_part_3").show();//显示区域
				$("#pc_part_3").show(300);
				//将笔记Id保存到此
	    		$("#pc_part_3").data("noteId", noteId);
	    		$("#pc_part_3").data("bookId", bookId);
				// 输出笔记题目
				$("#input_note_title").val(noteTitle);
				// 输出笔记内容
				um.ready(function() {
					if (noteBody != null) {
						um.setContent(noteBody);
					} else {
						um.setContent("  ");
					}
				});
			}
		},
		error : function() {
			alert("加载笔记信息失败！");
		}
	});
};

// 增加笔记
function sureAddNote() {
	var userId = getCookie("userId");
	var noteTitle = $("#input_note").val().trim();// 获取笔记标题
	var $li = $("#book_ul a.checked").parent();// 选中笔记本
	var bookId = $li.data("bookId");// 获取笔记本ID
	var typeId = 1;// 暂且设置笔记种类为1
	// 数据格式检查
	var ok = true;
	if (noteTitle == "") {// 判断标题是否为空
		ok = false;
		$("#title_span").html("标题不能为空");
	}

	if (userId == null) {// 检查cookie是否失效
		of = false;
		window.location.href = "log_in.html";// 定位到首页
	}
	if (ok == true) {
		// 发送ajax请求
		$.ajax({
			url : "note/add.do",
			type : "post",
			data : {
				"bookId" : bookId,
				"userId" : userId,
				"title" : noteTitle,
				"typeId" : typeId
			},
			dataType : "json",
			success : function(result) {
				if (result.status == 0) {
					var note = result.data;
					// 关闭窗口
					closeWindow();
					// 获取笔记li
					var noteId = note.cn_note_id;
					createNoteLi(noteTitle, noteId);
					$("#pc_part_5").hide();//显示区域
					$("#pc_part_3").show();//显示区域
					// 宣布笔记创建成功
					alert(result.msg);
				}
			},
			error : function() {
				alert("创建笔记失败！");
			}
		});
	}
};

// 笔记放入回收站
function sureRecycleNote() {
	// 获取元素
	var userId = getCookie("userId");
	var $li = $("#note_list a.checked").parent();// 选中笔记
	var noteId = $li.data("noteId");// 获取笔记ID

	// 发送ajax请求
	$.ajax({
		url : "note/recycle.do",
		type : "post",
		data : {
			"noteId" : noteId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				$li.remove();// 移除这一项
				alert(result.msg);// 提示删除成功
			}
		},
		error : function() {
			alert(result.msg);// 提示删除没成功
		}
	});
	return false;
};

// 更新笔记内容(保存)
function sureUpdateNote() {
	// 被选中的超链接的父辈是li，而并非ul
						//	var $li = $("#note_list li a.checked").parent();
						//	if ($li.length == 0) {
						//		alert("要先选择是哪个笔记哦！");
						//	} else {
						// 获取笔记的id
						//var $div = $("#pc_part_3");
						//var noteId = $div.date("noteId");
		var noteId = $("#pc_part_3").data("noteId");
		var noteBookId = $("#pc_part_3").data("bookId");
						//var noteId = $li.data("noteId");
		// 获取笔记标题
		var noteTitle = $("#input_note_title").val().trim();
		// 获取笔记内容
		var noteBody = um.getContent();
		//刷新列表
		$("#book_ul li a").removeClass("checked");
		//遍历列表对更改的笔记 本 设置选中效果
		$("#book_ul").find("li").each(function () {
            var notebook = $(this);
            var notebookid = notebook.data("bookId");
            if (notebookid == noteBookId) {
            	$(this).find("a").addClass("checked");// 设置选中效果
            	$('#book_ul li a.checked').trigger('click');
            }
        });
		
		// 发送ajax请求
		$.ajax({
					url : "note/update.do",
					type : "post",
					data : {
						"title" : noteTitle,
						"body" : noteBody,
						"noteId" : noteId
					},
					dataType : "json",
					success : function(result) {
						
						if (result.status == 0) {
										// 获取新的标题放到note的li里
										// i标签是斜体字
										//var str = '<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>'
										//+ noteTitle
										//+ '<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button>';
										//$li.find("a").html(str);
							//遍历列表对更改的笔记设置选中效果
							$("#note_list").find("li").each(function () {
					            var note = $(this);
					            var noteid = note.data("noteId");
					            if (noteid == noteId) {
					            	$(this).find("a").addClass("checked");// 设置选中效果
					            }
					        });
							// 提示成功
							alert(result.msg);
						}
					},
					error : function() {
						alert("保存笔记失败！");
					}
				});
	//}
};

// 笔记下拉菜单
function showNoteMenu() {
	// 显示点击菜单(找到同辈元素)
	var note_menu = $(this).parents("li").find("div");
	// 先对之前的笔记菜单刷新
	$('#note_list div').hide();
	// 将找到的div展开
	note_menu.slideDown(800);
}

// 关闭笔记下拉菜单(点body刷新)
function shutNoteMenu() {
	// $('#note_list div').hide();
	$("#note_list").on("mouseover", ".note_menu", function() {
		$(this).show();//将下拉选项展示
	});
	$("#note_list").on("mouseout", ".note_menu", function() {
		$('#note_list div').hide();
	});
	
}

// 分享笔记
function sureShareNote() {
	// 获取请求参数
	// $li = $("#note_list a.checked").parent();
	$li = $(this).parents("li");
	var noteId = $li.data("noteId");
	// 发送ajax请求
	$
			.ajax({
				url : "post/addPost.do",
				type : "post",
				data : {
					"noteId" : noteId
				},
				dataType : "json",
				success : function(result) {
					var noteTitle = $li.text();
					var sli = '';// 加上一个分享标志,将整个li的内容替换掉
					sli += '<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>';
					sli += noteTitle;
					sli += '<i class="fa fa-sitemap"></i><button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button>';
					// 将笔记li元素的<a>标记内容替换
					$li.find("a").html(sli);
					// if(result.status==0){
					// alert(result.msg);
					// }else if(result.status==1){
					alert(result.msg);
					// }
				},
				error : function() {
					alert("分享笔记失败！");
				}
			});
	return false;// ��ֹð��
};

// 让搜索出的分享笔记显示更多
function moreSearchShare() {
	// 获取参数
	var keyword = $("#search_note").val().trim();
	page = page + 1;
	// 发送ajax请求加载列表
	loadPageShare(keyword, page);
};

// 显示原笔记列表
function showNoteList(index) {
	//
	$(".col-xs-3:not('#save_button_div')").hide();
	// ��ָ���б���ʾ
	$("#pc_part_" + index).show();
};

// 确认搜索笔记
function sureSearchShare(event) {
	var code = event.keyCode;
	if (code == 13) {// 13是回车键的数字
		// 扫描搜索框中的内容
		var keyword = $("#search_note").val().trim();
		// 发送ajax请求
		
	}
};

//�����бʼǲ˵�����
//$("#note_list .note_menu").hide();
////����ǰ�����ť�Ĳ˵���ʾ
//var $li = $(this).parents("li");
//var $menu = $li.find(".note_menu");
//$menu.slideDown(1000);
////����ǰ�ʼ�liѡ��
//$("#note_list li a.checked").removeClass("checked");
//$li.find("a").addClass("checked");
//return false;//��ֹð��
//};
////׷������ƶ��Աʼǲ˵��Ĵ���
//$("#note_list").on("mouseover",".note_menu",function(){
//$(this).show();//������ʾ״̬
//});
//$("#note_list").on("mouseout",".note_menu",function(){
//$(this).hide();//���ز˵�
//});
////���body�������ز˵�
//$("body").click(function(){
//$("#note_list .note_menu").hide();
//});