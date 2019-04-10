$("button").click(function(){
    var inputOne =$(".input1").val();
    var inputTwo =$(".input2").val();
    var inputThree =$(".input3").val();
    $("p").text("You will eat " + 
                (inputTwo * 12) + 
                " " +
                inputOne +
                " "+
                inputThree + 
                " pizzas in the next year" 
                );
    
});