---
version: "1.0.0"
last_updated: "16/05/2024"
status: "in-progress"
author: "MDBA Process Design Team"
title: "BPMN Diagram Requirements"
description: "Standards and requirements for BPMN process diagrams in the Basin Plan Review 2026 project"
---
# BPMN Diagram Requirements for MDBA Basin Plan Review 2026

## Overview
This document tracks the required BPMN process diagrams for the MDBA Basin Plan Review 2026 project. Each diagram must adhere to BPMN 2.0 standards and MDBA Enterprise Architecture requirements.

## Required Diagrams

### End-to-End Process
- BPMN File: `models/approved/mdba-bpr-end-to-end-process.bpmn`
- Context: [`../context/bpr-end-to-end-process.md`](../context/bpr-end-to-end-process.md)
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Invitation Phase
- BPMN File: `models/approved/mdba-bpr-invitation-phase.bpmn`
- Context: [`../context/bpr-invitation-phase.md`](../context/bpr-invitation-phase.md)
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Collection Phase
- BPMN File: `models/approved/mdba-bpr-collection-phase.bpmn`
- Context: [`../context/bpr-collection-phase.md`](../context/bpr-collection-phase.md)
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Analysis Phase
- BPMN File: `models/approved/mdba-bpr-analysis-phase.bpmn`
- Context: [`../context/bpr-analysis-phase.md`](../context/bpr-analysis-phase.md)
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Consideration Phase
- BPMN File: `models/approved/mdba-bpr-consideration-phase.bpmn`
- Context: [`../context/bpr-consideration-phase.md`](../context/bpr-consideration-phase.md)
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Decision Phase
- BPMN File: `models/approved/mdba-bpr-decision-phase.bpmn`
- Context: [`../context/bpr-decision-phase.md`](../context/bpr-decision-phase.md)
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Publication Management
- BPMN File: `models/approved/mdba-bpr-publication-phase.bpmn`
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Reporting and Analytics
- BPMN File: `models/approved/mdba-bpr-reporting-phase.bpmn`
- Status: Complete
- Priority: Medium
- Completion Date: 16/05/2024

### Consent and Privacy Capture
- BPMN File: `models/approved/mdba-bpr-consent-privacy.bpmn`
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Triage and Categorisation
- BPMN File: `models/approved/mdba-bpr-triage-categorisation.bpmn`
- Status: Complete
- Priority: Medium
- Completion Date: 16/05/2024

### SME and Legal Review Routing
- BPMN File: `models/approved/mdba-bpr-sme-legal-review.bpmn`
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Redaction Workflow
- BPMN File: `models/approved/mdba-bpr-redaction-workflow.bpmn`
- Status: Complete
- Priority: High
- Completion Date: 16/05/2024

### Submission Status Tracking
- BPMN File: `models/approved/mdba-bpr-submission-tracking.bpmn`
- Status: Complete
- Priority: Medium
- Completion Date: 16/05/2024

### Data Archiving & Retention
- BPMN File: `models/approved/mdba-bpr-data-archiving.bpmn`
- Status: Complete
- Priority: Low
- Completion Date: 16/05/2024

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
   - [x] Validate all BPMN XML files for compliance
     - All 14 BPMN files validated successfully
     - No critical errors found
     - Action items for warnings:
       - Add message flows to all processes
       - Add data objects and stores to all processes
       - Add gateways where appropriate
       - Add ICIP compliance checks to relevant processes
       - Add quality assurance checks to relevant processes
       - Add swimlanes to end-to-end process
       - Add error boundary events to submission tracking
   - [x] Review swimlane assignments and role clarity
     - All processes except end-to-end have swimlanes defined
     - Action item: Add swimlanes to end-to-end process
   - [x] Verify error handling and boundary events
     - All processes have basic error handling
     - Action item: Add error boundary events to submission tracking
   - [x] Check process documentation completeness
     - All processes have documentation
     - No documentation warnings found

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