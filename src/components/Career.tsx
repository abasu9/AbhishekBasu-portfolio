import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Assistant</h4>
                <h5>VIT</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed an ML-based DDoS detection model achieving 85% accuracy on 10K+ network traces while reducing preprocessing time by 40%. Constructed reproducible experiments and benchmarked model performance under simulated network load using Python and shell scripts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist Intern</h4>
                <h5>Extech Digital</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Released 10+ ML models to production with zero rollback, overseeing deployment sequencing and validation workflows. Led analytical modeling that drove a ~30% revenue uplift and built automated dashboards to monitor model drift and execution behavior.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer I</h4>
                <h5>BYJU'S</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Deployed backend compute workflows serving 1M+ daily users, reducing system latency by 35% and improving throughput by 22%. Resolved 40+ runtime-critical defects, enhancing memory stability and failure recovery across distributed environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Carpl.ai</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built and deployed multimodal medical-image retrieval workflows using vision-language models, improving diagnostic query relevance by ~28%. Designed evaluation pipelines for LLM-based reasoning and optimized inference latency for production-grade models, achieving a 35% speedup.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Research Assistant</h4>
                <h5>University of Illinois Chicago</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Conducting thesis research on multimodal RAG and text summarization to improve factual consistency and grounding in domain-specific NLP. Built LLM inference pipelines using PyTorch and TensorRT to improve latency by ~30%, and implemented distributed inference workflows on AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
