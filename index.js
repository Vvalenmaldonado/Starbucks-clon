var tabButton = document.getElementsByClassName('tab');
var tabContent = document.getElementsByClassName('tab-content');
var borderBottom = document.getElementsByClassName('borderB')





for( let i = 0; i < tabContent.length; i++){
    if(i==0){
        tabButton[i].classList.add('active');
        tabContent[i].style.display = 'flex';
        
    }else{
        tabContent[i].style.display = 'none';
        
    }

}





function tabs(e, x) {
    var i;
    for (i = 0; i < tabButton.length; i++) {
        tabContent[i].style.display = 'none';
        tabButton[i].classList.remove('active');
        
    }
    document.getElementById(x).style.display = 'flex';
    e.currentTarget.classList.add('active');
   
}