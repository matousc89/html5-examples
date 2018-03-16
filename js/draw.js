





window.onload = function () {
    // how many steps in each direction
    var xp = 8;
    var yp = 7;

    // step size
    var st = 20;

    // how many block in each direction
    var xi = 7;
    var yi = 5;

    // canvas size
    var X = st * xi * xp + st;
    var Y = st * yi * yp + st;


    // prepare canvas
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = X;
    ctx.canvas.height = Y;

    // grid
    ctx.beginPath();
    ctx.strokeStyle="gray";
    ctx.lineWidth = 1;
    for (xidx = 1; xidx < X/st; xidx++) {
            ctx.moveTo(xidx*st, 0);
            ctx.lineTo(xidx*st, Y);
    };
    for (yidx = 1; yidx < Y/st; yidx++) {
            ctx.moveTo(0, yidx*st);
            ctx.lineTo(X, yidx*st);
    };
    ctx.stroke();

    // the lines
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth = st;
    ctx.lineCap='round';
    for (xidx = 0; xidx < xi + 1; xidx++) {
        for (yidx = 0; yidx < yi + 1; yidx++) {
            // short horizontal line
            ctx.moveTo(xidx*st*xp - 0.5*st, yidx*st*yp + st/2.);
            ctx.lineTo(xidx*st*xp + 1.5*st, yidx*st*yp + st/2.);
            // cross line
            ctx.moveTo(xidx*st*xp + 1.5*st, yidx*st*yp + st/2.);
            ctx.lineTo(xidx*st*xp + 7.5*st, yidx*st*yp + 7.5*st);
        };
    };
    ctx.stroke()

}
