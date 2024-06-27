import { companyQualities } from "./scripts/Data";

let mainBodyHTML='';

companyQualities.forEach((obj)=>{
 
  mainBodyHTML+=`
  
  
  
  `


})

const mainBody=document.querySelector('.main-body');

mainBody.innerHTML=mainBodyHTML;

const title="Our friendly locals are eager to share their passion for this special place and help you create cherished memories during your stay. Wander through our charming neighborhoods, savor local cuisines that delight the senses, and immerse yourself in the captivating stories that have shaped our community over the centuries.";

const heading =document.querySelector('.paragraph-class');

let count=0;

let interval=setInterval(()=>{

  if(count===title.length){
    
    clearInterval(interval)
  }
  else{
    heading.innerHTML+=title[count];
    count++;
  }
},40);
