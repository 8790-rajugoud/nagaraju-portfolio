// JavaScript to create blog posts dynamically

const blogPosts = [
    {
        title: "The Rise of AI in Web Development",
        excerpt: "Explore how Artificial Intelligence is changing the landscape of website building and UX/UI design.",
        link: "blogs/blog1.html"
    },
    {
        title: "Top 5 JavaScript Tips for Beginners",
        excerpt: "Learn essential tips to master JavaScript as a beginner frontend developer.",
        link: "blogs/blog2.html"
    },
    {
        title: "Building a Personal Portfolio Website",
        excerpt: "Step-by-step guide to create your own personal branding website.",
        link: "blogs/blog3.html"
    }
];

// Function to load blogs dynamically
const blogContainer = document.getElementById('blog-posts');

blogPosts.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');

    blogCard.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="${post.link}" class="btn" target="_blank">Read More</a>
    `;

    blogContainer.appendChild(blogCard);
});
// Contact Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Stop normal form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Thank you for contacting me, ' + name + '! I will get back to you soon.');
            contactForm.reset(); // Clear the form after submission
        }
    });
});
