var body = document.getElementsByTagName(body);

function gradient() {
    
return color;}

function board() {

    for (i = 0; i < window.innerHeight / 5; i++) {
        if (i%2){
        document.body.innerHTML += `<div style="display:inline-block;width:11.1%;background-color:blue;margin:0;padding-bottom:11.1%;float:left;"></div>`;
    } else {
        document.body.innerHTML += `<div style="display:inline-block;width:11.1%;background-color:purple;margin:0;padding-bottom:11.1%;float:left;"></div>`;
    }
}}
board();

function gradient(){
    document.body.innerHTML += `<div style="position:fixed;height:100vh;width:100%;background:linear-gradient(#9900cc, #ff5050);opacity:.6;z-index:2;left:-10px;"></div>`
}
gradient();
