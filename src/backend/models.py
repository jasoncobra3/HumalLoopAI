from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text, JSON, Float
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Tenant(Base):
    __tablename__ = "tenants"
    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    settings = Column(JSON, default={})

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, index=True)
    tenant_id = Column(String, ForeignKey("tenants.id"))
    email = Column(String, unique=True, index=True)
    role = Column(String) # admin, support_agent, user
    
class Conversation(Base):
    __tablename__ = "conversations"
    id = Column(String, primary_key=True, index=True)
    tenant_id = Column(String, ForeignKey("tenants.id"))
    user_id = Column(String, ForeignKey("users.id"))
    status = Column(String) # active, escalating, closed
    confidence_avg = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, onupdate=datetime.utcnow)

class Message(Base):
    __tablename__ = "messages"
    id = Column(String, primary_key=True, index=True)
    conversation_id = Column(String, ForeignKey("conversations.id"))
    sender_type = Column(String) # user, ai, human
    content = Column(Text)
    reasoning_trace = Column(JSON) # Detailed AI steps
    retrieval_metadata = Column(JSON) # References used
    confidence_score = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)

class KnowledgeSource(Base):
    __tablename__ = "knowledge_sources"
    id = Column(String, primary_key=True, index=True)
    tenant_id = Column(String, ForeignKey("tenants.id"))
    source_type = Column(String) # website, document, integrations
    name = Column(String)
    status = Column(String) # processing, synced, error
    metadata = Column(JSON)
    last_synced_at = Column(DateTime)

class Memory(Base):
    __tablename__ = "memories"
    id = Column(String, primary_key=True, index=True)
    tenant_id = Column(String, ForeignKey("tenants.id"))
    user_id = Column(String, ForeignKey("users.id"))
    summary = Column(Text)
    sentiment = Column(String)
    vector_id = Column(String) # Linking to Qdrant
    formed_at = Column(DateTime, default=datetime.utcnow)
