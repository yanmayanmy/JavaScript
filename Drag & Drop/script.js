const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');


draggables.forEach(draggable =>{
  draggable.addEventListener('dragstart', ()=>{
    draggable.classList.add('dragging')
  })
  draggable.addEventListener('dragend', ()=>{
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container =>{
  container.addEventListener('dragover', e => {
    e.preventDefault() //change the cursor type
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging')
    container.appendChild(draggable)
  })
})

function getDragAfterElement(container, y){
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

  draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    console.log(offset);
  }, { offset : Number.POSITIVE_INFINITY });

}