import React from 'react'

export default function NlpNextWord() {
  return (
    <main>
      <section className="section-container">
        <h1 className="text-2xl font-bold">Utilizing Machine Learning Techniques to Predict Subsequent Words in Sentences.</h1>
        <p>Ever wondered how predictive text works? The main aim of this project is to predict the subsequent word using the n-gram language model.</p>
        <p className="text-gray-700 mt-2">Designed and deployed GRU-based models to predict the next word in a sentence using n-gram preprocessing and Keras/TensorFlow.</p>
        <div className="web-app-images">
          <img src="/images/nlp_home.png" alt="NLP App" />
        </div>
        <h2 className="text-xl font-semibold mt-4">Project Objective</h2>
        <p>
          Designed and deployed a deep learning model capable of predicting the next word in a sentence with
          high accuracy and low loss. The goal was to generate coherent, meaningful text and ensure strong
          generalization to unseen data. A user-friendly interface was also built to make predictions
          accessible and interactive.
        </p>
      </section>

      <section className="section-container">
        <h2 className="text-xl font-semibold mt-4">Workflow Overview</h2>
        <p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Data Collection & Preprocessing: Cleaned and structured raw text data, then created five datasets corresponding to different n-gram levels.</li>
            <li>Exploratory Data Analysis (EDA): Analyzed word distributions, sequence patterns, and token frequency to inform model design.</li>
            <li>Modeling: Trained five GRU-based RNN models — one for each n-gram level — using TensorFlow/Keras.</li>
            <li>Evaluation: Compared models based on accuracy and log loss. The best model achieved 99.61% accuracy and 0.0094 log loss.</li>
            <li>Deployment: Packaged the final model with a simple UI for real-time predictions.</li>
          </ul>
        </p>
      </section>

      <section className="section-container">
        <h2 className="text-xl font-semibold mt-4">Dataset Description</h2>
                <div className="web-app-images">
          <img src="/images/nlp_dataset.png" alt="Dataset" />
        </div>
        <ul>
          <li>For this project, we obtained our dataset from Kaggle.</li>
          <li>We used the Medium Articles Dataset, which is available at the following link: <a href="https://www.kaggle.com/datasets/dorianlazar/medium-articles-dataset" target="_blank" rel="noopener noreferrer">https://www.kaggle.com/datasets/dorianlazar/medium-articles-dataset</a>.</li>
        </ul>
      </section>

      <section className="section-container">
        <h2 className="text-xl font-semibold mt-4">Modelling Highlights</h2>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          <li>Five dataset text files were generated using n-gram language models, which ranged from unigram to five-gram.</li>
          <li>These datasets were then employed to train five distinct GRU-based RNN models, with each model containing five hidden layers.</li>
        </ul>
        <p>The 5 layers were as follows</p>
        <ol className="list-decimal list-inside ml-4 text-gray-700">
          <li>Embedding Layer: Converts input words into dense vectors of fixed size, capturing semantic relationships.</li>
          <li>Two GRU Layers: Five stacked Gated Recurrent Unit layers process the sequential data, capturing temporal dependencies and patterns in the text.</li>
          <li>Dense Output Layers: A fully connected layer with a softmax activation function to predict the next word from the vocabulary.</li>
        </ol>
      </section>

      <section className="section-container">
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
          <h2 className="mt-2">Project Demo</h2>
        </div>
        <p>Few illustrations of the EDA process:</p>
        <div className="web-app-images">
          <img src="/images/nlp_EDA1.png" alt="EDA 1" />
        </div>
        <div className="web-app-images">
          <img src="/images/nlp_EDA2.png" alt="EDA 2" />
        </div>


        <h3 className="mt-6">Links</h3>
        <ul>
          <li><a href="https://github.com/apurvD/Team-VisPy-Next-Word-Prediction" target="_blank" rel="noreferrer" className="text-vt-maroon underline">View Source on GitHub</a></li>
        </ul>
      </section>
    </main>
  )
}