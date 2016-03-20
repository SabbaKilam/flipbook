/*global rekwire*/
var msgArray = ["Abbas<br/>Malik","This","is","not","the","entire","story.", "Hello" ]
var _ = rekwire("module");
var index = 0;
_(window).on("load",function(){
    resizeRem();
});
_(window).on("resize",function(){
    _("#holder").styles
        ("left","30rem")
        ("width","25rem")           
    ;    
    if(window.innerWidth >= window.screen.width/2){
        resizeRem();
    }
    else{
        _("#holder").styles
            ("left","2.5%")
            ("width","95%")            
        ;
    }

});

_(".page").on("mousedown", function(e){
    _(e.target).styles
        ("transition","all 2s ease")
        ("transform","rotateY(360deg)")
        ("background","black")
        ("color","black")
        ("zIndex","1")
    ;
    _(".page").array().forEach(function(m){

        var background = "gray";//"linear-gradient(hsla(35, 30%, 35%, 1.00),hsla(35, 30%, 35%, 0))";
        if(m !== e.target){
            _(m).styles
                ("transition","z-index 1s ease")
                ("transform","rotateY(0deg)")
                ("background", background)
                ("color","white")
                ("zIndex","2")
            ;
            //msgArray.push(msgArray.shift());
            if(index >= msgArray.length){
                index=0;
            };
            if(index === msgArray.length -1)_(m).css("background", "teal");
            _(m).html(msgArray[index]);
            index++;
        }
    });
});
//--------
function resizeRem(){
    var newSize = (8+ window.innerWidth/150)+"px";
    _(document.documentElement).css("fontSize", newSize);
}
