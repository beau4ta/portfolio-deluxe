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
    var repoLink1 = document.createElement("a");
    var repoLink2 = document.createElement("a");
    var repoLink3 = document.createElement("a");

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

    proj1Img.src = "assets/pokedexproj1.png";
    proj2Img.src = "assets/bestweatherpic.png";
    proj3Img.src = "assets/dailyplannerSS.png";
    proj1Img.setAttribute("class", "proj-img1");
    proj2Img.setAttribute("class", "proj-img2");
    proj3Img.setAttribute("class", "proj-img2");

    proj1Info.textContent = "HTML, CSS, JQuery, Bootstrap, APIs";
    proj2Info.textContent = "HTML, CSS, JQuery, Bootstrap, APIs";
    proj3Info.textContent = "HTML, CSS, JQuery, Bootstrap";
    proj1Info.setAttribute("class", "proj-info");
    proj2Info.setAttribute("class", "proj-info");
    proj3Info.setAttribute("class", "proj-info");

    repoLink1.textContent = "Repo Link";
    repoLink2.textContent = "Repo Link";
    repoLink3.textContent = "Repo Link";
    repoLink1.href = "https://github.com/AYYLAM0/Pokedex-project";
    repoLink2.href = "https://github.com/beau4ta/Best-Weather-24-7";
    repoLink3.href = "https://github.com/beau4ta/dopeDailyPlanner";
    repoLink1.setAttribute("class", "repo-link")
    repoLink2.setAttribute("class", "repo-link")
    repoLink3.setAttribute("class", "repo-link")

    nextButton2.textContent = "Next";
    prevButton.textContent = "Prev";
    nextButton2.setAttribute("class", "next-button");
    prevButton.setAttribute("class", "prev-button");
    buttonSection2.setAttribute("class", "button-section");

    buttonSection2.append(nextButton2, prevButton);

    imgLink1.append(proj1Img);
    imgLink2.append(proj2Img);
    imgLink3.append(proj3Img);
    projOtherSection.append(proj2Title, imgLink2, proj2Info, repoLink2, proj3Title, imgLink3, proj3Info, repoLink3);
    projInfoSection.append(proj1Title, imgLink1, proj1Info, repoLink1, projOtherSection);
    projSection.append(projTitle);
    infoSection.append(projSection, projInfoSection, projOtherSection, buttonSection2);

    $(".next-button").click(function(){
        $(".about-section").hide();
        $(".about-section-info").hide();
        $(".next-button").hide();
        $(".prev-button").hide();
        lastInfo();
      });

      $(".prev-button").click(function(){
        $(".about-section").hide();
        $(".about-section-info").hide();
        $(".next-button").hide();
        $(".prev-button").hide();
        showInfo();
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
    prevButton2.setAttribute("class", "prev-button");
    buttonSection3.setAttribute("class", "button-section");

    buttonSection3.append(nextButton3, prevButton2);

    contactInfoSection.append(contactInfo);
    contactSection.append(contactTitle);
    infoSection.append(contactSection, contactInfoSection, buttonSection3);

    $(".next-button").click(function(){
        $(".about-section").hide();
        $(".about-section-info").hide();
        $(".next-button").hide();
        $(".prev-button").hide();
        showResume();
      });

    $(".prev-button").click(function(){
        $(".about-section").hide();
        $(".about-section-info").hide();
        $(".next-button").hide();
        $(".prev-button").hide();
        nextInfo();
      });
}

function showResume() {

    var resumeSection = document.createElement("div");
    var resumeInfoSection = document.createElement("div");
    var resumeTitle = document.createElement("h1");
    var resumeLink = document.createElement("a");
    var resumeInfo = document.createElement("img");

    var prevButton3 = document.createElement("button");
    var buttonSection4 = document.createElement("div");

    prevButton3.textContent = "Prev";
    prevButton3.setAttribute("class", "prev-button");
    buttonSection4.setAttribute("class", "button-section");

    resumeTitle.textContent = "Resume";
    resumeInfo.src = "assets/resumeSS.png";
    resumeLink.href = "https://docs.google.com/document/d/17gMRMCYLH5X5xLUvqPVZd0vVnyPHyqlK81p0ww3ilZQ/edit?usp=sharing"
    resumeTitle.setAttribute("class", "about-section");
    resumeInfo.setAttribute("class", "resume-img");
    resumeInfoSection.setAttribute("class", "about-section-info");

    buttonSection4.append(prevButton3);

    resumeLink.append(resumeInfo);
    resumeSection.append(resumeTitle);
    resumeInfoSection.append(resumeLink);

    infoSection.append(resumeSection, resumeInfoSection, buttonSection4);

    $(".prev-button").click(function(){
        $(".about-section").hide();
        $(".about-section-info").hide();
        $(".next-button").hide();
        $(".prev-button").hide();
        lastInfo();
      });

}