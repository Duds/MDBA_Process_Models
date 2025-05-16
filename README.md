# MDBA Basin Plan Review 2026 Process Models

This repository contains the Business Process Model and Notation (BPMN) process models for the Murray-Darling Basin Authority (MDBA) Basin Plan Review 2026 project.

## Overview

The repository includes:
- End-to-end process models for the Basin Plan Review 2026
- Supporting process models for submissions management
- Process documentation and requirements
- Validation tools and standards

## Structure

```
.
├── docs/
│   └── process-design/
│       ├── context/         # Process context documentation
│       ├── requirements/    # Process requirements
│       └── decisions/       # Design decisions
├── models/
│   ├── drafts/             # Draft BPMN models
│   └── approved/           # Approved BPMN models
└── scripts/                # Validation and utility scripts
```

## Process Models

### Core Process Phases
- End-to-End Basin Plan Review Process
- Invitation Process
- Submission Intake
- Analysis Phase
- Consideration Phase
- Decision Phase
- Publication Management
- Reporting and Analytics

### Supporting Processes
- Consent and Privacy Capture
- Triage and Categorisation
- SME and Legal Review Routing
- Redaction Workflow
- Submission Status Tracking
- Data Archiving & Retention

## Standards

All BPMN models follow:
- BPMN 2.0 standards
- MDBA Enterprise Architecture requirements
- DAMF compliance requirements
- Australian Government standards

## Development

### Prerequisites
- Camunda Modeler or compatible BPMN editor
- Node.js (for validation scripts)
- Git

### Validation
Run the validation script to check BPMN models:
```bash
./scripts/validate_bpmn.sh
```

## License

Copyright © 2024 Murray-Darling Basin Authority. All rights reserved.

## Contact

For questions about this repository, please contact the MDBA Digital Team. 