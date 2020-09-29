Vue.component('image-show', {
    template: '<img>'
})

var imageList = new Vue({
    el: '#js_imageList',
    data: {
        images: ['./img/image1.jpg', './img/image2.jpg', './img/image3.jpg']
    },
    methods: {
        showBox: function(e) {
            document.getElementById('lightBox').style.visibility = 'visible';
            document.getElementById('lightBox').style.opacity = 1;
            var image = "<img src=" + e.target.src + ">";
            document.getElementById('lightBox').innerHTML += image;
        }
    }
})

var closeBox = new Vue({
    el: '#lightBox',
    methods: {
        close: function(get) {
            if(get.target.tagName !== 'IMG'){
                document.getElementById('lightBox').style.visibility = 'hidden';
                document.getElementById('lightBox').style.opacity = 0;
                setTimeout(function(){document.getElementById('lightBox').innerHTML = '<button class="close">X</button>';},500);
            };
        }
    }
})

Vue.component('slide-image', {
    props: ['url'],
    template: '<div class="one-slide"><img :src="url" ondragstart="return false"></div>'
})

var slideArea = new Vue({
    el: '#slideArea',
    data: {
        images: ['./img/image1.jpg', './img/image2.jpg', './img/image3.jpg'],
        autoPlay: '&#9658;',
        startX: 0
    },
    methods: {
        subOne: function() {
            firstShow -= 1;
            showSlideSub(firstShow);
        },
        addOne: function() {
            firstShow += 1;
            showSlideAdd(firstShow);
        },
        autoSlide: function() {
            setInterval(auto, 3000);
            if(this.autoPlay == '||'){
                this.autoPlay = '&#9658;';
                var highestTimeoutId = setTimeout(";");
                for (var i = 0 ; i < highestTimeoutId ; i++) {
                    clearTimeout(i); 
                };
            }else{
                this.autoPlay = '||';
            };
        },
        mouseEnter: function(e) {
            this.startX = e.offsetX;
        },
        mouseLeave: function(e){
            var moveX = this.startX - e.offsetX;

            if(moveX >= 50){
                firstShow += 1;
                showSlideAdd(firstShow);
            }else if(moveX <= -50){
                firstShow -= 1;
                showSlideSub(firstShow);
            };
        },
        touchEnter: function(e) {
            var touchobj = e.changedTouches[0];
            this.startX = touchobj.pageX;
        },
        touchLeave: function(e){
            var touchobj = e.changedTouches[0];
            var moveX = this.startX - touchobj.pageX;

            if(moveX >= 50){
                firstShow += 1;
                showSlideAdd(firstShow);
            }else if(moveX <= -50){
                firstShow -= 1;
                showSlideSub(firstShow);
            };
        }
    }
})

Vue.component('dot-list', {
    template: '<span></span>'
})

var dotArea = new Vue({
    el: '#dotArea',
    methods: {
        showPage: function(i) {
            showFirst(i);
        }
    }
})

function auto() {
    firstShow += 1;
    showSlideAdd(firstShow);
}

var firstShow = 1;
showFirst(firstShow);

// 初始狀態
function showFirst(n) {
    var i;
    var allSlide = document.getElementsByClassName('one-slide');
    var allDot = document.getElementsByClassName('dot');

    firstShow = n;

    // 隱藏所有輪播頁
    for(i = 0; i < allSlide.length; i++){
        allSlide[i].style.animation = 'none';
        allSlide[i].style.left = '100%';
        allDot[i].classList.remove('active');
    };

    // 顯示所選輪播頁
    allSlide[n-1].style.left = '0';
    allDot[n-1].classList.add('active');
};

// 輪播圖顯示
// 左到右
function showSlideAdd(n) {
    var i, front;
    var allSlide = document.getElementsByClassName('one-slide');
    var allDot = document.getElementsByClassName('dot');

    // 控制超出範圍
    if(n > allSlide.length){
        n = 1;
    };

    firstShow = n;

    if(n - 2 < 0){
        front = allSlide.length - 1;
    }else{
        front = n - 2;
    };

    // 隱藏所有輪播頁
    for(i = 0; i < allSlide.length; i++){
        allSlide[i].style.animation = 'none';
        allSlide[i].style.left = '100%';
        allDot[i].classList.remove('active');
    };

    // 顯示所選輪播頁
    allSlide[n-1].style.animation = 'fade-in-add 2s cubic-bezier(0.3,.66,0.5,1)';
    allSlide[n-1].style.left = '0';
    allSlide[front].style.animation = 'fade-out-add 2s cubic-bezier(0.3,.66,0.5,1)';
    allDot[n-1].classList.add('active');
};

// 右到左
function showSlideSub(n) {
    var i, front;
    var allSlide = document.getElementsByClassName('one-slide');
    var allDot = document.getElementsByClassName('dot');

    // 控制超出範圍
    if(n == 0){
        n = allSlide.length;
    };

    firstShow = n;

    if(n == allSlide.length){
        front = 0;
    }else{
        front = n;
    };

    // 隱藏所有輪播頁
    for(i = 0; i < allSlide.length; i++){
        allSlide[i].style.animation = 'none';
        allSlide[i].style.left = '100%';
        allDot[i].classList.remove('active');
    };

    // 顯示所選輪播頁
    allSlide[n-1].style.animation = 'fade-in-sub 2s cubic-bezier(0.3,.66,0.5,1)';
    allSlide[n-1].style.left = '0%';
    allSlide[front].style.animation = 'fade-out-sub 2s cubic-bezier(0.3,.66,0.5,1)';
    allDot[n-1].classList.add('active');
};