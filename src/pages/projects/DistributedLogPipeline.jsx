import React from 'react'

export default function DistributedLogPipeline() {
  return (
    <main>
      <section className="section-container">
        <div className="card">
          <h1 className="text-2xl font-bold">Distributed Cloud Log Processing Pipeline</h1>
          <p className="text-gray-700 mt-2">A fault-tolerant, high-throughput streaming data pipeline deployed on AWS built to process, anonymize, and store real-time event logs at scale.</p>
          <h5 className="text-lg font-medium mt-2">Technologies:</h5>
          <p className="text-gray-700">
            Java 17 · Apache Kafka · PostgreSQL · Prometheus · Grafana · Docker · Terraform · AWS (EC2, VPC, Security Groups)
          </p>
          <img src="/images/Grafana_Dashboard_Local.png" alt="AWS Distributed Pipeline Architecture" className="project-image my-4" />

          <h2 className="text-xl font-semibold mt-4">Overview</h2>
          <p className="text-gray-700">
            This project is a production-style backend data pipeline that ingests high-volume event logs in real time, applies privacy-preserving transformations, and persists sanitized records to a relational database --- all while exposing live observability metrics through a Grafana dashboard.
          </p>
          <p className="text-gray-700">
            The core challenge it addresses is a real one in backend engineering: how do you build a system where data producers and consumers are completely decoupled, where neither side needs to know anything about the other's speed or availability, and where a consumer crash doesn't mean lost data? Apache Kafka sits at the center of this design precisely because it solves that problem. The broker acts as a durable, replayable buffer, producers write at full speed, consumers process at their own pace, and the offset model means any consumer can resume exactly where it left off after a failure.
          </p>
          <p className="text-gray-700">
            The infrastructure is provisioned entirely through Terraform, which means the full AWS environment: VPC, subnets, security groups, EC2 instances can be torn down and rebuilt from scratch with a single command. That reproducibility isn't just convenient for development; it's a core property of any system that needs to survive incident recovery or environment migration.
          </p>

          <h2 className="text-xl font-semibold mt-4">Architecture</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto text-gray-700">
{`[Log Producers]
     │  Structured JSON events
     │  (user ID, IP, timestamp, action)
     ▼
[Apache Kafka Cluster]
     │  Partitioned topics for parallelism
     │  Durable, replayable log
     ▼
[Java Consumer Group]
     │  PII anonymization (SHA-256 hash, IP masking)
     │  JSON parsing + transformation
     ▼
[PostgreSQL]
     │  Sanitized records only — raw PII never persisted
     ▼
[Prometheus + Grafana]
     └  Consumer lag, throughput, JVM metrics`}
          </pre>

          <h2 className="text-xl font-semibold mt-4">View GitHub Repository</h2>
          <p className="text-gray-700">
            <a href="https://github.com/apurvD/distributed-log-pipeline" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://github.com/apurvD/distributed-log-pipeline
            </a>
          </p>


          <h2 className="text-xl font-semibold mt-4">Key Features</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><strong>Infrastructure as Code:</strong> Automated the provisioning of a custom AWS Virtual Private Cloud (VPC), strict Security Groups, and multiple EC2 instances using Terraform for a fully reproducible environment.</li>
            <li><strong>High-Throughput Streaming:</strong> Implemented an Apache Kafka cluster to ingest event logs, ensuring zero data loss during high-traffic spikes.</li>
            <li><strong>Data Transformation:</strong> Built a Java-based consumer that polls Kafka, parses JSON payloads, and applies cryptographic hashing to user IDs and IPs for privacy compliance.</li>
            <li><strong>Real-Time Observability:</strong> Instrumented the applications with Micrometer and deployed a Prometheus/Grafana stack via Docker to monitor processing throughput and system health in real-time.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Results</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Kafka cluster successfully ingests and partitions a continuous stream of structured JSON events with no message loss under sustained load.</li>
            <li>Consumer group applies SHA-256 hashing and IP masking to 100% of records before PostgreSQL persistence — raw PII never touches the database.</li>
            <li>Grafana dashboard provides live visibility into consumer lag, throughput, and JVM health across the deployed AWS environment.</li>
            <li>Full infrastructure provisioned and destroyed reproducibly via Terraform — zero manual AWS console configuration required.</li>
          </ul>

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
        </div>
      </section>
    </main>
  )
}