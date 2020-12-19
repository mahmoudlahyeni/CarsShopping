var qpt1=document.getElementById("z0");

var prixT=document.getElementById("z2");

var qpt2=document.getElementById("z5");
var prixT2=document.getElementById("z6");
var qpt3=document.getElementById("z7");
var prixT3=document.getElementById("z8");
var qpt4=document.getElementById("z9");
var prixT4=document.getElementById("z10");
var qpt5=document.getElementById("z11");
var prixT5=document.getElementById("z12");
var itemtotale=document.getElementById("z3");
var totale=document.getElementById("z4");
var dv1=document.getElementById("e0");
var dv2=document.getElementById("e1");
var dv3=document.getElementById("e2");
var dv4=document.getElementById("e3");
var dv5=document.getElementById("e4");



function plus(){
    qpt1.innerHTML=+qpt1.innerHTML+1;
    prixT.innerHTML=+prixT.innerHTML+250;
   totale.innerHTML=+totale.innerHTML+250;
   itemtotale.innerHTML=+itemtotale.innerHTML+1;

}

function plus1(){
  
  qpt2.innerHTML=+qpt2.innerHTML+1;
  prixT2.innerHTML=+prixT2.innerHTML+150;
  totale.innerHTML=+totale.innerHTML+150;
  itemtotale.innerHTML=+itemtotale.innerHTML+1;
   

}
function plus2(){
  
  qpt3.innerHTML=+qpt3.innerHTML+1;
  prixT3.innerHTML=+prixT3.innerHTML+100;
  totale.innerHTML=+totale.innerHTML+100;
  itemtotale.innerHTML=+itemtotale.innerHTML+1;
   

}
function plus3(){
  
  qpt4.innerHTML=+qpt4.innerHTML+1;
  prixT4.innerHTML=+prixT4.innerHTML+200;
  totale.innerHTML=+totale.innerHTML+200;
  itemtotale.innerHTML=+itemtotale.innerHTML+1;
   

}
function plus4(){
  
  qpt5.innerHTML=+qpt5.innerHTML+1;
  prixT5.innerHTML=+prixT5.innerHTML+50;
  totale.innerHTML=+totale.innerHTML+50;
  itemtotale.innerHTML=+itemtotale.innerHTML+1;
   

}


  function minus(){ 
      if(qpt1.innerHTML>0){
          qpt1.innerHTML=+qpt1.innerHTML-1;
          prixT.innerHTML=+prixT.innerHTML-250;
          totale.innerHTML=+totale.innerHTML-250;
          itemtotale.innerHTML=+itemtotale.innerHTML-1;
          
   
       }
       
    
          }
          
          function minus1(){ 
            
          if(qpt2.innerHTML>0){
              qpt2.innerHTML=+qpt2.innerHTML-1;
              prixT2.innerHTML=+prixT2.innerHTML-150;
              totale.innerHTML=+totale.innerHTML-150;
              itemtotale.innerHTML=+itemtotale.innerHTML-1;
           }
      
                }
            function minus2(){ 
            
                  if(qpt3.innerHTML>0){
                      qpt3.innerHTML=+qpt3.innerHTML-1;
                      prixT3.innerHTML=+prixT3.innerHTML-100;
                      totale.innerHTML=+totale.innerHTML-100;
                      itemtotale.innerHTML=+itemtotale.innerHTML-1;
                   }
              
                        }
              function minus3(){ 
            
                          if(qpt4.innerHTML>0){
                              qpt4.innerHTML=+qpt4.innerHTML-1;
                              prixT4.innerHTML=+prixT4.innerHTML-200;
                              totale.innerHTML=+totale.innerHTML-200;
                              itemtotale.innerHTML=+itemtotale.innerHTML-1;
                           }
                      
                                }
                          function minus4(){ 
            
                                  if(qpt5.innerHTML>0){
                                      qpt5.innerHTML=+qpt5.innerHTML-1;
                                      prixT5.innerHTML=+prixT5.innerHTML-50;
                                      totale.innerHTML=+totale.innerHTML-50;
                                      itemtotale.innerHTML=+itemtotale.innerHTML-1;
                                   }
                              
                                        }





                                        
                                       
                                    
                                    function delet2(){
                                     dv2.parentNode.removeChild(dv2);
                                     totale.innerHTML=+totale.innerHTML-prixT2.innerHTML;
                                     itemtotale.innerHTML=+itemtotale.innerHTML-qpt2.innerHTML;
                                      
                               

                                 }
                                
                                function delet3(){
                                 dv3.parentNode.removeChild(dv3);
                                 totale.innerHTML=+totale.innerHTML-prixT3.innerHTML;
                                     itemtotale.innerHTML=+itemtotale.innerHTML-qpt3.innerHTML;

                                  
                           

                             }
                            
                            function delet4(){
                             dv4.parentNode.removeChild(dv4);
                             totale.innerHTML=+totale.innerHTML-prixT4.innerHTML;
                                     itemtotale.innerHTML=+itemtotale.innerHTML-qpt4.innerHTML;

                              
                       

                         }
                        
                        function delet5(){
                         dv5.parentNode.removeChild(dv5);
                         totale.innerHTML=+totale.innerHTML-prixT5.innerHTML;
                                     itemtotale.innerHTML=+itemtotale.innerHTML-qpt5.innerHTML;

                          
                   

                     }
                     function delet1(){
                      dv1.parentNode.removeChild(dv1);
                      totale.innerHTML=+totale.innerHTML-prixT.innerHTML;
                            itemtotale.innerHTML=+itemtotale.innerHTML-qpt1.innerHTML;

                      }

                      
                   
                 
                  
                

  





            
          