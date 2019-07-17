//展示移动笔记的警告框
function showMoveNoteWindow(){
	$(".opacity_bg").show();
	var url = 
		"alert/alert_move.html";
	$("#can").load(url,function(){
		var bookLis = $("#book_ul li");
		for(var i=0;i<bookLis.length;i++){
			var bookName = $(bookLis[i]).text();
			var bookId = $(bookLis[i]).data("bookId");
			var s_opt = "<option value='"+bookId+"'>"+bookName+"</option>";
			$("#moveSelect").append(s_opt);
		}
	});
	return false;
}

//弹出笔记放入回收站警告
function showRecycleNoteWindow(){
	//显示背景
	$(".opacity_bg").show();
	var url = "alert/alert_delete_note.html";
	$("#can").load(url);
	return false;//阻止冒泡
};

//弹出笔记本放入回收站警告
function showDeleteNoteBookWindow(){
	$(this).parent().addClass("checked");//选中效果
	$(".opacity_bg").show();
	var url = "alert/alert_delete_notebook.html";
	$("#can").load(url);
	return false;//阻止冒泡
};

//弹出新建笔记本对话框
function showAddBookWindow(){
	$(".opacity_bg").show();//将背景显示出来
	var url = "alert/alert_notebook.html";
	$("#can").load(url);//在can这个div区域加载alert.html
};

//弹出新建笔记对话框
function showAddNoteWindow(){
	//先选中笔记本(通过判断笔记本的超链接的状态)
	var $bookLi = $("#book_ul a.checked").parent();
	if($bookLi.length==0){
		alert("请先选中笔记本~");
	}else{
		//弹出创建笔记对话框
		$(".opacity_bg").show();//显示背景
		var url = "alert/alert_note.html";//加载对话框
		$("#can").load(url);
	}
};

//关闭对话框
function closeWindow(){
	$(".opacity_bg").hide();//将背景层隐藏
	$("#can").empty();//清空can这个div中的内容$("#can").html("");
};