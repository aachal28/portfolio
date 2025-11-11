import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  tags: string[];
  image: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      {project.featured && (
        <div className="featured-badge">
          Featured
        </div>
      )}

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="project-overlay" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button className="project-action" aria-label="View project">
        <ExternalLink className="w-5 h-5" />
      </button>
    </div>
  );
}
