// Chapter 10 - Practice Set: 


// Question: 1

let url = "https://kontests.net/api/v1/all"
let response = fetch(url);
response.then((v) => {
    return v.json();
})
    .then((contests) => {
        console.log(contests);
        ihtml = "";
        for (item in contests) {
            console.log(contests[item])
            ihtml += `
    <div class="card" style="width: 22rem;">
    <img src="https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${contests[item].name}</h5>
        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site} </p>
        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
        <p>Starts at : ${contests[item].start_time}</p>
        <p>Starts at : ${contests[item].end_time}</p>
        <a href="${contests[item].url}" class="btn btn-primary">Visit Page</a>
    </div>
</div> `
            cardContainer.innerHTML = ihtml
        }
    })


// Question: 2,3,4
   let n = localStorage.getItem("note")
   alert("Your note is " + n)
    let a= prompt("Enter your note: ")
    if(a){
   localStorage.setItem("note" , a)
    }
    let c = confirm("Do you want to delete your Note?")
    if(c){
        localStorage.removeItem("note")
        alert("Your Note deleted successfully")
    }