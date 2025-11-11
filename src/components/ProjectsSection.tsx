import { useState } from 'react';
import FilterPills from './FilterPills';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    tags: ['TypeScript', 'Python', 'TensorFlow'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 4,
    title: 'Social Media Platform',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 5,
    title: 'Fitness Tracking System',
    tags: ['Vue.js', 'Express', 'MySQL'],
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 6,
    title: 'Real Estate Portal',
    tags: ['Angular', 'Django', 'Redis'],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

const filters = [
  'All Projects',
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Backend',
  'Full Stack',
  'AI/ML',
  'E-Commerce',
  'Data Analytics',
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="section-title">Projects</h2>
        <span className="brand-dot" />
      </div>

      <FilterPills
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
