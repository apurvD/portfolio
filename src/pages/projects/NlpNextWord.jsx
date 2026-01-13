import React from 'react'

export default function NlpNextWord() {
  return (
    <main className="pt-20">
      <section className="section-container">
        <div className="card">
          <h1 className="text-2xl font-bold">NLP Next-Word Prediction</h1>
          <p className="text-gray-700 mt-2">Designed and deployed GRU-based models to predict the next word in a sentence using n-gram preprocessing and Keras/TensorFlow.</p>
          <img src="/images/nlp_home.png" alt="NLP" className="project-image my-4" />

          <h2 className="text-xl font-semibold mt-4">Workflow Overview</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Data collection & preprocessing to create datasets for different n-gram levels.</li>
            <li>Modeling: GRU-based RNNs trained for each n-gram level.</li>
            <li>Evaluation: Selected the best model based on accuracy and loss.</li>
          </ul>

          <div className="my-4">
            <video controls className="w-full max-w-3xl">
              <source src="/projects/Deployment_NWP.mp4" type="video/mp4" />
            </video>
            <h4 className="mt-2">Project Demo</h4>
          </div>

          <div className="grid gap-4">
            <img src="/images/nlp_EDA1.png" alt="EDA 1" className="project-image" />
            <img src="/images/nlp_EDA2.png" alt="EDA 2" className="project-image" />
            <img src="/images/nlp_dataset.png" alt="Dataset" className="project-image" />
          </div>

          <h3 className="mt-6">Links</h3>
          <ul>
            <li><a href="https://github.com/apurvD/Team-VisPy-Next-Word-Prediction" target="_blank" rel="noreferrer" className="text-vt-maroon underline">View Source on GitHub</a></li>
          </ul>
        </div>
      </section>
    </main>
  )
}
