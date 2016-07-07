<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4>添加话题</h4>
        </div>
        <div class="panel-body">
            <form role="form">
                <div class="form-group">
                    <label for="title">标题</label>
                    <input type="text" class="form-control" id="title" placeholder="请输入标题">
                </div>
                <div class="form-group">
                    <label for="content">内容</label>
                    <textarea class="form-control" id="content" placeholder="请输入评论内容"></textarea>
                </div>
                <button type="submit" class="btn btn-primary pull-right">添加</button>
            </form>
        </div>
    </div>
</template>
