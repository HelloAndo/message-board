

<template>

<div id="app">
    <app-header></app-header>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>话题列表</h4></div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th width="60%">标题</th>
                        <th>作者</th>
                        <th>修改时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ABC</td>
                        <td>xyz</td>
                        <td>2014-05-09 11:21:32</td>
                        <td><a href="#">修改</a> <a href="#">删除</a></td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>xyz</td>
                        <td>2014-05-09 11:21:32</td>
                        <td><a href="#">修改</a> <a href="#">删除</a></td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>xyz</td>
                        <td>2014-05-09 11:21:32</td>
                        <td><a href="#">修改</a> <a href="#">删除</a></td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>xyz</td>
                        <td>2014-05-09 11:21:32</td>
                        <td><a href="#">修改</a> <a href="#">删除</a></td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>xyz</td>
                        <td>2014-05-09 11:21:32</td>
                        <td><a href="#">修改</a> <a href="#">删除</a></td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>xyz</td>
                        <td>2014-05-09 11:21:32</td>
                        <td><a href="#">修改</a> <a href="#">删除</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ul class="pagination">
            <li class="disabled"><a href="#">&laquo;</a></li>
            <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&raquo;</a></li>
        </ul>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>添加话题</h4></div>
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
                    <button type="submit" class="btn btn-primary pull-right">添加</button>
                </form>
            </div>
        </div>
    </div>
    <!-- /.container -->

    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>标题</h4></div>
            <div class="panel-body">
                <div class="panel">
                    <span>作者：<a href="#">xyz</a></span> <span>修改时间：2014-05-09 11:21:32</span> <a href="#">修改</a> <a href="#">删除</a>
                </div>
                <div class="panel">
                    这是文章内容。
                </div>
            </div>
        </div>

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
    <!-- /.container -->
</div>

</template>

<script>

import AppHeader from './components/AppHeader'

export default {
    components: {
        AppHeader
    }
}

</script>
