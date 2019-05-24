document.onmousemove = moveTip;
    function moveTip(e) {
      floatTipStyle = document.getElementById("floatTip").style;
      w = 75; // Ширина подсказки
      h = 40; // Высота 
      
      x = e.pageX; // Координата X курсора
      y = e.pageY; // Координата Y курсора
     

      // Показывать слой справа от курсора 
      if ((x + w + 10) < document.documentElement.clientWidth) { 
        floatTipStyle.left = x + 'px';

      // Показывать слой слева от курсора
      } else { 
        floatTipStyle.left = x - w + 'px';
      }
      // Показывать слой снизу от курсора 
      if ((y + h) < document.documentElement.clientHeight) { 
        floatTipStyle.top = y + 10 + 'px';
        // Показывать слой сверху от курсора
      } else {
        floatTipStyle.top = y - 50 +'px';
      }
         
    }

    function toolTip(msg) {
      floatTipStyle = document.getElementById("floatTip").style;
      if (msg) {
        // Выводим текст подсказки
        document.getElementById("floatTip").innerHTML = msg;
        // Показываем подсказку
        floatTipStyle.display = "block";
      } else { 
        // Прячем подсказку
        floatTipStyle.display = "none";
      } 
    }