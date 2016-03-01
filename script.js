var body = document.getElementsByTagName(body);

function board() {
    for (i = 0; i < window.innerHeight/5; i++) {
        if (i % 2) {
            document.body.innerHTML += '<div style="display:inline-block;width:11.1%;background-color:red;margin:0;padding-bottom:11.1%;float:left;"></div>';
        } else {
            document.body.innerHTML += '<div style="display:inline-block;width:11.1%;background-color:black;margin:0;padding-bottom:11.1%;float:left;"></div>';
        }
    }}
    board();
