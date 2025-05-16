# Naming Convention Migration Plan

## Overview
This document tracks the implementation of the standardized naming conventions for the MDBA Basin Plan Review 2026 process models. While most files already follow the new conventions, some files in the requirements directory need to be renamed.

## Current Status

### 1. Preparation (Complete)
- [x] Define naming conventions
- [x] Update documentation
- [x] Create migration plan
- [x] Verify current file names
- [x] Document existing conventions

### 2. BPMN Files Status
Current Location: `models/drafts/`
Status: All files already follow conventions
- ✓ `mdba-bpr-end-to-end-process.bpmn`
- ✓ `mdba-bpr-invitation-phase.bpmn`
- ✓ `mdba-bpr-collection-phase.bpmn`
- ✓ `mdba-bpr-analysis-phase.bpmn`
- ✓ `mdba-bpr-consideration-phase.bpmn`
- ✓ `mdba-bpr-decision-phase.bpmn`
- ✓ `mdba-bpr-publication-phase.bpmn`
- ✓ `mdba-bpr-reporting-phase.bpmn`
- ✓ `mdba-bpr-consent-privacy.bpmn`
- ✓ `mdba-bpr-triage-categorisation.bpmn`
- ✓ `mdba-bpr-sme-legal-review.bpmn`
- ✓ `mdba-bpr-redaction-workflow.bpmn`
- ✓ `mdba-bpr-submission-tracking.bpmn`
- ✓ `mdba-bpr-data-archiving.bpmn`

### 3. Context Documentation Status
Current Location: `docs/process-design/context/`
Status: All files already follow conventions
- ✓ `bpr-end-to-end-process.md`
- ✓ `bpr-invitation-phase.md`
- ✓ `bpr-collection-phase.md`
- ✓ `bpr-analysis-phase.md`
- ✓ `bpr-consideration-phase.md`
- ✓ `bpr-decision-phase.md`
- ✓ `bpr-publication-phase.md`
- ✓ `bpr-reporting-phase.md`
- ✓ `bpr-consent-privacy.md`
- ✓ `bpr-triage-categorisation.md`
- ✓ `bpr-sme-legal-review.md`
- ✓ `bpr-redaction-workflow.md`
- ✓ `bpr-submission-tracking.md`
- ✓ `bpr-data-archiving.md`

### 4. Requirements Documentation Status
Current Location: `docs/process-design/requirements/`
Status: Files need to be renamed to follow conventions

Files to Rename:
1. [ ] `BPMN_Diagram_Requirements.md` → `bpr-bpmn-diagram-requirements.md`
   - Current: Uses underscores and PascalCase
   - Change: Convert to kebab-case, add bpr- prefix
   - Note: This is a core requirements document

2. [ ] `MDBA_BPR2026_Process_Design_Summary_with_DAMF_Requirements_v1.0_20250516.md` → `bpr-process-design-summary-damf.md`
   - Current: Uses underscores, mixed case, version in filename
   - Change: Convert to kebab-case, add bpr- prefix, move version to metadata
   - Note: Version and date should be in frontmatter

3. [ ] `MDBA Basin Plan Service Concept v0.3–refactor_section_arrangements–20250513.md` → `bpr-service-concept.md`
   - Current: Uses spaces, mixed case, version in filename
   - Change: Convert to kebab-case, add bpr- prefix, move version to metadata
   - Note: Version and refactor info should be in frontmatter

4. [ ] `BPR Submissions Process Design and Mapping.md` → `bpr-submissions-process-design.md`
   - Current: Uses spaces and PascalCase
   - Change: Convert to kebab-case, add bpr- prefix
   - Note: Simplify name while maintaining meaning

### 5. Documentation Updates (In Progress)
- [x] Update `docs/process-design/requirements/BPMN_Diagram_Requirements.md`
- [x] Update `docs/process-design/README.md`
- [x] Document naming conventions
- [x] Add examples and rules
- [ ] Update references to renamed files
- [ ] Update frontmatter in renamed files

### 6. Version Control
- [x] Document conventions in repository
- [x] Update contributing guidelines
- [x] Add naming convention rules to documentation
- [ ] Create migration branch for requirements files
- [ ] Prepare pull request for file renames

### 7. Verification (In Progress)
- [x] Verify BPMN files follow conventions
- [x] Verify context files follow conventions
- [ ] Verify requirements files after rename
- [ ] Check all references are correct
- [ ] Validate documentation
- [ ] Confirm no broken links

## Migration Steps for Requirements Files

1. Preparation
   - [ ] Create backup of current files
   - [ ] Create migration branch
   - [ ] Update frontmatter templates

2. File Renaming
   - [ ] Rename each file following conventions
   - [ ] Update frontmatter in each file
   - [ ] Move version info to frontmatter
   - [ ] Update internal references

3. Documentation Updates
   - [ ] Update README.md references
   - [ ] Update any cross-references
   - [ ] Update requirements index
   - [ ] Update search documentation

4. Verification
   - [ ] Test all links
   - [ ] Verify frontmatter
   - [ ] Check version history
   - [ ] Validate references

## Next Steps
1. Create migration branch for requirements files
2. Prepare frontmatter templates
3. Execute file renames
4. Update documentation
5. Create pull request
6. Review and merge

## Notes
- All dates in Australian format (DD/MM/YYYY)
- Version information should be in frontmatter, not filenames
- Migration will be performed in a dedicated branch
- Team will be notified before and after migration
- Regular backups will be maintained
- Verification steps must be completed before final merge

@version "1.1.0"
@last_updated "2024-05-16"
@status "in-progress"
@author "MDBA Process Design Team" 