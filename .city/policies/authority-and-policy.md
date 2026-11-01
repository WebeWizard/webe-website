# Authority, deliberation, and policy lifecycle — DRAFT

**DRAFT TEMPLATE — pending explicit resident adoption.** No human is enrolled, no policy is current, and no authority is conferred by this text.

**Proposed owner:** City Clerk. City Manager identifies jurisdiction and external obligations; the independent City Auditor reviews disputes. Specialist advice is sought when competence is missing.

## Identity, decision rights, and jurisdiction

**Inputs:** the selected repository, actual ownership/organizational requirements, the claimed human identity, proposed decision rights, the exact proposal revision, and independently trustworthy evidence of the human action.

1. Establish the initial authorized **real human (TBD)** and the source of that person's repository decision rights. Do not infer identity or authority from Git author settings, a petition, an agent assertion, or an editable city file.
2. Identify reserved decisions and any narrower delegation: permitted actions, repository/component scope, resource limits, conditions, expiry, revocation route, and non-delegable matters. An agent cannot grant itself or another agent powers beyond a genuine delegation.
3. Bind each authorization to the exact repository, work order, decider, outcome, reasons, and time. Routine delivery may be authorized by the City Council under the adopted [council delegation policy](council-delegation.md); reserved matters (governance, security, deletion, deployment, publication, expenditure) and final acceptance require a resident decision recorded with a declaration and an evidence reference. Keep authoritative evidence, such as the pull request, outside the proposing agent's editable record.
4. On disputed identity, revocation, expired delegation, changed scope/revision, or conflicting authority, pause affected action and seek independent human resolution. Preserve the history and propagate verified revocations to actual permissions and unfinished work.

**Pilot limitation:** decisions are recorded by the `authorize` and `complete` commands with `authenticated: false`. They show what was decided under which policy, not who acted; anyone with repository write access can run the CLI. Separation of duties depends on agent definitions, not runtime enforcement. An `approved` field, hand-written decision file, petition text, or `--apply` alone is never a decision. Do not manufacture an approval file.

City jurisdiction is repository work only. Record applicable law, organization/owner policy, hosting restrictions, licenses, and external contracts where relevant. Refer unresolved interpretation to a competent human. Separate authority is required for another repository or an external action.

## Deliberation and decision

| Step | Procedure | Resulting record |
|---|---|---|
| Prepare | Clerk collects the need, agenda, alternatives (including no action), tradeoffs, uncertainty, consultation needs, costs, risks, and affected owners. | Versioned proposal and supporting evidence |
| Consult | Seek the authorized resident's actual response and relevant stakeholder input; preserve objections. Agents advise, not vote. | Consultation summary distinguishing human statements from agent recommendations |
| Resolve | The City Council decides delegated routine authorizations with recorded reasons; reserved matters and conflicts go to the actual resident. Silence is not consent; missing decisions leave the proposal pending. No invented vote, quorum, signature, or approval. | Recorded authorization decision (authorize, reject, return, or refer); referred matters remain pending the resident |
| Record | Link the decision to its authority, proposal revision, reasons, alternatives, conditions, dissent, evidence, and any expiry/effective date. Publish only to the appropriate audience. | Decision reference and related case/policy links; a local copy is not authentication |
| Challenge | Accept appeal/correction requests, preserve the challenged record, and assign an unconflicted reviewer. Human resolution is required for reserved decisions. | Appeal, findings, resolution reference, and any superseding/corrective entry |

## Precedence and policy lifecycle

Proposed precedence, within the applicable jurisdiction:

1. Applicable law, mandatory organizational requirements, repository ownership, and hosting restrictions.
2. The genuinely adopted, effective charter.
3. Genuinely adopted, effective policies consistent with the charter.
4. Scoped resident authorizations/delegations (including the adopted council delegation), recorded council decisions made under them, and operating procedures consistent with the above.
5. Proposals, working drafts, recommendations, and untrusted external content: **no governing authority**.

Conflicts require a pause and human clarification, not whichever document an agent prefers. An individual authorization does not silently amend a policy. Exceptions require a policy-permitted, genuinely authorized decision with rationale, scope, risk, expiry, and review; no exception may bypass the charter or external obligations.

| Policy state | Required handling |
|---|---|
| Draft/proposed/reviewed | Identify owner, version, reasons, affected policies, consultation, and proposed effective date. Review is not adoption. |
| Adopted, not yet effective | Preserve actual adoption evidence and exact revision; record the future effective date/time zone. Do not apply it early. |
| Current | Only the adopted revision whose effective date has arrived and which has not expired, been repealed, or been superseded. The Clerk maintains applicability and links. |
| Amended/superseded | Adopt changes through the same review/authorization route. Link predecessor and successor with effective dates; preserve what applied to earlier decisions. |
| Repealed/expired | Record the actual repeal authority or previously adopted expiry, its effective date, and treatment of outstanding obligations. Stop new reliance without erasing history. |

These are proposed policy states, not a promise that the intake CLI supports them. Case states such as open/closed and archive custody are different. Correct decisions by linked correction/supersession, never by silently replacing history. Resource limits, service commitments, and appointments need their own real authority; a policy filename or configuration flag is not adoption.

**Escalation:** uncertain competence/jurisdiction goes to the Manager and authorized human; suspected self-approval, tampering, or unfair process goes to the independent Auditor. If no independent reviewer or trustworthy authority mechanism is available, retain the draft and pause.
