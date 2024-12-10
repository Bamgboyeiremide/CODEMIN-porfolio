// Initialize Feather icons
feather.replace();

// Projects data
const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A modern e-commerce platform built with React and Node.js',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
        technologies: ['React', 'Node.js', 'MongoDB'],
        githubLink: 'https://github.com',
        liveLink: 'https://example.com'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
        technologies: ['Vue.js', 'Firebase', 'Tailwind'],
        githubLink: 'https://github.com',
        liveLink: 'https://example.com'
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website with modern design',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        technologies: ['React', 'TypeScript', 'Tailwind'],
        githubLink: 'https://github.com',
        liveLink: 'https://example.com'
    }
];

// Render projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `
                        <span class="project-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i data-feather="github"></i>
                        Code
                    </a>
                    <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i data-feather="external-link"></i>
                        Live Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Re-initialize Feather icons for the newly added elements
    feather.replace();
}

// Scroll animation
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => observer.observe(element));
}

// Mobile menu
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-desktop');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        const icon = menuToggle.querySelector('i');
        if (nav.classList.contains('show')) {
            icon.setAttribute('data-feather', 'x');
        } else {
            icon.setAttribute('data-feather', 'menu');
        }
        feather.replace();
    });
}

// Form handling
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            message: form.querySelector('#message').value
        };
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        
        // Reset form
        form.reset();
        
        // Show success message (you can enhance this)
        alert('Message sent successfully!');
    });
}

// Update footer year
function updateFooterYear() {
    const yearElement = document.querySelector('#year');
    yearElement.textContent = new Date().getFullYear();
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    handleScrollAnimation();
    setupMobileMenu();
    setupContactForm();
    updateFooterYear();
});