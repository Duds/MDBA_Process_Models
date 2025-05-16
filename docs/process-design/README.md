# Process Design Documentation

This directory contains supporting documentation and context for the MDBA Process Models. The documentation is organized to support the development, maintenance, and understanding of BPMN process models.

## Directory Structure

```
docs/process-design/
├── context/           # Business context, stakeholders, and domain information
│   ├── stakeholders/  # Stakeholder analysis and requirements
│   ├── domain/        # Domain-specific information and terminology
│   └── regulations/   # Relevant regulations and compliance requirements
│
├── decisions/         # Design decisions and rationale
│   ├── architecture/  # Process architecture decisions
│   ├── patterns/      # Process patterns and their application
│   └── trade-offs/    # Design trade-offs and alternatives considered
│
├── requirements/      # Process requirements and specifications
│   ├── functional/    # Functional requirements
│   ├── non-functional/# Non-functional requirements
│   └── constraints/   # Process constraints and limitations
│
└── artifacts/         # Supporting artifacts and templates
    ├── forms/         # Form templates and specifications
    ├── checklists/    # Process checklists and guidelines
    └── templates/     # Document templates and examples
```

## Purpose

Each subdirectory serves a specific purpose in documenting the process design:

### Context
- Business context and background information
- Stakeholder analysis and requirements
- Domain-specific terminology and concepts
- Regulatory and compliance requirements
- Organisational context and constraints

### Decisions
- Design decisions and their rationale
- Process architecture decisions
- Pattern selection and application
- Trade-offs and alternatives considered
- Version history of significant changes

### Requirements
- Functional requirements for each process
- Non-functional requirements (performance, security, etc.)
- Process constraints and limitations
- Success criteria and acceptance criteria
- Integration requirements

### Artifacts
- Form templates and specifications
- Process checklists and guidelines
- Document templates and examples
- Supporting documentation
- Reference materials

## Usage

1. **For Process Designers**
   - Reference context when creating new processes
   - Document design decisions in the decisions folder
   - Maintain requirements documentation
   - Update artifacts as needed

2. **For Developers**
   - Review context before implementation
   - Follow documented design decisions
   - Implement according to requirements
   - Use provided artifacts and templates

3. **For Business Analysts**
   - Maintain stakeholder information
   - Update requirements as needed
   - Document business rules and constraints
   - Review and validate process designs

4. **For Reviewers**
   - Check alignment with requirements
   - Verify design decisions
   - Validate against business context
   - Review completeness of documentation

## Documentation Standards

1. **File Naming**
   - BPMN Files:
     - Location: `models/{status}/` (drafts/ or approved/)
     - Pattern: `mdba-bpr-{process-name}.bpmn`
     - Examples: 
       - `mdba-bpr-end-to-end-process.bpmn`
       - `mdba-bpr-invitation-phase.bpmn`
       - `mdba-bpr-consent-privacy.bpmn`
   
   - Context Documentation:
     - Location: `docs/process-design/context/`
     - Pattern: `bpr-{process-name}.md`
     - Examples:
       - `bpr-end-to-end-process.md`
       - `bpr-invitation-phase.md`
       - `bpr-consent-privacy.md`

   - Naming Rules:
     - Use kebab-case (lowercase with hyphens)
     - Use consistent terminology:
       - `-phase` suffix for major process phases
       - `-process` suffix for end-to-end and supporting processes
       - No suffix for specific workflows
     - Special cases:
       - End-to-end process: Always use `end-to-end-process`
       - Supporting processes: Use descriptive names without `-phase` suffix
       - Workflows: Use specific descriptive names (e.g., `redaction-workflow`)

2. **Content Format**
   - Use Markdown for documentation
   - Include frontmatter with metadata
   - Follow Australian English spelling
   - Use Australian date format (DD/MM/YYYY)

3. **Version Control**
   - Document major changes
   - Include change rationale
   - Maintain version history
   - Link to related process models

4. **Cross-References**
   - Link to related BPMN files
   - Reference relevant decisions
   - Link to requirements
   - Include traceability information

## Maintenance

- Review and update documentation regularly
- Keep context information current
- Document new decisions and changes
- Maintain version history
- Archive obsolete information

## Related Documentation

- BPMN Models: `models/`
- Process Rules: `.cursor/rules/`
- Implementation: `src/`
- Tests: `tests/`

@version "1.0.0"
@last_updated "2024-03-19" 