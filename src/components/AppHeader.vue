<style scoped>

.navbar-brand {
    color: #fff;
}

</style>

<template>

<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" v-link="'/home'">{{logo}}</a>
        </div>
        <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="账号">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="密码">
            </div>
            <button type="submit" class="btn btn-primary">登陆</button>
            <button class="btn btn-default" data-toggle="modal" data-target="#modal-signup">注册</button>
        </form>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modal-signup" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="modal-label">注册</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="input-account" class="col-sm-2 control-label">账号</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="input-account" placeholder="账号可以由半角英文数字或下划线组成">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="input-password" class="col-sm-2 control-label">密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="input-password" placeholder="密码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="input-confirm" class="col-sm-2 control-label">确认密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="input-confirm" placeholder="再次输入密码">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">注册</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

</template>

<script>

export default {
    data() {
        return {
            logo: 'vue-guestbook'
        }
    }
}

</script>
