

//返回上一页不刷新
function gohome() {
  return window.history.back(-1);
};

//获取当前文件路径
function getdir(x) {
  var str = location.href;
  var arr = str.split("/");
  delete arr[arr.length - x];
  var dir = arr.join("/");
  return dir.toString();
};

//获取form表单，但是name必须统一
function mySubmit(form, n) {
  //定义formData对象
  let formData = new FormData(form);
  //获取值，因为get只能获取一个值，而这里是多选框，所以这里使用getAll方法
  let hoppy1 = formData.getAll(n);
  return (hoppy1);

};





