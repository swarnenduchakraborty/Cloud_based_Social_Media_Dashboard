document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = window.apiUrl || "https://ztyu64pxv0.execute-api.ap-south-1.amazonaws.com/dev"; // Use URL from HTML or define here

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const post = JSON.parse(data.body)[0];

            document.getElementById("likes").innerText = post.Likes;
            document.getElementById("comments").innerText = post.Comments;
            document.getElementById("shares").innerText = post.Shares;
            document.getElementById("views").innerText = post.Views;
            document.getElementById("platform").innerText = post.Platform;
            document.getElementById("timestamp").innerText = new Date(post.Timestamp).toLocaleString();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("likes").innerText = "Error";
            document.getElementById("comments").innerText = "Error";
            document.getElementById("shares").innerText = "Error";
            document.getElementById("views").innerText = "Error";
            document.getElementById("platform").innerText = "Error";
            document.getElementById("timestamp").innerText = "Error";
        });
});
