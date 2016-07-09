<style>

.main{
    margin-top: 70px;
}

.pagination {
    margin-top: 0;
}

</style>

<template>

<div class="main">
    <div class="container" v-show=" $route.path === '/home' ">
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
<!--                     <tr v-link=" '/home/content' ">
                        <td>ABC</td>
                        <td>{{name}}</td>
                        <td>2014-05-09 11:21:32</td>
                        <td v-show="name !== usr"><a href="#">修改</a> <a href="#">删除</a></td>
                    </tr>
                    <tr v-link=" '/home/modify' ">
                        <td>ABC</td>
                        <td>xyz</td>
                        <td>2014-05-09 11:21:32</td>
                        <td><a href="#">修改</a> <a href="#">删除</a></td>
                    </tr> -->
                    <tr v-link=" '/home/content' " v-for="topic in topticList">
                        <td>{{topic.title}}</td>
                        <td @click.stop="filterTopics(topic.author)">{{topic.author}}</td>
                        <td>{{topic.date}}</td>
                        <td><template v-if="usr == topic.author">
                            <a v-link=" '/home/modify' " >修改</a> <a href="javascript:;" @click.stop="delTopic(topic._id)">删除</a></template>
                        </td>
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
        <div class="panel panel-default" v-show="isLogin">
            <div class="panel-heading">
                <h4>添加话题</h4>
            </div>
            <div class="panel-body">
                <form role="form">
                    <div class="form-group">
                        <label for="title">标题</label>
                        <input type="text" class="form-control" id="title" placeholder="请输入标题" v-model="newTopic.title">
                    </div>
                    <div class="form-group">
                        <label for="content">内容</label>
                        <textarea class="form-control" id="content" placeholder="请输入评论内容" v-model="newTopic.ctx"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary pull-right"
                    @click="addTopic">添加</button>
                </form>
            </div>
        </div>

    </div>
    
    <router-view ></router-view>

</div>

</template>

<script>
// import AddTopic from './AddTopic'
import store from './store.js'



export default {

    ready () {
        this.getTopicList();
    },

    props: ['isLogin', 'usr'],

    data () {
        return {
            topticList: [],
            newTopic: {},
        }
    },

    computed: {

    },

    methods: {
        getTopicList: function(){
            this.$http.get('gettopics').then((response) => {
                this.topticList = response.data.data.list ;
            }, (response) => {
                alert( response ) ;
            });
        },

        addTopic: function(){
            this.$http.post('addtopic', {title: this.newTopic.title, content: this.newTopic.ctx}).then((response) => {
                this.topticList = this.getTopicList() ;
                this.newTopic = {};
            }, (response) => {

            });
        },

        delTopic: function(id){
            this.$http.post('deletetopic', {_id: id}).then((response) => {
                this.topticList = this.getTopicList() ;
            }, (response) => {

            });
        },

        filterTopics: function(author){
            this.topticList = this.topticList.filter(function(topic){
                return topic.author == author;
            });
        },
    },

    components: {

    }
}
</script>