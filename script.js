const portfolio ={}

portfolio.fixedMenu = () => {
     
     const homeButton = document.getElementById('homeButton');
     
     homeButton.addEventListener('click', () =>{
          window.scroll({top: 0, left: 0, behavior: 'smooth'});
     })
     
     
     window.addEventListener('scroll' , function(){
          if(window.pageYOffset >100 ){
               homeButton.style.display='inline';
          }else{
               homeButton.style.display='none'
          }
     })
}

portfolio.resumeButton = () => {

     const downloadButton = document.querySelector('#resumeButton');

     downloadButton.addEventListener('click', () =>{
          const newDiv = document.createElement('div');
          const thankYou = document.createTextNode('Thanks for checking me out!');
          newDiv.appendChild(thankYou); 

          downloadButton.append(newDiv)

          setTimeout(function(){
               newDiv.remove();
          },10000)

     })
}

portfolio.contactPage = () => {
     const submitBtn = document.querySelector('#submitButton')

     submitBtn.addEventListener('click', (e)=> {
          e.preventDefault();
          const name = document.querySelector('#name').value
          const email = document.querySelector('#email').value
          const message = document.querySelector('#message').value
          
          


     })
     
}


portfolio.init = () => {
     portfolio.fixedMenu(); 
     portfolio.resumeButton();
     portfolio.contactPage();
}

portfolio.init(); 

