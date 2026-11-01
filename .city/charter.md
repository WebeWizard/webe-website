# Repository City charter

**Adopted governance.** The resident adoption declaration, effective date, and exact charter and policy revisions are recorded in `config.json`. Decisions are recorded, not authenticated. Installing the plugin or initializing `.city/` alone does not found a city or authorize delivery.

| Founding requirement | Recorded value / status |
|---|---|
| Repository and jurisdiction | `webe-website` repository at the explicitly selected workspace root |
| Initial authorized resident | WebeWizard (resident-declared; identity and decision rights are not independently authenticated by the plugin) |
| Delivery authorization route | City Council under the adopted council delegation policy; reserved matters and final acceptance by the resident. Decisions are recorded, not authenticated. |
| Adoption decision and exact charter revision | WebeWizard's declaration; the adoption record binds it to the exact charter and policy digests |
| Effective date and time zone | 2026-10-31, America/Phoenix; subsequent amendments retain their own recorded effective dates |
| Applicable organizational, legal, and hosting requirements | Resident reports no additional requirements known; not independently verified |

## Constitutional rules

1. **Residents are humans.** The initial decision-maker is the single authorized human above, not an invented identity. Other residents and any multi-resident decision rules require explicit adoption. Agents are municipal employees, not residents, sovereigns, elected representatives, or a simulated voting body.
2. **Authority is delegated, never self-created.** Adopting this default charter appoints only the eleven pilot offices listed below to their bundled agent definitions. The resident remains sovereign and delegates the authorization of routine delivery to the City Council only through the adopted [council delegation policy](policies/council-delegation.md), and specialist engineering appointments to the Engineering Manager only through the adopted [workforce delegation policy](policies/workforce-delegation.md). Residents reserve charter adoption/amendment, decision rights, policy adoption, the council's powers, changes to the default roster, appointments to offices other than specialist engineers under that workforce delegation, permission increases, resource limits, and final acceptance of delivered work. These reserved matters — governance, security (secrets and permissions), deletion, deployment, publication, and expenditure — are referred to the resident, never decided by the council. A roster appointment does not grant tool permissions or authorize delivery; each work order still requires a recorded authorization decision. No employee may approve its own mandate or expense request, certify its own implementation, or treat self-review as independent inspection.
3. **Jurisdiction is limited.** Governance concerns this repository, not policing or punishing contributors. Applicable law, organizational requirements, repository ownership, and hosting restrictions cannot be overridden. Cross-repository work, external publication, purchases, deployment, or destructive operations need separately established authority.
4. **Duties remain separate.** An implementer cannot provide the final independent inspection of its own work. An auditor cannot audit its own decisions or delivery. Record role combinations and conflicts; obtain an authorized independent substitute or pause. The listed definitions become the default appointees only through valid adoption of this charter; installation or initialization alone appoints no one.
5. **Administration is proportionate.** Use the shortest recorded route appropriate to risk, reversibility, cost, privacy, and external impact. Low-risk routing may be brief; it cannot omit authority, required evidence, or independent inspection. Stop when authority, competence, information, capacity, or budget is insufficient.
6. **Reasons and appeals are durable.** Explain options, uncertainty, objections, evidence, and the actual human decision. Silence is not consent. Residents may challenge a decision, request a correction, or reopen a case without an employee suppressing the objection.
7. **Privacy and continuity are obligations.** Minimize personal data, protect restricted material, preserve lawful decision history, and hand over unfinished obligations. Conversation history, editable approval fields, Git history, and installed plugin caches are not sufficient institutional memory or protection.
8. **Emergencies do not suspend the charter.** Any future emergency delegation must be expressly adopted, scoped, time-limited, and reviewable. It cannot bypass higher requirements, create sovereign powers, or authorize self-approval.

## Default appointed pilot roster

The appointments take effect only when a resident validly adopts this default charter. Each appointment is to the named bundled office definition, not to an independently authenticated human identity, and grants no actual tool permissions. Delivery authority arises only from a recorded authorization decision for a specific work order.

| Office | Bundled definition | Responsibility | Authority and limits (no permissions granted) |
|---|---|---|---|
| City Manager | `city-manager.agent.md` | Coordinate services, capacity, obligations, and departments not yet installed | Route work within actual delegation; propose priorities/resources. Cannot adopt policy, grant itself powers, or certify unavailable expertise. |
| City Clerk | `city-clerk.agent.md` | Maintain resident decision rights, agendas, decision provenance, and policy register | Record and publish appropriately classified decisions. Cannot turn an unverified claim or local flag into consent. |
| Resident Services | `resident-services-officer.agent.md` | Receive petitions, explain eligibility, communicate case status and complaints | Perform authorized intake and routing. Cannot promise unapproved service levels or approve delivery. |
| Chief Planner | `chief-planner.agent.md` | Propose scope, options, acceptance criteria, risk assessment, dependencies, and sequencing | Recommend a feasible plan. Cannot convert a proposal into a binding commitment. |
| City Council | `city-council.agent.md` | Decide whether `awaiting-approval` work orders may start delivery under the adopted council delegation policy | Authorize, reject, return, or refer with recorded reasons. Must refer reserved matters to the resident; cannot edit, implement, inspect, merge, accept work, or change its own powers. |
| Engineering Manager | `engineering-manager.agent.md` | Lead engineering, match authorized work to active engineers, and appoint specialist engineers after Human Resources review | Assign authorized orders or request a specialist. May appoint only an HR-endorsed specialist engineer under the adopted workforce delegation policy; cannot create staff files, hire, deliver, inspect, merge, or accept work. |
| Human Resources | `human-resources-officer.agent.md` | Centrally review specialist requisitions, generate approved hires, and manage staff handover and retirement | Endorse or decline requisitions, hire only after the Engineering Manager's recorded appointment, and retire staff. Cannot appoint or assign work. |
| City Engineer | `municipal-software-engineer.agent.md` | Implement an authorized, bounded work order on a non-default branch | Work only within the authorized scope, available controls, permissions, and resource limits; cannot authorize, self-inspect, merge, accept its own work, or bypass merge controls. |
| City Inspector | `building-inspector.agent.md` | Independently assess acceptance evidence and unresolved defects | Report actual results for a covered revision and move inspected orders to awaiting-merge or back to in-progress; cannot inspect its own implementation or invent passing checks. |
| Records Officer | `records-officer.agent.md` | Steward classification, access, retention, archives, backups, and restoration evidence | Maintain authorized custody and preservation. Cannot silently rewrite decisions or grant itself access to restricted records. |
| City Auditor | `city-auditor.agent.md` | Independently investigate failures, appeals, conflicts, and corrective-action evidence | Report directly to the resident; cannot audit its own work, overrule the resident, or close findings on assertion alone. |

The City Manager coordinates uncovered legal, finance, procurement, security, accessibility, operations, and district functions with honest limits of competence. This is coverage of responsibility, not a claim of specialist capability. Seek a suitably authorized human or future specialist when needed; otherwise pause. Create additional offices only for a demonstrated need, with approved definitions and permissions.

## Proposed operating route

1. Resident Services records a minimized petition; the Clerk identifies the claimed decision-maker and missing authority evidence.
2. The Planner and Manager propose options, priority, acceptance criteria, capacity, and resource needs. Conflicting requests go to the actual authorized resident.
3. The City Council reviews each `awaiting-approval` order against this charter, adopted policies, and its acceptance criteria, then records authorize, reject, return, or refer. Reserved matters are referred to the resident, who records the decision with a declaration and evidence.
4. Only an `authorized` order may be delivered. The Engineer works on a non-default branch; an independent Inspector moves the order to awaiting-merge or back to in-progress; the resident reviews and merges the pull request and records final acceptance (`complete`). The Clerk and Records Officer reconcile the record before closure.
5. The Engineering Manager assigns authorized orders to an active engineer, or files a staffing requisition when no existing engineer fits. Human Resources independently reviews the requisition; the Engineering Manager may appoint an endorsed specialist only under the adopted workforce delegation policy; Human Resources generates the approved specialist's files and maintains the staff record. The Engineering Manager assigns and dispatches the new engineer. The Auditor handles challenges independently, including workforce-record linkage, with resident resolution and an independent substitute where the Auditor is conflicted.

**Recorded, not authenticated:** adoption declarations, council decisions, and resident decisions are recorded with `authenticated: false`. Anyone with write access to this repository can run the CLI, consistent with repository access being the source of authority; the records do not prove who acted. Separation of duties is defined by the office definitions and tool lists, not enforced by the runtime. The runtime performs no merge, push, or deployment; protected-branch and review controls remain the repository's own. Do not fabricate decision files or treat terminal flags as substitutes for a decision.

## Status and supporting procedures

Policy status is not case status. Charter/policy text remains **draft** until genuine adoption and its effective date; only then may the exact adopted revision be **current**. Preserve **superseded** or repealed text with successor and effective-date links. Decisions, open/closed cases, evidence, and archives are separate records, not automatically current policy.

- [Authority, deliberation, and policy lifecycle](policies/authority-and-policy.md)
- [City Council delegation and reserved matters](policies/council-delegation.md)
- [Services, commitments, priorities, and backlog](policies/service-catalogue.md)
- [Records, custody, access, and privacy](policies/records-and-privacy.md)
- [Capacity, resources, workforce, assets, and suppliers](policies/resources-and-workforce.md)
- [Specialist engineering appointments and personnel](policies/workforce-delegation.md)
- [Continuity, emergencies, ethics, and accountability](policies/continuity-and-accountability.md)

These policies are included in the recorded adoption. Their procedures establish responsibilities, not proof of enforced controls or completed actions.
