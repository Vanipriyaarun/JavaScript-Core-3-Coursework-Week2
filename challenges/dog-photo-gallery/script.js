const buttonEl=document.getElementById("button");
buttonEl.addEventListener("click",()=>{
  fetch("https://dog.ceo/api/breeds/image/random")
  .then ((response)=> {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })
  .then((data)=>{
     const image=`<img src="${data.message}"/>`;
     document.getElementById("unOrderedList").innerHTML="<li>"+image+"</li>"
  })  
})
.catch((error) => {
    // Handle the error
    console.log(error);
  });
