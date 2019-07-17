function moveNote(){
	//获取请求参数
				var $noteLi = 
					$("#note_list a.checked").parent();
				var noteId = $noteLi.data("noteId");
				var bookId = $("#moveSelect").val();
				$("#pc_part_3").data("bookId", bookId);
	//TODO 检查是否选择笔记本
	//TODO 检查是否和原笔记本一样
	//发送Ajax请求
				$.ajax({
					url:"note/update.do",
					type:"post",
					data:{"noteId":noteId,"noteBookId":bookId},
					dataType:"json",
					success:function(result){
						if(result.status==0){
							closeWindow();//关闭对话框
							$noteLi.remove();//移除笔记
							alert("笔记移动成功!");//提示成功
						}
					},
					error:function(){
						alert("转移笔记失败");
					}
				});
};