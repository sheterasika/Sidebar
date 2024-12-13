function openIcon(){
    const sidebar = document.getElementById('side-bar');
    const menuicon = document.getElementById('menu-icon');
    sidebar.style.visibility = 'visible';
    menuicon.style.display = 'none';

}

function closeIcon(){
    const sidebar = document.getElementById('side-bar');
    const menuicon = document.getElementById('menu-icon');
    sidebar.style.visibility = 'hidden';
    menuicon.style.display = 'block';
}