const usersData = [
    {
        id:0,
        username:"Wade Wilson",
        image:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"California",
        country:"USA",
        techStak:["PHP","android","IOS",'Flutter','Swift','Kotlin','Java'],
        description:"Alexandra is very dedicated developer for mobile platforms and very good designer as well.",
    },
    {
        id:1,
        username:"Alex Morgan",
        image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"London",
        country:"UK",
        techStak:["UI","UX","Photoshop",'AfterEffect','Premier Pro','Adobe Illutrator'],
        description:"Wade is a 32 year old UI/UX designer, with impressive portfolio behind him.",
    },
    
    {
        id:2,
        username:"Jonathan Jones",
        image:"https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"Berlin",
        country:"Germany",
        techStak:["Node.JS","MongoDB","React.JS",'HTML','CSS','JS','Express','Redux','Firebase','Next.JS','Angular.JS'],
        description:"Jonathan is very good web developer who can create any web application with high effeciency",
    },
    
]



var cul="";
      
    
usersData.forEach(function(elem,idx){
    cul +=`

    <div class="card bg-white w-[25%] h-[90%] px-4 py-6 flex flex-col gap-y-10 justify-center items-center font-gilroy font-medium text-[20px] overflow-hidden shadow-indigo-500  text-center">
        
    <img class="img h-[200px] w-[200px] object-cover rounded-[50%]"    src="${elem.image}" />
    <h1>${elem.username}</h1>
    <h3>${elem.city}</h3>
    <div id="skill">
    <button id="${elem.id}" class="btn1 view py-2 px-2 bg-slate-400 rounded-[10px]">${elem.techStak[0]}</button>
    <button id="${elem.id}" class="btn1 view py-2 px-2 bg-slate-400 rounded-[10px]">${elem.techStak[1]}</button>
    <button id="${elem.id}" class="btn1 view py-2 px-2 bg-slate-400 rounded-[10px]">${elem.techStak[2]}</button>
    <button id="${elem.id}" class="btn2 view py-2 px-2  rounded-[10px] bg-red-400">+${elem.techStak.length-2}</button>
   
 
    </div>
    <p text-center py-4>${elem.description}</</p>
    <div>
    <button class="view py-4 px-10 bg-red-400 rounded-[10px]">view profile</button>
</div>
   </div>


    `
})

document.querySelector(".main").innerHTML=cul

// usersData.filter(function(elem,id){

// })