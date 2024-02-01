function changeBorderColor( idVal ){

  return new Promise(function (resolve) {
    setTimeout(function () {

      var primary = '#0d6efd';
      var danger  = '#dc3545';
      var purple  = '#6f42c1' 
      var success = '#20c997';
      var orange  = '#fd7e14';
      var warning = '#ffc107';
      var pink    = '#d63384';

      var element = document.getElementById(idVal)

      if (element) {

        if ( element.tagName === 'SPAN' ){
          element.style.background = pink;
        }
        else{
          element.style.borderLeft = `4px solid ${pink}`;
        }
      }
      resolve();
    }, 500);
  });
}

async function delaySetColors(){
  total = 16;

  for ( let i=1; i <= total; i++ ){
    await changeBorderColor(i.toString());
  }
}

document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM is ready');
  delaySetColors();
});
