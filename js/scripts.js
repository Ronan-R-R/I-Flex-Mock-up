document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Logic ---
    const toggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('.site-header');
    
    if (toggle) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            header.classList.toggle('open');
            
            const spans = toggle.querySelectorAll('span');
            if (header.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            }
        });

        document.addEventListener('click', (e) => {
            if (header.classList.contains('open') && !header.contains(e.target)) {
                header.classList.remove('open');
                const spans = toggle.querySelectorAll('span');
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            }
        });
    }

    // --- 2. Back to Top Logic ---
    const backToTopBtn = document.getElementById("backToTop");
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "flex";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 3. Form Simulation ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = "Sending...";
            btn.disabled = true;
            btn.style.opacity = "0.7";

            setTimeout(() => {
                alert("Success! Your inquiry has been sent to the L-Flex team.");
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.opacity = "1";
            }, 1500);
        });
    });
});