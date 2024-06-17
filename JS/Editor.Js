function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    var clone = event.target.cloneNode(true);
    clone.id = 'clone-' + new Date().getTime();
    event.dataTransfer.setData("text", clone.id);
    
    clone.style.position = "absolute";
    clone.style.top = "-9999px";
    document.body.appendChild(clone);
    
    event.dataTransfer.setDragImage(clone, 0, 0);
}

function drop(event) {
    event.preventDefault();
    var cloneId = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(cloneId);
    
    draggedElement.style.position = "relative";
    draggedElement.style.top = "0";
    
    event.target.appendChild(draggedElement);
    
    draggedElement.style.removeProperty('position');
    draggedElement.style.removeProperty('top');
}

document.querySelectorAll('.login-button, .sign-button, .text-bar').forEach(element => {
    element.addEventListener('dragstart', drag);
});

const backButton = document.querySelector('.back');

backButton.addEventListener('click', () => {
    window.history.back();
});