# Naming Convention Migration

This document tracks the migration of files to the new naming convention standard for the MDBA Basin Plan Review Process Models project.

## Migration Status

### 1. Core Documentation Files
1. [x] [`BPMN_Diagram_Requirements.md`](../requirements/bpr-bpmn-diagram-requirements.md) → `bpr-bpmn-diagram-requirements.md`
   - Current: Uses underscores and PascalCase
   - Change: Convert to kebab-case, add bpr- prefix
   - Note: This is a core requirements document

2. [x] [`MDBA_BPR2026_Process_Design_Summary_with_DAMF_Requirements_v1.0_20250516.md`](../requirements/bpr-process-design-summary-damf.md) → `bpr-process-design-summary-damf.md`
   - Current: Uses underscores, mixed case, version in filename
   - Change: Convert to kebab-case, add bpr- prefix, move version to metadata
   - Note: Version and date should be in frontmatter

3. [x] [`MDBA Basin Plan Service Concept v0.3–refactor_section_arrangements–20250513.md`](../requirements/bpr-service-concept.md) → `bpr-service-concept.md`
   - Current: Uses spaces, mixed case, version in filename
   - Change: Convert to kebab-case, add bpr- prefix, move version to metadata
   - Note: Version and refactor info should be in frontmatter

4. [x] [`BPR Submissions Process Design and Mapping.md`](../requirements/bpr-submissions-process-design.md) → `bpr-submissions-process-design.md`
   - Current: Uses spaces and PascalCase
   - Change: Convert to kebab-case, add bpr- prefix
   - Note: Simplify name while maintaining meaning

### 5. Documentation Updates (In Progress)
- [x] Update [`docs/process-design/requirements/BPMN_Diagram_Requirements.md`](../requirements/bpr-bpmn-diagram-requirements.md)
- [x] Update [`docs/process-design/README.md`](../README.md)
- [x] Document naming conventions
- [x] Add examples and rules
- [x] Update references to renamed files
- [x] Update frontmatter in renamed files

### 6. Version Control
- [x] Document conventions in repository
- [x] Update contributing guidelines
- [x] Add naming convention rules to documentation
- [x] Create migration branch for requirements files
- [x] Prepare pull request for file renames

### 7. Verification (In Progress)
- [x] Verify BPMN files follow conventions
- [x] Verify context files follow conventions
- [x] Verify requirements files after rename
- [x] Check all references are correct
- [x] Validate documentation
- [x] Confirm no broken links

## Migration Steps for Requirements Files

1. Preparation
   - [x] Create backup of current files
   - [x] Create migration branch
   - [x] Update frontmatter templates

2. File Renaming
   - [x] Rename each file following conventions
   - [x] Update frontmatter in each file
   - [x] Move version info to frontmatter
   - [x] Update internal references

3. Documentation Updates
   - [x] Update [README.md](../README.md) references
   - [x] Update any cross-references
   - [x] Update requirements index
   - [x] Update search documentation

4. Verification
   - [x] Test all links
   - [x] Verify frontmatter
   - [x] Check version history
   - [x] Validate references

## Related Documentation
- [Process Mapping](../requirements/bpr-process-mapping.md)
- [BPMN Diagram Requirements](../requirements/bpr-bpmn-diagram-requirements.md)
- [Service Concept](../requirements/bpr-service-concept.md)
- [Process Design Documentation](../README.md)

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

@version "1.2.0"
@last_updated "16/05/2024"
@status "complete"
@author "MDBA Process Design Team" 