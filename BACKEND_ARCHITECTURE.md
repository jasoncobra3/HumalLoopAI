# HumanLoop AI Support OS: Backend Architecture

## 1. Executive Summary
HumanLoop AI Support OS is an enterprise-grade AI orchestration platform designed for autonomous agent operations with integrated human-in-the-loop (HITL) workflows. The backend is built for high-scale, low-latency, and audit-compliant AI interactions.

## 2. Core Architecture: The "Modular Monolith" Strategy
Initially implemented as a modular monolith to reduce deployment complexity, moving towards microservices (Knowledge, Memory, Orchestration) as scale warrants.

### High-Level Blueprint
- **API Gateway / App Server**: FastAPI (Asynchronous, Type-safe)
- **Primary Persistence**: PostgreSQL (SQLAlchemy + Alembic)
- **Vector Intelligence**: Qdrant (Semantic Search & Memory)
- **Distributed State & Cache**: Redis (Websocket state, session caching)
- **Event Mesh**: NATS or Kafka (Async ingestion pipelines, analytics)
- **Workers**: TaskIQ or Celery (Long-running ingestion/synthesis tasks)

---

## 3. Domain Decomposition

### A. Knowledge & Ingestion Domain
- **Responsibility**: Transformation of unstructured data into actionable intelligence.
- **Pipeline**:
    1. **Source Connectors**: Web Scrapers, S3/PDF Loaders.
    2. **Transformation**: Markdown conversion, semantic chunking (recursive character splitter + semantic markers).
    3. **Embedding**: `text-embedding-3-small` (OpenAI) or local `HuggingFace` models.
    4. **Indexing**: Namespace-isolated vector storage in Qdrant.

### B. AI Orchestration Runtime (The "Brain")
- **Responsibility**: Real-time execution of the agent loop.
- **Components**:
    - **Context Assembly**: Merges user profile, knowledge retrieval, and short/long-term memory.
    - **Reasoning Engine**: Multi-stage LLM chains (Planning -> Execution -> Verification).
    - **Confidence Scorer**: Dynamic evaluation of LLM internal log-probs and retrieval relevance.
    - **Streaming Bus**: Token-by-token delivery over WebSockets.

### C. Vector Memory Lifecycle
- **Short-term Memory**: Recent conversation window stored in Redis/PG.
- **Long-term Semantic Memory**: 
    - **Memory Formation**: Background workers synthesize 24h of logs into "Memory Objects" (Facts, Preferences, Context).
    - **Clustering**: Semantic grouping of memories to identify recurring user pain points or knowledge gaps.

### D. Escalation & HITL
- **Responsibility**: Failover logic for low-confidence AI states.
- **Triggers**:
    - Confidence < 0.7.
    - Explicit Keyword/Sentiment Detection.
    - Manual user request.
- **Flow**: Transitions session state from `AI_ACTIVE` to `PENDING_HUMAN`. Webhook/SSE updates for the human operator dashboard.

---

## 4. Technical Specifications

### Multi-Tenant Strategy
- **Row-Level Security (RLS)** in PostgreSQL.
- **Namespace Isolation** in Qdrant collections using `tenant_id` payload filters.
- **Isolated Queues** for heavy extraction tasks to prevent noisy-neighbor effects for small tenants.

### Security & Governance
- **JWT / OAuth2**: Unified identity management.
- **PII Scrubbing**: Ingestion-time PII detection (Presidio or similar) before vectorization.
- **Audit Logs**: Comprehensive event trail for every AI decision step (Reasoning Trace).

---

## 5. Implementation Strategy

### Phase 1: Knowledge Ingestion
- Implement the "Ingestion Flow": Upload -> Worker -> Segment -> Embed -> Store.
- Expose `/api/knowledge` for frontend status tracking.

### Phase 2: Live Orchestration
- WebSocket endpoints for `/ws/chat`.
- Integration with Qdrant for RAG-augmented responses.
- Implementation of the "Reasoning Trace" API.

### Phase 3: Memory Synthesis
- Cron-based memory formation pipeline.
- Semantic clustering API for the "Memory Map" UI.

---

## 6. Internal Structure (Python/FastAPI)

```text
backend/
├── app/
│   ├── core/               # App configuration, security, base classes
│   ├── api/                # API route definitions (v1)
│   ├── domains/           
│   │   ├── knowledge/      # Ingestion, vector storage service
│   │   ├── chat/           # Orchestration, reasoning, websocket handlers
│   │   ├── memory/         # Synthesis, clustering logic
│   │   ├── escalation/     # Human handover logic
│   │   └── analytics/      # Metric aggregation
│   ├── db/                 # SQL schemas & repositories
│   ├── vector_db/          # Qdrant client & indexing helpers
│   ├── workers/            # Async task handlers
│   └── main.py             # Entry point
├── migrations/             # Alembic migration scripts
├── tests/
└── docker-compose.yml
```
