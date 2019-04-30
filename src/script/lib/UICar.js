const UICar = (function() {
  const colorpicker = (function() {
    const colors = ['#FFFFFF', '#DFE5E9', '#FCB800', '#C03D08', '#004E91'];

    const setup = function(pickerClass) {
      var pickers = document.querySelectorAll(`.${pickerClass}`);
      for (let index = 0; index < pickers.length; index++) {
        pickers[index].style.backgroundColor = colors[index];
      }
    };

    const enableColorPickers = function(pickerClass) {
      var pickers = document.querySelectorAll(`.${pickerClass}`);
      for (const picker of pickers) {
        picker.addEventListener('click', function() {
          console.log('q2-' + picker.id + '.png');
        });
      }
    };

    return {
      setup: setup,
      enableColorPickers: enableColorPickers
    };
  })();

  return {
    colorpicker: colorpicker
  };
})();
