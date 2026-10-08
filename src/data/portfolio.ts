export interface Project {
    id: string;
    name: string;
    subtitle: string;
    date: string;
    updated?: string;
    description: string;
    tech: string[];
    icon: 'database' | 'search' | 'chart' | 'rocket' | 'brain';
    featured?: boolean;
    link?: string;
}

export const projects: Project[] = [
    {
        id: 'evidence-rag',
        name: 'Evidence RAG',
        subtitle: 'Document QA and evaluation workbench',
        date: 'October 2026',
        description: 'Built a local document-QA workbench with BM25, dense and hybrid retrieval, FlashRAG generation, and bounded search/read/finish tools. Source quotations are validated against retrieved text, execution traces persist in SQLite, and tool observations can be replayed without another model call. Per-case evaluations record answer quality, evidence coverage, abstentions and execution budgets.',
        tech: ['Python', 'FlashRAG', 'PyTorch', 'FastAPI', 'SQLite'],
        icon: 'search',
        featured: true,
    },
    {
        id: 'keystone-kv',
        name: 'Keystone KV',
        subtitle: 'TCP key-value server',
        date: 'Spring 2026',
        updated: 'Snapshot, replication and benchmark release — October 2026',
        description: 'Built a Go server with bounded RESP2 parsing, concurrent clients, indexed expiration, checksummed snapshot recovery and asynchronous leader-follower replication. Later work added bounded replication queues, sequence validation and reconnect resynchronization. A recorded two-CPU ARM64 loopback workload measured a median 51,149 GET/SET operations per second with snapshots and replication disabled.',
        tech: ['Go', 'TCP/RESP2', 'Docker', 'GitHub Actions'],
        icon: 'database',
        featured: true,
    },
    {
        id: 'ml-debloater',
        name: 'ML Systems Debloater',
        subtitle: 'Systems for Deep Learning course project',
        date: 'Spring 2026',
        description: 'Explored dynamic tracing of PyTorch shared-library access using Linux strace, following the host-side evaluation in “The Hidden Bloat in Machine Learning Systems.” The pipeline compares library footprint, peak CPU memory and execution time for ResNet50, BERT and ViT workloads, with trace-overlap analysis and repeated-run scripts.',
        tech: ['Python', 'Linux', 'strace', 'PyTorch'],
        icon: 'rocket',
        link: 'https://github.com/RiKan47/690AB-project',
    },
    {
        id: 'retrieval-course',
        name: 'Hierarchical Agentic Retrieval',
        subtitle: 'Adobe-associated research course project',
        date: 'January – May 2026',
        description: 'Contributed literature review and shared dataset/benchmark preparation to a team study of tool-using retrieval for multi-hop question answering. The team explored semantic search, keyword search and paragraph expansion. This coursework is separate from the later Evidence RAG implementation.',
        tech: ['Literature Review', 'Multi-hop QA', 'Retrieval Evaluation'],
        icon: 'search',
    },
    {
        id: 'stock-trading',
        name: 'Distributed Stock Trading',
        subtitle: 'Service-based trading application',
        date: 'Spring 2025',
        updated: 'Durability, retry and fault-injection release — October 2026',
        description: 'Co-developed an HTTP frontend, catalog service and three order nodes with caching and replication. Later work added a transactional SQLite authority for inventory and trades, durable idempotency keys and recoverable order-log projections. Crash tests verify retry after commit without a second inventory change; nine k6 runs checked 2,700 distinct trades against persisted inventory.',
        tech: ['Python', 'SQLite WAL', 'HTTP', 'Docker', 'k6'],
        icon: 'chart',
        featured: true,
    },
    {
        id: 'database-course',
        name: 'Relational Database Implementation',
        subtitle: 'Database systems course project',
        date: 'Spring 2025',
        description: 'Implemented relational storage and query-execution components in Java, including page management, heap-file storage, a buffer pool, B+ tree indexing and iterator-based joins.',
        tech: ['Java', 'B+ Tree', 'Buffer Pool', 'Query Execution'],
        icon: 'database',
    },
    {
        id: 'ml-algorithms',
        name: 'ML Algorithm Suite',
        subtitle: 'Machine learning course implementations',
        date: 'Spring 2025',
        description: 'Implemented and evaluated neural networks, decision trees, k-nearest neighbors and Naive Bayes in Python, exploring hyperparameter tuning and cross-validation.',
        tech: ['Python', 'Neural Networks', 'Decision Trees', 'Cross-validation'],
        icon: 'brain',
    },
];

export const samsung = {
    roles: [
        { title: 'Senior Software Engineer', date: 'March 2024 – January 2025' },
        { title: 'Software Engineer', date: 'June 2022 – March 2024' },
    ],
    summary: 'Worked on C++ optimization and debugging in Samsung’s 4G eNB uplink MAC stack for Tier-1 North American carrier programs. Contributed to a team effort improving peak uplink throughput by 14%, and built a configurable Python tool to consolidate optimization-test logs into Excel reports.',
    bullets: [
        'Optimized C++ code paths by localizing frequently accessed data and reducing repeated conditional checks in the eNB uplink MAC stack.',
        'Validated changes with before/after metrics, UE connection tests and throughput measurements at loads including 800 and 1,200 concurrent UEs; contributed to the combined team’s 14% peak uplink throughput improvement.',
        'Built a Python executable with configurable output modes that reads test logs and saves consolidated Excel tables for MAC uplink review.',
        'Contributed implementation changes and code reviews to maintain protocol behavior and check optimization regressions.',
    ],
};
