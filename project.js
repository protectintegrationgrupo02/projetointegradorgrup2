function openModal(mn){

  let modal = document.getElementById(mn);
  
  if(typeof modal == 'undefined' || modal === null)
   return;
   
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
 }
 function closeModal(mn){
 
     let modal = document.getElementById(mn);
 
     if(typeof modal == 'undefined' || modal === null)
     return;
     
        modal.style.display = 'none';
 }

 function openModal01(mn){

   let modal01 = document.getElementById(mn);
   
   if(typeof modal01 == 'undefined' || modal01 === null)
    return;
    
       modal01.style.display = 'block';
       document.body.style.overflow = 'hidden';
  }
  function closeModal01(mn){
  
      let modal01 = document.getElementById(mn);
  
      if(typeof modal01 == 'undefined' || modal01 === null)
      return;
      
         modal01.style.display = 'none';
  }