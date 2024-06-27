
const title="Our friendly locals are eager to share their passion for this special place and help you create cherished memories during your stay. Wander through our charming neighborhoods, savor local cuisines that delight the senses, and immerse yourself in the captivating stories that have shaped our community over the centuries!";

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


const companyQualities=[
  {
    image:'https://images.unsplash.com/photo-1715449187020-e090eb0dc3d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:' Seamless Travel Planning',
    about:'The goal is to make the process of researching, booking, and managing a trip as smooth and efficient as possible.Real-time information and updates to keep travelers informed about changes or disruptions.'
  },
  {
    image:'https://images.unsplash.com/photo-1718964313220-819cde834df7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:'Tailored Experiences',
    about:'Customers feel that their individual requirements are better met, leading to higher satisfaction and loyalty.They expect more personalized and relevant interactions with brands and service providers'
  },
  {
    image:'https://plus.unsplash.com/premium_photo-1664391859117-39b8ac442b94?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:'Realiable And Trustworthy',
    about:'We do what we say we will do, meeting commitments and deadlines with a high degree of predictability. This consistency builds confidence and assurance in those who interact with us.'
  }
  
]



let mainBodyHTML='';
companyQualities.forEach((obj)=>{
  mainBodyHTML+=`
    <div class="company-qualities">
    <div>
      <img class="intro-image" src="${obj.image}" alt="">
    </div>
    <h2 class="intro-title">
      ${obj.title}
    </h2>
    <p>
    ${obj.about}
    </p>
  </div>
  `
})
const mainBody=document.querySelector('.main-body');
mainBody.innerHTML=mainBodyHTML;




const buttons = document.querySelectorAll('.js-toogle-button');

buttons.forEach(button => {
  const hiddenParagraph = button.previousElementSibling;
  let isExpanded = false;

  button.addEventListener('click', () => {
    if (isExpanded) {
      hiddenParagraph.classList.add('hidden');
      button.textContent = 'Show More';
      isExpanded = false;
    } else {
      hiddenParagraph.classList.remove('hidden');
      button.textContent = 'Show Less';
      isExpanded = true;
    }
  });
});


const customerDetails=[
  {
    image:'https://images.unsplash.com/photo-1713145872656-9edc5dd389f6?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Ana Davin',
    experience:"I had an amazing experience booking my family's trip to Italy with your company. The travel agent I worked with was incredibly knowledgeable and helped me create the perfect itinerary that fit our interests and budget"
  },
  {
    image:'https://images.unsplash.com/photo-1713693212474-efe7a31ae57e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Sophia Grace',
    experience:'As a solo traveler, I was a bit nervous about booking a tour, but your company made the process so easy and comfortable. The small group size allowed me to connect with fellow travelers, and our guide was fantastic'
  },
  {
    image:'https://images.unsplash.com/photo-1717766430314-69fe585b8b9f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Isabelle Rose',
    experience:"Your company's attention to detail is unparalleled. From the initial planning stages to the trip itself, every aspect was carefully considered. The local guides were incredibly knowledgeable and passionate"
  },
  {
    image:'https://images.unsplash.com/photo-1718227696369-7a4aaec5316e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Liam Alexander',
    experience:"As a frequent traveler, I've booked with many different companies, but your team at the travel and tour company stands out. The customer service I received was outstanding"
  },
  {
    image:'https://images.unsplash.com/photo-1590626448634-7a9f6e56bb39?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Ethan James',
    experience:'I was blown away by the level of service and care your company provided during my recent trip to Japan. The pre-trip planning and communication were exceptional'
  },
  {
    image:'https://plus.unsplash.com/premium_photo-1714839368624-03bc69a70efc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Emily Kate',
    experience:"I've used your travel and tour company for several of my family's vacations, and I can confidently say that the level of service and attention to detail is unmatched"
  }
]

let allDetails='';

customerDetails.forEach((detail)=>{
  allDetails+=`
     <div class="customer-details">
    <div class="customer-title">
      <div class="customer-picture">
        <img src="${detail.image}" alt="">
      </div>
        <div class="customer-det">
          <div class="customer-name">
            <h1>${detail.name}</h1>
          </div>
          <div class="customer-hobby">
            Traveler
          </div>
        </div>
    </div>
    <div class="customer-experience">
     ${detail.experience}
    </div>

  </div>
  `

})


document.querySelector('.customer-container').innerHTML=allDetails;