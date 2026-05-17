# HumanLoop AI Support OS Architecture Guidelines

You are working on a high-scale AI-native platform. Adhere to these principles for all backend and integration tasks.

## System Mood & Style
- **Architecture**: Modular Monolith using FastAPI (Async/Await first).
- **Paradigm**: Domain-Driven Design (DDD). Each domain (Knowledge, Chat, Memory, Escalation) should be isolated.
- **AI Runtime**: Always support streaming responses (WebSockets/SSE) and reasoning traces.

## Domain Specific Rules

### Knowledge & RAG
- **Immutability**: Once encapsulated, individual semantic chunks should have a stable `chunk_id` for reference in messages.
- **Multitenancy**: Every query to Qdrant MUST include a `tenant_id` filter. Never query across tenants.

### Chat & Orchestration
- **Confidence Scoring**: Every AI response must calculate a confidence score. If < 0.7, trigger the `EscalationDomain`.
- **Reasoning Trace**: Persist the "thought process" of the AI. Users (and debugging tools) should see why the AI reached an answer.

### Memory
- **Synthesis**: Chat logs are raw data; "Memories" are synthesized insights. Background workers should handle consolidation.
- **Privacy**: High-sensitivity PII should be redacted before long-term memory formation.

## Database & State
- **PostgreSQL**: Source of truth for relational data and metadata.
- **Redis**: Real-time state (active sockets, transient caches).
- **Qdrant**: Vector storage for semantic retrieval.

## Communication
- Use WebSockets for live chat features.
- Use NATS/Kafka for background state updates (e.g., "Knowledge synced", "Memory formed").

## Code Organization
- Backend code belongs in `/src/backend`.
- Models in `models.py`.
- Services in `domains/{domain_name}/service.py`.
- API endpoints in `api/{version}/{domain_name}.py`.
