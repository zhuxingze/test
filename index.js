function testFun(obj) {
    obj.year = 29;
    return obj.name+obj.year;
}

console.log(testFun({name:'z2'}));