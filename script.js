//Smooth scroll start

var navMenuItems=document.querySelectorAll('.horizontal-list a');
for(let i=0;i<navMenuItems.length;i++){
    navMenuItems[i].addEventListener('click',function(event){
        event.preventDefault();
        console.log(event,'event');
        var targetSectionID=this.textContent.trim().toLowerCase();
        console.log(targetSectionID,'targetSectionID');
        var targetSection=document.getElementById(targetSectionID);
        console.log(targetSection,'targetSection');
        var interval=setInterval(function(){
           
            
            var targetCoordinates=targetSection.getBoundingClientRect();
            
            console.log('targetCoordinates',targetCoordinates);
            if(targetCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}

// Smooth scroll end


//Dynamic fill skill bars

