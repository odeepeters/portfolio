// src/pages/projects.js

const Projects = () => {
    const projectList = [
      {
        title: 'Project One',
        description: 'A brief description of Project One.',
        link: 'https://github.com/yourusername/project-one', // Replace with your project link
      },
      {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        link: 'https://github.com/yourusername/project-two',
      },
      {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        link: 'https://github.com/yourusername/project-three',
      },
    ];
  
    return (
      <div>
        <h1>My Projects</h1>
        <ul>
          {projectList.map((project, index) => (
            <li key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Projects;
  