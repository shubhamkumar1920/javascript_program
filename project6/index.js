console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
}

















// Event

// Description

// drag

// It is fired when a dragged item is dragged.

// dragend

// It is fired when a drag operation ends, such as releasing a mouse button or hitting the Esc key.

// dragenter

// It is fired when a dragged item enters a valid drop target.

// dragexit

// It is fired when an element is no longer the drag operation's immediate selection target.

// dragleave

// It is fired when a dragged item leaves a valid drop target.

// dragover

// It is fired when a dragged item is being dragged over a valid drop target, every few hundred milliseconds.

// dragstart

// It is fired when the user starts dragging an item.

// drop

// It is fired when an item is dropped on a valid drop target.

