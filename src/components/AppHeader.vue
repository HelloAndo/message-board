<style scoped>

.navbar-brand {
    color: #fff;
}

.navbar-form .welcome{ display: inline-block; font-size: 18px; color: #fff; vertical-align: middle; padding-right: 12px; }

</style>

<template>

<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" v-link="'/home'">{{logo}}</a>
        </div>
        <div class="navbar-form navbar-right" v-if="isLogin">
            <span class="welcome">欢迎 {{user}} 回来</span>
            <button class="btn btn-default btn-warning"  @click="testLogin">testLogin</button>
            <button class="btn btn-default btn-warning"  @click="testStore">testStore</button>   
            <button class="btn btn-default btn-danger"  @click="logout">退出</button>
        </div>
        <form class="navbar-form navbar-right" role="search" v-else >
            <div class="form-group">
                <input type="text" class="form-control" placeholder="账号" v-model="user">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="密码" v-model="pass">
            </div>
            <button type="submit" class="btn btn-primary" v-else @click="login(user, pass)">登陆</button>
            <button class="btn btn-default" data-toggle="modal" data-target="#modal-signup" v-else>注册</button>
            <button class="btn btn-default btn-warning"  @click="testLogin">testLogin</button>  
            <button class="btn btn-default btn-warning"  @click="testStore">testStore</button>                        
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
                            <input type="text" class="form-control" id="input-account" placeholder="账号可以由半角英文数字或下划线组成" v-model="regUser">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="input-password" class="col-sm-2 control-label">密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="input-password" placeholder="密码" v-model="regPass1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="input-confirm" class="col-sm-2 control-label">确认密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="input-confirm" placeholder="再次输入密码" v-model="regPass2">
                        </div>
                    </div>
                </form>
                <div class="alert alert-warning" role="alert" v-if="rewritePass">两次输入密码不一致，请重新输入！</div>
                <div class="alert alert-success" role="alert" v-if="regSuccess">恭喜您！注册成功！</div>
                <div class="alert alert-danger" role="alert" v-if="rewriteUser">账号已被注册，请重新注册！</div>
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
import store from './store.js'

export default {

ready () {
    this.$http.get('testlogin').then((response) => {
        console.log(response.data.data.isLogin);
        if( response.data.data.isLogin ){
            this.setUserData('login', true);
            this.user = this.getUserData( 'user' );
            this.isLogin = true ;            
        }
    });
},

    data() {
        return {
            logo: 'vue-guestbook',
            isLogin: false,
            regUser: '',
            regPass1: '',
            regPass2: '',
            rewriteUser: false,
            rewritePass: false,
            regSuccess: false,
            user: '',
            pass: '',
        }
    },

    computed: {
        // isLogin: function(){
        //     console.log(this.getUserData( 'login' ));
        //     return 
        // },
    },

    methods: {
        register: function(){
            this.rewritePass = this.rewriteUser = this.regSuccess = false;
            // 判断注册密码两次输入是否一致
            if( this.regPass1 === this.regPass2 ){
                // 后面擦除输入所以提前缓存注册信息，避免ajax异步导致信息丢失
                var regUser = this.regUser,
                    regPass = this.regPass1;
                // ajax提交注册信息
                this.$http.post('signup', {user: regUser, password: regPass}).then((response) => {
                    console.log(response);
                    if ( response.data.success ){
                        // 注册成功提示
                        this.regSuccess = true;
                        // 注册成功马上登陆
                        this.login( regUser, regPass );
                    }else{
                        // 用户名已被注册，提示
                        this.rewriteUser = true;
                    }
                }, (response) => {
                    alert(response.data.message);
                });          
            }else{
                this.rewritePass = true ;
            }
            // 擦除注册输入信息
            this.regUser = this.regPass1 = this.regPass2 = '';    
        },

        login: function( user, pass ){
            this.$http.post('login', {user: user, password: pass}).then((response) => {
                if( response.data.success ){
                    // 响应最新的用户名
                    this.user = user;
                    // 更新localStorage用户登陆信息
                    this.setUserData( 'login', true );
                    this.setUserData( 'user', user );
                    this.isLogin = true ;
                }else{ 
                    alert("用户名或密码错误！") 
                }
            }, (response) => {
                alert(response.data.message);
            });

        },

        logout: function(){
            this.$http.get('logout').then((response) => {
                if( response.data.success ){
                    this.setUserData('login', false);
                    this.isLogin = false ;              
                }else{
                    return ;
                }
            });

        },

        getUserData: function(key){
            return store.fetch( key );
        },

        setUserData: function(key, value){
            store.save( key, value );        
        },

        delUser: function(key){
            store.del( key );
        },

        testLogin: function(){
            this.$http.get('testlogin').then((response) => {
                console.log(response); 
            });  
        },

        testStore: function(){
            console.log(this.loginTest); 
        }
    }
}

</script>
