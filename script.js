document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! Peter will get back to you soon.");
    document.getElementById("contactForm").reset();
});
