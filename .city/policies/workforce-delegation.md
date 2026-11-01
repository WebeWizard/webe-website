# Specialist engineering appointments — DRAFT

**DRAFT TEMPLATE — pending explicit resident adoption.** No appointment authority
is delegated by this text until the resident adopts it with the charter and
policies (`adopt`) or records it later with `amend`. Draft governance, policy
drift, or absence of this policy from the adopted revision means no specialist
hire may proceed.

**Delegator:** the resident. **Appointing manager:** the Engineering Manager.
**Personnel administrator:** the Human Resources Officer. The City Clerk
maintains decision references; the Auditor independently reviews the record.
These office titles do not authenticate agent identity or grant system
permissions.

## Delegated authority and separation

The resident delegates to the Engineering Manager the limited authority to
appoint a specialist engineering agent, but only after Human Resources has
reviewed and endorsed a specific requisition. The Engineering Manager must
record an approve or decline decision with its reason. It may appoint only
specialist engineers needed for an identified, authorized work order; it cannot
appoint other municipal offices, alter this delegation, increase tool
permissions, or approve its own requisition without independent HR review.

Human Resources performs the personnel administration: review and endorse or
decline the requisition; generate agent, skill, practice-reference, and fixed
check-tool files only after the appointment is recorded; maintain the staff
register; and record retirement and handover. HR does not appoint staff or
assign work. The Engineering Manager assigns an active engineer to an
authorized work order and dispatches that engineer. This separation is stated
in office instructions; the host does not provide distinct authenticated
identities and the runtime cannot verify which office invoked a command.

## Merit and necessity test

Before a new post is requested, the Engineering Manager records the work-order
need, duties, title, competencies, standards, available checks, minimum tools,
and any proposed MCP server with its purpose. It first considers whether an
active engineer, including the bundled general Municipal Software Engineer,
can deliver the work competently. An existing fit should be assigned instead
of creating a new post.

Human Resources independently checks that the need is genuine and tied to the
work order; no active engineer already fits; duties and competencies are
specific; the proposed tools are the minimum necessary; checks name existing
commands rather than arbitrary shell text and have reviewed side effects; and
implementation remains separate from inspection and audit. HR records
endorsement or decline with reasons.
After endorsement, the Engineering Manager applies the merit test and records
the appointment decision. No appointment is valid merely because an agent file
exists.

## Fixed limits and onboarding

Every generated engineer receives only `read`, `search`, `edit`, and `execute`
tools, with `read` and `search` mandatory. It receives no `agent` tool and no
delegated agents. The governance section of generated agent definitions and the
check-runner implementation are fixed by the plugin and cannot be changed by a
requisition or appointment. Specialist checks use reviewed local command
arrays. `shell: false` prevents shell parsing but is not a sandbox: a configured
program may execute code, access the network, install packages, or modify files.
MCP servers may be proposed in the hiring
packet, but are never installed or configured by the plugin; the resident and
system owner decide separately whether to install one.

The hire creates the exact agent, skill, reference, toolkit, check-configuration,
and workforce staff-record paths shown in a preview. Existing files are never
overwritten. A generated-file digest is recorded so `status` and `validate`
can report missing or hand-edited files as drift. Drift is reported, not
enforced; it does not authenticate a hire or grant new authority.

## Assignment, review, retirement, and revocation

Only active staff may be assigned. The Engineering Manager assigns a specialist
only to an authorized work order, and the specialist remains within the
work-order projects, criteria, and existing repository checks. The Inspector
independently reviews delivery. The Auditor may inspect the request, HR review,
appointment, generated-file digests, assignment, retirement, and handover.

Human Resources records retirement and the proposed handover of unfinished
assignments. Generated files remain in place; deletion is a separate resident
decision. The resident may revoke this delegation by amending or removing this
policy and recording the revision. Revocation does not silently erase staff or
past appointment records; pause new specialist appointments, reconcile
assignments, and preserve the decision history.

All appointment, review, hire, assignment, and retirement records are local
claims with `authenticated: false`. They document process; they do not prove
who acted, establish actual host permissions, or replace human review. When
competence, authority, independent review, resource limits, or a safe handover
is missing, pause and refer the matter to the resident.
