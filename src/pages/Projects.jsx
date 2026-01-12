import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <main className="pt-20">
      <section className="section-container">
        <h2 className="text-2xl font-bold text-vt-maroon mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/projects/fleamarket" className="card">
            <h3 className="font-semibold">Digital Flea Market App</h3>
            <img src="/src/images/fleamarket_home.png" alt="Flea Market" className="project-image mt-3" />
            <p className="mt-3 text-sm text-gray-700">A full-stack web application to digitize vendor operations, booth scheduling, and product discovery at flea markets.</p>
          </Link>

          <Link to="/projects/fringe" className="card">
            <h3 className="font-semibold">Fringe Benefits App</h3>
            <img src="/src/images/fringe_home.png" alt="Fringe" className="project-image mt-3" />
            <p className="mt-3 text-sm text-gray-700">A full-stack C# - ASP.NET project to digitize the traditional fringe benefits management process.</p>
          </Link>

          <Link to="/projects/nlp" className="card">
            <h3 className="font-semibold">NLP Next-Word Prediction</h3>
            <img src="/src/images/nlp_home.png" alt="NLP" className="project-image mt-3" />
            <p className="mt-3 text-sm text-gray-700">Predicting the subsequent word using n-gram models and GRU-based RNNs.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
