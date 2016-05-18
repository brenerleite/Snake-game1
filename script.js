function(){
	var snake = $('div');
  snake.keypress(function(e){
  	if(e.which == 39){
    	e.animate(
      	{left: "+=50"}, 
        5000
        )}
  })
}
