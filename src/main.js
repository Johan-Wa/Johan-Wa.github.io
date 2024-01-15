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
        
        progress[0].classList.add('Python');
        
        progress[1].classList.add('Javascript');
        
        progress[2].classList.add('HtmlCss');
        
        progress[3].classList.add('Godot');
        
        progress[4].classList.add('Inkscape');
        
        progress[5].classList.add('Kotlin');
        
        progress[6].classList.add('Tableu');
        
        progress[7].classList.add('Git');
        
        progress[8].classList.add('Terminal');
        
        progress[9].classList.add('Bash');
        
        progress[10].classList.add('SQL');
        
        progress[11].classList.add('Docker');
        
        progress[12].classList.add('Comunication');
        
        progress[13].classList.add('Teamwork');
        
        progress[14].classList.add('Creativity');
        
        progress[15].classList.add('StrategicThinking');
        
        progress[16].classList.add('Leadership');
        
        progress[17].classList.add('ActiveLearning');
        
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
            const post_link = element.parentNode.parentNode.dataset.link;
            gridOverlay.classList.add('active-overlay');
            document.querySelector('.grid-overlay img').src = path;
            document.querySelector('.grid-overlay .description').innerHTML = description;
            document.querySelector('.grid-overlay .postlink').innerHTML = post_link;

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