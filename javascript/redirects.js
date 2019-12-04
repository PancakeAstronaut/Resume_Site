// function to redirect the user based on value chosen from select box || [index.html]
function getOption(){
    let option = document.getElementById('nav_options').value;
    if (option === "about"){
        window.location.href = "about_Stephen.html";
    } else if (option === "skills"){
        window.location.href = "relevant_skills.html";
    } else if (option === "persproj"){
        window.location.href = "personal_projects.html";
    } else if (option === "linkin"){
        window.location.href = "https://www.linkedin.com/in/stephen-hengeli-4137b2170/";
    } else if (option === "github"){
        window.location.href = "https://github.com/PancakeAstronaut";
    } else if(option ==="contactme"){
      window.location.href = "contact_Stephen.html";
    }else {
        alert("Please choose one of the options in the drop-down\nfor additional links")
    }
}
