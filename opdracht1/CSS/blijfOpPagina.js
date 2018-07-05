let heeftSub = document.querySelector('.heeft-submenu > a');
console.log(heeftSub);

for(let i=0; i<heeftSub.length; i++) {
  heeftSub[i].addEvenntListener('click', (e)=> e.preventDefault());
}
