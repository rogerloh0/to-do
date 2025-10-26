# 📝 To-Do Web App – Requirements

## 1. Overview
A simple, fast, and responsive web app for managing personal and work tasks.  
Focus: minimal design, intuitive UX, and scalable architecture.

## 2. Core Features (MVP)
- ✅ User authentication (email + Google OAuth)
- ✅ Create / edit / delete tasks
- ✅ Task attributes: title, description, due date, priority, status
- ✅ Filter + sort by status, due date, or priority
- ✅ Light / dark mode
- ✅ Responsive design for desktop & mobile

## 3. Future Enhancements
- Shared task lists & collaboration
- Notifications & reminders
- Calendar integrations
- Offline support
- Mobile native app (Flutter or React Native)

## 4. User Personas
| Persona | Goal | Needs |
|----------|------|-------|
| Busy Professional | Organize daily work | Quick entry, due alerts |
| Student Planner | Track homework/projects | Tagging, mobile use |
| Minimalist User | Simple to-do | Clean interface |

## 5. Functional Requirements
| ID | Description | Priority |
|----|--------------|----------|
| FR-001 | Register/login via email | High |
| FR-002 | Google OAuth login | Medium |
| FR-010 | CRUD operations for tasks | High |
| FR-011 | Mark task as done | High |
| FR-012 | Filter/sort tasks | Medium |
| FR-020 | Light/dark theme toggle | Medium |
| FR-021 | Responsive layout | High |

## 6. Non-Functional Requirements
| Category | Requirement |
|-----------|-------------|
| Performance | <2s load time |
| Security | HTTPS, hashed passwords |
| Scalability | Horizontal scaling supported |
| Availability | 99.5% uptime target |
| Localization | English (Phase 1) |

## 7. Tech Stack (Suggested)
| Layer | Tech |
|--------|------|
| Frontend | React + TypeScript + Vite |
| Backend | Node.js (Express/NestJS) + GraphQL/REST |
| Database | PostgreSQL (Prisma / Knex) |
| Auth | Firebase Auth / AWS Cognito |
| Hosting | Vercel / AWS Amplify |
| CI/CD | GitHub Actions |

## 8. Milestones
| Phase | Deliverable | Duration |
|--------|--------------|----------|
| 1 | UX + UI design | 2w |
| 2 | Backend APIs | 3w |
| 3 | Frontend integration | 4w |
| 4 | QA & polish | 2w |

## 9. Roadmap
- Phase 2: Collaboration & reminders  
- Phase 3: AI task suggestions  
- Phase 4: Calendar + mobile app

---

**Last updated:** 2025-10-26  
**Maintainer:** Product Management Team