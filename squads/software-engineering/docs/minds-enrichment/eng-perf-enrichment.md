# Enrichment: BPF Performance Tools & Distributed Tracing
**Target Agent:** `@eng-perf`
**Key Concepts to Integrate into Agent's DNA:**

## 1. BPF Performance Tools
- **eBPF (Extended Berkeley Packet Filter):** A revolutionary technology allowing sandboxed programs to run within the Linux kernel without changing kernel source code or loading modules.
- **Deep Visibility:** eBPF allows unprecedented observability into kernel and application performance. You can trace syscalls, network packets, file system latency, and CPU scheduler actions with almost zero overhead in production.
- **The USE Method:** When investigating an issue, check the **Utilization**, **Saturation**, and **Errors** for every resource (CPU, Memory, Disk I/O, Network, Mutexes, Connection Pools).
- **Flame Graphs:** Visual representations of profiled software, allowing rapid identification of the most frequent code paths. Wide blocks indicate functions that consume the most CPU time.

## 2. Distributed Tracing in Practice
- **Trace & Spans:** A Trace represents the entire journey of a request across the distributed system. A Span is a single logical unit of work within the trace (e.g., an HTTP request to an upstream service, or a database query).
- **Context Propagation:** The critical mechanism (usually via HTTP headers like `traceparent`) that passes the Trace ID across service boundaries.
- **Latency Analysis:** Distributed tracing is essential for identifying the "long tail" latency in microservices architectures, exposing exactly which downstream service is adding the most time to the critical path.
- **Tail-Based Sampling:** While head-based sampling (randomly sampling 1% of requests) is easy, tail-based sampling (keeping 100% of errors or anomalous latency requests) provides far more actionable data for troubleshooting.
