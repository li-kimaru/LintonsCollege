document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#home-btn").addEventListener("click", function() {
        document.querySelector("#landing").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#about-btn").addEventListener("click", function() {
        document.querySelector("#elevate").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#why-btn").addEventListener("click", function() {
        document.querySelector("#why").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#mission-btn").addEventListener("click", function() {
        document.querySelector("#mission").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#contact-btn").addEventListener("click", function() {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
});
