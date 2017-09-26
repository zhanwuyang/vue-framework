var Action = function () {

};

Action.prototype = {
    bindEvent: function (obj, type, func) {
        var objEvt = $._data($(obj)[0], "events");
        if (objEvt && objEvt[type]) {
            //console.log('binded');
        } else {
            //console.log('no event,then bind')
            $(obj).on(type, {}, func);
        }
    }
}



