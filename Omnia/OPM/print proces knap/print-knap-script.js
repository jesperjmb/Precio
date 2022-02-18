/*Skal placeres i en HTML/Script blog i Script delen.
Udskift "button.print-knap" med classen på den knap der skal bruges.
Note: @page styrer om udprintningen skal være i portrait eller landscape mode.
*/
$(document).on("click", "button.print-knap", function (image) {
    var canvas = document.getElementsByClassName("lower-canvas");
    var img = canvas[0].toDataURL("image/png");
    var imageSrc = img;
    
    var imgHtml="<img crossorigin=\"anonymous\" style='padding:0px 0px;display:block;margin-left:auto;margin-right:auto;width:auto;height:auto;' src='"+imageSrc+"'></img>";
    
    var WindowObject = window.open('', 'PrintWindow', 'width=1200,height=800,top=0,left=0,toolbars=no,scrollbars=yes,status=no,resizable=yes');
    
    var strHtml = "<html>\n<head><style media=\"print\">@page { size: landscape; }</style>\n</head><body onload='window.print();window.close()'><div style=\"\">\n" + imgHtml + "\n</div>\n</body>\n</html>";
    
    WindowObject.document.writeln(strHtml);
    WindowObject.document.close();
    WindowObject.focus();
    return false;
});
