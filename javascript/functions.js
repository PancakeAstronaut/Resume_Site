// function to show contact form || [contact_Stephen.html]
function showEmailField(){
  document.getElementById("contactForm").style.display = 'block';
}
// function to hide contact form || [contact_Stephen.html]
function hideEmailField(){
  document.getElementById("contactForm").style.display = 'none';
}
// function to grab email and subject from contact form and open email dialog || [contact_Stephen.html]
function open_emailDialog(){
  var subject = document.getElementById('subject_box').value;
  var emailCC = document.getElementById('email_box').value
  window.open('mailto: stephenCodeProjects@gmail.com'+'?cc='+emailCC+'&subject='+subject, '_self')
}
// function to show skill divs || [relevant_skills.html]
function getSkills(){
  // gets skill choice
  let option = document.getElementById('skills_options').value;
  // if block sets all visibility to non except the option chosen
  if(option === "prog"){
    document.getElementById("oses").style.display = 'none';
    document.getElementById("leadership").style.display = 'none';
    document.getElementById("pm").style.display = 'none';
    document.getElementById("programming").style.display = 'block';
  } else if(option === "os"){
    document.getElementById("programming").style.display = 'none';
    document.getElementById("leadership").style.display = 'none';
    document.getElementById("pm").style.display = 'none';
    document.getElementById("oses").style.display = 'block';
  } else if(option === "leader"){
    document.getElementById("programming").style.display = 'none';
    document.getElementById("oses").style.display = 'none';
    document.getElementById("pm").style.display = 'none';
    document.getElementById("leadership").style.display = 'block';
  } else if(option === "pm"){
    document.getElementById("programming").style.display = 'none';
    document.getElementById("oses").style.display = 'none';
    document.getElementById("leadership").style.display = 'none';
    document.getElementById("pm").style.display = 'block';
  } else{
    alert("Choose an option from the list to navigate to it")
  }

}
// function to clear the visibility of all skills || [relevant_skills.html]
function clearSkills(){
  document.getElementById("programming").style.display = 'none';
  document.getElementById("oses").style.display = 'none';
  document.getElementById("leadership").style.display = 'none';
  document.getElementById("pm").style.display = 'none';
}
// function to set which personal project is visible based on a chosen checkbox || [personal_projects.html]
function showProject(project){
    hideprojects();
    var chboxs = document.getElementsByName("projectInfo");
    var vis = "none";
    for(var i = 0; i < chboxs.length; i++) {
        if(chboxs[i].checked){
         vis = "block";
            break;
        }
    }
    document.getElementById(project).style.display = vis;
}
// function to hide all the project divs || [personal_projects.html]
function hideprojects(){
  document.getElementById("mysql").style.display = 'none';
  document.getElementById("speechtone").style.display = 'none';
  document.getElementById("discord").style.display = 'none';
  document.getElementById("xcell").style.display = 'none';
  document.getElementById("lms").style.display = 'none';

}
