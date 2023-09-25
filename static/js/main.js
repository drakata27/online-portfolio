// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Projects div
const projects = [
    {
        id: 1,
        image: "static/images/placeholder.jpg",
        title: "Ecommerce Store",
        desc: 'This is an online store developed in the Django framework that allows users to place orders, create their own accounts or shop as guests.',
        technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Stripe'],
        githubLink: 'https://github.com/drakata27/django-online-store'
    },
    {
        id: 2,
        image: "static/images/placeholder.jpg",
        title: "Booklog",
        desc: 'Booklog is a CRUD web app that allows users to log their favourite books and write description about the book. This applciation was developed in the Django framework',
        technologies: ['Python','HTML/CSS', 'Bootstrap'],
        githubLink: 'https://github.com/drakata27/booklog'
    },
    {
        id: 3,
        image: "static/images/placeholder.jpg",
        title: "iDo",
        desc: 'This is a To do app developed in Swift and SwiftUI framework. It allows users to complete and sort different tasks on their iPhone.',
        technologies: ['Swift', 'SwiftUI'],
        githubLink: 'https://github.com/drakata27/iDo'
    },
    {
        id: 4,
        image: "static/images/placeholder.jpg",
        title: "MiraGen",
        desc: 'An iOS app that generates random names, numbers and colours. There are about a thousand mane and a thousand female names that are parsed using JSON. ',
        technologies: ['Swift', 'SwiftUI'],
        githubLink: 'https://github.com/drakata27/MiraGen'
    },
    {
        id: 5,
        image: "static/images/placeholder.jpg",
        title: "Monitoring System",
        desc: 'This is a CRUD Windows application developed using Windows forms. It has an SQL database that stores student details that can be modified in the application',
        technologies: ['C#', 'SQL'],
        githubLink: 'https://github.com/drakata27/Performance-Monitoring-System'
    },
    {
        id: 6,
        image: "static/images/placeholder.jpg",
        title: "Chat App",
        desc: 'NOTE: STILL IN DEVELOPMENT. Chat application developed in the Django framework that allows users to communicate in real time using Django Channels',
        technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
        githubLink: '#'
    },
]

// const projectsDiv = document.querySelector('#projects')
// let projectsContent = ''

// projects.forEach(project => {
//     const projectContent = `
//         <div class="project">
//             <img src="${project.image}" class="project-img" />
//             <div class="des">
//                 <div class="title">
//                     <h3>${project.title}</h3>
//                     <p>${project.desc}</p>
//                     <h4>Technologies</h4>
//                     <p>${project.technologies}</p>
//                 </div>
//             </div>
//             <a class="btn btn-outline-dark me-2 mx-1 btn-primary" href="${project.githubLink}">Source Code</a>
//         </div>
//         `;
//     projectsContent += projectContent;

//     projectsDiv.innerHTML = projectsContent;
// });

const projectsDiv = document.querySelector('#projects');
let projectsContent = '';

projects.forEach(project => {
    const technologies = project.technologies.map(tech => `<span class="technology">${tech}</span>`).join(' ');

    const projectContent = `
        <div class="project">
            <img src="${project.image}" class="project-img" />
            <div class="des">
                <div class="title">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <h4>Technologies</h4>
                    <div class="technologies">${technologies}</div>
                </div>
            </div>
            <a class="btn btn-outline-dark me-2 mx-1 btn-primary" href="${project.githubLink}">Source Code</a>
        </div>
        `;
    projectsContent += projectContent;
});

projectsDiv.innerHTML = projectsContent;