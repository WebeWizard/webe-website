# Resources, workforce, assets, and suppliers — DRAFT

**DRAFT TEMPLATE — pending explicit resident adoption.** No budget, staffing appointment, tool permission, purchase, license choice, or supplier commitment is authorized.

**Proposed owner:** City Manager. Clerk maintains authority/appointment references; Records Officer preserves resource evidence; independent Auditor reviews reconciliation and conflicts. The Engineering Manager leads engineering staffing; Human Resources administers specialist recruitment and personnel records under the separate [workforce delegation policy](workforce-delegation.md). Missing finance, legal, security, or procurement expertise must be escalated, not impersonated.

## Capacity and real resource budgets

**Inputs:** proposed scope, backlog/dependencies, actual available competence and execution capacity, estimates/uncertainty, existing commitments, real cost units, and proposed human limits.

| Resource stage | Required distinction |
|---|---|
| Proposed | Estimate of effort, compute/tokens, money, storage, or other real resources; no commitment authority |
| Authorized | Actual resident-approved limit, scope, period, conditions, and trustworthy decision reference; absent in this template |
| Committed | Authorized resources already promised/reserved or contractually obligated; reconcile remaining headroom before further commitments |
| Actual | Measured consumption/cost with source and uncertainty; unknown consumption is “unknown,” not zero or an invented measurement |

1. Manager and Planner propose a feasible portfolio, responsible owners, execution/time limits, and contingency needs. Do not count unappointed or unavailable agents as capacity.
2. Obtain genuine scoped resource authorization before incurring obligations or delivery. Record the baseline separately from estimates; no fictional taxation, revenue, or currency.
3. Reconcile commitments and actual consumption at a human-approved cadence (**TBD**) and before new commitments. Explain estimate-to-actual differences and missed capacity assumptions.
4. On a likely overrun, pause affected work before exceeding authority; notify the actual resident and propose a reduced scope, reallocation, or explicit revised limit. Record an already-incurred overrun honestly; never retroactively label it previously approved.

**Resulting records:** proposed capacity/budget, actual decision reference, commitment ledger, consumption sources, variance explanation, and any revised authorization. These are future operating requirements, not initialized accounts. The CLI records delivery decisions with `authenticated: false` and cannot authenticate spending; expenditure is a reserved matter decided by the resident, never by the City Council.

## Appointment, delegation, and handover

**Inputs:** demonstrated role need, exact agent definition/version and plugin release, competency evidence/limits, proposed tools and actual environment permissions, scope/resources, conflicts, review/expiry conditions, and actual human authorization.

| Step | Procedure | Resulting record / escalation |
|---|---|---|
| Appoint bundled offices | The resident reviews and adopts the charter's default roster. Installing a definition alone is not an appointment. Actual permission changes require the responsible system owner's action. | Appointment linked to the adopted charter and exact definition/version; pause if missing |
| Appoint specialist engineers | The Engineering Manager documents the work-order need and least-privilege role; Human Resources independently reviews and endorses or declines; the Engineering Manager then approves or declines the appointment under the adopted [workforce delegation policy](workforce-delegation.md); Human Resources generates the approved files and staff record. | Linked requisition, HR review, manager decision, file digests, and active staff record; pause if the adopted delegation or any step is missing |
| Delegate | Limit actions, repository/components, cost/time, expiry, reporting, revocation, and any allowed subdelegation. A delegation cannot exceed its source or permit self-approval. | Traceable delegation chain and actual granted-permission evidence |
| Change/review | Assess performance, conflicts, definition changes, and permission changes against the approved scope. Obtain the required resident authorization before expanded powers or incompatible updates; do not silently inherit changed authority from a plugin update. | Versioned review/change history; unresolved competence or permission mismatch pauses affected work |
| Revoke/retire | Stop new assigned actions; have the responsible owner revoke actual credentials/permissions. Reconcile in-flight work, pending decisions, resources, and findings. | Revocation/retirement and unfinished-obligation references |
| Hand over | Identify successor competence/authority, canonical records, dependencies, assets, commitments, access needs, and open risks. Verify receipt and relevant access changes before claiming a completed handover. Never copy secrets into the handover. | Actual transfer evidence or clearly pending handover |

Multiple duties may share an employee only without defeating independent inspection or audit. The Manager coordinates uncovered departments, explicitly states limited competence, and obtains an authorized specialist/human where required. The Engineering Manager cannot appoint without HR endorsement; HR cannot appoint or assign work. Specialist appointments and hire records are `authenticated: false`; the runtime records sequencing but cannot identify which agent invoked a command. No reviewer available means pause, not self-certification.

## Asset and supplier lifecycle

**Inputs:** repository assets/dependencies/services, purpose and criticality, owner, provenance/version, license and organizational constraints, cost/terms, maintenance/renewal dates, data exposure, and exit/recovery needs.

1. Inventory only real assets and suppliers. Distinguish proposed, in-use, deprecated, and retired items; identify dependencies and responsible owners. Do not invent subscriptions or vendors.
2. Before acquisition/adoption, review necessity, security/privacy, license compatibility, ownership, real cost, portability, and required human procurement authority. An unknown license is not permission; this template selects no project license.
3. Assign maintenance, vulnerability/update review, renewal and notice responsibilities, evidence sources, and human-approved review dates (**TBD**). Renewals and scope/cost increases require actual authority, not automatic agent consent.
4. For deprecation, expiry, supplier failure, or retirement, propose replacement/export/recovery, remove unused access through the responsible owner, reconcile commitments, and preserve required provenance and records. Verify the result before marking retirement complete.

**Resulting records:** asset/supplier inventory, rights/decision references, maintenance and renewal obligations, change/exit plan, and verified disposition. Restricted commercial or personal information follows [records policy](records-and-privacy.md).

**Escalation:** uncertain licensing, cost, competence, external obligations, unavailable capacity, or excessive permissions goes to the Manager and actual authorized human. Conflicts or disputed accounting go to an independent Auditor; no local flag substitutes for resolution.
