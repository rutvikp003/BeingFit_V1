// scroll
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// calculate
const calculateForm = document.getElementById('calculate-form1'),
    calculategen1 = document.getElementById('calculate-gen1'),
    calculategen2 = document.getElementById('calculate-gen2'),
    calculateCm1 = document.getElementById('calculate-cm1'),
    calculateKg1 = document.getElementById('calculate-kg1'), 
    calculateMessage1 = document.getElementById('calculate-message1'),
    calculateMessage2 = document.getElementById('calculate-message2')

// Calculate BMR
const calculateBmR = (e) =>{
    e.preventDefault()


    //Check if the fields have a value

    if(calculateCm1.value === '' || calculateKg1.value === ''){
        //Add and remove color
        calculateMessage1.classList.remove('color-green')
        calculateMessage1.classList.add('color-red')

        //Show Message    
        calculateMessage1.textContent = 'Fill in the height and weight'

        //Remove message after 3 seconds
        setTimeout(() =>{
                calculateMessage1.textContent = ''
        }, 3000)
    } else{
        //BMR Formula
        const cm = calculateCm1.value / 100,
              kg = calculateKg1.value,
              bmr_man = Math.round(88.362 + (13.397 * kg) + (4.799 * cm) - (5.677)),
              bmr_woman = Math.round(447.593 + (9.247 * kg) + (3.098 * cm) - (4.330))


            if(bmr_man<18.5){
                calculateMessage1.classList.add('color-green')
                calculateMessage1.textContent = `Mans BMR is ${bmr_man}`
            } else if(bmr_man<25){
                calculateMessage1.classList.add('color-green')
                calculateMessage1.textContent = `Mans BMR is ${bmr_man}`
            } else{
                calculateMessage1.classList.add('color-green')
                calculateMessage1.textContent = `Mans BMR is ${bmr_man}`
            }

            if(bmr_woman<18.5){
                calculateMessage2.classList.add('color-green')
                calculateMessage2.textContent = `Womans BMR is ${bmr_woman}`
            } else if(bmr_woman<25){
                calculateMessage2.classList.add('color-green')
                calculateMessage2.textContent = `Womans BMR is ${bmr_woman}`
            } else{
                calculateMessage2.classList.add('color-green')
                calculateMessage2.textContent = `Womans BMR is ${bmr_woman}`
            }
        }
    }

calculateForm.addEventListener('submit', calculateBmR)

// Water reminder
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");


const updateBigCup = () => {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;
    if (fullCups === 0) {
      percentage.style.visibility = "hidden";
      percentage.style.height = 0;
    } else {
      percentage.style.visibility = "visible";
      percentage.style.height = `${(fullCups / totalCups) * 330}px`;
      percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }
    if (fullCups === totalCups) {
      remained.style.visibility = "hidden";
      remained.style.height = 0;
    } else {
      percentage.style.visibility = "visible";
      liters.innerText = `${4 - (250 * fullCups) / 1000}L`;
    }
  };
  
  const highlightCups = (index) => {
    if (index === 15 && smallCups[index].classList.contains("full")) index--;
    if (
      smallCups[index].classList.contains("full") &&
      !smallCups[index].nextElementSibling.classList.contains("full")
    ) {
      index--;
    }
    smallCups.forEach((cup, index2) => {
      if (index2 <= index) cup.classList.add("full");
      else cup.classList.remove("full");
    });
    updateBigCup();
  };
  
  smallCups.forEach((cup, index) =>
    cup.addEventListener("click", () => highlightCups(index))
  );
  
  updateBigCup();
  