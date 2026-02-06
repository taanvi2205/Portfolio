import './Contributions.css';
import { FaGithub, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

const contributions = [
    {
        title: "Add filter dropdown for My Projects widget",
        repo: "eclipse-sw360/sw360-frontend",
        repoUrl: "https://github.com/eclipse-sw360/sw360-frontend",
        prUrl: "https://github.com/eclipse-sw360/sw360-frontend/pull/1429",
        description: "Added filtering functionality with Role In Project and Clearing State checkboxes",
        status: "merged",
        date: "Feb 2026",
        tech: ["Next.js", "TypeScript", "Bootstrap"]
    },
    {
        title: "Migrate TraceGraph from class to functional component",
        repo: "jaegertracing/jaeger-ui",
        repoUrl: "https://github.com/jaegertracing/jaeger-ui",
        prUrl: "https://github.com/jaegertracing/jaeger-ui/pull/3490",
        description: "Refactored TraceGraph component from class-based to functional with hooks",
        status: "open",
        date: "Feb 2026",
        tech: ["React", "TypeScript", "Hooks"]
    },
    {
        title: "Migrate TimelineViewingLayer to functional component",
        repo: "jaegertracing/jaeger-ui",
        repoUrl: "https://github.com/jaegertracing/jaeger-ui",
        prUrl: "https://github.com/jaegertracing/jaeger-ui/pull/3476",
        description: "Refactored TimelineViewingLayer from class-based to functional component",
        status: "open",
        date: "Feb 2026",
        tech: ["React", "TypeScript", "Hooks"]
    },
    {
        title: "Enable react-hooks/exhaustive-deps linter rule",
        repo: "jaegertracing/jaeger-ui",
        repoUrl: "https://github.com/jaegertracing/jaeger-ui",
        prUrl: "https://github.com/jaegertracing/jaeger-ui/pull/3471",
        description: "Added eslint-plugin-react-hooks and fixed 12 violations across 6 files",
        status: "merged",
        date: "Feb 2026",
        tech: ["React", "JavaScript", "ESLint"]
    },
    {
        title: "Batch API for license clearing count",
        repo: "eclipse-sw360/sw360-frontend",
        repoUrl: "https://github.com/eclipse-sw360/sw360-frontend",
        prUrl: "https://github.com/eclipse-sw360/sw360-frontend/pull/1394",
        description: "Fixed 502 errors by implementing batch API for license clearing requests",
        status: "merged",
        date: "Jan 2026",
        tech: ["Next.js", "TypeScript", "REST API"]
    },
    {
        title: "Add batch endpoint for license clearing counts",
        repo: "eclipse-sw360/sw360",
        repoUrl: "https://github.com/eclipse-sw360/sw360",
        prUrl: "https://github.com/eclipse-sw360/sw360/pull/3591",
        description: "Backend batch API endpoint to eliminate 502 errors",
        status: "merged",
        date: "Jan 2026",
        tech: ["Java", "Spring Boot", "REST API"]
    },
    {
        title: "Make project mainlineState field required",
        repo: "eclipse-sw360/sw360",
        repoUrl: "https://github.com/eclipse-sw360/sw360",
        prUrl: "https://github.com/eclipse-sw360/sw360/pull/3543",
        description: "Updated schema for data consistency in project entries",
        status: "merged",
        date: "Jan 2026",
        tech: ["Java", "Spring Boot", "Thrift"]
    },
    {
        title: "Show 'No Linked Release' instead of undefined",
        repo: "eclipse-sw360/sw360-frontend",
        repoUrl: "https://github.com/eclipse-sw360/sw360-frontend",
        prUrl: "https://github.com/eclipse-sw360/sw360-frontend/pull/1374",
        description: "Fixed UI bug displaying 'undefined' for projects without linked releases",
        status: "merged",
        date: "Jan 2026",
        tech: ["Next.js", "TypeScript"]
    },
    {
        title: "Autocomplete for Advanced Search fields",
        repo: "eclipse-sw360/sw360-frontend",
        repoUrl: "https://github.com/eclipse-sw360/sw360-frontend",
        prUrl: "https://github.com/eclipse-sw360/sw360-frontend/pull/1287",
        description: "Implemented autocomplete for components page search fields",
        status: "merged",
        date: "Dec 2025",
        tech: ["Next.js", "TypeScript", "Bootstrap"]
    },
    {
        title: "Migrate Sample::SampleState to enum class",
        repo: "OpenMS/OpenMS",
        repoUrl: "https://github.com/OpenMS/OpenMS",
        prUrl: "https://github.com/OpenMS/OpenMS/pull/8568",
        description: "Modernized codebase by migrating to enum class for type safety (~700 lines changed)",
        status: "merged",
        date: "Jan 2026",
        tech: ["C++", "CMake"]
    }
];

const Contributions = () => {
    return (
        <div className="contributions-container">
            <h2>Open Source Contributions</h2>
            <p className="contributions-subtitle">
                Contributing to projects that matter, one PR at a time
            </p>

            <div className="contributions-grid">
                {contributions.map((contribution, index) => (
                    <div className="contribution-card" key={index}>
                        <div className="card-header">
                            <FaCodeBranch className="pr-icon" />
                            <span className={`status ${contribution.status}`}>
                                {contribution.status}
                            </span>
                        </div>

                        <h3 className="card-title">{contribution.title}</h3>

                        <a
                            href={contribution.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-repo"
                        >
                            <FaGithub />
                            <span>{contribution.repo}</span>
                        </a>

                        <p className="card-description">{contribution.description}</p>

                        <div className="tech-stack">
                            {contribution.tech.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>

                        <div className="card-footer">
                            <span className="card-date">{contribution.date}</span>
                            <a
                                href={contribution.prUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-pr"
                            >
                                View PR <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contributions;
