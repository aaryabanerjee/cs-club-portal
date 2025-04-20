import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="matrix-content projects-content">
      <h1 className="matrix-header">💻 CS Club Projects</h1>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="project-image"
              />
            )}
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
            {project.tags && project.tags.length > 0 && (
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;