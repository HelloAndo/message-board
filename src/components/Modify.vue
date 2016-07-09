<template>
	<div class="container">
		<div class="panel panel-default">
            <div class="panel-heading">
                <h4>修改话题</h4></div>
            <div class="panel-body">
                <form role="form">
                    <div class="form-group">
                        <label for="title">标题</label>
                        <input type="text" class="form-control" id="title" placeholder="请输入标题">
                        </textarea>
                    </div>
                    <div class="form-group">
                        <label for="content">内容</label>
                        <textarea class="form-control" id="content" placeholder="请输入评论内容"></textarea>
                    </div>
                    <div class="form-group pull-right">
                        <button type="submit" class="btn btn-primary">修改</button>
                        <button class="btn btn-default">取消</button>
                    </div>
                </form>
            </div>
        </div>
	</div>
</template>