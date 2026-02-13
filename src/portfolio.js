/* =========================================
   PORTFOLIO CONFIGURATION FILE
   =========================================
   Edit this file to change website content
   ========================================= */

const header = {
    // Navigation Links
    homepage: "https://jay-portfolio.com",
    title: "JP.",
    links: [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Experience", link: "#experience" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ],
}

const about = {
    // Hero Section
    name: "Jay Panchal",
    role: "Software Developer | MCA Student",
    description:
        "I build digital experiences that feel alive. Focused on interaction, accessibility, and visual storytelling.",
    resume: "https://drive.google.com/file/d/13GKWr9CE1fjt1FdjQQnpAJ3a120iDeZ0/view",
    social: {
        linkedin: "https://www.linkedin.com/in/jay-panchal0324",
        github: "https://github.com/jayp7585",
        twitter: "#",
    },

    // About Section
    aboutTitle: "About Me",
    aboutDescription: [
        "Hello there! I'm Jay Panchal, a passionate software developer with a knack for building robust and scalable web applications.",
        "With a strong foundation in modern web technologies, I love turning complex problems into simple, beautiful, and intuitive interface designs.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.",
    ],
    stats: [
        { label: "Years of Coding", value: "3+" },
        { label: "Projects Completed", value: "10+" },
        { label: "Commitment", value: "100%" }, // Replaced "Coffees" with "Commitment" as per About.jsx
    ],
}

const skills = {
    title: "Tech Stack",
    description: "Technologies I work with",
    data: [
        // Frontend
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "Tailwind", icon: "💨" },

        // Backend
        { name: "Node.js", icon: "🟩" },
        { name: "PHP", icon: "🐘" },
        { name: "Python", icon: "🐍" },
        { name: "Firebase", icon: "🔥" },

        // Tools
        { name: "Git", icon: "🌱" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "🧠" },
        { name: "Postman", icon: "📮" },
    ],
}

const projects = {
    title: "Selected Works",
    description: "A showcase of projects where design meets functionality.",
    data: [
        {
            title: "Restaurant Management System",
            description: "A web application for managing restaurant operations.",
            image: "project1.png",
            tech: ["PHP", "MySQL", "Bootstrap"],
            link: "#",
        },
        {
            title: "Bus Booking System",
            description: "Online bus booking platform with admin panel.",
            image: "project2.png",
            tech: ["PHP", "MySQL"],
            link: "#",
        },
    ],
}

const experience = {
    title: "Work Experience",
    description: "My professional journey and the companies I've had the privilege to work with.",
    data: [
        {
            role: "Web Development Intern",
            company: "Green Hightech",
            duration: "Jan 2025 – Present",
            logo: "green-hightech.png",
            description: [
                "Working on website development using PHP and MySQL.",
                "Developing responsive UI and improving existing web pages.",
                "Learning real-world project workflow and deployment process.",
            ],
            skills: ["PHP", "MySQL", "HTML/CSS"],
        },
        {
            role: "PHP Developer",
            company: "J & K Cafe & Restro",
            duration: "Freelance",
            logo: "jnk-cafe.png",
            description: [
                "Restaurant management system with authentication, ordering, admin panel, and notifications.",
            ],
            skills: ["PHP", "MySQL", "Bootstrap"],
        },
        {
            role: "Backend Developer",
            company: "GetBus",
            duration: "Freelance",
            logo: "getbus.png",
            description: [
                "Bus booking system with ticket management and payment gateway.",
            ],
            skills: ["PHP", "MySQL", "Cashfree"],
        },
    ],
}

const contact = {
    title: "Let's Connect.",
    description:
        "Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.",
    email: "jayp56837@gmail.com",
    location: "Gujarat, India",
}

const footer = {
    copyright: `© ${new Date().getFullYear()} Jay Panchal. All rights reserved.`,
    tagline: "Building digital products, brands, and experiences. Always learning, always creating.",
}

export { header, about, skills, projects, experience, contact, footer }
