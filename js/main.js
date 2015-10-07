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

function getTimeToNewYear() {
    var timeToNewYear = new Object();
    var current = new Date();
    var newYear = new Date("01.01.2016");
    var left = newYear - current;

    var formatter = left / 1000;
    seconds = left % 60;
    formatter /= 60;
    var minutes = formatter % 60;
    formatter /= 60;
    var hours = formatter % 24;
    formatter /= 24;
    var days = formatter;

    timeToNewYear.days = Math.round(days);
    timeToNewYear.hours = Math.round(hours);
    timeToNewYear.minutes = Math.round(minutes);
    timeToNewYear.seconds = Math.round(seconds); 
    return timeToNewYear;
}

function changeHeaderImage(img) {
    document.getElementById("year_time").setAttribute("src", img.src);
}

function changeDescription(img) {
    var text;
    var src = img.src;

    if (src.indexOf("0") > -1) {
        text = "Лес называют зелёным океаном земли, бесценным даром природы. Лес — настоящие легкие нашей планеты: он помогает дышать всему живому, выделяя кислород, очищая воздух от грязи, пыли и вредных для здоровья людей веществ."
    } else if (src.indexOf("1") > -1) {
        text = "Лесные деревья и кустарники выделяют особые оздоровительные вещества — фитонциды. Легко дышится в хвойных лесах, но и горьковатый запах белых кистей цветущей черемухи, и смолистый запах лопающихся почек осины — все это фитонциды, убивающие микроорганизмы."
    } else if (src.indexOf("2") > -1) {
        text = "Леса кормят, обогревают, дают материал для строительства. Плоды, цветы, листья, ветки и корни — источник пищи для животных. Мощные деревья с густой кроной служат хорошей защитой от транспортных шумов, сильных ветров. Леса сберегают воду и почву. Летом смягчают жару, зимой — холод."
    } else if (src.indexOf("3") > -1) {
        text = "Лес издавна служит людям: из древесины изготовляют почти 20000 видов продуктов и изделий. Сочетания лесных растений образуют пейзажи неповторимой красоты."
    } else if (src.indexOf("4") > -1) {
        text = "Болото - это сообщество многолетних растений, которые способны произрастать в условиях обильного увлажнения проточными или стоячими водами. В болотной почве содержится мало кислорода, а нередко и питательных веществ (минеральных солей), которые необходимы растениям."
    } else if (src.indexOf("5") > -1) {
        text = "На лугу, в лесу, по берегам рек и озер, вдоль дороги нередко попадаются участки с повышенным содержанием воды в почве. Здесь также поселяются растения, приспособленные к жизни в условиях переувлажнения."
    }

    document.getElementById("img_description").textContent = text;
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

    // Block №4
    document.getElementById("read_more").addEventListener("click", function() {
        document.getElementById("read_more_text").textContent = "А знаем ли мы, какие растения вокруг нас? Конечно, все узнают дуб, березу, ель, клен... А трава? Присмотритесь к ней повнимательнее, и вы увидите большое разнообразие видов. Одни зацветают рано весной и цветут до осени. Другие летом отцветают, но их побеги еще долго зеленеют. Есть растения, что зацветают лишь в разгар лета."
    }); 

    // Block №8
    document.getElementById("news_1").addEventListener("click", function() {
        this.textContent = "В городе, особенно большом, с его многочисленными заводами и фабриками, воздух, вода и почва загрязнены промышленными отходами, выхлопными газами автомобилей, бытовым мусором. Растения же очищают среду, в которой мы живем. Особенно важны те растения, которые не только накапливают в себе вредные вещества, но и способны так их изменить (переработать), что те становятся безопасными для человека и животных."
    });

    document.getElementById("news_2").addEventListener("click", function() {
        this.textContent = "Многие знакомые нам растения представляют интерес как лекарственные и пищевые. Правда, в городе их собирать нельзя. Но умение узнавать полезное растение среди множества других пригодится вам, когда вы окажетесь в деревне или на даче, в отдалении от автомобильных магистралей. Только в экологически чистых районах можно собирать растения для употребления в пищу и для лекарственных целей."
    });
    
    // Block №6
    document.getElementById("clock").addEventListener("mouseover", function() {
        var timeLeft = getTimeToNewYear();
        var timeText = "До Нового Года осталось: " + timeLeft.days + " дней " + timeLeft.hours + " часов " + timeLeft.minutes + " минуты"
        this.title = timeText;
        document.getElementById("time_left").textContent = timeText;
    });

    document.getElementById("clock").addEventListener("mouseout", function() {
        this.title = "";
        document.getElementById("time_left").textContent = "";
    });

    // Block №1
    document.getElementById("img_preview_1").addEventListener("click", function() {
        changeHeaderImage(this);
        changeDescription(this);
    });

    document.getElementById("img_preview_2").addEventListener("click", function() {
        changeHeaderImage(this);
        changeDescription(this);
    });

    document.getElementById("img_preview_3").addEventListener("click", function() {
        changeHeaderImage(this);
        changeDescription(this);
    });


    document.getElementById("back").addEventListener("click", function() {
        alert("back");
    });

    document.getElementById("forward").addEventListener("click", function() {
        alert("forward");
    });
});