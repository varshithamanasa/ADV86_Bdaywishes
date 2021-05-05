var canvas = new fabric.Canvas('myCanvas');
 

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(700);
	block_image_object.scaleToHeight(500);
	block_image_object.set({
	top:0,
	left:10
	});
	canvas.add(block_image_object);
	});
	}
