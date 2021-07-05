function unique_set(arrays,sorted){
    if(Object.prototype.toString.call(arrays) !== '[object Array]'){
        throw new Error('please array')
    }
    let rest = {};
    for(item in arrays){
        test[item] = false
    }
    return Object.keys(test)
}

function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}

function unique (arr) {
    const seen = new Map()
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}
var unique = (a) => [...new Set(a)]