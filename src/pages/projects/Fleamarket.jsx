import React from 'react'

export default function Fleamarket() {
  return (
    <main className="pt-20">
      <section className="section-container">
        <div className="card">
          <h1 className="text-2xl font-bold">Digital Flea Market – Database-Driven Marketplace Platform</h1>
          <p className="text-gray-700 mt-2">A full-stack web application to digitize vendor operations, booth scheduling, and product discovery at flea markets.</p>
          <img src="/src/images/fleamarket_home.png" alt="Flea Market App" className="project-image my-4" />

          <h2 className="text-xl font-semibold mt-4">Overview</h2>
          <p className="text-gray-700">Digital Flea Market is a database-driven marketplace platform designed to bring traditional flea markets online. The application enables vendors to manage inventory, schedule booth slots, and showcase products, while giving customers a way to browse merchandise and plan their visits more effectively.</p>

          <h2 className="text-xl font-semibold mt-4">Key Features</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><strong>Vendor dashboard:</strong> Manage inventory, booth schedules, and product listings from a single interface.</li>
            <li><strong>Product CRUD operations:</strong> Create, read, update, and delete products with detailed views and categorization.</li>
            <li><strong>Booth scheduling:</strong> Assign and manage booth slots for vendors across different dates or events.</li>
            <li><strong>Analytics:</strong> Aggregate vendor performance metrics such as product counts, inventory status, and activity.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Technologies & Architecture</h2>
          <p className="text-gray-700">React, Node.js, Express, MySQL, Docker, Tailwind CSS</p>

          <div className="my-4">
            <video controls className="w-full max-w-3xl">
              <source src="/src/projects/fleamarket_demo.mp4" type="video/mp4" />
            </video>
            <h4 className="mt-2">Project Demo</h4>
          </div>

          <div className="grid gap-4">
            <img src="/src/images/fleamarket_dashboard.png" alt="Vendor Dashboard" className="project-image" />
            <img src="/src/images/fleamarket_booths.png" alt="Booth Scheduling" className="project-image" />
            <img src="/src/images/product_details.png" alt="Product Details" className="project-image" />
            <img src="/src/images/vendor_details.png" alt="Vendor Details" className="project-image" />
          </div>

          <h3 className="mt-6">Links</h3>
          <ul>
            <li><a href="https://github.com/apurvD/fleamarket-app" target="_blank" rel="noreferrer" className="text-vt-maroon underline">View Source on GitHub</a></li>
            <li><a href="https://fleamarket-app-olive.vercel.app/" target="_blank" rel="noreferrer" className="text-vt-maroon underline">Frontend Demo</a></li>
          </ul>
        </div>
      </section>
    </main>
  )
}
