var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
image_lol="https://media.tenor.com/images/783b23983a669b60969354290f5ce247/tenor.gif";
function new_image()
{
	
	fabric.Image.fromURL('image_lol', function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(700);
	block_image_object.scaleToHeight(510);
	block_image_object.set({
	top:0,
	left:0
	});
	canvas.add(block_image_object);
	});
	
}

function playSound(){
	x.play();
}
