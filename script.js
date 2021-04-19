var infoSection = $("#info-section");
var startBtn = $(".start-button");

$(".start-button").click(function(){
    $(".btn-container").hide();
  });

  $(".start-button").click(showInfo);

function showInfo() {

    var aboutSection = document.createElement("div");
    var aboutInfoSection = document.createElement("div");
    var aboutTitle = document.createElement("h1");
    var aboutInfo = document.createElement("p");

    var buttonSection = document.createElement("div")
    var nextButton = document.createElement("button")

    aboutTitle.textContent = "About Me";
    aboutTitle.setAttribute("class", "about-section");

    aboutInfo.textContent = "Hello, My name is Beau Fortier. I am currently learning to be a Web Developer through Case Western Reserve University's Coding Bootcamp. Here I am building skills such as, HTML, CSS, JavaScript, JQuery, Node,js, React.js, MySQL, and more. I am currently employed at Chipotle Mexican Grill as a Service Manager. I have been working there for 4 years and I have climbed my way up the ladder to be in the position I am in. In this portfolio you will find information about me, the projects I have made in this bootcamp, a link to my resume, and contact information to get a hold of me. I hope you enjoy this interactive portfolio that showcases some of the skills I have learned. Click next to proceed to my projects!"
    aboutInfo.setAttribute("class", "about-section-info");

    nextButton.textContent = "Next";
    nextButton.setAttribute("class", "next-button");
    buttonSection.setAttribute("class", "button-section");

    buttonSection.append(nextButton);

    aboutInfoSection.append(aboutInfo);
    aboutSection.append(aboutTitle);
    infoSection.append(aboutSection, aboutInfoSection, buttonSection);

     $(".next-button").click(function(){
        $(".about-section").hide();
        $(".about-section-info").hide();
        $(".next-button").hide();
        nextInfo();
      });
}

function nextInfo() {
    
    var projSection = document.createElement("div");
    var projInfoSection = document.createElement("div");
    var projOtherSection = document.createElement("div");
    var projTitle = document.createElement("h1");
    var proj1Title = document.createElement("h2");
    var proj2Title = document.createElement("h2");
    var proj3Title = document.createElement("h2");
    var imgLink1 = document.createElement("a");
    var imgLink2 = document.createElement("a");
    var imgLink3 = document.createElement("a");
    var proj1Img = document.createElement("img");
    var proj2Img = document.createElement("img");
    var proj3Img = document.createElement("img");
    var proj1Info = document.createElement("p");
    var proj2Info = document.createElement("p");
    var proj3Info = document.createElement("p");

    var buttonSection2 = document.createElement("div");
    var nextButton2 = document.createElement("button");
    var prevButton = document.createElement("button");

    projInfoSection.setAttribute("class", "about-section-info");
    projOtherSection.setAttribute("class", "about-section-info");

    projTitle.textContent = "Projects";
    projTitle.setAttribute("class", "about-section");

    proj1Title.textContent = "Project PokeDex";
    proj2Title.textContent = "Best Weather";
    proj3Title.textContent = "Daily Planner";
    proj1Title.setAttribute("class", "proj-title");
    proj2Title.setAttribute("class", "proj-title");
    proj3Title.setAttribute("class", "proj-title");

    imgLink1.href = "https://ayylam0.github.io/Pokedex-project/"
    imgLink2.href = "https://beau4ta.github.io/Best-Weather-24-7/"
    imgLink3.href = "https://beau4ta.github.io/dopeDailyPlanner/"

    proj1Img.src = "pokedexproj1.png";
    proj2Img.src = "bestweatherpic.png";
    proj3Img.src = "dailyplannerSS.png";
    proj1Img.setAttribute("class", "proj-img1");
    proj2Img.setAttribute("class", "proj-img2");
    proj3Img.setAttribute("class", "proj-img2");

    proj1Info.textContent = "HTML, CSS, JQuery, Bootstrap, APIs";
    proj2Info.textContent = "HTML, CSS, JQuery, Bootstrap, APIs";
    proj3Info.textContent = "HTML, CSS, JQuery, Bootstrap";
    proj1Info.setAttribute("class", "proj-info");
    proj2Info.setAttribute("class", "proj-info");
    proj3Info.setAttribute("class", "proj-info");

    nextButton2.textContent = "Next";
    prevButton.textContent = "Prev";
    nextButton2.setAttribute("class", "next-button");
    prevButton.setAttribute("class", "next-button");
    buttonSection2.setAttribute("class", "button-section");

    buttonSection2.append(nextButton2, prevButton);

    imgLink1.append(proj1Img);
    imgLink2.append(proj2Img);
    imgLink3.append(proj3Img);
    projOtherSection.append(proj2Title, imgLink2, proj2Info, proj3Title, imgLink3, proj3Info);
    projInfoSection.append(proj1Title, imgLink1, proj1Info, projOtherSection);
    projSection.append(projTitle);
    infoSection.append(projSection, projInfoSection, projOtherSection, buttonSection2);

    $(".next-button").click(function(){
        $(".about-section").hide();
        $(".about-section-info").hide();
        $(".next-button").hide();
        lastInfo();
      });
}

function lastInfo() {
    
    var contactSection = document.createElement("div");
    var contactInfoSection = document.createElement("div");
    var contactTitle = document.createElement("h1");
    var contactInfo = document.createElement("p");

    var buttonSection3 = document.createElement("div");
    var nextButton3 = document.createElement("button");
    var prevButton2 = document.createElement("button");
    
    contactTitle.textContent = "Contact Me";
    contactTitle.setAttribute("class", "about-section");

    contactInfo.textContent = "440-657-2746 | beaufortier13@gmail.com";
    contactInfo.setAttribute("class", "about-section-info");

    nextButton3.textContent = "Next";
    prevButton2.textContent = "Prev";
    nextButton3.setAttribute("class", "next-button");
    prevButton2.setAttribute("class", "next-button");
    buttonSection3.setAttribute("class", "button-section");

    buttonSection3.append(nextButton3, prevButton2);

    contactInfoSection.append(contactInfo);
    contactSection.append(contactTitle);
    infoSection.append(contactSection, contactInfoSection, buttonSection3);
}