const btns = document.querySelectorAll('.btn');

 btns.forEach(btn => {
  btn.addEventListener("click", () => {
   document.querySelector('.active')?.classList.remove('active');
   btn.classList.add('active')
    })
 })