---
version: "1.0.0"
last_updated: "16/05/2024"
---
# BPMN Diagram Requirements for MDBA Basin Plan Review 2026

## Overview
This document tracks the required BPMN process diagrams for the MDBA Basin Plan Review 2026 project. Each diagram must adhere to BPMN 2.0 standards and MDBA Enterprise Architecture requirements.

## Required Diagrams

### Parent Process
- [x] End-to-End Basin Plan Review Process (`mdba-bpr-end-to-end-process.bpmn`)
  - Status: Complete
  - Priority: Highest
  - Completed: 16/05/2024
  - Last Updated: 16/05/2024
  - Context: [docs/process-design/context/bpr-end-to-end-process.md](docs/process-design/context/bpr-end-to-end-process.md)
  - Covers: 
    - Complete lifecycle of the BPR process
    - Major phase transitions and dependencies
    - Key decision points and gateways
    - High-level swimlanes for major stakeholder groups
    - Critical success factors and KPIs
    - Integration points with external systems
  - Notes: This is the master diagram that shows how all other processes connect and interact

### Core Process Phases
- [x] Invitation Process (`mdba-bpr-invitation-phase.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Last Updated: 16/05/2024
  - Context: [docs/process-design/context/bpr-invitation-phase.md](docs/process-design/context/bpr-invitation-phase.md)
  - Covers: Discussion Paper preparation, official invitation, state distribution, and submission guidelines

- [x] Submission Intake (`mdba-bpr-collection-phase.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Last Updated: 16/05/2024
  - Context: [docs/process-design/context/bpr-collection-phase.md](docs/process-design/context/bpr-collection-phase.md)
  - Covers: Online portal, email, and hard copy submission processes

- [x] Analysis Phase (`mdba-bpr-analysis-phase.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Last Updated: 16/05/2024
  - Context: [docs/process-design/context/bpr-analysis-phase.md](docs/process-design/context/bpr-analysis-phase.md)
  - Covers: Validation, categorization, and initial triage of submissions

- [x] Consideration Phase (`mdba-bpr-consideration-phase.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Last Updated: 16/05/2024
  - Context: [docs/process-design/context/bpr-consideration-phase.md](docs/process-design/context/bpr-consideration-phase.md)
  - Covers: Detailed review and assessment of submissions

- [x] Decision Phase (`mdba-bpr-decision-phase.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Last Updated: 16/05/2024
  - Context: [docs/process-design/context/bpr-decision-phase.md](docs/process-design/context/bpr-decision-phase.md)
  - Covers: Final decision-making and approval processes

- [x] Publication Management (`mdba-bpr-publication-phase.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Last Updated: 16/05/2024
  - Covers: Publishing permissions, redactions, ICIP handling, and website publication
  - Priority: High
  - Notes: Includes swimlanes for Content Team, ICIP Team, and Web Team with comprehensive error handling

- [x] Reporting and Analytics (`mdba-bpr-reporting-phase.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Covers: What We've Heard Report and Final Report preparation, analytics and metrics generation
  - Priority: Medium
  - Notes: Includes swimlanes for Analytics Team, Report Team, and Approval Team with comprehensive error handling

### Supporting Processes
- [x] Consent and Privacy Capture (`mdba-bpr-consent-privacy.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Priority: High
  - Notes: Includes swimlanes for Submission Team, Privacy Team, and Compliance Team with comprehensive error handling for consent and privacy compliance

- [x] Triage and Categorisation (`mdba-bpr-triage-categorisation.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Priority: Medium
  - Notes: Includes swimlanes for Intake Team, Triage Team, and Quality Team with comprehensive error handling and categorisation workflow

- [x] SME and Legal Review Routing (`mdba-bpr-sme-legal-review.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Priority: High
  - Notes: Includes swimlanes for Coordinator Team, SME Team, Legal Team, and Quality Team with comprehensive error handling and parallel review paths

- [x] Redaction Workflow (`mdba-bpr-redaction-workflow.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Priority: High
  - Notes: Includes swimlanes for Content Team, ICIP Team, Legal Team, and Quality Team with comprehensive error handling and parallel review paths for ICIP and legal compliance

- [x] Submission Status Tracking (`mdba-bpr-submission-tracking.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Priority: Medium
  - Notes: Includes swimlanes for Intake Team, Processing Team, Notification Team, and Reporting Team with comprehensive status tracking, notifications, and metrics generation

- [x] Data Archiving & Retention (`mdba-bpr-data-archiving.bpmn`)
  - Status: Complete
  - Completed: 16/05/2024
  - Priority: Low
  - Notes: Includes swimlanes for Records Team, Compliance Team, Archive Team, and Quality Team with comprehensive error handling and retention policy compliance checks

## Diagram Standards
Each diagram must:
- Use BPMN 2.0 notation
- Include error definitions
- Define message flows
- Show validation checks
- Use swimlanes for role clarity
- Include DAMF mapping
- Follow MDBA EA standards

## Next Steps
1. [x] Create End-to-End Basin Plan Review Process (Parent Diagram)
2. [x] Complete Publication Management diagram
3. [x] Develop Consent and Privacy Capture process
4. [x] Create SME and Legal Review Routing diagram
5. [x] Design Redaction Workflow
6. [x] Implement remaining supporting processes

## Current Status and Future Tasks
1. Documentation and Context
   - [x] Create context documentation for all process diagrams
   - [x] Review and standardize file naming conventions
   - [x] Update process descriptions and metadata for all requirements files

2. Quality Assurance
   - [ ] Validate all BPMN XML files for compliance
   - [ ] Review swimlane assignments and role clarity
   - [ ] Verify error handling and boundary events
   - [ ] Check process documentation completeness

3. Integration and Review
   - [ ] Map process interactions and dependencies
   - [ ] Review end-to-end process flow
   - [ ] Validate against DAMF requirements
   - [ ] Conduct stakeholder review

4. Maintenance and Updates
   - [ ] Establish version control procedures
   - [ ] Define change management process
   - [ ] Set up regular review schedule
   - [ ] Create maintenance documentation

## File Naming Conventions

### BPMN Diagram Files
- Location: `models/{status}/`
- Pattern: `mdba-bpr-{process-name}.bpmn`
- Status folders: `drafts/`, `approved/`
- Examples:
  - `mdba-bpr-end-to-end-process.bpmn`
  - `mdba-bpr-invitation-phase.bpmn`
  - `mdba-bpr-consent-privacy.bpmn`

### Context Documentation Files
- Location: `docs/process-design/context/`
- Pattern: `bpr-{process-name}.md`
- Examples:
  - `bpr-end-to-end-process.md`
  - `bpr-invitation-phase.md`
  - `bpr-consent-privacy.md`

### Naming Rules
1. **Prefixes**
   - BPMN files: Always use `mdba-bpr-` prefix
   - Context files: Always use `bpr-` prefix

2. **Process Names**
   - Use kebab-case (lowercase with hyphens)
   - Use consistent terminology:
     - `-phase` suffix for major process phases
     - `-process` suffix for end-to-end and supporting processes
     - No suffix for specific workflows

3. **Status Management**
   - Draft files: Store in `models/drafts/`
   - Approved files: Store in `models/approved/`
   - Version control: Use semantic versioning in metadata

4. **Special Cases**
   - End-to-end process: Always use `end-to-end-process`
   - Supporting processes: Use descriptive names without `-phase` suffix
   - Workflows: Use specific descriptive names (e.g., `redaction-workflow`)

### Required Updates
1. Rename files to follow conventions:
   - [ ] Move all BPMN files to appropriate status folders
   - [ ] Standardize context file names
   - [ ] Update all references to renamed files

2. Update documentation:
   - [ ] Update README.md with naming conventions
   - [ ] Update all cross-references
   - [ ] Update process documentation

3. Version control:
   - [ ] Create migration plan for file renaming
   - [ ] Update .gitignore if needed
   - [ ] Document naming convention in contributing guidelines

## Notes
- All diagrams must be created using Microsoft Visio
- Each diagram requires accompanying DAMF mapping
- Diagrams must be traceable to user personas and compliance requirements
- Regular reviews required to ensure alignment with MDBA standards 