---
version: "1.0.0"
last_updated: "16/05/2024"
status: "complete"
author: "MDBA Process Design Team"
title: "Basin Plan Review Process Design Summary"
description: "Summary of the MDBA Basin Plan Review 2026 Process Design Project, including BPMN requirements and DAMF mapping specifications"
---
MDBA Basin Plan Review Process Design Project – Summary

Purpose and Scope
The MDBA Basin Plan Review 2026 Submissions Process Design Project has been commissioned to design a fit-for-purpose, legislatively compliant, and user-centred process for managing submissions under Section 51 of the Water Act 2007. The process must address complex requirements around inclusivity (especially for First Nations groups), accessibility, data governance, ICIP protections, and scalability to accommodate 5,000–10,000+ submissions.

Approach
The project is structured into defined phases:
- Discovery Phase: Established foundational understanding of users, stakeholders, legislative constraints, and system requirements.
- Design Phase: Development of artefacts including BPMN process maps, service blueprints, and journey maps to guide the system and process design.
- Validation Phase: Iterative stakeholder testing and refinement to ensure alignment with operational realities and strategic goals.

The project is governed by MDBA's Enterprise Architecture Framework and digital strategy, including Configure-before-Code, Reuse-before-Build, and compliance with DAMF data management principles.

BPMN Process Diagram Requirements
The project mandates the development of End-to-End Process Maps using BPMN standards. These diagrams must:
- Be created using Microsoft Visio.
- Adhere to BPMN 2.0 best practice standards.
- Show workflows, decision points, escalation paths, and system handoffs.
- Include validation, review, redaction, and feedback loops.
- Be traceable to user personas, system behaviours, and compliance requirements.

Diagram Development Rules
- Consistency: Standard BPMN symbols as per MDBA EA standards.
- Clarity: Linear clarity in decision trees, avoiding over-complexity.
- Alignment: Must align with the related Service Blueprint and journey map.
- Lifecycle Mapping: Diagrams must map to the six stages: Invitation, Collection, Analysis, Consideration, Publication, Reporting.
- Compliance-first design: Embed Water Act, Privacy Act, FOI, ICIP, and data stewardship protocols into workflow steps.
- Use Swimlanes: Clearly delineate roles, responsibilities, and system boundaries.

Comprehensive List of BPMN Diagrams Required
1. Invitation Process
2. Submission Intake
3. Consent and Privacy Capture
4. Triage and Categorisation
5. SME and Legal Review Routing
6. Redaction Workflow
7. Submission Status Tracking
8. Publication Management
9. Reporting and Analytics
10. Data Archiving & Retention

DAMF Mapping and Metadata Documentation Requirement
All BPMN process diagrams and related service blueprints must be accompanied by:
- Off-page explanatory notes providing contextual information, assumptions, exclusions, dependencies, and supporting commentary.
- A corresponding DAMF Map (using the MDBA DAMF Mapping template) identifying:
    - Data Assets
    - Transformation Processes
    - Governance touchpoints
    - Data lineage
- A corresponding DAMF Catalogue entry for every data asset depicted, including:
    • Asset ID
    • Asset Name
    • Supplier/Author
    • Evaluated by
    • Authorised by
    • File Location (Internal and/or Published)
    • Data Sensitivity Classification
    • Data Steward / Owner
    • Applicable Data Governance Controls
    • DAMF Compliance Status
- The DAMF Map and DAMF Catalogue must be:
    - Version controlled
    - Referenced in the BPMN artefact pack and project artefact register
    - Maintained through project lifecycle updates

This requirement applies to all submission process diagrams and any supporting data transformation, integration, reporting, or internal operational data flows.

Summary
The MDBA Basin Plan Review Process Design Project delivers a fully integrated system of service blueprints, BPMN diagrams, DAMF Maps, and metadata documentation to ensure compliance, defensibility, operational efficiency, and user-centred design. These artefacts form the foundation for process delivery, stakeholder engagement, legislative compliance, and continuous improvement in alignment with MDBA Digital Strategy and Enterprise Architecture principles.

