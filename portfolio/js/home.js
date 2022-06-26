

var firstTime = true;


function showOrHideMenu(){
   newContainer.scrollTo(0,0)
   

  if(navMenuStatus=="hidden"){
    navMenu.style.top = "200px"
    if(device.includes("pc")){
      navMenu.style.top = "100px"
    }
    navMenuStatus="visible"
    
  } else {
    navMenu.style.top = "-120vh"
    navMenuStatus="hidden"
  }
  
}




function showHomeContainer(){
  currentContainer = document.getElementById(currentContainerId)
  
  if(currentContainer.id != homeContainer.id){
    currentContainer.style.top = "-100vh"
    currentContainer.style.display = "none"

    homeContainer.style.display = "block"
    homeContainer.style.top = "200px"
    if(device.includes("pc")){
      homeContainer.style.top = "100px"
    }

    homeContainer.append(footerDiv)
    footerDiv.style.position = `relative`
    footerDiv.style.top = `20px`
    
    currentContainerId = homeContainer.id
    newContainer = document.getElementById(currentContainerId)
  }
}

function showProjectsContainer(){
  currentContainer = document.getElementById(currentContainerId)
  
  if(currentContainer.id != projectsContainer.id){
    
    currentContainer.style.top = "-100vh"
    currentContainer.style.display = "none"

    projectsContainer.style.display = "block"
    projectsContainer.style.top = "200px"
    if(device.includes("pc")){
      projectsContainer.style.top = "100px"
    }

    projectsContainer.append(footerDiv)
    footerDiv.style.position = `absolute`
    footerDiv.style.top = `${projectsContainer.scrollHeight}px`
    
    currentContainerId = projectsContainer.id
    newContainer = document.getElementById(currentContainerId)
    
    
  } 
  
}



function showExperienceContainer(){
  currentContainer = document.getElementById(currentContainerId)
  
  
  if(currentContainer.id != experienceContainer.id){
    currentContainer.style.top = "-100vh"
    currentContainer.style.display = "none"

    experienceContainer.style.display = "block"
    experienceContainer.style.top = "200px"
    if(device.includes("pc")){
      experienceContainer.style.top = "100px"
    }

    experienceContainer.append(footerDiv)
    footerDiv.style.position = `absolute`
    footerDiv.style.top = `${experienceContainer.scrollHeight}px`
    
    currentContainerId = experienceContainer.id
    newContainer = document.getElementById(currentContainerId)
    
  }
}

function showContactsContainer(){
  currentContainer = document.getElementById(currentContainerId)
  
  if(currentContainer.id != contactsContainer.id){
    currentContainer.style.top = "-100vh"
    currentContainer.style.display = "none"

    contactsContainer.style.display = "block"
    contactsContainer.style.top = "200px"
    if(device.includes("pc")){
      contactsContainer.style.top = "100px"
    }

    contactsContainer.append(footerDiv)
    footerDiv.style.position = `absolute`
    footerDiv.style.top = `${contactsContainer.scrollHeight}px`
    
    currentContainerId = contactsContainer.id
    newContainer = document.getElementById(currentContainerId)
    
  }
  
  
}



function changeTheme(){

  root = document.querySelector(":root")
  h1Tags = document.getElementsByClassName(".sectionTextAboutMe")
  
  rootBackgroundVariable = getComputedStyle(root).getPropertyValue("--darkModeBackground")
  //alert(h1Tags)

  

  if(currentTheme == "dark"){
    
    
    root.style.setProperty("--darkModeBackground","#E1D9D1")
    root.style.setProperty("--darkModeOppositeBackground","#1c1c1c")
    
    root.style.setProperty("--darkTextColor", "#1c1c1c")
    root.style.setProperty("--sectionPfpOpacity", "0.8")
    
    
    
    currentTheme = "light"
  } else {

    root.style.setProperty("--darkModeBackground","#1c1c1c")
    root.style.setProperty("--darkModeOppositeBackground","#E1D9D1")

    root.style.setProperty("--sectionPfpOpacity", "0.5")
    root.style.setProperty("--darkTextColor", "#fff")
    currentTheme="dark"
  }
  
  
}


function redirectTo(url){
  window.open(url)
}

