export const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joshuakadakampallil/"
  },
  {
    label: "GitHub",
    href: "https://github.com/joshuajose23"
  }
];

export const heroLead = `Hi, I'm Joshua Kadakampallil, a Computer Science graduate from UT Dallas who enjoys building software that feels smooth, reliable, and easy to use. I've worked across frontend, backend, and support roles, which helps me understand both how systems are built and how they behave in production.

Starting April 2026, I'll be joining JPMorgan Chase as a Product Support Analyst, where I'm excited to keep learning and solving real-world problems at scale.`;

export const heroHighlights = [
  "Incoming Product Support Analyst at JPMorgan Chase, starting April 2026",
  "Hands-on experience across React, Node.js, Java, Python, SQL, and support operations",
  "A product and customer perspective shaped by Apple, Fidelity, and Tyler Technologies"
];

export const experienceStats = [
  {
    value: 5,
    label: "organizations across engineering, retail, education, and product support"
  },
  {
    value: 2,
    label: "internship rotations completed at Fidelity Investments"
  },
  {
    value: 1,
    label: "B.S. in Computer Science completed at UT Dallas"
  }
];

export const experience = [
  {
    company: "JPMorgan Chase",
    role: "Product Support Analyst",
    period: "Starting Apr 2026",
    timelineLabel: "2026",
    summary:
      "Will be joining JPMorgan Chase as a Product Support Analyst, supporting product reliability, issue resolution, and cross-team operational workflows.",
    type: "Incoming",
    logo: "/images/jpmorgan.png",
    highlights: [
      "Preparing to support live product health, issue triage, and operational coordination.",
      "Bringing a mix of engineering context and customer-facing communication into the role."
    ]
  },
  {
    company: "Apple",
    role: "Specialist",
    period: "Nov 2024 - Dec 2025",
    timelineLabel: "2024-25",
    summary:
      "Helped customers choose the right technology, delivered hands-on product guidance, and supported a high-quality in-store experience.",
    type: "Retail + Product",
    logo: "/images/apple-logo.png",
    highlights: [
      "Turned product questions into clear recommendations and confident purchase decisions.",
      "Strengthened communication, empathy, and support instincts that now carry into product work."
    ]
  },
  {
    company: "Tyler Technologies",
    role: "Software Engineer Intern",
    period: "Aug 2024 - Dec 2024",
    timelineLabel: "2024",
    summary:
      "Developed a CMS with Java, Spring Boot, and Oracle Database workflows while contributing UI feedback and engineering support in a production team setting.",
    type: "Internship",
    logo: "/images/tyler.png",
    highlights: [
      "Built backend and database workflows for a CMS used in a real engineering environment.",
      "Contributed both implementation work and UI review feedback to improve the final product direction."
    ]
  },
  {
    company: "Fidelity Investments",
    role: "Software Engineer Intern",
    period: "2023 - 2024",
    timelineLabel: "2023-24",
    summary:
      "Completed two Fidelity internship rotations spanning mobile reliability work and full-stack tooling improvements for internal teams.",
    type: "Internship",
    logo: "/images/fidelity.png",
    roles: [
      {
        title: "Full Stack Intern",
        period: "July 2024 - August 2024",
        detail:
          "Built a masking toggle for Splunk logs, executed API validation work, and helped migrate Jenkins-based scripts."
      },
      {
        title: "Mobile Engineer Intern",
        period: "July 2023 - August 2023",
        detail:
          "Improved .NET MAUI exception handling, app stability, and logging behavior to strengthen the mobile product experience."
      }
    ]
  },
  {
    company: "The University of Texas at Dallas",
    role: "Bachelor's Degree in Computer Science",
    period: "Aug 2022 - Dec 2024",
    timelineLabel: "2022-24",
    summary:
      "Completed a B.S. in Computer Science at UT Dallas, building a strong foundation in software engineering, systems, databases, and collaborative project work.",
    type: "Education",
    logo: "/images/utd.png",
    highlights: [
      "Built the academic foundation behind my work in software engineering, backend development, and product-focused problem solving.",
      "Graduated in December 2024 while pairing coursework with internships and hands-on engineering projects."
    ]
  }
];

export const skillGroups = [
  {
    label: "Languages",
    title: "Core languages I build with regularly.",
    description:
      "A mix of application, scripting, frontend, and query languages that support both product work and backend logic.",
    tone: "ink",
    skills: ["Java", "Python", "C++", "SQL", "JavaScript", "React"]
  },
  {
    label: "Tools",
    title: "Workflow and delivery tools that keep work moving.",
    description:
      "Version control, CI/CD, containers, observability, API tooling, and AWS workflows I use while building, testing, and shipping software.",
    tone: "paper",
    skills: ["Git", "GitHub", "Jenkins", "Docker", "Linux", "Kubernetes", "Splunk", "Insomnia", "AWS"]
  },
  {
    label: "Databases",
    title: "Data stores across relational and document systems.",
    description:
      "Experience working with databases for application logic, reporting, persistence, and backend service development.",
    tone: "sun",
    skills: ["SQLite", "MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Oracle"]
  }
];

export const projects = [
  {
    title: "Weather Application",
    type: "Personal build",
    year: "React + Node",
    description:
      "A real-time weather experience focused on clean city search, readable forecasts, and a calm interface instead of overwhelming raw data.",
    highlights: [
      "Built the client in React with reusable components for search, forecast cards, and loading states.",
      "Connected a Node.js backend to the OpenWeatherMap API for dependable request handling and cleaner data flow.",
      "Designed the experience around clarity, speed, and mobile-friendly reading."
    ],
    stack: ["React", "Node.js", "OpenWeatherMap API", "Responsive UI"],
    imageSrc: "/images/projects/weather-application.svg",
    imageAlt: "Weather application interface preview",
    projectHref: "https://github.com/joshuajose23",
    projectLinkLabel: "View on GitHub"
  },
  {
    title: "ResolveHub Ticketing Platform",
    type: "Live product demo",
    year: "Support Ops",
    description:
      "A full-stack support operations workspace that separates the frontend, backend API, and database cleanly while making ticket queues, user workflows, and dashboard visibility easy to navigate.",
    highlights: [
      "Built the frontend with React, Vite, Bootstrap, and custom CSS to create a responsive dashboard, ticket flow, and user management experience.",
      "Used Python, Flask, and SQLite on the backend to keep the API and persistence layer lightweight, clear, and easy to maintain.",
      "Containerized the app with Docker and Docker Compose, then deployed it on AWS EC2 so the live demo could run as a complete full-stack system."
    ],
    stack: [
      "React",
      "Vite",
      "Bootstrap",
      "Custom CSS",
      "Python",
      "Flask",
      "SQLite",
      "Docker",
      "Docker Compose",
      "AWS EC2"
    ],
    imageSrc: "/images/projects/resolvehub-dashboard.png",
    imageAlt: "ResolveHub ticketing platform dashboard screenshot",
    imageFit: "contain",
    imageBackground: "soft",
    projectHref: "https://github.com/joshuajose23",
    projectLinkLabel: "View on GitHub"
  },
  {
    title: "Automatic Lens Distortion Correction",
    type: "AI pipeline",
    year: "Python + TensorFlow",
    description:
      "An AI-assisted computer vision pipeline for detecting and correcting lens distortion in real estate photography at scale.",
    highlights: [
      "Trained EfficientNetB3 on 23,000 paired images to detect distortion and support Brown-Conrady remapping for pixel correction.",
      "Used Python, TensorFlow, Keras, OpenCV, Google Colab, and Google Cloud Storage to build the workflow end to end.",
      "Optimized training on a Google Colab A100 GPU with bfloat16 precision and XLA compilation while collaborating in Git."
    ],
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "EfficientNetB3",
      "OpenCV",
      "Google Colab",
      "Google Cloud Storage"
    ],
    imageSrc: "/images/projects/lens-distortion-preview.svg",
    imageAlt: "Lens distortion correction project preview",
    projectHref: "https://github.com/joshuajose23",
    projectLinkLabel: "View on GitHub"
  },
  {
    title: "Bubble Chart Widget",
    type: "Data visualization",
    year: "Angular + TypeScript",
    description:
      "A reusable finance-oriented visualization widget for exploring yields and maturities across more than 100 corporate bonds.",
    highlights: [
      "Built an Angular and TypeScript widget that renders bond relationships through a bubble-chart interface powered by ApexCharts.",
      "Used the component to surface investment patterns and support data-driven financial insights.",
      "Delivered the work in an Agile environment with Jira, shipping functional pieces across sprint cycles."
    ],
    stack: ["Angular", "TypeScript", "ApexCharts", "HTML", "CSS", "Jira"],
    imageSrc: "/images/projects/bubble-chart-widget.svg",
    imageAlt: "Bubble chart widget preview",
    projectHref: "https://github.com/joshuajose23",
    projectLinkLabel: "View on GitHub"
  }
];

export const contactNotes = [
  {
    title: "Best for",
    copy: "Software engineering roles, product support opportunities, and conversations about building clear user experiences."
  },
  {
    title: "Response style",
    copy: "Clear, thoughtful messages are always appreciated. I usually reply as quickly as I can."
  },
  {
    title: "Resume",
    copy: "A current PDF resume is available directly from the site if you'd like the latest version in one place.",
    href: "/resume/JoshuaK_resume.pdf",
    linkLabel: "Open PDF resume"
  }
];
