let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




const firebaseConfig = {
    apiKey: "AIzaSyBN0kDCKjgvucHyRu38sFZ3Cz2lsT7gWT8",
    authDomain: "cakeorder-28038.firebaseapp.com",
    databaseURL: "https://cakeorder-28038-default-rtdb.firebaseio.com",
    projectId: "cakeorder-28038",
    storageBucket: "cakeorder-28038.appspot.com",
    messagingSenderId: "744452772347",
    appId: "1:744452772347:web:17a4112bd0df5116153b5e"
  };
  
firebase.initializeApp(firebaseConfig);
//initialize firebase
var cakeorderDB=firebase.database().ref('cakeorder');
document.getElementById('cakeorder').addEventListener('submit',submitform);

function submitform(e)
{
    e.preventDefault();
    var cname=getElementVal('cname');
    var cno=getElementVal('cno');
    var cord=getElementVal('cord');
    var cfood=getElementVal('cfood');
    var how=getElementVal('how');
    var date=getElementVal('date');
    var add=getElementVal('add');
    var msg=getElementVal('msg');
    console.log(cname,cno,cord,cfood,how,date,add,msg);
    saveMessage(cname,cno,cord,cfood,how,date,add,msg);
      //enable alert
  document.querySelector('.alert').style.display='block';
  //remove alert
  setTimeout(()=>{
      document.querySelector('.alert').style.display='none';
  },3000);
}
    const saveMessage=(cname,cno,cord,cfood,how,date,add,msg)=>{
        var newcakeorder=cakeorderDB.push();
        newcakeorder.set({
            cname:cname,
            cno:cno,
            cord:cord,
            cfood:cfood,
            how:how,
            date:date,
            add:add,
            msg:msg,
        });
    };

const getElementVal=(id)=>{
        return document.getElementById(id).value;
    }