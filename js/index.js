 document.getElementsByClassName("heart-btn").addEventListener("click", function (e) {
      e.preventDefault()
   //  console.log('heart ok');
    const heart = parseInt(document.getElementById("heart").value)
    const navHeart = heart.value + 1;
    document.getElementById("heart").value = navHeart
     
})

document.getElementById("call-btn").addEventListener("click", function () {
    const call = document.getElementById("call").innerText
    const olCall = call - 20;
     document.getElementById("call").innerText = olCall
})



// ---------------------------------------------------------------


function copyText() {
      
      const textElement = document.getElementById('textToCopy');

     
      const text = textElement.textContent;

     
      navigator.clipboard.writeText(text)
        .then(() => {
          alert("টেক্সট কপি হয়েছে: " + text);
        })
        .catch(err => {
          alert("কপি করা যায়নি: " + err);
        });
    }