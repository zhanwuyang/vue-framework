/**
 * Created by wy on 2017/9/14.
 */
// console.log(Vue);
// Vue.prototype = {
//     myself:function(){
//         console.log('我是自定义函数')
//     }
// }
// console.log(Vue)
//用来自定义全局函数  扩展功能用的
Vue.prototype.myself = function(dom){
        console.log(dom);
        console.log('我是自定义函数');

};
Vue.prototype.getValue = function(list){
        var newArr = {};
        var com  = this.$children[0].$children;
        for(var i = 0;i<list.length;i++){
            var key = list[i]
            for(var j in com){
                if(com[j].$refs[key]){
                        newArr[key] = com[j].$refs[list[i]].value
                }
            }
        }
        return newArr;
};
//可能用于异步请求后打开弹窗;
Vue.prototype.openPop = function(list){
    for(var i in list){
        Event.$emit(list[i]+'open');
    }
};
//可能用于异步请求后关闭弹窗;
Vue.prototype.closePop = function(list){
    for(var i in list){
        Event.$emit(list[i]+'close');
    }
};

//ajax
Vue.prototype.ajaxPost = function(){

};
//playcartoon
Vue.prototype.playCartoon = function(dom){
    var a = 0;
    var timer = setInterval(function(){
        dom.$data.styleObj.background = 'url('+ROOT_URL+'/image/part2/'+a+'.png) 0% 0% / 100% 100% no-repeat';
        a++;
        if(a>49){
            clearInterval(timer)
        }
    },100)
};