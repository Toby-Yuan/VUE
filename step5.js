var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    },
    computed:{
        reverseMessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'Hello'
    },
    methods: {
        reverseMessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            
            get: function(){
                return this.firstName + ' ' + this.lastName
            },

            set: function (newValue) {
                var names = newValue.split('')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        question: '',
        answer: 'Ask some question'
    },
    watch: {
        question: function (newQ, oldQ) {
            this.answer = 'Waiting...'
        }
    }
})