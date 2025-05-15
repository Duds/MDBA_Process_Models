# Cursor IDE Configuration for MDBA Process Models

This directory contains configuration files for the Cursor IDE to enhance your BPMN development experience.

## Key Features

### Settings (settings.json)

- Configured to treat BPMN files as XML
- Auto-formatting on save
- Exclude patterns for temporary files
- BPMN validation on save
- Custom editor settings optimised for BPMN development

### Tasks (tasks.json)

- **Validate BPMN**: Run BPMN validation (Ctrl+Shift+B)
- **Move to Approved**: Move current file to approved directory
- **Move to Drafts**: Move current file to drafts directory

### Extensions (extensions.json)

Recommended extensions for BPMN development:

- **redhat.vscode-xml**: XML tools for schema validation
- **janistev.bpmn-io-vscode**: BPMN support in editor
- **DotJoshJohnson.xml**: XML tools for formatting
- **formulahendry.auto-close-tag**: Auto-close XML/HTML tags
- **formulahendry.auto-rename-tag**: Auto-rename paired XML/HTML tags
- **streetsidesoftware.code-spell-checker**: Spell checking
- **yzhang.markdown-all-in-one**: Markdown support

### Snippets (snippets.json)

Custom snippets for BPMN development:

- **bpmn-process**: Insert a BPMN process element
- **bpmn-task**: Insert a BPMN task element
- **aus-date**: Insert current date in Australian format (DD/MM/YYYY)
- **aus-time**: Insert current time in 24-hour format (HH:MM)
- **bpmn-header**: Insert a standard BPMN file header with MDBA namespace

## Usage

1. These settings are automatically loaded when opening this workspace in Cursor
2. Install recommended extensions
3. Use snippets by typing the prefix and pressing Tab
4. Access tasks from the Command Palette (Ctrl+Shift+P) or keyboard shortcuts 