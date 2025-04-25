
// Reveal hidden glyph after 30 seconds
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let hidden = document.getElementById("hidden-glyph");
        if (hidden) hidden.style.display = "block";
    }, 30000);
});
