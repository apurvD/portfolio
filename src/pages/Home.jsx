import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section id="about" className="section-container">
        <div className="card">
          <h2 className="text-2xl font-bold text-vt-maroon mb-4">Welcome to My Portfolio!</h2>
          <div className="md:flex md:gap-8 items-start">
            <div className="flex-1">
              <p className="mb-3">Hello! I'm Apurv Deshpande, a Computer Engineering Master's student at Virginia Tech. This portfolio showcases my skills, experiences, and projects in software development, data engineering, and more. Feel free to explore the different sections and get in touch!</p>

              <p className="mb-3">With a strong foundation in data collection, analysis, and exploration, I have
                extensive
                experience working on projects across various domains. I specialize in leveraging programming
                languages such as Python and MySQL to extract meaningful insights from data, develop machine
                learning models, and present findings that enable informed decision-making for individuals,
                businesses, and organizations. Additionally, I am proficient in cloud computing with AWS,
                utilizing services like EC2, S3, IAM, and RDS, particularly for deploying web-based
                applications.</p>

              <p className="mb-3">Beyond my experience in data engineering and finance, I have a deep interest
                in competitive programming and software development. I am skilled in C++, Java, and Python and
                have experience
                in web technologies, including Frontend Development and PHP. My work also extends to API
                development using both PHP and Python. I have experience in building applications in ASP.NET and
                Entity Framework
                using languages like C#, VB.NET, and Blazor. I enjoy leveraging AI agents in projects, automating repetitive tasks and enhancing productivity.</p>

              <p className="mb-3">Other than programming and technology, I enjoy hiking, and occasionally playing football, basketball, and chess.</p>
            </div>
            <div className="w-full md:w-48 mt-4 md:mt-0">
              <img src="/images/profile.jpg" alt="Apurv" className="rounded-md shadow-md" />
              <br></br>
              <img src="/mimages/apurv-mile.jpg" alt="Apurv" className="rounded-md shadow-md" />
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Education</h3>
          <ul className="space-y-3">
            <li className="border border-gray-100 p-3 rounded-md">
              <div className="flex justify-between font-semibold">Virginia Tech, Blacksburg, VA <span className="text-gray-600">2024 – May 2026</span></div>
              <div className="text-sm">Master of Science in Computer Engineering — GPA: 4.0</div>
              <p><a href="/certificates/apurvsd_Transcipt.pdf" target="_blank"
                rel="noopener">View Transcript</a></p>
            </li>
            <li className="border border-gray-100 p-3 rounded-md">
              <div className="flex justify-between font-semibold">Savitribai Phule Pune University, India <span className="text-gray-600">2020 – 2024</span></div>
              <div className="text-sm">Bachelor of Engineering in Computer Engineering — CGPA: 9.58/10</div>
                <p><a href="/certificates/Apurv BE Passing Certificate.pdf" target="_blank"
                rel="noopener">View Certificate</a></p>
            </li>
          </ul>
        </div>
      </section>

      <section id="experience" className="section-container">
        <h2 className="text-2xl font-bold text-vt-maroon mb-4">What I Have Done</h2>
        <div className="grid gap-6">
          <div className="card md:col-span-2">
            <h3 className="font-semibold mb-2">Professional Experience</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <span className="font-bold">Applications and Software Developer (Summer 2025 Internship)</span>
                <div><a href="https://vpfin.vt.edu/" target="_blank" rel="noreferrer" className="text-vt-maroon underline">VP For Finance - Virginia Tech</a></div>
                <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-700">
                  <li>Collaborated with clients to enhance a fixed‑asset tagging application and
                    improve
                    reporting workflows for the Home Use program using Power BI.</li>
                  <li>Worked across VB.NET/ASP.NET and SQL Server to deliver new features, including
                    batch
                    uploads (Excel VBA), asset image/document handling, and editable request
                    workflows.
                  </li>
                  <li>Built unified Power BI reports by integrating SQL Server and Banner data,
                    merging
                    complex queries to provide clear insights into capital assets used for home use.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-bold">Graduate Assistant</span>
                <div><a href="https://fit.vpfin.vt.edu/" target="_blank" rel="noreferrer" className="text-vt-maroon underline">Finance IT & Innovation - Virginia Tech</a> (Dec 2024 - Present)</div>
                <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-700">
                  <li>In this role, I supported the solutions side of the department, which provides
                    technical services to many units across the university. </li>
                  <li>I contributed to the development and management of ASP.NET applications, Power
                    Apps,
                    Power Automate flows, website administration, Power BI reporting, Excel VBA
                    solutions, and Blazor based accessible web forms.</li>
                  <li>My work also involved extensive use of SQL Server, Oracle, and Algolia, along
                    with
                    assisting departments through application development, issue resolution and
                    project
                    coordination using ServiceNow and Azure DevOps. </li>
                </ul>
              </li>

              <li>
                <span className="font-bold">Quantitative Researcher</span>
                <div><a href="https://www.dataismlab.com/" target="_blank" rel="noreferrer" className="text-vt-maroon underline">Dataism Laboratory for Quantitative Finance (DLQF)</a> (Oct 2024 - May 2025)</div>
                <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-700">
                  <li>In this role, I Conducted dedicated research and worked on the technical side
                    for
                    the
                    projects:
                  </li>
                  <li>Neural Networks for Hypothesis Testing: Designed a weighted TAR-GARCH model to
                    assess
                    normality of distributions and test for normal correlation structures among
                    features.</li>
                  <li>Intraday Momentum Trading: Collaborated with Barrett Capital Management to
                    develop a
                    data-driven enhancement for intraday momentum trading. </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Data Science Intern</span>
                <div><a href="https://hamoye.org/" target="_blank" rel="noreferrer" className="text-vt-maroon underline">Hamoye</a>  (Nov 2022 - Mar 2023)</div>
                <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-700">
                  <li>Contributed to two major data science projects, including stock portfolio
                    performance modeling using regression and next‑word prediction using NLP,
                    serving as
                    Project Lead for a team of 14 interns.
                  </li>
                  <li>Performed end‑to‑end data science tasks such as data preprocessing, exploratory
                    data
                    analysis, model development, documentation, and deployment.</li>
                  <li>Deepened expertise in machine learning, deep learning, and natural language
                    processing through hands‑on project work and completion of five data science
                    courses.</li>
                  <li><a href="https://medium.com/@apurvdeshpande/hdsc-december-22-premiere-project-presentation-stock-portfolio-performance-6a150696a96a"
                    target="_blank">Published an article as a Query Analyst </a> and gained
                    practical experience working with large datasets and real‑world problem‑solving
                    in a fast‑paced internship environment.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="projects" className="section-container">
        <h2 className="text-2xl font-bold text-vt-maroon mb-4">Technical Skills</h2>
        <div className="card">

          <div class="skill-group">
            <h4 class="skill-group-title">Languages</h4>
            <div class="flex flex-wrap">
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">C++</span>
              <span class="skill-tag">Java</span>
              <span class="skill-tag">C#</span>
              <span class="skill-tag">VB.NET</span>
            </div>
          </div>

          <div class="skill-group">
            <h4 class="skill-group-title">Frameworks & Libraries</h4>
            <div class="flex flex-wrap">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Express.js</span>
              <span class="skill-tag">ASP.NET</span>
              <span class="skill-tag">Blazor</span>
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Docker Compose</span>
            </div>
          </div>

          <div class="skill-group">
            <h4 class="skill-group-title">Databases</h4>
            <div class="flex flex-wrap">
              <span class="skill-tag">SQL</span>
              <span class="skill-tag">MySQL</span>
              <span class="skill-tag">Oracle</span>
              <span class="skill-tag">Database Design</span>
              <span class="skill-tag">Data Modeling</span>
            </div>
          </div>

          <div class="skill-group">
            <h4 class="skill-group-title">Tools</h4>
            <div class="flex flex-wrap">
              <span class="skill-tag">GitHub</span>
              <span class="skill-tag">Azure DevOps</span>
              <span class="skill-tag">ServiceNow</span>
              <span class="skill-tag">Power BI</span>
              <span class="skill-tag">Power Apps</span>
              <span class="skill-tag">Power Automate</span>
              <span class="skill-tag">Postman</span>
              <span class="skill-tag">API Testing</span>
              <span class="skill-tag">Algolia</span>
            </div>
          </div>

          <div class="skill-group">
            <h4 class="skill-group-title">Core Competencies</h4>
            <div class="flex flex-wrap">
              <span class="skill-tag">Full‑Stack Development</span>
              <span class="skill-tag">RESTful APIs</span>
              <span class="skill-tag">System Design</span>
              <span class="skill-tag">UI/UX</span>
            </div>
          </div>
        </div>


        <div className="card">
          <h2 className="text-2xl font-bold text-vt-maroon mb-4">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/projects/fleamarket" className="block p-4 border border-gray-100 rounded-md hover:shadow">
              <h4 className="font-semibold">Digital Flea Market App</h4>
              <img src="/images/fleamarket_home.png" alt="Flea Market" className="project-image mt-3" />
              <p className="mt-3 text-sm text-gray-700">A full-stack web application to digitize vendor operations, booth scheduling, and product discovery at flea markets.</p>
            </Link>

            <Link to="/projects/fringe" className="block p-4 border border-gray-100 rounded-md hover:shadow">
              <h4 className="font-semibold">Fringe Benefits App</h4>
              <img src="/images/fringe_home.png" alt="Fringe" className="project-image mt-3" />
              <p className="mt-3 text-sm text-gray-700">A full-stack C# - ASP.NET project to digitize the traditional fringe benefits management process.</p>
            </Link>

            <Link to="/projects/nlp" className="block p-4 border border-gray-100 rounded-md hover:shadow">
              <h4 className="font-semibold">NLP Next-Word Prediction</h4>
              <img src="/images/nlp_home.png" alt="NLP" className="project-image mt-3" />
              <p className="mt-3 text-sm text-gray-700">Predicting the subsequent word using n-gram models and GRU-based RNNs.</p>
            </Link>

            <Link to="/projects/CodeCart" className="block p-4 border border-gray-100 rounded-md hover:shadow">
              <h4 className="font-semibold">CodeCart: Barcode enabled app for Inventory Management</h4>
              <img src="/images/codecart_logo.png" alt="CodeCart" className="project-image mt-3" />
              <p className="mt-3 text-sm text-gray-700">A full-stack web application to digitize vendor operations, booth scheduling, and product discovery at flea markets.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="certifications" className="section-container">
        <h2 className="text-2xl font-bold text-vt-maroon mb-4">Certifications</h2>
        <div className="card">
          <h4 className="mb-2">The following certifications are verified. Please click on the links to view the certificates.</h4>
          <ul className="list-disc list-inside">
            <li class="cert-item">
              <a href="/certificates/NVIDIA_ Gen AI with Diffusion Models.pdf" target="_blank"
                rel="noopener">NVIDIA Gen AI with Diffusion Models Certificate</a>
            </li>
            <li class="cert-item">
              <a href="/certificates/HDSC Fall 2022 Internship Completion.pdf" target="_blank"
                rel="noopener">Hamoye Data Science Internship Completion Certificate</a>
            </li>
            <li class="cert-item">
              <a href="/certificates/IBM SkillsBuild CyberSecurity Internship.pdf" target="_blank"
                rel="noopener">IBM CyberSecurity Virtual Internship Completion Certificate (IBM
                SkillsBuild)</a>
            </li>
            <li class="cert-item">
              <a href="/certificates/Apurv Deshpande Excelerate Internship Completion certificate.pdf"
                target="_blank" rel="noopener">Excelerate Internship Completion Certificate (Data
                Visualization Internship)</a>
            </li>
            <li class="cert-item">
              <a href="/certificates/Apurv Google CrowdSource Certificate.pdf" target="_blank"
                rel="noopener">Google Crowdsource Learning Community Certification</a>
            </li>
            <li class="cert-item">
              <a href="/certificates/Google_IT_Automation.pdf" target="_blank" rel="noopener">Google IT
                Automation with Python Professional Certificate (Coursera)</a>
            </li>
            <li class="cert-item">
              <a href="/certificates/Google Cloud Career Readiness Certificate - FdBoCVvE - Apurv Deshpande.pdf"
                target="_blank" rel="noopener">Google Cloud Career Readiness Certificate (Data Analyst
                Track)</a>
            </li>
            <li class="cert-item">
              <a href="/certificates/Google_Hashcode_2022.pdf" target="_blank" rel="noopener">Google
                HashCode 2022 Certificate</a>
            </li>
            <li class="cert-item">
              <a href="/certificates/Explore ML with Crowdsource Certificate.pdf" target="_blank"
                rel="noopener">Google CrowdSource AI-Explore ML Certification</a>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section-container">
        <h2 className="text-2xl font-bold text-vt-maroon mb-4">Get in Touch</h2>
        <div className="card text-center">
          <h4 className="mb-2">If you'd like to discuss potential collaborations, job opportunities, or simply want to connect, feel free to reach out!
            <br></br>I am always eager for a quick chat to explore new technologies, tackle challenging
            problems,
            and collaborate on innovative projects. <br></br>Best way to contact me is via email:</h4>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/apurv-deshpande/" target="_blank" rel="noreferrer" className="text-vt-maroon underline">LinkedIn</a>
            <a href="https://github.com/apurvD" target="_blank" rel="noreferrer" className="text-vt-maroon underline">GitHub</a>
            <a href="mailto:apurvsd@vt.edu" className="text-vt-maroon underline">Email</a>
          </div>
        </div>
      </section>

      <footer className="vt-footer">
        <p>© 2026 Apurv Deshpande. All rights reserved.</p>
      </footer>
    </main>
  )
}
