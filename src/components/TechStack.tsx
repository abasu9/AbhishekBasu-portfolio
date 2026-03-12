const techCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java"],
  },
  {
    title: "Machine Learning & NLP",
    skills: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "scikit-learn"],
  },
  {
    title: "LLM Systems & Engineering",
    skills: ["RAG Pipelines", "Prompt Chaining", "Self-Consistency", "Speculative Decoding"],
  },
  {
    title: "Inference & Optimization",
    skills: ["TensorRT", "CUDA", "Batching", "Caching"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS (EC2, Inferentia, S3)", "Docker", "CI/CD"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>Tech <span>Stack</span></h2>
      <div className="tech-grid">
        {techCategories.map((category, index) => (
          <div className="tech-category" key={index}>
            <h3>{category.title}</h3>
            <div className="tech-skills">
              {category.skills.map((skill, i) => (
                <span className="tech-skill" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
