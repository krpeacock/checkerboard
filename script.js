var body = document.getElementsByTagName(body);

function randomColor() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6 - x.length);
    var z = "000000";
    var z1 = z.substring(0, y);
    var color = "#" + z1 + x;
return color;}

function board() {

    for (i = 0; i < window.innerHeight / 5; i++) {
        document.body.innerHTML += `<div style="display:inline-block;width:11.1%;background-color:${randomColor()};margin:0;padding-bottom:11.1%;float:left;"></div>`;
    }
}
board();
