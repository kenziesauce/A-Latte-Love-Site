$( document ).ready(function() {
	
	$( window ).load( function() {
		var timer = $.timer(function() {
					$('#registermodal').modal('show');
					timer.stop();
			});
		timer.set({ time : 2000, autostart : true });
	});

	$(':checkbox').on('change',function(){
	 var th = $(this), name = th.prop('name'); 
	 if(th.is(':checked')){
		 $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false); 	 
	  }
	});

	$('#btnCloseSurvey').on('click', function(){
		//console.log("should work");	
		$('#survey')[0].reset();
		//$('#configform')[0].reset();
	});

	    // Validate contact form
    $('#survey').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Your good name here",
                minlength: "Min least 2 characters"
            },
            email: {
                required: "Your Email Address here"
            },
            message: {
                required: "Write something here to send this form.",
                minlength: "thats all? really?"
            }
        },
        submitHandler: function(form) {
			var ans = '<p>Thank you ';
			ans += $('#fname').val();
			ans += ' ';			
			ans += $('#lname').val();
			ans += ', Your Survey was accepted</p>';
			ans += '<p>you prefer your coffee: ';
			ans += $('input:radio[name=inlineRadioOptions]:checked').val();
			ans += '  </p>';		
			ans += '<p>You drink ';
			ans += $('#cupsSelector option:selected').text();
			ans += ' cups of coffee per day: </p>';
			if ($('input:checkbox[name=chkMybox]:checked').val() == 1)
				{
					ans += '<p>You think 7-11 coffee is just fine</p>';
				}
			else if ($('input:checkbox[name=chkMybox]:checked').val() == 0)
				{
					ans += '<p>You think 7-11 coffee tastes like hot, black water!</p>';
				}
			ans += '<p>We will send a confirmation email to ';	
			ans += $('#inputEmail3').val();
			$('#surveyAnswers').html(ans);
			}
		});
});