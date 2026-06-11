function copy_email() {
    const email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email);
}

// mobile copy support