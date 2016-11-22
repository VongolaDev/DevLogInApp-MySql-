 $(document).ready(function(){
    
    


	 $("#login").click(function(){
   
	
    $.ajax({
      url: 'http://localhost:8080/db',
      type: 'GET',

      contentType: 'application/json; charset=utf-8',
      dataType: 'json',

      success: function(data) {

        console.log(data);
        renderHTML(data); 
      }
    });

   
//         var ourRequest = new XMLHttpRequest();
//         ourRequest.open('GET', 'http://localhost:3000/accts');
//         ourRequest.onload = function(){
//           var ourData= JSON.parse(ourRequest.responseText);
// renderHTML(ourData);      

//         };
//         ourRequest.send();

     
	 });


   function renderHTML(data){
    var pass =0 ;
    var htmlString = "";

    varuname = $("#loginemail").val();
    varpw = $("#loginpassword").val();

    for( i = 0 ; i < data.length; i++){


      var uname = data[i].username;
      var pw = data[i].password;


      if(pw == varpw && uname == varuname)
      {
        
        
        sessionStorage.setItem('SESSION_ISLOGIN', 'true');
       
        $(location).attr('href', 'DashBoard')

        pass++;
      }


    }
    if (pass == 0)
    {
      bootbox.alert("Invalid Credentials");
      $("form")[0].reset();
    }  
  }
	 
	 $("#register").click(function(){
	

  var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    
    if( $("#fname").val()=='' ||$("#lname").val()=='' || $("#registeremail").val()=='' || $("#registerpassword").val()=='' || $("#contact").val()=='')
    {
      bootbox.alert("Please fill all fields...!!!!!!");
    }
                else if($("#fname").val().match("[0-9]+")    )
                {
                    bootbox.alert("Provide Letters for Your Name Only");
                }
                  else if($("#lname").val().match("[0-9]+")    )
                {
                    bootbox.alert("Provide Letters for Your Name Only");
                }
                else if($("#registerpassword").val().length < 8)
                {
                    bootbox.alert("Password Must Be  8 Character and Above")
                }
                else if($("#registerpassword").val() != $("#registerpassword2").val())
                {
                    bootbox.alert("Password Mismatch");
                }
                
    
    else if(!($("#registeremail").val()).match(email))
    {
      bootbox.alert("Please enter valid Email...!!!!!!");
    }
    
    else
    {
      var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', 'http://localhost:3000/accts');
        ourRequest.onload = function(){
          var ourData= JSON.parse(ourRequest.responseText);
        }

      var arr = { "username": $("#registeremail").val(), "password": $("#registerpassword").val()};
$.ajax({
    url: 'http://localhost:3000/accts',
    type: 'POST',
    data: JSON.stringify(arr),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
   
    success: function(msg) {
     
    }
});
     bootbox.alert("Welcome To The Eye");
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