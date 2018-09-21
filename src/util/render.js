// 是否展示元素 / 展示那个
export function conditionShow(condition, comp1, comp2=null){
    return condition?comp1 : comp2;
}

export function switchShow(target, comps){
    return comps[target];
}

export function classNames(){
    const args = [].slice.call(arguments);
    let result = [];

    args.forEach(arg => {
        if(typeof arg === 'string'){
            result.push(arg);
        }
        else if(Array.isArray(arg)){
            classNames(...arg);
        }
        else if(typeof arg ==='object'){
            for(let key in arg){
                arg[key]?result.push(key):'';
            }
        }
    });

    return result.length>0?result.join(' '):'';
}


export function notEmpty(val){
    return val!==undefined && val!==null && val!=='';
}