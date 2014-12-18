$(document).ready(function(){
	$('#button1').click(function(){
		$('#canvas1').drawArc({
		  	fillStyle: '#345678',
		  	x: 200,
		  	y: 200,
		  	radius: 100
		}).drawArc({
			strokeStyle: '#909',
			strokeWidth: 5,
			x: 200,
			y: 200,
			radius: 55,
			fillStyle: '#f0f'
		  })
		 .drawRect({
			name: 'box',
			fillStyle: '#fc9',
			strokeStyle: '#963',
			strokeWidth: 5,
			x: 100,
			y: 60,
			width: 100,
			height: 60
		}); //end rectangle
		 ; //end draw arc
	}); // end circle click  

	$('#clear').click(function(){
		$('#canvas1').clearCanvas();
	}); //end click-clear
}); //end ready












