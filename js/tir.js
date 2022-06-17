//运行了多久
function runtime() {
    // 初始时间，日/月/年 时:分:秒
    X = new Date("5/08/2022 21:00:00");
    Y = new Date();
    T = (Y.getTime() - X.getTime());
    M = 24 * 60 * 60 * 1000;
    a = T / M;
    A = Math.floor(a);
    b = (a - A) * 24;
    B = Math.floor(b);
    c = (b - B) * 60;
    C = Math.floor((b - B) * 60);
    D = Math.floor((c - C) * 60);
    //信息写入到DIV中
    span.innerHTML = "Elapsed time: " + A + "D " + B + "H " + C + "M " + D + "S"
}
setInterval(runtime, 1000);