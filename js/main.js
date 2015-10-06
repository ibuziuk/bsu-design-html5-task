var images = [];
images[0] = "gallery/pic0.jpg";
images[1] = "gallery/pic1.jpg";
images[2] = "gallery/pic2.jpg";
images[3] = "gallery/pic3.jpg";
images[4] = "gallery/pic4.jpg";
images[5] = "gallery/pic5.jpg";

// image counter / switcher
var x = 0;
var imageTimer;

function getTimeOfYear() {
    var timeOfYear;
    var d = new Date();
    var m = d.getMonth();

    if (m === 11 || (m >= 0 && m < 2)) {
        timeOfYear = "Winter";
    } else if (m >= 2 && m < 5) {
        timeOfYear = "Spring";
    } else if (m >= 5 && m < 8) {
        timeOfYear = "Summer";
    } else if (m >= 8 && m < 11) {
        timeOfYear = "Autumn";
    }

    return timeOfYear;
}

function setImageHeader() {
    var src;
    var img = document.getElementById("year_time");
    var timeOfYear = getTimeOfYear();
    if (timeOfYear === "Winter") {
        img.src = "images/winter.jpg";
    } else if (timeOfYear === "Spring") {
        img.src = "images/spring.jpg";
    } else if (timeOfYear === "Summer") {
        img.src = "images/summer.jpg";
    } else if (timeOfYear === "Autumn") {
        img.src = "images/outumn.jpg";
    }

    if (src) {
        img.src = src;
    }
}

function changeImage() {
    var img = document.getElementById("year_time");
    img.src = images[x];
    x++;

    if(x >= images.length) {
        x = 0;
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    // Block №2
    setImageHeader();

    // Block №3
    document.getElementById("view_presentation").addEventListener("click", function() {
        if (imageTimer) {
            clearInterval(imageTimer);
            this.textContent = "Start Presentation";
            imageTimer = null 
        } else {
            imageTimer = setInterval("changeImage()", 3000);
            this.textContent = "Stop Presentation";
        }
    });

    // Block №4
    document.getElementById("read_more").addEventListener("click", function() {
        document.getElementById("read_more_text").textContent = "А знаем ли мы, какие растения вокруг нас? Конечно, все узнают дуб, березу, ель, клен... А трава? Присмотритесь к ней повнимательнее, и вы увидите большое разнообразие видов. Одни зацветают рано весной и цветут до осени. Другие летом отцветают, но их побеги еще долго зеленеют. Есть растения, что зацветают лишь в разгар лета."
    }); 

    // Block №8
    
});