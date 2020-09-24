var app = new Vue({
    el: '#app',
    data: {
        a: 'hello'
    },
    created: function(){
        console.log('a is:' + this.a)
    }
})