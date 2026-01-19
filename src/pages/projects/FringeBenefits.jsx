import React from 'react'

export default function FringeBenefits() {
  return (
    <main>
      <section className="section-container">
        <div className="card">
          <h1 className="text-2xl font-bold">Fringe Benefits Application</h1>
          <p className="text-gray-700 mt-2">A full-stack web-based application that digitizes the traditional fringe benefits management process for employees and departments.</p>
          <img src="/images/fringe_home.png" alt="Fringe Benefits" className="project-image my-4" />

          <h2 className="text-xl font-semibold mt-4">Overview</h2>
          <p className="text-gray-700">The Fringe Benefits Application provides a user-friendly interface for departments to submit and manage fringe benefit requests, while providing administrative tools for oversight and compliance.</p>

          <h2 className="text-xl font-semibold mt-4">Key Features</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><strong>Home screen:</strong> Departments can submit fringe benefit requests for employees using this page.</li>
            <li><strong>History screen:</strong> View and filter past submissions with status and taxability details.</li>
            <li><strong>Administrative tools:</strong> Payroll and administrators can oversee submissions and ensure compliance.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Technologies</h2>
          <p className="text-gray-700">C#, ASP.NET, SQL Server, Azure WebJobs, JavaScript</p>

          <div className="my-4">
            <img src="/images/fringe_home.png" alt="Fringe Home" className="project-image" />
          </div>

          <div className="my-4">
            <video controls className="w-full max-w-3xl">
              <source src="/projects/Deployment_NWP.mp4" type="video/mp4" />
            </video>
            <h4 className="mt-2">Project Demo</h4>
          </div>
        </div>
      </section>
    </main>
  )
}
