/**
 * Created by wy on 2017/9/13.
 */
//点击事件real_click
var Vaction = function(App){
    this.app = App;
    console.log(this.app)
};
Vaction.prototype = {
    meFun:function(){
        console.log(666)
    },
    sure:function(){
        var that  = this;
        // var arr = that.app.$children[0].$children;
        // for(var i in arr){
        //     if(arr[i].$refs.inputValue){
        //         console.log(arr[i].$refs)
        //         console.log(arr[i].$refs)
        //     }
        // }
       var a = this.app.getValue(['name','phone']);
       console.log(a)
        // console.log(that.app.$children[0].$children[19])

    }
};