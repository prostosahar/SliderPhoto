const data = [
    {
        img: '../icons/image_room-project1.png',
        city: 'Rostov-on-Don LCD admiral',
        repairTime: '3.5 months',
        apartmentArea: '81 m2',
        repairCost: 'Upon request',
    },
    {
        img: '../icons/image_room-project2.png',
        city: 'Sochi Thieves',
        repairTime: '4 months',
        apartmentArea: '105 m2',
        repairCost: 'Upon request',
    },
    {
        img: '../icons/image_room-project3.png',
        city: 'Rostov-on-Don Patriotic',
        repairTime: '3 months',
        apartmentArea: '93 m2',
        repairCost: 'Upon request',
    }
];

const image = document.getElementsByClassName('projects__image-room1')[0];
const imageLowWidth = document.getElementsByClassName('projects__image-room2')[0];

const navigation = document.getElementsByClassName('projects__address')[0];
const elemNav = navigation.children;
elemNav[0].setAttribute('class', 'activ');

const pointsLink = document.getElementById('points__slide');
const points = pointsLink.querySelectorAll('circle');
const pointNav = pointsLink.children;

const city = document.getElementById('city');
const repairTime = document.getElementById('repairTime');
const apartmentArea = document.getElementById('apartmentArea');
const repairCost = document.getElementById('repairCost');

let indexSlide = 0;
const countSlide = 3;

function slider(index){
    city.innerHTML = data[index].city;
    repairTime.innerHTML = data[index].repairTime;
    apartmentArea.innerHTML = data[index].apartmentArea;
    repairCost.innerHTML = data[index].repairCost;
    image.setAttribute('src', data[index].img);
    imageLowWidth.setAttribute('src', data[index].img);
    
    for (let i = 0; i < countSlide; i++)
        if (i !== index){
            elemNav[i].classList.remove('activ');
            points[i].setAttribute('fill', '#FFFFFF4D');
        }
    points[index].setAttribute('fill', 'white');
    elemNav[index].setAttribute('class', 'activ');
    
    indexSlide = index;
}

function nextSlide(){
    if (indexSlide < countSlide - 1)
        indexSlide++;
    else
        indexSlide = 0;
    slider(indexSlide);
}

function prevSlide(){
    if (indexSlide > 0)
        indexSlide--;
    else
        indexSlide = countSlide - 1;
    
    slider(indexSlide);
}

function addLinkForSlider() {
    Array.from(elemNav).forEach((navItem, index) => {
        navItem.addEventListener('click', () => slider(index));
    });
    
    Array.from(pointNav).forEach((navItem, index) => {
        navItem.addEventListener('click', () => slider(index));
    });
}

addLinkForSlider();