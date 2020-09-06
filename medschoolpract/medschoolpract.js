function dropaboutsubmenu(){
     aboutsubmenu = document.getElementById("submenu_about");
    aboutsubmenu.style="display: block;";
}
function leaveaboutsubmenu(){
    aboutsubmenu.style = "default";
}
function dropservicessubmenu(){
    servicessubmenu = document.getElementById("submenu_services");
    servicessubmenu.style = "display: block;";
}
function leaveservicessubmenu(){
    servicessubmenu.style = "default";
}
function dropcoursessubmenu(){
    coursessubmenu = document.getElementById("submenu_courses");
    coursessubmenu.style = "display: block;";
}
function leavecoursessubmenu(){
    coursessubmenu.style = "default";
}
function dropblogsubmenu(){
    blogsubmenu = document.getElementById("submenu_blog");
    blogsubmenu.style = "display: block;";
}
function leaveblogsubmenu(){
    blogsubmenu.style="default";
}
function droptoolssubmenu(){
    toolssubmenu = document.getElementById("submenu_tools");
    toolssubmenu.style = "display: block;";
}
function leavetoolssubmenu(){
    toolssubmenu.style = "default";
}
function dropcontactsubmenu(){
    contactsubmenu = document.getElementById("submenu_contact");
    contactsubmenu.style = "display: block";
}
function leavecontactsubmenu(){
    contactsubmenu.style = "default";
}
function dropmedicalschooladmissionsmenu(){
    medicalschooladmission = document.getElementById("submenu_services_medicalschooladmissions");
    medicalschooladmission.style = "display: inline;position: absolute; left: 200px;top: 0px;";
}
function leavemedicalschooladmissionsmenu(){
    medicalschooladmission.style = "default";
}
function dropresidencymatchingsubmenu(){
    residencymatching = document.getElementById("submenu_services_residencymatching");
    residencymatching.style = "display: inline; left: 200px;"
}
function leaveresidencymatchingsubmenu(){
    residencymatching.style = "default";
}
function droptutoringsubmenu(){
    tutoring = document.getElementById("submenu_services_tutoring");
    tutoring.style = "display: inline; left: 200px;";
}
function leavetutoringsubmenu(){
    tutoring.style = "default";
}
function dropotherservicessubmenu(){
    otherservices = document.getElementById("submenu_services_otherservices");
    otherservices.style = "display: inline; top: 100px; left: 200px;"
}
function leaveotherservicessubmenu(){
    otherservices.style="default";
}
function showmenushrinked(){
    if(window.innerWidth > 1000){
        smallmenu.style = "display: none;";
    }

    smallmenu = document.getElementById("shrinkedmenu");
    smallmenu.style = "display: block; top: 0px;";
    shrinkedmenu = document.getElementById("shrinkedmenu");

    
}
function cancelshrinkedmenu(){
    smallmenu.style = "default";

}