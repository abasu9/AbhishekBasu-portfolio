import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Friday",
    category: "Privacy-First AI Meeting Assistant",
    tools: "Rust, Tauri, Next.js, FastAPI, Whisper, SQLite",
    image: "/images/friday.png",
  },
  {
    title: "ClutchCast",
    category: "AI-Powered Sports Analytics & Commentary Engine",
    tools: "React, TypeScript, Ollama (Llama 3), Web Speech API, Vite, NCAA API",
    image: "/images/placeholder.webp",
  },
  {
    title: "CHQ-Summ",
    category: "A Dataset and Benchmark for Consumer Healthcare Question Summarization",
    tools: "LLaMA-3.1-8B, Mistral-7B, Gemma-7B, DeepSeek-Coder, T5, BART, ROUGE, BERTScore",
    image: "/images/placeholder.webp",
  },
  {
    title: "Ethical RAG for Medical Retrieval",
    category: "Reducing Hallucinations in Clinical Generation",
    tools: "Python, Hugging Face, ChromaDB, BM25, Dense Retrieval, Confidence Refusal",
    image: "/images/placeholder.webp",
  },
  {
    title: "Speculative Decoding for LLM Optimization",
    category: "Accelerating Inference in Iterative Reasoning",
    tools: "PyTorch, CUDA, TensorRT, LLaMA-3.1, Parallel Forward Prediction",
    image: "/images/placeholder.webp",
  },
  {
    title: "FotoFind",
    category: "AI-Driven Multimodal Image Retrieval Engine",
    tools: "TensorFlow, YOLO, ViT-GPT2, EasyOCR, Flask, MySQL",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-outer">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-wrapper">
            {/* Slides */}
            <div className="carousel-track-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {projects.map((project, index) => (
                  <div className="carousel-slide" key={index}>
                    <div className="carousel-content">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="carousel-details">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">
                            {project.category}
                          </p>
                          <div className="carousel-tools">
                            <span className="tools-label">Tools & Features</span>
                            <p>{project.tools}</p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-image-wrapper">
                        <WorkImage image={project.image} alt={project.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
