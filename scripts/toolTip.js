document.onmousemove = moveTip;
    function moveTip(e) {
      const floatTip = document.getElementById("floatTip");
      const floatTipStyle = floatTip.style;
      const width = floatTip.offsetWidth; // Ширина подсказки
      const height = floatTip.offsetHeight; // Высота 
      const offset = 10;
      const toolTipLeft = e.pageX; // Координата X курсора
      const toolTipTop = e.pageY; // Координата Y курсора
      
      const availableWidth = document.documentElement.offsetWidth;
      const availableHeidht = document.documentElement.offsetHeight;
      
      const minLeft = offset;
      const maxLeft = availableWidth - offset*2 - width;
      const minTop = offset;
      const maxTop = availableHeidht - offset*2 - height;

      let left = Math.max(minLeft, Math.min(maxLeft, toolTipLeft));
      let top = Math.max(minTop, Math.min(maxTop, toolTipTop));

      return (floatTipStyle.left = `${left}px`,
      floatTipStyle.top = `${top}px`)
      
    };
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
  };
};