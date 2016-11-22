
$(document).ready(function(){
    
    
     // on click SignIn Button checks for valid email and all field should be filled
	 $("#login").click(function(){
	
          $.getJSON('data.json', function(data)
            {
                var pass = 0;
    var yourval = jQuery.parseJSON(JSON.stringify(data));
      
      for(var x = 0 ; x < 4 ; x++)
      {
        
          if(yourval.accts[x].username == $("#loginemail").val() && yourval.accts[x].password == $("#loginpassword").val())
          {
              bootbox.alert("Welcome Back Brother");
                   $("form")[0].reset();
		pass++;
          }
      }
      if(pass ==0)
             {
                 alert("Invalid Credentials");
                   $("form")[0].reset();
             }
    
            });
        
      
        
           
	
          
	 });
	 
	 $("#register").click(function(){
		var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		
		if( $("#fname").val()=='' ||$("#lname").val()=='' || $("#registeremail").val()=='' || $("#registerpassword").val()=='' || $("#contact").val()=='')
		{
		  alert("Please fill all fields...!!!!!!");
		}
                else if($("#fname").val().match("[0-9]+")    )
                {
                    alert("Provide Letters for Your Name Only");
                }
                  else if($("#lname").val().match("[0-9]+")    )
                {
                    alert("Provide Letters for Your Name Only");
                }
                else if($("#registerpassword").val().length < 8)
                {
                    alert("Password Must Be  8 Character and Above")
                }
                else if($("#registerpassword").val() != $("#registerpassword2").val())
                {
                    alert("Password Mismatch");
                }
                
		
		else if(!($("#registeremail").val()).match(email))
		{
			alert("Please enter valid Email...!!!!!!");
		}
		
		else
		{
		 alert("Welcome To The Eye");
		 $("#form")[0].reset();
		 $("#second").slideUp("slow",function(){
	      $("#first").slideDown("slow");
	   });
		}
	 
	 });
	 
	 
	 // on click signup It Hide Login Form and Display Registration Form
	 $("#signup").click(function(){
       $("#first").slideUp("slow", function(){
		  $("#second").slideDown("slow"); 
	   });	
	 });
	 
	 // on click signin It Hide Registration Form and Display Login Form
     $("#signin").click(function(){
       $("#second").slideUp("slow",function(){
	      $("#first").slideDown("slow");
	   });
	 });
	 
});