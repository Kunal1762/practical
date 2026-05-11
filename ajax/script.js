document.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let course =
    document.getElementById("course").value;

    let user = {
        name,
        email,
        course
    };

    // Get existing users
    let users =
    JSON.parse(localStorage.getItem("users"))
    || [];

    // Push new user
    users.push(user);

    // Store again
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    // AJAX POST Request
    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        headers: {
            "Content-Type":"application/json"
        },

        body: JSON.stringify(user)

    })
    .then(response => response.json())
    .then(data => {

        alert("Registration Successful!");

        document.getElementById("registerForm").reset();

        console.log(data);

    });

});