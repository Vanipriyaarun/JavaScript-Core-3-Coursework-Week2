fetch("https://xkcd.now.sh/?comic=latest")
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
    console.log(data);
    const image=`<img src="${data.img}"/>`;
    document.getElementById("main").innerHTML=image;
})
.catch((error) => {
    // Handle the error
    console.log(error);
  });