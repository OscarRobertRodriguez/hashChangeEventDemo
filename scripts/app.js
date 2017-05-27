



var link2 = document.querySelector('A[href="#page2]"'); 
var link3 = document.querySelector('A[href="#page2]"'); 




window.addEventListener('hashchange', function(e) {
     var page1 = document.getElementById('page1');
      var page2 = document.getElementById('page2'); 
      var page3 = document.getElementById('page3'); 

     if(location.hash === '#page2') {
     	 page1.classList.add('js-hidden');
     	 page2.classList.remove('js-hidden');
     }
     if(location.hash === '#page3') {
     	 page2.classList.add('js-hidden');
     	 page3.classList.remove('js-hidden');
     }
     if(location.hash === '#page1') {
     	 page3.classList.add('js-hidden');
     	 page1.classList.remove('js-hidden');
     }

})