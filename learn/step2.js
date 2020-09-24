// 在外先宣告資料
var data = { a: 1 }

// 通常用vm(Vue Model)來代表一個Vue的實例, 可以在Vue裡面撈外面先設定好的資料
var vm = new Vue({
    el: '#app',
    data: data
})

// 也可以先宣告後更改(a: 1-->2)
data.a = 2;

// 或是更改Vue裡面的資料(a: 2-->3)
vm.a = 3;

// 但是不能再加入其他資料(畫面上不會顯示新增的 b 資料, 但是直接更改Vue裡面的可以)
vm.b = 1;

// Object.freeze(data): 在此函式過後就無法再被更改(指的是外在因素, 例如: v-on)
Object.freeze(data);

// Vue 也有許多功能是以 $ 作為開頭, 以區分使用者自定義
// vm.$data: 可以看現在vm裡的data
// vm.$el: 可以看Vue運用在哪個位置
// vm.$watch: 查詢資料變化
vm.$watch('a', function(newVal, oldVal){
    console.log(newVal,oldVal);
})

// console結果 3,4
vm.a = 4;