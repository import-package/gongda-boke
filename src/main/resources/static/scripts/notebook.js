//根据用户id显示笔记本列表
function loadUserBooks() {
	// 通过cookie获取登陆着的用户的id
	var userId = getCookie("userId");
	if (userId == null) {// 如果没有这个id的话，说明cookie存在时间超时了。(默认为两个小时)
		window.location.href("log_in.html");
	} else {// 发送ajax请求
		$.ajax({
			url : "noteBook/load.do",
			type : "post",
			data : {
				"userId" : userId
			},
			dataType : "json",
			success : function(result) {
				if (result.status == 0) {//判断查询是否成功
					var books = result.data;//获取笔记本集合
					for (var i = 0; i < books.length; i++) {//需要一条一条插入数据
						var bookName = books[i].cn_notebook_name;//获取笔记本名称
						var bookId = books[i].cn_notebook_id;//获取笔记本id
						// 创建一个笔记本列表的li元素
						createBookLi(bookName, bookId);
					}
				}
			},
			error : function() {
				alert("笔记本加载失败");
			}
		});
	}
};

// 创建一个笔记本li元素
function createBookLi(bookName, bookId) {
	var s_li = '<li class="online">';
	s_li += '	<a>';
	s_li += '	<i class="fa fa-book" title="online" rel="tooltip-bottom">';
	s_li += '	</i>' + bookName;
	s_li += '	<button type="button" class="btn btn-default btn-xs btn_position btn_delete"> <i class="fa fa-times"></i> </button>'
	s_li += '	</a>';
	s_li += '</li>';
	// 将sli字符串转换成jQuery对象li元素
	var $li = $(s_li);
	$li.data("bookId", bookId);//绑定bookId，方便js后期获取取得笔记本中的笔记
	// 将li元素添加到笔记本ul列表区
	$("#book_ul").append($li);
};

//确认删除一个笔记本
function deleteNoteBook(){
	var userId = getCookie("userId");
	// 获取笔记本id
	var $li = $("#book_ul a.checked").parent();// 选中笔记
	var bookId = $li.data("bookId");
	console.log(bookId);
	$.ajax({
		url : "noteBook/delete.do",
		type : "post",
		data : {
			"bookId" : bookId,
			"userId" : userId
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				
				$li.remove();
				// 关闭窗口
				closeWindow();
				//清空笔记列表
				$("#note_list").empty();// 清空之前的记录
				//输出 "删除成功"
				alert(result.msg);
			}
		},
		error : function() {
			alert("删除失败！");//发送失败
		}
	});
};

// 创建一个新的笔记本
function sureAddBook() {
	var ok = true;
	// 输入笔记本名
	var bookName = $("#input_notebook").val().trim();
	var userId = getCookie("userId");
	
	if (bookName == "") {// 判断标题是否为空
		ok = false;
		$("#title_span2").html("笔记本名不能为空~");
	}

	if (userId == null) {// 检查cookie是否失效
		of = false;
		window.location.href = "log_in.html";// 定位到首页
	}
	
	if(ok == true){
	// 发送ajax
	$.ajax({
		url : "noteBook/add.do",
		type : "post",
		data : {
			"userId" : userId,
			"bookName" : bookName
		},
		dataType : "json",
		success : function(result) {
			if (result.status == 0) {
				// 关闭窗口
				closeWindow();
				// 保留bookId
				var data = result.data;
				 bookName = data.title;
				var bookId = data.bookId;
				createBookLi(bookName, bookId);//在book列表中添加一个book
				
				//输出 "添加成功"
				$("#book_ul").empty();
				loadUserBooks();
				alert(result.msg);
				
			}
		},
		error : function() {
			alert("添加失败！");//发送失败
		}
	});
	}
};
