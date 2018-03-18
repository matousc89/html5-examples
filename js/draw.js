
function draw_point(ctx, xidx, yidx, st, xp, yp) {
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth = st;
    ctx.lineCap='butt';
    ctx.moveTo(xidx*st*xp, yidx*st*yp + st/2.);
    ctx.lineTo(xidx*st*xp + st, yidx*st*yp + st/2.);
    ctx.stroke();
};

function draw_line_down(ctx, xidx, yidx, st, xp, yp) {
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth = st;
    ctx.lineCap='round';
    ctx.moveTo(xidx*st*xp + st, yidx*st*yp + 0.5*st);
    ctx.lineTo(xidx*st*xp + 1.5*st, yidx*st*yp + 0.5*st);
    ctx.moveTo(xidx*st*xp + 7.5*st, yidx*st*yp + 7.5*st);
    ctx.lineTo(xidx*st*xp + 8*st, yidx*st*yp + 7.5*st);
    ctx.moveTo(xidx*st*xp + 1.5*st, yidx*st*yp + 0.5*st);
    ctx.lineTo(xidx*st*xp + 7.5*st, yidx*st*yp + 7.5*st);
    ctx.stroke();
};

function draw_line_up(ctx, xidx, yidx, st, xp, yp) {
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth = st;
    ctx.lineCap='round';
    ctx.moveTo(xidx*st*xp + st, yidx*st*yp + 7.5*st);
    ctx.lineTo(xidx*st*xp + 1.5*st, yidx*st*yp + 7.5*st);
    ctx.moveTo(xidx*st*xp + 7.5*st, yidx*st*yp + 0.5*st);
    ctx.lineTo(xidx*st*xp + 8*st, yidx*st*yp + 0.5*st);
    ctx.moveTo(xidx*st*xp + 1.5*st, yidx*st*yp + 7.5*st);
    ctx.lineTo(xidx*st*xp + 7.5*st, yidx*st*yp + 0.5*st);
    ctx.stroke();
};

function coin_flip() {
    return (Math.floor(Math.random() * 2) == 0);
};


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


    var matrix = [];
    for(var i=0; i < yi + 1; i++) {
        matrix[i] = [];
        for(var j=0; j < xi + 1; j++) {
            matrix[i][j] = true;
        };
    };

    for (xidx = 0; xidx < xi; xidx++) {
        for (yidx = 1; yidx < yi; yidx++) {
            if (xidx == 0 || xidx == xi - 1) {
                matrix[yidx][xidx] = false;
            } else {
                LT = matrix[yidx-1][xidx-1];
                RT = matrix[yidx-1][xidx];
                LB = matrix[yidx][xidx-1];

                if (LT == false && RT == true && LB == true) {
                    matrix[yidx][xidx] = true;
                } else {
                    matrix[yidx][xidx] = coin_flip();
                };


            };
        };
    };

    // the lines
    for (xidx = 0; xidx < xi + 1; xidx++) {
        for (yidx = 0; yidx < yi + 1; yidx++) {
            // short horizontal line
            draw_point(ctx, xidx, yidx, st, xp, yp);
            if (matrix[yidx][xidx] === false) {
                draw_line_up(ctx, xidx, yidx, st, xp, yp);
            } else {
                draw_line_down(ctx, xidx, yidx, st, xp, yp);
            };

        };
    };






}
