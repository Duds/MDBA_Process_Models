# MDBA Process Models

This repository contains Business Process Model and Notation (BPMN) diagrams for MDBA processes.

## Contents

- `test-diagram.bpmn` - Test BPMN diagram
- `example.bpmn` - Example BPMN diagram

## Getting Started

### Prerequisites

To work with these BPMN files, you'll need a BPMN editor such as:
- [Camunda Modeler](https://camunda.com/download/modeler/)
- [bpmn.io](https://bpmn.io/)
- Cursor IDE with the recommended extensions in `.cursor/extensions.json`

### Usage

1. Open the BPMN files using your preferred BPMN editor or Cursor IDE
2. Make changes as needed
3. Validate your BPMN files:
   ```
   npm run validate
   ```
   Or use the "Validate BPMN" task in Cursor (Ctrl+Shift+B)
4. Save and commit your changes
5. Use provided snippets when editing BPMN files in Cursor (type `bpmn-` and press Tab)

## Project Structure

```
MDBA_Process_Models/
├── README.md
├── package.json
├── .gitignore
├── .cursor/                 # Cursor IDE configuration
│   ├── settings.json
│   ├── tasks.json
│   ├── extensions.json
│   ├── snippets.json
│   └── README.md
├── models/
│   ├── example.bpmn
│   ├── test-diagram.bpmn
│   ├── drafts/
│   └── approved/
├── scripts/
│   └── validate-bpmn.js
└── docs/
    └── README.md
```

## Contributing

When contributing to this repository, please follow these guidelines:
- Create descriptive names for process diagrams
- Document any significant changes
- Follow Australian standards and conventions 