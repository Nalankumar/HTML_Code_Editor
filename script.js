var html = document.getElementById("htmltext");
var css = document.getElementById("csstext");
var js = document.getElementById("jstext");

var btn = document.getElementById("btn");
var exe = document.getElementById("exeview");

function codeexe(){
    var htmlcode = html.value;
    var csscode = css.value;
    var jscode = js.value;
    exe.contentDocument.body.innerHTML = "<html>" +htmlcode  + "<style>" + csscode +"</style>" + "<script>" +jscode + "</script></html>";
    exe.contentWindow.eval(jscode);
}

