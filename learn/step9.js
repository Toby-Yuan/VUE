var app = new Vue({
    el: '#app',
    data: {
        count: 0
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        name: 'Tommy'
    },
    methods: {
        greet: function (){
            alert('Hello ' + this.name)
        }
    }
})

var app2 = new Vue({
    el: '#app2',
    methods: {
        say: function(message){
            alert(message)
        }
    }
})

var app3 = new Vue({
    el: '#app3',
    methods: {
        warm: function(message, event){
            if(event){
                event.preventDefault();
            }
            alert(message);
        }
    }
})

var app4 = new Vue({
    el: '#app4',
    methods: {
        alert: function(){
            alert('Just this time')
        }
    }
})

var app5 = new Vue({
    el: '#app5',
    methods: {
        outer: function(){
            alert('這是外面的div');
        },
        middle: function(){
            alert('這是中間的div');
        },
        inner: function(){
            alert('這是裡面的button');
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        msg: 'Hi'
    },
    methods: {
        changeMsg: function(){
            this.msg = 'Cant go to yahoo';
        }
    }
})

var app7 = new Vue({
    el: '#app7',
    methods: {
        outer: function(){
            alert('這是外面的div');
        },
        middle: function(){
            alert('這是中間的div');
        },
        inner: function(){
            alert('這是裡面的button');
        }
    }
})