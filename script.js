const portfolio ={}
portfolio.fixedMenu = () => {
     
     const homeButton = document.getElementById('homeButton');
     
     homeButton.addEventListener('click', () =>{
          window.scroll({top: 0, left: 0, behavior: 'smooth'});
     })
     
     window.addEventListener('scroll' , function(){
          if(window.pageYOffset >100 ){
               homeButton.style.visibility='visible';
          }else{
               homeButton.style.visibility='hidden'
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
          console.log(name)

          if (name === "" || email === "" || message === ""){
               window.alert('Please fill in form correctly')
          }else{
               
               const person = {
                    Name: name ,
                    Email: email ,
                    Message: message 
               }
               dbRef.push(person)

               document.querySelector('form').reset();  

               submitBtn.style.backgroundColor="#00ab66"
               
                         setTimeout(function(){
                              submitBtn.style.backgroundColor = "#E63946"
                              ;
                         },5000)
          }
     })
     

}


portfolio.init = () => {
     portfolio.fixedMenu(); 
     portfolio.resumeButton();
     portfolio.contactPage();
}

portfolio.init(); 

