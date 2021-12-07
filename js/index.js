jQuery(function(){


   var nameValid = false;
   var mobileValid =false;



    $("#name").on("focusout" ,function(){
        var name = $("#name").val();
        
        if(name.trim().length!=0){

            if(name.match(/\d/g)){
                $("#name").addClass("is-invalid");
                $("#nameInvalidFeedback").text("Name Can not Have Numbers");
                nameValid = false;
            }
            else{
                $("#name").removeClass("is-invalid");
                $("#name").addClass("is-valid");
                nameValid = true;
            }

        }
        else{
                $("#name").addClass("is-invalid");
                $("#nameInvalidFeedback").text("Name Can not be empty");
                nameValid = false;
        }
       
        
    });

    $("#mobileNo").on("focusout",function(){
       

        var mobileNo = $("#mobileNo").val();

        if(mobileNo.length!=10){

            $("#mobileNo").addClass("is-invalid");
            $("#mobileNoInvalidFeedback").text("Mobile No must be 10 digit long");
            mobileValid = false;
        }
        else  if(mobileNo.match(/\D/g)){

            $("#mobileNo").addClass("is-invalid");
            $("#mobileNoInvalidFeedback").text("MobileNo Should Be In Nos");
            mobileValid = false;
            
        }        
        else {
            $("#mobileNo").removeClass("is-invalid");
            $("#mobileNo").addClass("is-valid");
            mobileValid = true;
        }
    });

    $("#comment").on("focusout",function(){
        var comment = $("#comment").val();

        
    });

    $("#btnContactFormSubmit").on("click", function(evt){
        evt.preventDefault();

        if(nameValid && mobileValid){
            var name = $("#name").val();
            var mobileNo = $("#mobileNo").val();
            var comments = $("#comment").val();

           $.post("sendemail.php" , {name: name , mobileNo: mobileNo , comment: comments} , function(data){
           
            if(data){
                $("#form-result").text("We will contact you as soon as possible");
                $("#form-result").addClass("text-success");
                $("#form-result").fadeIn(1500);
                $("#form-result").fadeOut(1500);
            }
            else{
                $("#form-result").text("Something went wrong try again");
                $("#form-result").addClass("text-danger");
                $("#form-result").fadeIn(1500);
                $("#form-result").fadeOut(1500);
            }
           } ,"json");
        }

        else{
            $("#form-result").text("Please enter valid information ");
            $("#form-result").addClass("text-danger");
            $("#form-result").fadeIn(1500);
            $("#form-result").fadeOut(1500);
        }
              
            
       
        
    });
    

  
});