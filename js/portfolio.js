const projects = document.getElementById('projects')




//============== json call-----------------
const callApi = async ()=>{
    
    const request = await fetch("./JSON/portfolio.json")
    const data = await request.json();
    return data;
}

// -------------------- get projects data from JSON
        // filtering buttons

        // -------------------------------- websites filter button show --------------------------------------
const btnWeb = ()=>{
    callApi().then(data => {

    

    
        projects.innerHTML =data.websites.map((get)=>{

            return (`<a href="${get.link}" target="_blank">
                 <div class="project">
                     <img src="${get.img}" alt="${get.title}">
                     <h4 class="proj-title">${get.title}</h4>
                     <p class="made">Made with:</p>
                     <ul class="hashtags">
                         ${get.skills.map(skills =>`<li><p>${skills.skill}</p></li>`).join('')}
                     </ul>
                 </div>
             </a>`);
              
     }).join('')


    
  
})
        .catch(err=> console.log(err))

    
    }


        // -------------------------------- Photography filter button show --------------------------------------

const btnPhoto = ()=>{
    
    callApi().then(data => {

    

    
        projects.innerHTML =data.photography.map((get)=>{

            return (`<a href="${get.link}" target="_blank">
                 <div class="project">
                     <img src="${get.img}" alt="${get.title}">
                     <h4 class="proj-title">${get.title}</h4>
                     <p class="made">Made with:</p>
                     <ul class="hashtags">
                         ${get.skills.map(skills =>`<li><p>${skills.skill}</p></li>`).join('')}
                     </ul>
                 </div>
             </a>`);
              
     }).join('')


    
  
})
        .catch(err=> console.log(err))
}

        // -------------------------------- Graphic design filter button show --------------------------------------


const btnGraphic = ()=>{
    callApi().then(data => {

    

    
        projects.innerHTML =data.graphicDesign.map((get)=>{

            return (`<a href="${get.link}" target="_blank">
                 <div class="project" style="width: 113%;">
                     <img style="height: 236px;" src="${get.img}" alt="${get.title}">
                     <h4 class="proj-title">${get.title}</h4>
                     <p class="made">Made with:</p>
                     <ul class="hashtags">
                         ${get.skills.map(skills =>`<li><p>${skills.skill}</p></li>`).join('')}
                     </ul>
                 </div>
             </a>`);
              
     }).join('')


    
  
})
        .catch(err=> console.log(err))
}


btnWeb();

// change button color when clicked -------------------------------
const webBtn = document.getElementById('webBtn');
const phoBtn = document.getElementById('phoBtn');
const gdBtn = document.getElementById('gdBtn');
const webClick = ()=>{
    webBtn.style.color = '#00b31e';
    phoBtn.style.color = '#ffffff';
    gdBtn.style.color = '#ffffff';
    webBtn.style.borderBottom = '1px solid #00b31e';
    phoBtn.style.borderBottom = 'none';
    gdBtn.style.borderBottom = 'none';
}
const phoClick = ()=>{
    webBtn.style.color = '#ffffff';
    phoBtn.style.color = '#00b31e';
    gdBtn.style.color = '#ffffff';
    webBtn.style.borderBottom = 'none';
    phoBtn.style.borderBottom = '1px solid #00b31e';
    gdBtn.style.borderBottom = 'none';
}
const gdClick = ()=>{
    webBtn.style.color = '#ffffff';
    phoBtn.style.color = '#ffffff';
    gdBtn.style.color = '#00b31e';
    webBtn.style.borderBottom = 'none';
    phoBtn.style.borderBottom = 'none';
    gdBtn.style.borderBottom = '1px solid #00b31e';

}
webClick()
