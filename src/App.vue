

<template>

<div>
    <app-header></app-header>
            <button class="btn btn-default btn-warning"  @click="login" style="margin-top: 50px;">isLogin?</button>  
    <router-view></router-view>
</div>

</template>

<script>

import AppHeader from './components/AppHeader'

export default {
	data () {
		return {

		}
	},

	methods: {
		login: function(){
			console.log(AppHeader.data());
		}
	},

    components: {
        AppHeader
    }
}

</script>
