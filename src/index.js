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
myDivC_1.setAttribute('counter', 0);
myDivC_1.innerHTML = 'I am the first div called C_1';

let myDivC_2 = document.createElement('div');
myDivC_2.id = "C_2";
myDivC_2.setAttribute('counter', 0);
myDivC_2.innerHTML = 'I am the second div called C_2';

let viewsCounterC_1 = myDivC_1.getAttribute('counter');
let viewsCounterC_2 = myDivC_2.getAttribute('counter');
let indexColorC_1 = 0;
let indexColorC_2 = 0;

// function for replace the selected elements as soon as the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.replace-c_1').replaceWith(myDivC_1);
    document.querySelector('.replace-c_2').replaceWith(myDivC_2);
    createObserver();
});

// Create the observer and pass it a callback function to be run whenever the threshold that is set the options is crossed
const createObserver = () => {
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

// function to know if an element is visible, change the background color and measure the viewing time of the element
function handleIntersect(entries) {
    entries.forEach((entry) => {
        let element = entry.target;

        if(entry.isIntersecting) {
            if(entry.intersectionRatio >= 0.8 && element.id == 'C_1') {
                element.setAttribute('startViewTimestamp', Date.now().toString());
                viewsCounterC_1++;
                if(viewsCounterC_1 == configurations.CHANGE_COLOR_AFTER_VIEWS) {
                    indexColorC_1++;
                    viewsCounterC_1 = 0;
                }
            } else {
                element.setAttribute('startViewTimestamp', Date.now().toString());
                viewsCounterC_2++;
                if(viewsCounterC_2 == configurations.CHANGE_COLOR_AFTER_VIEWS) {
                    indexColorC_2++;
                    viewsCounterC_2 = 0;
                }
            }
        } else {
            const startViewTimestamp = parseInt(element.getAttribute('startViewTimestamp'));
            console.log(`Element ${element.id} has been viewed for ${(Date.now() - startViewTimestamp) / 1000}s`)
        }

        if(indexColorC_1 > configurations.COLORS.length -1) {
            indexColorC_1 = 0;
        }
        myDivC_1.style.backgroundColor = configurations.COLORS[indexColorC_1];

        if(indexColorC_2 > configurations.COLORS.length -1) {
            indexColorC_2 = 0;
        }
        myDivC_2.style.backgroundColor = configurations.COLORS[indexColorC_2];
    })
};
