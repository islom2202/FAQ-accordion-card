const labels = document.querySelectorAll('.label'),
      labelHeaders = document.querySelectorAll('h2');

labels.forEach((label, index)=>{
  label.addEventListener('click', ()=>{
     labels.forEach((remainder) => {
       remainder.classList.remove("active");
     });
    label.classList.toggle("active");

   labelHeaders.forEach((header, hindex) => {
      if(index === hindex){
        labelHeaders.forEach((hremainder) => {
          hremainder.style.color = "var(--dark-grayish-blue)"; //deafult color
        });
        header.style.color = "black";
      }
   })
  })
})
