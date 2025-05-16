---
version: "1.0.0"
last_updated: "16/05/2024"
---
# MDBA Basin Plan Review Process Mapping

This document maps the relationships between BPMN process diagrams and their corresponding documentation, ensuring traceability and completeness across the Basin Plan Review 2026 project.

## Process Mapping

### Parent Process
| BPMN File | Context Doc | Status | Last Updated | Notes |
|-----------|-------------|---------|--------------|-------|
| `models/drafts/mdba-bpr-end-to-end-process.bpmn` | `docs/process-design/context/bpr-end-to-end-process.md` | Complete | 16/05/2024 | Master diagram showing all process connections |

### Core Process Phases
| BPMN File | Context Doc | Status | Last Updated | Notes |
|-----------|-------------|---------|--------------|-------|
| `models/drafts/mdba-bpr-invitation-phase.bpmn` | `docs/process-design/context/bpr-invitation-phase.md` | Complete | 16/05/2024 | Discussion Paper and invitation process |
| `models/drafts/mdba-bpr-collection-phase.bpmn` | `docs/process-design/context/bpr-collection-phase.md` | Complete | 16/05/2024 | Submission intake process |
| `models/drafts/mdba-bpr-analysis-phase.bpmn` | `docs/process-design/context/bpr-analysis-phase.md` | Complete | 16/05/2024 | Validation and initial triage |
| `models/drafts/mdba-bpr-consideration-phase.bpmn` | `docs/process-design/context/bpr-consideration-phase.md` | Complete | 16/05/2024 | Detailed review process |
| `models/drafts/mdba-bpr-decision-phase.bpmn` | `docs/process-design/context/bpr-decision-phase.md` | Complete | 16/05/2024 | Final decision-making process |
| `models/drafts/mdba-bpr-publication-phase.bpmn` | `docs/process-design/context/bpr-publication-phase.md` | Complete | 16/05/2024 | Publication management process |
| `models/drafts/mdba-bpr-reporting-phase.bpmn` | `docs/process-design/context/bpr-reporting-phase.md` | Complete | 16/05/2024 | Reporting and analytics process |

### Supporting Processes
| BPMN File | Context Doc | Status | Last Updated | Notes |
|-----------|-------------|---------|--------------|-------|
| `models/drafts/mdba-bpr-consent-privacy.bpmn` | `docs/process-design/context/bpr-consent-privacy.md` | Complete | 16/05/2024 | Consent and privacy compliance |
| `models/drafts/mdba-bpr-triage-categorisation.bpmn` | `docs/process-design/context/bpr-triage-categorisation.md` | Complete | 16/05/2024 | Triage and categorisation workflow |
| `models/drafts/mdba-bpr-sme-legal-review.bpmn` | `docs/process-design/context/bpr-sme-legal-review.md` | Complete | 16/05/2024 | SME and legal review routing |
| `models/drafts/mdba-bpr-redaction-workflow.bpmn` | `docs/process-design/context/bpr-redaction-workflow.md` | Complete | 16/05/2024 | Redaction and ICIP handling |
| `models/drafts/mdba-bpr-submission-tracking.bpmn` | `docs/process-design/context/bpr-submission-tracking.md` | Complete | 16/05/2024 | Submission status tracking |
| `models/drafts/mdba-bpr-data-archiving.bpmn` | `docs/process-design/context/bpr-data-archiving.md` | Complete | 16/05/2024 | Data archiving and retention |

## Status Legend
- Complete: Both BPMN and context documentation exist and are up to date
- In Progress: Documentation or BPMN file is being worked on
- Pending: Documentation or BPMN file is planned but not started
- Review: Documentation or BPMN file needs review

## Notes
- All BPMN files are currently in the `drafts` directory
- All context documentation is in the `docs/process-design/context` directory
- File naming follows the convention:
  - BPMN: `mdba-bpr-{process-name}.bpmn`
  - Context: `bpr-{process-name}.md`
- Last updated dates reflect the most recent change to either the BPMN or context documentation 