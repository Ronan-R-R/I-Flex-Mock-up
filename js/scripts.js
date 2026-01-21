
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const toggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('.site-header');
    if(toggle) {
        toggle.addEventListener('click', () => header.classList.toggle('open'));
    }

    // Back to Top Logic
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mock Form Submission
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Sending...";
            btn.disabled = true;
            setTimeout(() => {
                alert("Thank you! Your request has been received.");
                btn.innerText = originalText;
                btn.disabled = false;
                form.reset();
            }, 1000);
        });
    });
});
