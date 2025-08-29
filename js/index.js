 document.getElementsByClassName("heart-btn").addEventListener("click", function (e) {
      e.preventDefault()
    console.log('heart ok');
    const heart = document.getElementById("heart").innerText
    // parseInt()
    const navHeart = heart++;
    document.getElementById("heart").innerText = navHeart
     

})

// document.getElementById("call-btn").addEventListener("click", function () {
//     const call = document.getElementById("call").innerText
//     const olCall = call - 20;
//      document.getElementById("call").innerText = olCall
// })

// ------------------------------------------------------------

let coins = 100;
  const serviceName = document.getElementsByClassName("service-name")
  const serviceNumber = document.getElementsByClassName("service-number")
  document.getElementsByClassName("call-btn").addEventListener("click",
    function () {
    if (coins < 20) {
      alert("you need 20 coins.");
      return;
    }
        
    else{
      alert(`Calling ${serviceName} at ${serviceNumber}`);
      coins - 20;
      document.getElementById('coinCount').textContent = coins;
    }

    // 
    const historyItem = document.createElement('li');
    historyItem.textContent = `${serviceName} - ${serviceNumber}`;
    document.getElementById('callHistory').appendChild(historyItem);
  }
  ) 



// ---------------------------------------------------------------


function copyText() {
      
      const textElement = document.getElementById('textToCopy');

     
      const text = textElement.textContent;

     
      navigator.clipboard.writeText(text)
        .then(() => {
          alert("text copy " + text);
        })
        .catch(err => {
          alert("sorry no copy " + err);
        });
    }



    // ------------------------------------------------------------



  

  