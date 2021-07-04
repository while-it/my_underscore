function debounce(func,wait,immediate){
    let timeout,result ;
    var debounced = function(){
        timeout && clearTimeout(timeout);
        let _this = this;
        let _args = arguments;
        if (immediate){
            let allow_call = !timeout;
            timeout = setTimeout(function(){
                timeout = null
            },wait);
            if (allow_call) result =  func.apply(_this,_args);
        }else{
            timeout = setTimeout(function (){
                result = func.apply(_this,_args);
            },wait);
        }
        return result;
    }
    debounced.cancle = function (){
        timeout && clearTimeout(timeout);
        timeout = null;
    }
    return debounced;
}