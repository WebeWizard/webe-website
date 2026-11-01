# Records, custody, access, and privacy — DRAFT

**DRAFT TEMPLATE — pending explicit resident adoption.** This proposes recordkeeping duties; it does not create official decisions, approved retention periods, access grants, or completed registers.

**Proposed owner:** Records Officer. The Clerk owns decision provenance and register links; the Auditor independently checks completeness and integrity, with only appropriately authorized access.

## Institutional memory and custody

| Record family | Proposed contents |
|---|---|
| Legislation | Charter, policies, adoption references, effective dates, amendments, repeals, and superseded revisions |
| Decisions | Actual decision-maker, authority, reasons, alternatives, conditions, and evidence references |
| Resident cases | Petitions, complaints, appeals, commitments, communication, and outcomes |
| Operations | Work orders, inspection evidence, releases, incidents, and unfinished obligations |
| Resources | Capacity, proposed/authorized/committed/actual resources, assets, dependencies, and suppliers |
| Appointments | Authorized role definitions/versions, delegation, permission changes, handovers, and retirement |

These are logical record families, not a requirement for six new databases or directories. The pilot runtime supports governance, work-order, and decision records (proposal, authorization, and acceptance); other record types remain proposed requirements.

Keep one canonical record for each matter and link related evidence. Issues, dashboards, and conversation summaries may point to it, not become independently maintained state. The installed plugin contains shared definitions/skills; local records belong to the selected repository and never to its plugin cache or another city.

## Capture and preservation

**Inputs:** action/case, actual evidence, responsible office, claimed and verified authority distinguished, affected revisions, and the intended audience.

1. Assign a stable, city-local unique identifier using the runtime's supported format; never reuse an identifier. For future record types, establish their identifier rules before operational use.
2. Record actual timestamps with an offset/time zone, type/status, responsible office, source, classification, related identifiers, authority/evidence references, and retention basis. Identify the proposal/change revision, relevant role-definition version, and plugin provenance where applicable. Mark missing data honestly; never invent completion or verification.
3. Separate assertions from observations. Inspection evidence should identify the actual command/check, covered revision, result and relevant output/artifact, not merely “passed.” A local approval field remains an unverified claim without trustworthy external evidence.
4. Classify and minimize before storage. Store only sanitized material in Git; use an approved controlled store for restricted originals and safe references in repository records. Do not duplicate sensitive originals into issues, prompts, logs, or plugin data.
5. Preserve status history, dependencies, and unresolved obligations across sessions. A work order cannot be `completed` until its authorization decision, inspection, resident acceptance decision, and record links are complete.

## Classification and access

| Classification | Handling |
|---|---|
| Repository/internal | Sanitized governance and case material visible only to the repository's intended authorized audience. Git visibility must actually match that audience. |
| Restricted | Necessary personal, contractual, security-sensitive, or otherwise controlled material belongs in an appropriately access-controlled store outside Git; use a minimized reference where safe. |
| Secret | Credentials, tokens, private keys, and equivalent secrets do not belong in city records, Git, CLI arguments, prompts, or logs. Use the organization's approved secret system; retain only a safe locator if permitted. |

“Public reasoning” means access for the intended authorized audience, not automatic publication to the internet. Explicit human authorization is needed for broader release. If no suitable restricted store or lawful basis is approved, do not collect the material in intake; escalate through the existing authorized human channel.

For an access request, identify the requested record and actual requester entitlement through an appropriate independent channel; apply minimum necessary disclosure, redaction, and a reasoned grant/denial. Keep restricted originals protected. Local record fields do not enforce permissions: repository, filesystem, hosting, and controlled-store permissions must do the real work.

## Retention, corrections, and appeals

The human must approve retention periods, archival triggers, access owners, deletion authority, and any legal/organizational holds by record class; all are **TBD**. Do not invent a permanent retention rule or a default deletion deadline. Pending that decision, minimize collection and do not destroy canonical governance evidence; escalate conflicts promptly to the responsible human.

Corrections append a dated, attributable correction or superseding entry linked in both directions, with reasons and affected decisions. Preserve the original and evidence under appropriate restrictions where lawful; do not preserve prohibited personal data merely for audit convenience. Authorized redaction/erasure follows applicable requirements and records a minimized reason and disposition without reproducing the removed material. Ordinary corrections must not silently overwrite history.

Access denial, disputed accuracy, inappropriate disclosure, or suspected tampering can be appealed to an unconflicted Auditor and actual resident. Record the request, review, resolution reference, and verified remediation; do not publish disputed sensitive details merely to demonstrate transparency.

The Clerk maintains provenance, the Records Officer safeguards custody/preservation, and the Auditor independently tests those duties without editing evidence to approve its own work. Git is neither immutable nor a complete backup. Backups and proven restoration belong to the [continuity procedure](continuity-and-accountability.md).
