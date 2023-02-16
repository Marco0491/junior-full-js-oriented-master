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
});

