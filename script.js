//Hamburger Menu

//Grabbing the hamburger image
const hamburger_image = document.getElementById('hamburger_image');

//Grabbing the popup section 
const popup = document.getElementById('popup');

//Grabbing the unordered list within the popup menu
const ham_ul = document.getElementById('ham_ul');

const close_popup = document.getElementById('close_popup');

//Function that'll enable the popup menu
function enableMenu(){
    popup.classList = [];
    popup.classList.add("popup");
    // ham_ul.style.margin = "0px 100px";
    ham_ul.style.transform = "translate(0px,0px)";
    ham_ul.style.left = "0";
}

function disablemenu(){
    popup.classList = [];
    popup.classList.add("disabled");
    ham_ul.style.margin = "0px -600px";
}

//When the user presses the hamburger menu
hamburger_image.addEventListener("click",(e)=>{

    let x = popup.classList[0];
 
    if(x === "disabled"){
        enableMenu();
    }
});

close_popup.addEventListener("click", (e)=>{
    disablemenu();
});


/**
 * Function to create the Google Map
 */

 function myMap(){
    //Map options
    let options = {
        zoom:15,
        center:new google.maps.LatLng(51.500250,-0.157400)
    }
        
    //New map
    let map = new google.maps.Map(document.getElementById('map'), options);
        
    //Add marker
    let marker = new google.maps.Marker({
    position:{lat:51.500250, lng:-0.157400},
    map:map
    });
}