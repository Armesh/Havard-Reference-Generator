$(document).ready(function() {

//Tooltip maker	
$("input[name=authorName]").attr('title','Name of the Person(Last Name, Initial(s).)/ Company/ Organization/ Website who wrote the article -- E.g: Leahy, M./ Microsoft/ UNHCR/ MSN');
$("input[name=yearPublished]").attr('title','The year in which the article was written/ Copyright year of Website/ Leave Blank if the previous two options are unavailable');
$("input[name=articleTittle]").attr('title','The topic which the article is about -- E.g: How Do Web Search Engines Work, What is Green Technology?');
$("input[name=websiteLink]").attr('title','The URL/link of the Website');
$("input[name=dateAccessed]").attr('title','The date you viewed the article');

$('input').tooltip({
	'trigger': 'focus',
	'placement': 'right'
	});


//Month number to month name converter (Global)
var month=new Array();
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";

//Fecthing current URL, Year
$("#url").val(document.URL);
$("input[name=yearPublished]").val(new Date().getFullYear());

//Setting up the Date picker
$("input[name=dateAccessed]").val(function () {
	$("input[name=dateAccessed]").datepicker({ //Apply the Date picker and configurating it
		dateFormat: 'dd-mm-yy',
		maxDate: '0',
        onSelect: function(){ //Converting the date format when it's picked
			var date= $("input[name=dateAccessed]").datepicker('getDate').getDate();
			var monthnum= $("input[name=dateAccessed]").datepicker('getDate').getMonth();
			var year= $("input[name=dateAccessed]").datepicker('getDate').getFullYear();
			var ordinal = date + (date>10 && date<20 ? 'th' : {1:'st', 2:'nd', 3:'rd'}[date % 10] || 'th');
			var fulldate =(ordinal+" "+month[monthnum]+" "+year);
			$("input[name=dateAccessed]").val(fulldate);
			}	
	});
			
	//Fecthing Current Date and converting the format like above
	$("input[name=dateAccessed]").datepicker('setDate', new Date());
	var cdate = $("input[name=dateAccessed]").datepicker("getDate").getDate();
	var cmonthnum = $("input[name=dateAccessed]").datepicker("getDate").getMonth();
	var cyear = $("input[name=dateAccessed]").datepicker("getDate").getFullYear();
	var ordinal = cdate + (cdate>10 && cdate<20 ? 'th' : {1:'st', 2:'nd', 3:'rd'}[cdate % 10] || 'th');
	var cfulldate =(ordinal+" "+month[cmonthnum]+" "+cyear);
	return (cfulldate);
});

//Removes default text and highlights/Unhighlights input on focus/blur)
$('input').on('focus',function () {

	if($(this).val()=="Singh, A." || $(this).val()=="Website Reference Generator" || $(this).val()==document.URL )
		{
		$(this).val("");
		}
})



//Actions that take place when the "Generate" button is clicked
$(".generate_btn").click(function(){
	//Fecthing the values of the input fields
    var author = $("input[name=authorName]").val();
	var yearPublished = $("input[name=yearPublished]").val();
	var articleTittle = $("input[name=articleTittle]").val();
	var websiteLink = $("input[name=websiteLink]").val();
	var dateAccessed  = $("input[name=dateAccessed]").val();
	
	//Various Validation and actions for each senario
    if(author=="") {
		//alert("Specify author's lastname or the Website name if no author is available");
		$("input[name=authorName]").focus();
	}
	
	else if (yearPublished=="") {
		var resultnd ="<div style='display:none' class='refdiv'>"+"<p class='refp'>"+author+" "+"("+"n.d."+")"+" "+"<i>"+articleTittle+"</i>"+" "+"[Online]"+" "+"Available from:"+" "+ websiteLink+" "+"[Accessed:"+ " "+dateAccessed +"]"+"."+"</p>"+"</div>";

		$(".resultdiv").append(resultnd);

		$(".refdiv").fadeIn();
	}
	
	else if (isNaN(yearPublished) || yearPublished>new Date().getFullYear() ) {
		//alert("Please insert a valid year");
		$("input[name=yearPublished]").val(new Date().getFullYear());
	}

	else if (articleTittle=="") {
		//alert("What is the article about?");
		$("input[name=articleTittle]").focus();
	}
		
	else if (websiteLink=="") {
		//alert("Please insert the link of the article");
		$("input[name=websiteLink]").focus();
	}
	
	else if (dateAccessed =="") {
		//alert("Please insert the date you viewed this article");
		$("input[name=dateAccessed]").focus();
	}
	
	else { //The perfect print
		var result = "<div style='display:none' class='refdiv'>"+"<p class='refp'>"+author+" "+"("+yearPublished+")"+" "+"<i>"+articleTittle+"</i>"+" "+"[Online]"+" "+"Available from:"+" "+ websiteLink+" "+"[Accessed:"+ " "+dateAccessed +"]"+"."+"</p>"+"</div>";
		var icons= '<div class="icondiv"> <img id="copy_icon" src="img/copy_icon.png" width="16" height="16" alt="copy"><img id="del_icon" src="img/del_icon.png" width="16" height="16" alt="Remove"></div>';

		//Making the result
		$(".resultdiv").append(result);
		$('.refdiv:last-child').prepend(icons);	
		$(".refdiv").fadeIn();
		
		
		//ZeroClipboard , includes settings for copy button			
		//set path
		ZeroClipboard.setDefaults( { moviePath: 'http://www.anonoz.com/armesh/zero/ZeroClipboard.swf' } );
		//create client
		var clip = new ZeroClipboard( $('.refdiv:last-child #copy_icon') );
		//event
		clip.on('mousedown',function() {
			var resultText = $(this).parent('.icondiv').next('.refp').text();
			clip.setText(resultText);
		});
		//Animation trigered after copy is done
		clip.on('complete', function () {
			$(this).fadeTo('fast', 1 )
			$(this).attr('src','img/check_icon.png').attr('id', 'check_icon');
			console.log('done');
		});
		//glue it to the button
		clip.glue($('.refdiv:last-child #copy_icon'));
	
		//Remove button settings
		$('.refdiv:last-child #del_icon').on('click',function () {
			$(this).parents('.refdiv').slideUp('fast', function () {
				$(this).remove();
			});
		});
		
		console.log('hello');
	}// else close
}); // Generate event close





}); //Ready Ending