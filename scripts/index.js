const more = document.querySelector('#more');
const viewmore = document.querySelector('#viewmore');
  more.addEventListener('click',(a) => {
    viewmore.classList.toggle('view more');
    if(more.innerHTML ==='viewmore'){
      more.innerHTML='viewless';
    }else{
      more.innerHTML='viewmore';
    }
  })
