const userObject = [
    {
        id: 1,
        name: 'John Doe',
        job: 'Front end Developer',
        experience: '5 years',
        description: 'A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application.',
        goal: 'Become a fullstack developer',
        images: "1"
    },
    {
        id: 2,
        name: 'Jane Doe',
        job: 'Economist',
        experience: '7 years',
        description: "An economist is an expert who studies the relationship between a society's resources and its production or output, etc...",
        goal: 'Starting own business',
        images: "2"
    },
    {
        id: 3,
        name: 'Joe Citizen',
        job: 'Lawyer',
        experience: '18 years',
        description: 'A lawyer provides counsel and represents businesses, individuals, and government agencies in legal matters and disputes.',
        goal: 'become a senior partner in a big lawyer company',
        images: "3"
    },
    {
        id: 4,
        name: 'Richard Roe',
        job: 'Student',
        experience: '6 months',
        description: 'A student is primarily a person enrolled in a school or other educational institution and who is under learning with goals of acquiring knowledge.',
        goal: 'graduate college',
        images: "4"
    },
];

const image = ['1','2','3','4'];

const avatar = document.getElementById('avatar');
const btnForward = document.getElementById('btnForward');
const btnBack = document.getElementById('btnBack');

const headline = document.getElementById('headline');
const aboutLine = document.getElementById('aboutLine');
const content = document.getElementById('content');


let ajaxIndex = 0;

window.addEventListener('load', loadID(image[ajaxIndex]));


function loadID(image){
    avatar.style.backgroundImage = `url('images/${image}.jpg')`;
    avatar.style.transition = '1s';
    avatar.style.opacity = 0.8;

    headline.innerHTML = `<h1>` + userObject[ajaxIndex].name + `</h1>`;
    aboutLine.innerHTML = `<h2>` + userObject[ajaxIndex].job + `</h2>`;

    content.innerHTML = `<h3>`+ '<span>experience: </span><br>' + userObject[ajaxIndex].experience + `</h3><br>`;
    content.innerHTML += `<h3>` + '<span>description: </span><br>' + userObject[ajaxIndex].description + `</h3><br>`;
    content.innerHTML += `<h3>`+ '<span>goal: </span><br>' + userObject[ajaxIndex].goal + `</h3>`;
}


btnForward.addEventListener('click', prevID);
btnBack.addEventListener('click', nextID);

// Previous id
function prevID() {
    ajaxIndex--;
  
    if (ajaxIndex < 0) {
      ajaxIndex = userObject.length - 1;
    }
   
    loadID(image[ajaxIndex]);
  }
  
  // Next id
  function nextID() {
    ajaxIndex++;
  
    if (ajaxIndex > userObject.length - 1) {
      ajaxIndex = 0;
    }
  
    loadID(image[ajaxIndex]);
  }

  console.log(ajaxIndex);