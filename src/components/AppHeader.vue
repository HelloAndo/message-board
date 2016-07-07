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
        <form class="navbar-form navbar-right" role="search" v-if="!isLogin">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="账号" v-model="usrname1">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="密码" v-model="usrpass1">
            </div>
            <button type="submit" class="btn btn-primary" v-else v-on:click="login">登陆</button>
            <button class="btn btn-default" data-toggle="modal" data-target="#modal-signup" v-else>注册</button>                
        </form>
        <div class="navbar-form navbar-right" v-else>
            <span>欢迎XXX</span>
            <button class="btn btn-default btn-warning" v-if="isLogin" @click="testLogin">testLogin</button>
        </div>
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
                            <input type="text" class="form-control" id="input-account" name="user" placeholder="账号可以由半角英文数字或下划线组成" v-model="usrname">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="input-password" class="col-sm-2 control-label">密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="input-password" name="password" placeholder="密码" v-model="usrpass1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="input-confirm" class="col-sm-2 control-label">确认密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="input-confirm" name="password" placeholder="再次输入密码" v-model="usrpass2">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="register">注册</button>
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
            logo: 'vue-guestbook',
            isLogin: false,
            usrname: '',
            usrpass1: '',
            usrpass2: '',
            usrpassagain: '',
            usrname1: '',
            usrpass1: '',
            show: true
        }
    },

    computed: {

    },

    methods: {
        register: function(){
            // this.$http.post('signup', {user: this.usrname, password: this.usrpass}).then((response) => {
            //     console.log(response);

            // });
          this.$http.post('signup').then((response) => {
            // this.usrname = '';
            // this.usrpass = '';
            // this.usrpassagain = '';
            console.log(response);

          });
        },

        login: function(){
            console.log(this.isLogin);
            this.$http.post('login', {user: this.usrname1, password: this.usrpass1}).then((response) => {
                this.
               this.isLogin = true;
               console.log(this.isLogin);
            }, (response) => {
                alert(response.data.message);
            });

        },

        testLogin: function(){
            this.res = this.$http.get('testlogin').then((response) => {
                return response.data.data.isLogin ;
            });  
        }
    }
}

</script>
