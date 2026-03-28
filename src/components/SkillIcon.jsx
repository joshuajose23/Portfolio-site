const iconConfigs = {
  Java: { type: "java", accent: "#b45309", bg: "#fff3dd" },
  Python: { type: "python", accent: "#2563eb", bg: "#eef4ff" },
  "C++": { type: "cpp", accent: "#00599c", bg: "#edf6ff" },
  SQL: { type: "database", accent: "#1d4ed8", bg: "#eef2ff", label: "SQL", size: 10 },
  JavaScript: { type: "javascript", accent: "#facc15", bg: "#fff7d6" },
  React: { type: "react", accent: "#0f766e", bg: "#e7fbf8" },
  Git: { type: "git", accent: "#e84d31", bg: "#fff0eb" },
  GitHub: { type: "github", accent: "#000000", bg: "#ffffff" },
  Jenkins: { type: "jenkins", accent: "#1f2937", bg: "#fffaf4" },
  Docker: { type: "docker", accent: "#2563eb", bg: "#eff6ff" },
  Linux: { type: "linux", accent: "#111827", bg: "#f5f7fb" },
  Kubernetes: { type: "kubernetes", accent: "#2563eb", bg: "#eef4ff" },
  Splunk: { type: "splunk", accent: "#111827", bg: "#e8fbf5" },
  Insomnia: { type: "insomnia", accent: "#5b21b6", bg: "#f2edff" },
  SQLite: { type: "sqlite", accent: "#2563eb", bg: "#eff6ff" },
  MySQL: { type: "mysql", accent: "#0f4c81", bg: "#ecf7ff" },
  PostgreSQL: { type: "postgresql", accent: "#336791", bg: "#ffffff" },
  "SQL Server": { type: "sqlserver", accent: "#b91c1c", bg: "#fff1f2" },
  MongoDB: { type: "mongo", accent: "#15803d", bg: "#eefbf2" },
  Oracle: { type: "oracle", accent: "#b91c1c", bg: "#fff1f1" },
  AWS: { type: "aws-brand", accent: "#f59e0b", bg: "#fff3dd" }
};

function LetterGlyph({ accent, label, size = 14 }) {
  return (
    <text
      fill={accent}
      fontFamily="Arial, sans-serif"
      fontSize={size}
      fontWeight="700"
      textAnchor="middle"
      x="24"
      y="28.5"
    >
      {label}
    </text>
  );
}

function DatabaseGlyph({ accent, label, size = 10 }) {
  return (
    <>
      <ellipse
        cx="24"
        cy="15"
        fill="none"
        rx="11"
        ry="4.5"
        stroke={accent}
        strokeWidth="2"
      />
      <path
        d="M13 15v10.8c0 2.5 4.9 4.7 11 4.7s11-2.2 11-4.7V15"
        fill="none"
        stroke={accent}
        strokeWidth="2"
      />
      <path
        d="M13 20c0 2.6 4.9 4.7 11 4.7s11-2.1 11-4.7"
        fill="none"
        stroke={accent}
        strokeWidth="2"
      />
      <text
        fill={accent}
        fontFamily="Arial, sans-serif"
        fontSize={size}
        fontWeight="700"
        textAnchor="middle"
        x="24"
        y="42"
      >
        {label}
      </text>
    </>
  );
}

function CppGlyph({ accent }) {
  return (
    <>
      <path
        d="M24 10 34 15.8v12.4L24 34 14 28.2V15.8Z"
        fill={accent}
      />
      <path
        d="M24 10 34 15.8 24 21.8 14 15.8Z"
        fill="white"
        opacity="0.14"
      />
      <text
        fill="white"
        fontFamily="Arial, sans-serif"
        fontSize="10.5"
        fontWeight="700"
        textAnchor="middle"
        x="24"
        y="28.2"
      >
        C++
      </text>
    </>
  );
}

function JavaScriptGlyph({ accent }) {
  return (
    <>
      <rect
        fill={accent}
        height="26"
        rx="4"
        width="26"
        x="11"
        y="11"
      />
      <text
        fill="#111827"
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fontWeight="800"
        textAnchor="middle"
        x="24"
        y="28.8"
      >
        JS
      </text>
    </>
  );
}

function ReactGlyph({ accent }) {
  return (
    <>
      <ellipse
        cx="24"
        cy="24"
        fill="none"
        rx="13"
        ry="5.8"
        stroke={accent}
        strokeWidth="2"
      />
      <ellipse
        cx="24"
        cy="24"
        fill="none"
        rx="13"
        ry="5.8"
        stroke={accent}
        strokeWidth="2"
        transform="rotate(60 24 24)"
      />
      <ellipse
        cx="24"
        cy="24"
        fill="none"
        rx="13"
        ry="5.8"
        stroke={accent}
        strokeWidth="2"
        transform="rotate(120 24 24)"
      />
      <circle
        cx="24"
        cy="24"
        fill={accent}
        r="3.2"
      />
    </>
  );
}

function GitGlyph({ accent }) {
  return (
    <>
      <path
        d="M17 13v22M17 14h13M17 25h11"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <circle
        cx="17"
        cy="13"
        fill={accent}
        r="3"
      />
      <circle
        cx="30"
        cy="14"
        fill={accent}
        r="3"
      />
      <circle
        cx="28"
        cy="25"
        fill={accent}
        r="3"
      />
      <circle
        cx="17"
        cy="35"
        fill={accent}
        r="3"
      />
    </>
  );
}

function GitHubGlyph({ accent }) {
  return (
    <>
      <path
        d="M24 9.5c8 0 14.5 6.5 14.5 14.5S32 38.5 24 38.5 9.5 32 9.5 24 16 9.5 24 9.5Z"
        fill={accent}
      />
      <path
        d="M18.4 31.8c-.1-1.6-.1-2.7-.1-3.3-2.2.5-3.6-.2-4.2-2.1-.4-1-.9-1.7-1.5-2.1-.4-.3-.5-.5-.5-.7 1.6-.2 2.9.5 3.9 2.2.8 1.3 2 1.8 3.6 1.4.2-.8.6-1.5 1.2-2-3.8-.4-5.7-2.3-5.7-5.7 0-1.4.5-2.6 1.5-3.7-.2-.5-.3-1.1-.3-1.8 0-.7.1-1.5.4-2.3 1.4 0 2.9.6 4.5 1.8 1-.3 2.1-.4 3.2-.4 1.1 0 2.2.1 3.2.4 1.6-1.2 3.1-1.8 4.5-1.8.3.8.4 1.6.4 2.3 0 .7-.1 1.3-.3 1.8 1 1.1 1.5 2.3 1.5 3.7 0 3.4-1.9 5.3-5.7 5.7.8.6 1.2 1.7 1.2 3.1v4.7c-1.6.9-3.4 1.4-5.3 1.4-2 0-3.8-.4-5.5-1.3z"
        fill="white"
      />
      <path
        d="M19.7 16.9c1.3-.7 2.7-1.1 4.3-1.1 1.6 0 3 .4 4.3 1.1"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="1.2"
      />
    </>
  );
}

function JenkinsGlyph({ accent }) {
  return (
    <>
      <circle
        cx="24"
        cy="15.8"
        fill="#f2c9ae"
        r="5.6"
      />
      <path
        d="M18.6 15.5c1.2-2.3 3.1-3.5 5.4-3.5 2.3 0 4.2 1.2 5.4 3.5"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path
        d="M20 14.3c1-.8 2.3-1.2 4-1.2s3 .4 4 1.2"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M17.3 24.2c1.6 4.7 3.8 7.1 6.7 7.1s5.1-2.4 6.7-7.1l3.7 2c-2.1 6.1-5.6 9.3-10.4 9.3s-8.3-3.2-10.4-9.3z"
        fill="#334155"
      />
      <path
        d="M19.3 22.8h9.4l-.9 5.7h-7.6z"
        fill="white"
      />
      <path
        d="M23.9 22.7l-2.1 2.2 2.1 2.1 2.1-2.1z"
        fill="#c81e1e"
      />
      <path
        d="M18.4 23.3c1.8-1.1 3.7-1.7 5.6-1.7 1.9 0 3.8.6 5.6 1.7"
        fill="none"
        stroke="#64748b"
        strokeLinecap="round"
        strokeWidth="1.3"
      />
      <path
        d="M20.9 15.9c.6.5 1.4.8 3.1.8s2.5-.3 3.1-.8"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="1.2"
      />
      <circle
        cx="22"
        cy="16.2"
        fill={accent}
        r="0.55"
      />
      <circle
        cx="26"
        cy="16.2"
        fill={accent}
        r="0.55"
      />
      <path
        d="M22.4 18.4c.5.3 1 .4 1.6.4s1.1-.1 1.6-.4"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="1.15"
      />
    </>
  );
}

function LinuxGlyph({ accent }) {
  const beak = "#f59e0b";

  return (
    <>
      <ellipse
        cx="24"
        cy="18.4"
        fill={accent}
        rx="8.2"
        ry="7.8"
      />
      <ellipse
        cx="24"
        cy="21.2"
        fill="white"
        rx="5.1"
        ry="5"
      />
      <ellipse
        cx="24"
        cy="31.6"
        fill={accent}
        rx="7.2"
        ry="6.7"
      />
      <ellipse
        cx="24"
        cy="30.2"
        fill="white"
        rx="4.5"
        ry="4.1"
      />
      <ellipse
        cx="21.1"
        cy="17.2"
        fill="white"
        rx="1.15"
        ry="1.45"
      />
      <ellipse
        cx="26.9"
        cy="17.2"
        fill="white"
        rx="1.15"
        ry="1.45"
      />
      <circle
        cx="21.1"
        cy="17.5"
        fill={accent}
        r="0.5"
      />
      <circle
        cx="26.9"
        cy="17.5"
        fill={accent}
        r="0.5"
      />
      <path
        d="M24 19.4l-2.15 1.65h4.3z"
        fill={beak}
      />
      <path
        d="M18.9 35.2c.8 1 1.9 1.6 3.1 1.6M29.1 35.2c-.8 1-1.9 1.6-3.1 1.6"
        fill="none"
        stroke={beak}
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </>
  );
}

function DockerGlyph({ accent }) {
  return (
    <>
      {[
        [12, 16],
        [18, 16],
        [24, 16],
        [30, 16],
        [18, 10],
        [24, 10]
      ].map(([x, y]) => (
        <rect
          fill={accent}
          height="5"
          key={`${x}-${y}`}
          rx="1.2"
          width="5"
          x={x}
          y={y}
        />
      ))}
      <path
        d="M10 25.5c1.9 3.8 5 5.7 9.2 5.7h7.2c4 0 7.1-1.6 9.6-4.8-2 .7-4 .8-6.2.3-1.8 1.4-4 2.1-6.6 2.1h-4.2c-3.2 0-6-1.1-9-3.3z"
        fill={accent}
      />
    </>
  );
}

function KubernetesGlyph({ accent }) {
  return (
    <>
      <circle
        cx="24"
        cy="24"
        fill="none"
        r="12"
        stroke={accent}
        strokeWidth="2"
      />
      <circle
        cx="24"
        cy="24"
        fill={accent}
        r="4"
      />
      {["M24 10v8", "M24 30v8", "M10 24h8", "M30 24h8", "M15 15l5.8 5.8", "M27.2 27.2 33 33", "M15 33l5.8-5.8", "M27.2 20.8 33 15"].map((path) => (
        <path
          d={path}
          fill="none"
          key={path}
          stroke={accent}
          strokeLinecap="round"
          strokeWidth="2"
        />
      ))}
    </>
  );
}

function InsomniaGlyph({ accent }) {
  return (
    <>
      <circle
        cx="24"
        cy="24"
        fill={accent}
        r="11"
      />
      <circle
        cx="28.5"
        cy="20.5"
        fill="white"
        r="8.5"
      />
    </>
  );
}

function SplunkGlyph({ accent }) {
  return (
    <>
      <path
        d="M13.2 14.2 20.4 24l-7.2 9.8"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.2"
      />
      <circle
        cx="27.6"
        cy="24"
        fill="#84cc16"
        r="2.6"
      />
      <path
        d="M31.5 24h4.8"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="3"
      />
    </>
  );
}

function SqliteGlyph({ accent }) {
  return (
    <>
      <path
        d="M15.2 31.2c8.6-3.3 14.1-10.7 16.4-20.2 5.3 7.4 1.7 19.2-7.2 24.1-3.7 2-7.2.9-9.2-3.9z"
        fill={accent}
      />
      <path
        d="M19 30.1c5.2-4.9 8.8-10.7 10.9-17.3M20.3 26.1c2.2-.9 4.6-1.3 7.4-1.2M18.8 22.2c2.5-1 5.4-1.4 8.8-1.3"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </>
  );
}

function MySqlGlyph({ accent }) {
  return (
    <>
      <path
        d="M13 28.2c4-7.1 11.6-11.6 20.5-10.4-2.5 1-4.5 2.4-6.1 4.2 2 .2 4 .9 6 2-3.8-.7-6.8.1-8.9 2.2-1.9 1.9-4.2 3-7.1 3-1.5 0-3-.3-4.4-1z"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M24.8 17.5c1.5-1.2 3.5-1.9 5.9-2.2"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </>
  );
}

function PostgreSqlGlyph({ accent }) {
  return (
    <g transform="translate(2 2.5)">
      <path
        d="M14.7 7.2c-4.7 0-8 3.9-8 9.5 0 7 1.6 12.7 4.9 16.8 1.8 2.3 4.2 3.5 7 3.5 2.2 0 3.9-.7 5.1-2.1-2.4-1-4-3.2-4-6.3 0-1.8.5-3.3 1.4-4.7-1.1-1.8-1.6-3.8-1.6-6 0-4.1 1.8-7.7 4.9-10-2.2-.5-5.2-.7-9.7-.7z"
        fill={accent}
        stroke="white"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M30.6 8.3c3.9.6 6.6 2.2 8.2 4.7 1.6 2.5 1.9 5.4 1.1 8.7-.7 2.9-2.1 5.5-4 7.8-2 2.2-4.5 4.2-7.7 5.9-.7-1.4-1-3-.8-4.8.2-2 .9-3.8 1.9-5.3 1-1.6 2.5-3 4.3-4.2-1.2-.5-2.4-.8-3.5-.9"
        fill={accent}
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M23.5 6.7c-5.2 0-8.9 4-8.9 9.8 0 1.9.4 3.7 1.3 5.3-1 1.3-1.5 2.9-1.5 4.8 0 4.4 2.8 7.6 6.8 7.6 1.1 0 2.1-.2 3-.6v4.3c0 2.3 1.5 3.9 3.8 3.9 2.3 0 3.8-1.6 3.8-3.9v-6.6c1.2-.8 1.9-2.1 1.9-3.8 0-2-.9-3.7-2.5-5 1.2-1.6 1.8-3.4 1.8-5.5 0-5.6-4-10.3-9.5-10.3z"
        fill={accent}
        stroke="white"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M18.4 29.7c2.9 0 5-.9 6.2-2.8 1.1-1.8 1.7-4.3 1.7-7.4 0-2.4-.7-4.5-2.2-6"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.55"
      />
      <path
        d="M18.6 33.5c-.8 1.2-2.1 1.9-3.9 2.2M29.8 18.6c1.5-1 3.2-1.4 5.1-1.4M30 30.5c1.6 0 3 .3 4.4 1"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.45"
      />
      <ellipse
        cx="21.4"
        cy="18.9"
        fill="white"
        rx="1.45"
        ry="1.02"
        transform="rotate(16 21.4 18.9)"
      />
      <ellipse
        cx="31"
        cy="18.7"
        fill="white"
        rx="1.45"
        ry="1.02"
        transform="rotate(-15 31 18.7)"
      />
      <path
        d="M28.4 32.9c1 .5 2.1.7 3.3.7 1.1 0 2.1-.2 3.1-.6"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </g>
  );
}

function SqlServerGlyph({ accent }) {
  return (
    <>
      <path
        d="M16 14.6c3 1.5 6.1 2.3 9 2.3 2.8 0 5.8-.8 8.6-2.3v4.2c-2.8 1.5-5.8 2.3-8.6 2.3-2.9 0-6-.8-9-2.3z"
        fill={accent}
        opacity="0.96"
      />
      <path
        d="M16 21.5c3 1.5 6.1 2.3 9 2.3 2.8 0 5.8-.8 8.6-2.3v4.2c-2.8 1.5-5.8 2.3-8.6 2.3-2.9 0-6-.8-9-2.3z"
        fill={accent}
        opacity="0.8"
      />
      <path
        d="M16 28.4c3 1.5 6.1 2.3 9 2.3 2.8 0 5.8-.8 8.6-2.3v4c-2.8 1.6-5.8 2.4-8.6 2.4-2.9 0-6-.8-9-2.4z"
        fill={accent}
        opacity="0.62"
      />
    </>
  );
}

function OracleGlyph({ accent }) {
  return (
    <path
      d="M12.8 19.5c0-3.1 2.5-5.6 5.6-5.6h11.2c3.1 0 5.6 2.5 5.6 5.6v9c0 3.1-2.5 5.6-5.6 5.6H18.4c-3.1 0-5.6-2.5-5.6-5.6z"
      fill="none"
      stroke={accent}
      strokeWidth="3"
    />
  );
}

function MongoGlyph({ accent }) {
  return (
    <>
      <path
        d="M24 9c4.5 5.2 6.6 10 6.6 14.2 0 6.3-3.1 11.3-6.6 15.7-3.5-4.4-6.6-9.4-6.6-15.7 0-4.2 2.1-9 6.6-14.2z"
        fill={accent}
      />
      <path
        d="M24 12.5v20.7"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </>
  );
}

function JavaGlyph({ accent }) {
  return (
    <>
      <path
        d="M19 30h10c2.6 0 4.3-1 4.3-2.6S31.6 25 29 25H19"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M20 33.5h9.8"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M22 14c-2 2.1 2 2.6.4 4.8M27 13c-2.2 2.3 2.1 2.9.1 5.4M24.5 10c-1.7 1.8 1.5 2.2.2 4"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </>
  );
}

function PythonGlyph({ accent }) {
  const gold = "#d97706";

  return (
    <>
      <path
        d="M16 14.5c0-2 1.6-3.5 3.6-3.5h5.4c2 0 3.6 1.5 3.6 3.5v4.3c0 2-1.6 3.5-3.6 3.5H18.6c-1.4 0-2.6 1.1-2.6 2.5v3.2"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
      <path
        d="M32 33.5c0 2-1.6 3.5-3.6 3.5H23c-2 0-3.6-1.5-3.6-3.5v-4.3c0-2 1.6-3.5 3.6-3.5h6.4c1.4 0 2.6-1.1 2.6-2.5V20"
        fill="none"
        stroke={gold}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
      <circle
        cx="23"
        cy="15.6"
        fill={accent}
        r="1.4"
      />
      <circle
        cx="25"
        cy="32.4"
        fill={gold}
        r="1.4"
      />
    </>
  );
}

function AwsBrandGlyph({ accent }) {
  return (
    <>
      <text
        fill="#111827"
        fontFamily="Arial, sans-serif"
        fontSize="10.5"
        fontWeight="700"
        textAnchor="middle"
        x="24"
        y="21.5"
      >
        aws
      </text>
      <path
        d="M15.5 28.6c2.7 1.8 5.9 2.7 9.2 2.7 3 0 5.8-.6 8.5-1.8"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M29.1 29.3h4.4l-2.1 2.8"
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </>
  );
}

function renderGlyph(config) {
  switch (config.type) {
    case "cpp":
      return <CppGlyph accent={config.accent} />;
    case "database":
      return (
        <DatabaseGlyph
          accent={config.accent}
          label={config.label}
          size={config.size}
        />
      );
    case "javascript":
      return <JavaScriptGlyph accent={config.accent} />;
    case "react":
      return <ReactGlyph accent={config.accent} />;
    case "git":
      return <GitGlyph accent={config.accent} />;
    case "github":
      return <GitHubGlyph accent={config.accent} />;
    case "jenkins":
      return <JenkinsGlyph accent={config.accent} />;
    case "linux":
      return <LinuxGlyph accent={config.accent} />;
    case "docker":
      return <DockerGlyph accent={config.accent} />;
    case "kubernetes":
      return <KubernetesGlyph accent={config.accent} />;
    case "splunk":
      return <SplunkGlyph accent={config.accent} />;
    case "insomnia":
      return <InsomniaGlyph accent={config.accent} />;
    case "sqlite":
      return <SqliteGlyph accent={config.accent} />;
    case "mysql":
      return <MySqlGlyph accent={config.accent} />;
    case "postgresql":
      return <PostgreSqlGlyph accent={config.accent} />;
    case "sqlserver":
      return <SqlServerGlyph accent={config.accent} />;
    case "oracle":
      return <OracleGlyph accent={config.accent} />;
    case "mongo":
      return <MongoGlyph accent={config.accent} />;
    case "java":
      return <JavaGlyph accent={config.accent} />;
    case "python":
      return <PythonGlyph accent={config.accent} />;
    case "aws-brand":
      return <AwsBrandGlyph accent={config.accent} />;
    case "letter":
    default:
      return (
        <LetterGlyph
          accent={config.accent}
          label={config.label}
          size={config.size}
        />
      );
  }
}

export default function SkillIcon({ name }) {
  const fallbackLabel = name.slice(0, 2).toUpperCase();
  const config = iconConfigs[name] ?? {
    type: "letter",
    accent: "#111827",
    bg: "#f3f4f6",
    label: fallbackLabel,
    size: 12
  };

  return (
    <span
      aria-hidden="true"
      className="skill-icon"
      style={{
        "--skill-icon-accent": config.accent,
        "--skill-icon-bg": config.bg
      }}
    >
      <svg
        fill="none"
        viewBox="0 0 48 48"
      >
        <rect
          fill="var(--skill-icon-bg)"
          height="46"
          rx="14"
          width="46"
          x="1"
          y="1"
        />
        {renderGlyph(config)}
      </svg>
    </span>
  );
}
