<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js">
Vue.component('pagesTable', {
	props: ['items'],
	template: '<table><tr v-for="item in items" :key="item.id"><td>{{ item.citeName }}</td><td class="social"><a v-bind:href="item.url" target="_blank"><img v-bind:src="\'../pics/\' + item.img" v-bind:alt="item.citeName" class="social"></a></td></tr></table>'
})

var app = new Vue({
	el: '#app',
	data: {
		cites: {
			GitHub: {
				citeName: 'GitHub',
				url: 'https://github.com/olgasoboleva23',
				img: 'GitHub.svg'
			},
			VK: {
				citeName: 'VK.com',
				url: 'https://vk.com',
				img: 'vk.svg'
			},
			telegram: {
				citeName: 'telegram',
				url: 'https://telegram.org',
				img: 'telegram.svg'

			},
		},
	},
})
</script>