document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll(".big-text");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    texts.forEach(text => observer.observe(text));
});
