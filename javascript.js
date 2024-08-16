let colorsToggled = false;

function changeDarkMode() {
    const root = document.documentElement;

    if (colorsToggled) {
        // Change back to original colors
        root.style.setProperty('--background-color', '#2D3250');
        root.style.setProperty('--background-light', '#424769');
        root.style.setProperty('--grey-color', '#7077A1');
        root.style.setProperty('--peach-color', '#F6B17A');
    } else {
        // Change to new colors
        root.style.setProperty('--background-color', '#e4e5f1');
        root.style.setProperty('--background-light', '#fafafa');
        root.style.setProperty('--grey-color', '#9394a5');
        root.style.setProperty('--peach-color', '#484b6a');
    }

    // Toggle the flag for the next click
    colorsToggled = !colorsToggled;
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);


}



// Optional: Initial view
showSection('home');



function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        if (section.id === sectionId) {
           
            section.style.display = 'block';
        } else {
            console.log(sections,sectionId,section.id)
            section.style.display = 'none';
        }
    });
}

function changeDarkMode() {
    document.body.classList.toggle('dark-mode');
}
