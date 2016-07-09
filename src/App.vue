

<template>

<div>
    <app-header></app-header>
    <router-view :is-login="loginFlag" :usr="user"></router-view>
</div>

</template>

<script>

import AppHeader from './components/AppHeader'

export default {
	data () {
		return {
			loginFlag: false,
			user: '',
		}
	},

	methods: {
		login: function(){
			console.log(AppHeader.data());
		}
	},

	events: {
		refreshLoginState: function(loginFlag, user){
			this.loginFlag = loginFlag ;
			this.user = user;
		},
	},

    components: {
        AppHeader
    }
}

</script>
