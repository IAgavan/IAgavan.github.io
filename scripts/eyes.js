document.onmousemove = moveEyes;
	function moveEyes(e) {
		//координаты глаз
		const eyes = document.querySelector('.eyes');
		const eyesRect = eyes.getBoundingClientRect();
		const eyesWidth = document.querySelector('.eye1').offsetWidth;
		const newStartX = eyesRect.left - window.scrollX + eyesWidth/2; 
		const newStartY = eyesRect.top - window.scrollY + eyesWidth/2;
		const newStartX2 = newStartX + eyesWidth; // 

		const mouseX = e.pageX; // Координата X курсора
     	const mouseY = e.pageY; 
     	const eyeX = mouseX - newStartX;
     	const eyeX2 = mouseX - newStartX2;
     	const eyeY = mouseY - newStartY;

     	document.querySelector('.eye1').style.transform = 'rotate('+ rotationAngle(eyeX,eyeY) + 'deg)';
     	document.querySelector('.eye2').style.transform = 'rotate('+ rotationAngle(eyeX2,eyeY) + 'deg)';
	};
	function rotationAngle(x,y) {
		if (x>=0) {
			return Math.atan(y/x)*180/Math.PI
		} 
		return Math.atan(y/x)*180/Math.PI - 180;
	};