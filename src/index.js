const configurations = {
    CHANGE_COLOR_AFTER_VIEWS: 5,
    COLORS: [
        '#2d8d54',
        '#22255d',
        '#740493',
        '#fc7a2f',
    ]
};

let myDivC_1 = document.createElement('div');
myDivC_1.id = "C_1";
myDivC_1.innerHTML = 'I am the first div called C_1';

let myDivC_2 = document.createElement('div');
myDivC_2.id = "C_2";
myDivC_2.innerHTML = 'I am the second div called C_2';

// function for replace the selected elements as soon as the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.replace-c_1').replaceWith(myDivC_1);
    document.querySelector('.replace-c_2').replaceWith(myDivC_2);
    createObserver();
});

// Create the observer and pass it a callback function to be run whenever the threshold that is set the options is crossed
function createObserver() {
    let observer;
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };
    observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(myDivC_1);
    observer.observe(myDivC_2);
};

// function function to know if an element is visible
function handleIntersect(entries) {
    entries.forEach((entry) => {
        if(entry.intersectionRatio >= 0.8) {
            console.log("I am visible");
        } else {
            console.log("I am hide");
        }
    })
};
