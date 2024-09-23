
function rowReverse() {
    const switchSelector = document.getElementsByClassName("main");
    for (let i = 0; i < switchSelector.length; i++) {
        
        if (switchSelector[i].style.flexDirection == "row")
            {
                switchSelector[i].style.flexDirection = "row-reverse";
                switchSelector[i].style.transition = "all linear 1s";
            }

        else {
            switchSelector[i].style.flexDirection = "row";
            switchSelector[i].style.transition = "all linear 1s";
        }
        console.log('returned');
    }

    
    console.log(switchSelector);
}
rowReverse();

