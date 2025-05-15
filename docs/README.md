# MDBA Process Models Documentation

## Workspace Structure

This workspace is organised as follows:

- `models/` - Contains all BPMN process models
  - `drafts/` - Work-in-progress models that are not yet approved
  - `approved/` - Finalised and approved process models
- `docs/` - Documentation related to process models and standards

## Naming Conventions

Follow these naming conventions for process models:

1. Use clear, descriptive names for process files
2. Follow the format: `[process-area]_[process-name].bpmn`
3. Use hyphens to separate words within process area or name
4. Examples:
   - `hr_employee-onboarding.bpmn`
   - `finance_invoice-processing.bpmn`

## Process Modelling Standards

When creating BPMN diagrams:

1. Use proper BPMN 2.0 notation
2. Include documentation for complex activities
3. Follow Australian standards where applicable
4. Use 24-hour time format for any timing references
5. Use Australian date format (DD/MM/YYYY) for any date references

## Review Process

All process models should undergo review before being moved to the approved directory:

1. Initial creation in `models/drafts/`
2. Peer review by relevant stakeholders
3. Approval by process owner
4. Move to `models/approved/` once finalised 