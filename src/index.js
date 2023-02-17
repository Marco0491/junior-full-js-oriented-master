const configurations = {
    CHANGE_COLOR_AFTER_VIEWS: 5,
    COLORS: [
        '#2d8d54',
        '#22255d',
        '#740493',
        '#fc7a2f',
    ],
    OLD_ELEMENTS: ['.replace-c_1', '.replace-c_2'],
    NEW_ELEMENTS: ['C_1', 'C_2']
};

// Create the observer function
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            let element = entry.target;
            let viewsCounter = element.getAttribute('counter');
            let index = element.getAttribute('colorIndex');
            element.style.backgroundColor = configurations.COLORS[index];

            if(entry.isIntersecting) {
                // this runs if the threshold of the target element is 80% or more
                if(entry.intersectionRatio >= 0.8) {
                    element.setAttribute('startViewTimestamp', Date.now().toString());
                    viewsCounter++;
                    element.setAttribute('counter', viewsCounter);
                    // this runs if the views are as much as the target
                    if(viewsCounter == configurations.CHANGE_COLOR_AFTER_VIEWS) {
                        index++;
                        viewsCounter = 0;
                        element.setAttribute('colorIndex', index);
                        element.setAttribute('counter', viewsCounter);
                    }
                    // when it completes the cycle of colors it starts over
                    if(index > configurations.COLORS.length -1) {
                        index = 0;
                        element.setAttribute('colorIndex', index);
                    }

                }
            } else {
                // show the total time of the target element view
                const startViewTimestamp = parseInt(element.getAttribute('startViewTimestamp'));
                console.log(`Element ${element.id} has been viewed for ${(Date.now() - startViewTimestamp) / 1000}s`)
            }
        })
    },
    {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    }
);

// function for replacing the selected elements as soon as the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < configurations.NEW_ELEMENTS.length; i++) {
        let myDiv = document.createElement('div');

        myDiv.id = configurations.NEW_ELEMENTS[i];
        myDiv.setAttribute('counter', 0);
        myDiv.setAttribute('colorIndex', 0);
        myDiv.innerHTML = `I am the div called ${configurations.NEW_ELEMENTS[i]}`;

        document.querySelector(configurations.OLD_ELEMENTS[i]).replaceWith(myDiv);
        observer.observe(myDiv);
    }
});