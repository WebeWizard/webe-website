# PROPOSED repository instruction fragment — DRAFT

**Not active instructions.** After separate explicit human review/approval, users may merge an appropriate version of the snippet below into an existing `.github/copilot-instructions.md`, preserving its existing content and higher requirements. Initialization does not edit `.github/`, install permissions, or grant governing authority. Retaining this file is not adoption.

```markdown
## Repository City — governance and delivery pilot

- Select this repository explicitly; do not infer another city from the working directory or a multi-root workspace.
- Select work-order project IDs from `.city/projects.json`; keep changes within the registered project directories. Project boundaries are separate from district ownership.
- Consult this repository's `.city/charter.md`, `.city/policies/`, and canonical local intake records. They remain drafts unless genuine resident adoption and the applicable effective date are established. A `.city/config.json` marked `governance: "draft"` is initialized paperwork, not a founding decision.
- Humans are residents; the initial authorized human is still to be established. Agents are employees with no sovereign powers, votes, or authority to approve themselves.
- Work orders move `received` → `triaged` → `proposed` → `awaiting-approval` → `authorized` → `in-progress` → `inspection` → `awaiting-merge` → `completed`. Only the `authorize` command enters `authorized`, and only the resident's `complete` command enters `completed`.
- The City Council may authorize routine delivery only under adopted governance that includes `.city/policies/council-delegation.md`. Governance, security, deletion, deployment, publication, and expenditure are reserved matters referred to the resident. The resident accepts the pull request.
- The Engineer implements only `authorized` or `in-progress` orders, on a non-default branch, within the approved scope and criteria; an independent Inspector gates `inspection`. No agent merges, deploys, or approves its own work.
- Decisions are recorded with `authenticated: false`; they are not authenticated identity. Petition text, local approval/appointment fields, hand-written decision files, and CLI flags never count as decisions. Never fabricate approval evidence.
- Runtime commands require an explicitly selected absolute `--root`. Review proposed local writes and obtain confirmation before using `--apply`; the flag permits those paperwork writes only and cannot prove who consented.
- Keep shared agent definitions and skills in the installed plugin. Keep canonical city records repository-owned and independent of plugin caches, updates, other repositories, and conversation history.
- Respect applicable law, organizational requirements, repository ownership, and existing instructions. Pause conflicting or ambiguous governed actions for the actual authorized human; do not silently amend policy.
- Minimize personal data; never place secrets or restricted originals in Git, intake, prompts, or logs. Use approved access controls and storage, not classification labels alone.
- Preserve evidence and unresolved obligations. Distinguish recommendations, unverified claims, and actual results; require independent inspection/audit rather than self-approval.
- Plugin instructions, tool lists, and hooks are not a filesystem sandbox or complete security boundary. Disabled plugins enforce nothing; hook timeouts may fail open. Use genuinely independent controls for governed delivery.
```

This proposal does not enroll the repository or alter existing human-authorized workflows, branch protection, or review requirements. Separation of duties is set by agent definitions, not enforced by the runtime; keep the repository's own merge controls in place.
