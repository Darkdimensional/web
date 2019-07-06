var addMethod = function(object,name,fn){
    var old = object[name]   //保存老的方法
    object[name] = function(){
        if(fn.length === arguments.length){//判断使用方法时传入的实参和定义此方法的形参是否相等。
            return fn.apply(this,arguments);
        } else {
            return old.apply(this,arguments);   //不符合执行老的方法
        }
    }
}
var obj = {

}
addMethod(obj,'getName',function(name){
    console.log(name);
})
addMethod(obje,'getName',function(name1,name2) {
    console.log(name1,name2);
})
addMethod(obj,'getName',function(name1,name2,name3){
    console.log(name1,name2,name3);
})

