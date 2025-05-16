---
version: "1.0.0"
last_updated: "16/05/2024"
---
# Basin Plan Review Process Mapping

This document maps the relationships between BPMN process diagrams and their corresponding documentation, ensuring traceability and completeness across the Basin Plan Review 2026 project.

## Core Process Models

| BPMN Model | Context Document | Status |
|------------|-----------------|---------|
| [`models/approved/mdba-bpr-end-to-end-process.bpmn`](../../models/approved/mdba-bpr-end-to-end-process.bpmn) | [`docs/process-design/context/bpr-end-to-end-process.md`](../context/bpr-end-to-end-process.md) | Complete |
| [`models/approved/mdba-bpr-invitation-phase.bpmn`](../../models/approved/mdba-bpr-invitation-phase.bpmn) | [`docs/process-design/context/bpr-invitation-phase.md`](../context/bpr-invitation-phase.md) | Complete |
| [`models/approved/mdba-bpr-collection-phase.bpmn`](../../models/approved/mdba-bpr-collection-phase.bpmn) | [`docs/process-design/context/bpr-collection-phase.md`](../context/bpr-collection-phase.md) | Complete |
| [`models/approved/mdba-bpr-analysis-phase.bpmn`](../../models/approved/mdba-bpr-analysis-phase.bpmn) | [`docs/process-design/context/bpr-analysis-phase.md`](../context/bpr-analysis-phase.md) | Complete |
| [`models/approved/mdba-bpr-consideration-phase.bpmn`](../../models/approved/mdba-bpr-consideration-phase.bpmn) | [`docs/process-design/context/bpr-consideration-phase.md`](../context/bpr-consideration-phase.md) | Complete |
| [`models/approved/mdba-bpr-decision-phase.bpmn`](../../models/approved/mdba-bpr-decision-phase.bpmn) | [`docs/process-design/context/bpr-decision-phase.md`](../context/bpr-decision-phase.md) | Complete |
| [`models/approved/mdba-bpr-publication-phase.bpmn`](../../models/approved/mdba-bpr-publication-phase.bpmn) | [`docs/process-design/context/bpr-publication-phase.md`](../context/bpr-publication-phase.md) | Complete |
| [`models/approved/mdba-bpr-reporting-phase.bpmn`](../../models/approved/mdba-bpr-reporting-phase.bpmn) | [`docs/process-design/context/bpr-reporting-phase.md`](../context/bpr-reporting-phase.md) | Complete |

## Supporting Process Models

| BPMN Model | Context Document | Status |
|------------|-----------------|---------|
| [`models/approved/mdba-bpr-consent-privacy.bpmn`](../../models/approved/mdba-bpr-consent-privacy.bpmn) | [`docs/process-design/context/bpr-consent-privacy.md`](../context/bpr-consent-privacy.md) | Complete |
| [`models/approved/mdba-bpr-triage-categorisation.bpmn`](../../models/approved/mdba-bpr-triage-categorisation.bpmn) | [`docs/process-design/context/bpr-triage-categorisation.md`](../context/bpr-triage-categorisation.md) | Complete |
| [`models/approved/mdba-bpr-sme-legal-review.bpmn`](../../models/approved/mdba-bpr-sme-legal-review.bpmn) | [`docs/process-design/context/bpr-sme-legal-review.md`](../context/bpr-sme-legal-review.md) | Complete |
| [`models/approved/mdba-bpr-redaction-workflow.bpmn`](../../models/approved/mdba-bpr-redaction-workflow.bpmn) | [`docs/process-design/context/bpr-redaction-workflow.md`](../context/bpr-redaction-workflow.md) | Complete |
| [`models/approved/mdba-bpr-submission-tracking.bpmn`](../../models/approved/mdba-bpr-submission-tracking.bpmn) | [`docs/process-design/context/bpr-submission-tracking.md`](../context/bpr-submission-tracking.md) | Complete |
| [`models/approved/mdba-bpr-data-archiving.bpmn`](../../models/approved/mdba-bpr-data-archiving.bpmn) | [`docs/process-design/context/bpr-data-archiving.md`](../context/bpr-data-archiving.md) | Complete |

## Related Documentation
- [Process Design Documentation](../README.md)
- [BPMN Diagram Requirements](bpr-bpmn-diagram-requirements.md)
- [Service Concept](bpr-service-concept.md)
- [Naming Convention Migration](../decisions/naming-convention-migration.md)

## Status Legend
- Complete: Process model and context document are finalised and approved
- Draft: Process model or context document is under review
- Pending: Process model or context document is planned but not yet started

## Notes
- All process models follow the BPMN 2.0 standard
- Context documents provide detailed information about each process
- For more information on naming conventions, see [BPMN Diagram Requirements](bpr-bpmn-diagram-requirements.md#file-naming-conventions)
- Last updated: 16/05/2024 