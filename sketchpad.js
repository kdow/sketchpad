var rows = 16;
var columns = 16;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});

$(document).ready(function() {
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    for (var i = 0; i < rows; i++) {
        $("#wrapper").append($row.clone());
    }
});

$(document).ready(function() {
	$('.square').hover(function() {
		$(this).css("background-color","black");
	});
});

$('#cl').click(function() {
	$('.square').css("background-color","white");
	$('.square').css("opacity", 1);
});


$('#cs').click(function() {

var userInput = prompt("How many squares per side? Limit 100.");

if (isNaN(userInput)===true || (userInput === null)) {
	alert ("You did not enter a number. Please input a number up to 100 to create a new sketchpad");
} else if (userInput > 100) {
	alert ("Please enter a number under 100");
} else {
	var userSquare = userInput;
	$('#wrapper').empty();	
}
	
var rows = userSquare;
var columns = userSquare;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});
var dimension = 640/userSquare;


for (var i = 0; i < columns; i++) {
    $row.append($square.clone());
	}
for (var i = 0; i < rows; i++) {
    $("#wrapper").append($row.clone());
}

$('.square').hover(function() {
	$(this).css("background-color","black");
});
	
$('.square').css({'height': dimension + 'px', 'width': dimension + 'px'});
$('.row').css({'height': dimension + 'px'});	
	
});


$('#rc').click(function() {
	$('.square').mouseenter(function() {
		var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background-color", col);
			$('.square').mouseleave(function() {
				$(this).css("background-color", col);		
			});							
	});			
});		


$('#sh').click(function() {
    $('.square').mouseenter(function() {
		$('.square').css("background-color","#fff");
			shader($(this));
				$('.square').mouseleave(function() {
				$(this).css("background-color", "#fff");		
			});	
	});
});

function shader(elem) {
	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1
	if (nextOpacity > 0) { elem.css('opacity', nextOpacity); }
	else { elem.css('opacity', '0'); }
};	
