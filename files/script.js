/*Change the border color and dot color by using id*/
function changeBorderColor( idVal ){

  return new Promise(function (resolve) {
    setTimeout(function () {

      var pink    = '#d63384';
      var element = document.getElementById(idVal)

      if (element) {

        // Change bg on Dot found
        if ( element.tagName === 'SPAN' ){
          element.style.background = pink;
        }
        // Else change left border color 
        else{
          element.style.borderLeft = `4px solid ${pink}`;
        }
      }
      resolve();
    }, 500); // Wait for 0.5 seconds
  });
}

/* Change color of dot/left-border in increment id order */
async function delaySetColors( start=1, end ){

  for ( let i=start; i <= end; i++ ){
    await changeBorderColor(i.toString());
  }
}

/* Execute below code only HTML is ready */
document.addEventListener('DOMContentLoaded', function(){

  /* Progess experience line on certain section of pages reached*/
  function handleIntersection(entries, observer) {

      entries.forEach(entry => {

        sectionId = entry.target.id;

          /* Did we reach the point we looling for */
          if (entry.isIntersecting) {

            // Experience section reached
            if ( sectionId === '6' ){
              console.log('CONCENTRIX Section Reached!');
              delaySetColors(1, 11);
              observer.disconnect();
            }

            // Education section reached
            if ( sectionId === '13' ){
              console.log('MASTERS Section Reached!');
              delaySetColors(12, 16);
              observer.disconnect();
            }
          }
      });
  }

  // Set up the Intersection Observer
  const observer1 = new IntersectionObserver(handleIntersection, { threshold: 0 });
  const observer2 = new IntersectionObserver(handleIntersection, { threshold: 0 });

  // Target the section you want to observe
  const experienceSection = document.getElementById('6');
  const educationSection  = document.getElementById('13');

  // Start observing the target section
  observer1.observe(experienceSection);
  observer2.observe(educationSection);

});
