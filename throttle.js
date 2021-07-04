/**
 * 
 * @param {*} func 
 * @param {*} wait 
 * @param {*} options leading是否第一次执行 trailing是否最后一次要执行
 * @returns 
 */
function throttle(func, wait, options) {
    var timeout, context, args, result,now;
    var previous = 0;
    now = +new Date()
    if (!options) options = {};
    var later = function() {
        previous = options.leading === false ? 0 : now;
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };
    var throttled = function() {
        var now = now;
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };

    throttled.cancled = function(){
        clearTimeout(timeout);
        timeout = null;
        pre = 0;
    }
    return throttled
}