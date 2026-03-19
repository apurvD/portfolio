import React from 'react'

export default function DistributedLogPipeline() {
  return (
    <main>
      <section className="section-container">
        <div className="card">
          <h1 className="text-2xl font-bold">Distributed Cloud Log Processing Pipeline</h1>
          <p className="text-gray-700 mt-2">A fault-tolerant, high-throughput streaming data pipeline deployed on AWS to process, anonymize, and store real-time event logs.</p>
          
          {/* Use the Draw.io / Lucidchart architecture diagram here */}
          <img src="/images/Grafana_Dashboard_Local.png" alt="AWS Distributed Pipeline Architecture" className="project-image my-4" />

          <h2 className="text-xl font-semibold mt-4">Overview</h2>
          <p className="text-gray-700">
            This project demonstrates a production-grade backend data ingestion system. It uses Infrastructure as Code (IaC) to provision a secure AWS environment, where a distributed Apache Kafka message broker decouples high-volume data generation from a multi-threaded Java consumer. The system successfully handles real-time data transformation, securely hashing Personally Identifiable Information (PII) before persisting it to a PostgreSQL database, all while being monitored by a live observability stack.
          </p>

          <h2 className="text-xl font-semibold mt-4">Key Features</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><strong>Infrastructure as Code:</strong> Automated the provisioning of a custom AWS Virtual Private Cloud (VPC), strict Security Groups, and multiple EC2 instances using Terraform for a fully reproducible environment.</li>
            <li><strong>High-Throughput Streaming:</strong> Implemented an Apache Kafka cluster to ingest event logs, ensuring zero data loss during high-traffic spikes.</li>
            <li><strong>Data Transformation:</strong> Built a Java-based consumer that polls Kafka, parses JSON payloads, and applies cryptographic hashing to user IDs and IPs for privacy compliance.</li>
            <li><strong>Real-Time Observability:</strong> Instrumented the applications with Micrometer and deployed a Prometheus/Grafana stack via Docker to monitor processing throughput and system health in real-time.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Technologies</h2>
          <p className="text-gray-700">Java 17, Apache Kafka, AWS (EC2, VPC), PostgreSQL, Prometheus, Grafana, Docker, Terraform</p>

          <div className="my-4">
            <video controls className="w-full max-w-3xl">
              <source src="/projects/aws_consumer.mp4" type="video/mp4" />
            </video>
            <h4 className="mt-2">Demo: Live Data Throughput & Infrastructure Deployment</h4>
          </div>

          <img src="/images/Grafana_Dashboard_AWS.png" alt="Grafana Real-Time Throughput Dashboard" className="project-image my-4" />
            <h4 className="mt-2">Grafana Dashboard Monitoring Real-Time Throughput (deployed on AWS)</h4>
          <img src="/images/AWS_instances.png" alt="EC2 Instances" className="project-image my-4" />
            <h4 className="mt-2">EC2 Instances (deployed on AWS)</h4>
          <img src="/images/AWS_security_groups.png" alt="Security Groups" className="project-image my-4" />
            <h4 className="mt-2">Security Groups (deployed on AWS)</h4>
          <br />
        </div>
      </section>
    </main>
  )
}