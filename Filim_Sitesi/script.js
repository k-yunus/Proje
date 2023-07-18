const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow,i) => {
    const widthRation = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageıtem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click",function () {
        clickCounter++;
        if(imageıtem - (4 + clickCounter) + (4 - widthRation) >=0)
        {
            movieLists[i].style.transform = `translateX(${movieLists[i].
            computedStyleMap().get("transform")[0].x.value - 300}px)`;
            
        }
        else{
            movieLists[i].style.transform = "translate(0)"
            clickCounter = 0;
            

        }
    });
    
});

/* DARK MODE */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movi-list-title");

ball.addEventListener("click",function(){
    items.forEach((item) => item.classList.toggle("active"))

})