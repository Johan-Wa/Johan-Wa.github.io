//Menu code
let menuVisible = false;
function showHiddeMenu(){
    if(menuVisible){
        document.getElementById('nav').classList = "";
        menuVisible = false;
    } else{
        document.getElementById('nav').classList = "n-responsive";
        menuVisible = true;
    }
}
function select(){
    // Hidde the menu before select one option
    document.getElementById('nav').classList = "";
    menuVisible=false
}

// Skills code
function skillsEfect(){
    const skills = document.getElementById('skills');
    const skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skills_distance >=300){
        let progress = document.getElementsByClassName('progress');
        progress[0].classList.add('python');
        progress[1].classList.add('javascript');
        progress[2].classList.add('htmlcss');
        progress[3].classList.add('godot');
        progress[4].classList.add('inks');
        progress[5].classList.add('kottlin');
        progress[6].classList.add('tableau');
        progress[7].classList.add('git');
        progress[8].classList.add('terminal');
        progress[9].classList.add('bash');
        progress[10].classList.add('sql');
        progress[11].classList.add('docker');
        progress[12].classList.add('comunication');
        progress[13].classList.add('teamwork');
        progress[14].classList.add('creativity');
        progress[15].classList.add('strategic');
        progress[16].classList.add('leadership');
        progress[17].classList.add('activelearning');
    }else{
        console.log('skills desactivados')
}
}
// Detect scrolling
window.onscroll = function(){
    skillsEfect();
}
// Portfolio code
const grid = new Muuri('.grid',{
    layout:{
        rounding: false
    }
});

window.addEventListener('load', () =>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('loaded-img');
// Listeners for the category filter.
    const links = document.querySelectorAll('#categories a');
    links.forEach( (element) => {
        element.addEventListener('click', (e) =>{
            e.preventDefault();
            links.forEach((link) => link.classList.remove('active'))
            e.target.classList.add('active');

            const category = e.target.innerHTML.toLowerCase();
            category === 'all' ? grid.filter('[data-categories]') : grid.filter(`[data-categories="${category}"]`);
        });
    });
    // Listener to images
    const gridOverlay = document.getElementById('grid-overlay');
    document.querySelectorAll('.grid .item img').forEach((element) => {
        

        element.addEventListener('click', () => {
            const path = element.getAttribute('src');
            const description = element.parentNode.parentNode.dataset.description;
            gridOverlay.classList.add('active-overlay');
            document.querySelector('.grid-overlay img').src = path;
            document.querySelector('.grid-overlay .description').innerHTML = description;

        })
    });
    // Listener to overlay button
    const overlayButton = document.getElementById('btn-close-popup');
    overlayButton.addEventListener('click', () => {
        gridOverlay.classList.remove('active-overlay');
    });

    // Listener to overlay
    gridOverlay.addEventListener('click', (e) => {
        e.target.id === 'grid-overlay' ? gridOverlay.classList.remove('active-overlay') : '';
    });
});