Vue.component('button-counter', {
    data: function(){
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">{{ count }} clicked</button>'
})

var app = new Vue({
    el: '#app'
})

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

var app1 = new Vue({
    el: '#app1'
})

var app2 = new Vue({
    el: '#app2',
    data: {
        posts: [
            {id: 1, title: 'Hello'},
            {id: 2, title: 'Vue'},
            {id: 3, title: 'Hi'}
        ]
    }
})