function addUeditor() {
	//实例化Ueditor编辑器
	var ue = UE.getEditor('container',{
		//工具条
		toolbars: [
		    [
		     'fullscreen',//全屏
		     'source',
		     'undo',
		     'redo',
		     '|',
		     'bold', //加粗
		     'italic', //斜体
		     'underline', //下划线
		     'strikethrough', //删除线
		     'horizontal', //分隔线
		     'formatmatch', //格式刷
		     'blockquote', //引用
		     '|',
		     'time', //时间
		     'date', //日期
		     '|',
		     'unlink', //取消链接
		     'fontfamily', //字体
		     'fontsize', //字号
		     'forecolor', //字体颜色
		     'lineheight', //行间距
		     'justifyleft', //居左对齐
		     'justifycenter', //居中对齐
		     'justifyright', //居右对齐
		     'simpleupload', //单图上传
		     'insertimage', //多图上传
		     'emotion', //表情
		     'spechars', //特殊字符
		     ]
		]
	});
 };