const projects = document.getElementById('projects')

const callApi = async ()=>{
    
    const request = await fetch("./JSON/portfolio.json")
    const data = await request.json();
    return data;
}
callApi().then(data => {
    const save =data.websites.map((website)=>{

       return (`<a href="${website.link}" target="_blank">
            <div class="project">
                <img src="${website.img}" alt="${website.title}">
                <h4 class="proj-title">${website.title}</h4>
                <p class="made">Made with:</p>
                <ul class="hashtags">
                    ${website.skills.map(skills =>`<li><p>${skills.skill}</p></li>`).join('')}
                </ul>
            </div>
        </a>`);
         
}).join('')
 projects.innerHTML = save  
})
            .catch(err=> console.log(err))