/*function shareLocation() {
    alert('Share this location with your friends!');
}

function saveLocation() {
    alert('Location saved!');
}*/
/////////////////////////////////////////////////////
/*function toggleSharePopup() {
    const sharePopup = document.getElementById('share-popup');
    sharePopup.style.display = sharePopup.style.display === 'flex' ? 'none' : 'flex';
}

function toggleSavePopup() {
    const savePopup = document.getElementById('save-popup');
    savePopup.style.display = savePopup.style.display === 'flex' ? 'none' : 'flex';
}*/
/////////////////////////////////////////////////////

function toggleSharePopup() {
    const sharePopup = document.getElementById('share-popup');
    sharePopup.style.display = sharePopup.style.display === 'flex' ? 'none' : 'flex';
}

function toggleSavePopup() {
    const savePopup = document.getElementById('save-popup');
    savePopup.style.display = savePopup.style.display === 'flex' ? 'none' : 'flex';
}

function saveToGoogle(listName) {
    alert(`Saved to ${listName.replace(/-/g, ' ')}`);
    toggleSavePopup();
}
