---
process_id: Process_BPR_InvitationPhase
process_name: 2026 Basin Plan Review Invitation Phase
version: 1.1.0
last_updated: 20/03/2024
status: draft
related_files:
  - models/drafts/mdba-bpr-invitation-phase.bpmn
  - .cursor/rules/bpmn-naming-conventions.mdc
---

# Basin Plan Review Invitation Phase Context

## Overview

The Basin Plan Review (BPR) Invitation Phase is the initial stage of the 2026 Basin Plan Review process. This phase is critical for setting the foundation of the review by establishing clear communication channels, expectations, and guidelines for stakeholder participation. The process follows a structured approach with parallel publication paths and comprehensive review steps to ensure quality and compliance.

## Business Context

### Purpose
The invitation phase serves to:
- Initiate the formal Basin Plan Review process
- Establish clear communication channels with stakeholders
- Set expectations for participation and submissions
- Provide necessary documentation and guidelines
- Ensure all stakeholders are properly informed and prepared
- Maintain compliance with legislative requirements
- Ensure consistent messaging across all publication channels

### Regulatory Framework
- Water Act 2007 (Cth)
- Basin Plan 2012
- MDBA's statutory obligations for review
- State and Territory water management legislation
- Commonwealth Government Gazette publication requirements
- Accessibility and communication standards

### Stakeholders

#### Primary Stakeholders
- Basin States (NSW, Victoria, Queensland, South Australia, ACT)
- Commonwealth Government
- MDBA Executive and Board
- Basin Community Committee
- MDBA Review Team
- MDBA Communications Team
- MDBA Legal Team

#### Secondary Stakeholders
- Industry groups
- Environmental organisations
- Community representatives
- Scientific and technical experts
- Water users and managers
- Media outlets (for publication)
- Website users

## Process Context

### Inputs
- Basin Plan Review Terms of Reference
- Previous review findings and recommendations
- Current Basin Plan implementation status
- Stakeholder engagement history
- Regulatory requirements
- Legal review templates
- Editorial guidelines
- Publication templates

### Outputs
- Discussion paper
- Legal review documentation
- Editorial review documentation
- Official invitation documentation
- Gazette publication
- Newspaper publications
- Website content
- Submission guidelines
- Process specifications
- Distribution records
- Publication confirmations

### Dependencies
- Approval of review scope
- Availability of key personnel
- Stakeholder contact information
- Communication channels
- Document templates
- Legal team availability
- Editorial team availability
- Publication deadlines
- Website publishing system
- Gazette submission system

### Constraints
- Legislative timeframes
- Resource availability
- Stakeholder capacity
- Communication protocols
- Document approval processes
- Publication deadlines
- Website publishing schedules
- Gazette publication cycles
- Newspaper publication timelines

## Process Design Decisions

### Key Decisions
1. **Parallel Publication Process**
   - Decision: Implement parallel publication paths
   - Rationale: Ensures timely and consistent communication across all channels
   - Impact: Requires coordination but improves efficiency and reach

2. **Multi-stage Review Process**
   - Decision: Implement sequential legal and editorial reviews
   - Rationale: Ensures compliance and quality across all documentation
   - Impact: Adds quality control but extends timeline

3. **Organizational Structure**
   - Decision: Implement role-based lanes for clear accountability
   - Rationale: Ensures appropriate expertise and clear responsibility
   - Impact: Improves clarity but requires coordination

4. **Error Handling**
   - Decision: Implement timeout and escalation paths
   - Rationale: Ensures process continuity and issue resolution
   - Impact: Adds complexity but improves reliability

### Design Patterns
- Parallel process flow for publications
- Sequential review process
- Role-based task assignment
- Document-driven process
- Stakeholder notification pattern
- Error handling and escalation
- Timeout management

## Success Criteria

### Process Success
- All stakeholders receive invitation documentation
- Clear understanding of submission requirements
- Proper documentation of all communications
- Timely completion of all tasks
- Stakeholder acknowledgment of receipt
- Successful publication in all channels
- Completion of all review steps
- No publication timeouts or escalations

### Quality Criteria
- Documentation clarity and completeness
- Stakeholder comprehension
- Process efficiency
- Communication effectiveness
- Compliance with requirements
- Legal compliance
- Editorial quality
- Publication accuracy
- Website accessibility

## Risks and Mitigations

### Identified Risks
1. **Stakeholder Engagement**
   - Risk: Incomplete stakeholder coverage
   - Mitigation: Comprehensive stakeholder mapping

2. **Communication Clarity**
   - Risk: Misunderstanding of requirements
   - Mitigation: Clear documentation and feedback loops

3. **Timeline Management**
   - Risk: Process delays
   - Mitigation: Clear deadlines and monitoring

4. **Publication Coordination**
   - Risk: Inconsistent messaging across channels
   - Mitigation: Parallel gateway with join condition

5. **Review Process**
   - Risk: Delays in legal or editorial review
   - Mitigation: Clear review criteria and escalation paths

6. **Website Publication**
   - Risk: Technical issues with website publishing
   - Mitigation: Technical support and backup procedures

## Related Processes

### Upstream Processes
- Basin Plan Review Initiation
- Review Scope Definition
- Stakeholder Identification
- Legal Review Process
- Editorial Review Process

### Downstream Processes
- Submission Collection
- Review and Analysis
- Consultation and Feedback
- Publication Monitoring
- Stakeholder Response Management

## Maintenance Notes

### Version History
- 1.1.0 (20/03/2024): Added parallel publication paths, review steps, and organizational structure
- 1.0.0 (19/03/2024): Initial version

### Review Schedule
- Monthly process review
- Quarterly stakeholder feedback
- Annual comprehensive review
- Post-publication review
- Review process effectiveness assessment

### Update Triggers
- Regulatory changes
- Stakeholder feedback
- Process improvements
- System updates
- Publication channel changes
- Review process modifications
- Organizational structure changes

## References

### Internal References
- MDBA Process Models
- BPMN Naming Conventions
- Stakeholder Management Guidelines
- Legal Review Procedures
- Editorial Guidelines
- Publication Standards
- Website Publishing Guidelines

### External References
- Water Act 2007
- Basin Plan 2012
- MDBA Corporate Plan
- Stakeholder Engagement Framework
- Commonwealth Government Gazette Guidelines
- Accessibility Standards
- Communication Protocols

@version "1.1.0"
@last_updated "2024-03-20" 