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
  // Loop for each container. Conditions when dragged element is hovering over other element.
  container.addEventListener('dragover', e => {
    e.preventDefault() //change the cursor type
    const afterElement = getDragAfterElement(container, e.clientY);
    console.log(afterElement)
    const draggable = document.querySelector('.dragging')

    if(afterElement == null){
      //Saying if the cursor is in the container(which is the premise for this event) and if it's underneath the all elements...
      container.appendChild(draggable) // I don't understand why the dragged elements disappears
    }else{
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y){
  
  /**  
   * Making a list of draggable elements (not including the one that's dragging) in the container 
   * (the container which has been hovered over by dragging element since we're gonna use this function in the 'dragover' event).
   */
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
  
  /**
   * Returning the element right under the dragging element when the cursor is in the container.
   * So technically not the closest.
   */
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect(); //Renders all the sizing info of the element.
    const offset = y - box.top - box.height / 2;
    if(offset < 0 && offset > closest.offset){
      return { offset : offset, element : child }
    }else{
      return closest
    }
  }, { offset : Number.NEGATIVE_INFINITY }).element;

}