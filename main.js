/*global rekwire*/
var msgArray = ["This","is","not","the","entire","story.","Abbas", "Malik", "Hello" ]
var _ = rekwire("module");
var index = 0;
_(window).on("load",function(){
    resizeRem();
});
_(window).on("resize",function(){
    resizeRem();
});

_(".page").click(function(e){
    _(e.target).styles
        ("transition","all 2s ease")         
        ("transform","rotateY(-360deg)")
        ("background","black")
                ("color","black")        
        //("opacity","0")            
        ("zIndex","1")
        //("visibility","hidden")            
       //("transform","rotateY(0deg)")            
        //("border","4px solid white")
    ;
    _(".page").array().forEach(function(m){

        var background = "gray";//"linear-gradient(hsla(35, 30%, 35%, 1.00),hsla(35, 30%, 35%, 0))";
        if(m !== e.target){
            _(m).styles
                ("transition","z-index 1s ease")                
                ("transform","rotateY(0deg)")
                ("background", background)
                ("color","white")
                //("border","none")
                ("zIndex","2")
                //("visibility","visible")
            ;
            //msgArray.push(msgArray.shift());
            if(index >= msgArray.length){
                index=0;
            };
            if(index === msgArray.length -1)_(m).css("background", "teal");
            _(m).html(msgArray[index]);
            index++;            
        }
        //else{_(m).styles("transitionDelay","all 5s ease")  }
    });
});
//--------
function resizeRem(){
    var newSize = (8+ window.innerWidth/150)+"px";
    _(document.documentElement).css("fontSize", newSize);
}
