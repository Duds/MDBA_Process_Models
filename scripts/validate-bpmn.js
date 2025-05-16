/**
 * Comprehensive BPMN Validation Script
 * 
 * This script validates all BPMN files in the models directory against:
 * - BPMN 2.0 standards
 * - XML schema validation
 * - MDBA Enterprise Architecture requirements
 * - Best practices and conventions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const BpmnModdle = require('bpmn-moddle');
const chalk = require('chalk');

const moddle = new BpmnModdle();
const MODELS_DIR = path.join(__dirname, '..', 'models');
const REPORT_DIR = path.join(__dirname, '..', 'docs', 'process-design');

// Validation categories with descriptions
const VALIDATION_CATEGORIES = {
  XML_STRUCTURE: {
    name: 'XML Structure',
    description: 'Validates XML structure and schema compliance',
    critical: true
  },
  PROCESS_DEFINITION: {
    name: 'Process Definition',
    description: 'Validates basic process structure and elements',
    critical: true
  },
  ERROR_HANDLING: {
    name: 'Error Handling',
    description: 'Validates error definitions and handling',
    critical: false
  },
  MESSAGE_HANDLING: {
    name: 'Message Handling',
    description: 'Validates message flows and definitions',
    critical: false
  },
  SUBPROCESS: {
    name: 'Subprocess',
    description: 'Validates subprocess definitions and references',
    critical: false
  },
  SWIMLANE: {
    name: 'Swimlane',
    description: 'Validates swimlane definitions and role assignments',
    critical: false
  },
  DATA_MANAGEMENT: {
    name: 'Data Management',
    description: 'Validates data objects and stores',
    critical: false
  },
  GATEWAY_LOGIC: {
    name: 'Gateway Logic',
    description: 'Validates gateway types and decision logic',
    critical: true
  },
  DOCUMENTATION: {
    name: 'Documentation',
    description: 'Validates process and element documentation',
    critical: false
  },
  MDBA_REQUIREMENTS: {
    name: 'MDBA Requirements',
    description: 'Validates MDBA-specific requirements',
    critical: true
  }
};

// MDBA-specific validation rules
const MDBA_RULES = {
  ICIP_COMPLIANCE: {
    name: 'ICIP Compliance',
    description: 'Checks for ICIP compliance validation points',
    required: true
  },
  QUALITY_ASSURANCE: {
    name: 'Quality Assurance',
    description: 'Checks for quality assurance checkpoints',
    required: true
  },
  DOCUMENTATION_STANDARDS: {
    name: 'Documentation Standards',
    description: 'Checks for MDBA documentation standards',
    required: true
  },
  ROLE_ASSIGNMENTS: {
    name: 'Role Assignments',
    description: 'Checks for proper role assignments',
    required: true
  }
};

/**
 * Check if xmllint is available
 * @returns {boolean}
 */
function isXmllintAvailable() {
  try {
    execSync('which xmllint', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Validate XML structure using xmllint
 * @param {string} filePath - Path to the BPMN file
 * @returns {Object} Validation results
 */
function validateXmlWithXmllint(filePath) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  if (!isXmllintAvailable()) {
    results.warnings.push('xmllint not available - skipping XML validation');
    return results;
  }

  try {
    execSync(`xmllint --noout "${filePath}"`, { stdio: 'pipe' });
  } catch (error) {
    results.valid = false;
    results.errors.push(`XML validation failed: ${error.message}`);
  }

  return results;
}

/**
 * Validate XML structure
 * @param {Object} definitions - BPMN definitions object
 * @returns {Object} Validation results
 */
function validateXmlStructure(definitions) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check namespace declarations
  const requiredNamespaces = {
    'xmlns:bpmn': 'http://www.omg.org/spec/BPMN/20100524/MODEL',
    'xmlns:bpmndi': 'http://www.omg.org/spec/BPMN/20100524/DI',
    'xmlns:dc': 'http://www.omg.org/spec/DD/20100524/DC',
    'xmlns:di': 'http://www.omg.org/spec/DD/20100524/DI',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
  };

  // Get all attributes from the definitions object
  const attrs = definitions.$attrs || {};
  const nsAttrs = Object.entries(attrs)
    .filter(([key]) => key.startsWith('xmlns:'))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  // Check namespace declarations
  for (const [ns, value] of Object.entries(requiredNamespaces)) {
    if (!nsAttrs[ns] || nsAttrs[ns] !== value) {
      results.errors.push(`Missing or invalid namespace declaration: ${ns}`);
      results.valid = false;
    }
  }

  // Check for required attributes
  const requiredAttrs = ['id', 'targetNamespace', 'exporter', 'exporterVersion'];
  for (const attr of requiredAttrs) {
    if (!attrs[attr]) {
      // Try to find the attribute in the raw XML if available
      const rawXml = definitions.$xml;
      if (rawXml) {
        const attrMatch = new RegExp(`${attr}="([^"]+)"`).exec(rawXml);
        if (!attrMatch) {
          results.errors.push(`Missing required attribute: ${attr}`);
          results.valid = false;
        }
      } else {
        results.errors.push(`Missing required attribute: ${attr}`);
        results.valid = false;
      }
    }
  }

  // Check for required elements
  const processes = definitions.rootElements.filter(el => 
    el.$type === 'bpmn:Process' || el.$type === 'Process'
  );
  if (processes.length === 0) {
    results.errors.push('No process elements found in rootElements');
    results.valid = false;
  } else if (processes.length > 1) {
    results.warnings.push(`Found ${processes.length} process elements - only the first will be validated`);
  }

  return results;
}

/**
 * Validate process definition
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateProcessDefinition(process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check process attributes
  if (!process.id) {
    results.errors.push('Process ID not defined');
    results.valid = false;
  }

  if (!process.name) {
    results.warnings.push('Process name not defined');
  }

  if (process.isExecutable === undefined) {
    results.warnings.push('isExecutable attribute not set');
  }

  // Check for start and end events
  const startEvents = process.flowElements.filter(el => el.$type === 'bpmn:StartEvent');
  const endEvents = process.flowElements.filter(el => el.$type === 'bpmn:EndEvent');

  if (startEvents.length === 0) {
    results.errors.push('No start events defined');
    results.valid = false;
  }

  if (endEvents.length === 0) {
    results.errors.push('No end events defined');
    results.valid = false;
  }

  // Check sequence flows
  const sequenceFlows = process.flowElements.filter(el => el.$type === 'bpmn:SequenceFlow');
  if (sequenceFlows.length === 0) {
    results.errors.push('No sequence flows defined');
    results.valid = false;
  }

  return results;
}

/**
 * Validate error handling
 * @param {Object} definitions - BPMN definitions object
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateErrorHandling(definitions, process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check error definitions
  const errors = definitions.rootElements.filter(el => el.$type === 'bpmn:Error');
  if (errors.length === 0) {
    results.warnings.push('No error definitions found');
  }

  // Check boundary events
  const boundaryEvents = process.flowElements.filter(el => 
    el.$type === 'bpmn:BoundaryEvent' && 
    el.eventDefinitions && 
    el.eventDefinitions.some(ed => ed.$type === 'bpmn:ErrorEventDefinition')
  );

  if (boundaryEvents.length === 0) {
    results.warnings.push('No error boundary events found');
  }

  return results;
}

/**
 * Helper to determine if a process is the main/root process in definitions
 */
function isMainProcess(definitions, process) {
  if (!definitions || !process) return false;
  // The main process is the one that appears in definitions.rootElements
  return definitions.rootElements.some(el => el.$type === 'bpmn:Process' && el.id === process.id);
}

/**
 * Validate message handling
 * @param {Object} definitions - BPMN definitions object
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateMessageHandling(definitions, process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check message definitions
  const messages = definitions.rootElements.filter(el => el.$type === 'bpmn:Message');
  if (messages.length === 0) {
    results.warnings.push('No message definitions found');
  }

  // Context-aware check for message flows
  let messageFlows = [];
  if (isMainProcess(definitions, process)) {
    // For the main process, check both process.flowElements and definitions.rootElements
    const processMessageFlows = (process.flowElements || []).filter(el => el.$type === 'bpmn:MessageFlow');
    const rootMessageFlows = (definitions.rootElements || []).filter(el => el.$type === 'bpmn:MessageFlow');
    messageFlows = [...processMessageFlows, ...rootMessageFlows];
  } else {
    // For subprocesses, only check their own flowElements
    messageFlows = (process.flowElements || []).filter(el => el.$type === 'bpmn:MessageFlow');
  }
  if (messageFlows.length === 0) {
    results.warnings.push('No message flows defined');
  }

  return results;
}

/**
 * Validate swimlanes
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateSwimlanes(process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check for lane sets
  const laneSets = process.laneSets;
  if (!laneSets || laneSets.length === 0) {
    results.warnings.push('No swimlanes defined');
  } else {
    // Check for role assignments
    const lanes = laneSets[0].lanes;
    if (lanes.some(lane => !lane.name)) {
      results.warnings.push('Some lanes missing role names');
    }
  }

  return results;
}

/**
 * Validate data management
 * @param {Object} definitions - BPMN definitions object
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateDataManagement(definitions, process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check for data objects
  const dataObjects = (process.flowElements || []).filter(el => el.$type === 'bpmn:DataObject');
  if (dataObjects.length === 0) {
    results.warnings.push('No data objects defined');
  }

  // Context-aware check for data stores
  let dataStores = [];
  if (isMainProcess(definitions, process)) {
    // For the main process, check both process.flowElements and definitions.rootElements
    const processDataStores = (process.flowElements || []).filter(el => 
      el.$type === 'bpmn:DataStoreReference' || el.$type === 'bpmn:DataStore'
    );
    const rootDataStores = (definitions.rootElements || []).filter(el => 
      el.$type === 'bpmn:DataStoreReference' || el.$type === 'bpmn:DataStore'
    );
    dataStores = [...processDataStores, ...rootDataStores];
  } else {
    // For subprocesses, only check their own flowElements
    dataStores = (process.flowElements || []).filter(el => 
      el.$type === 'bpmn:DataStoreReference' || el.$type === 'bpmn:DataStore'
    );
  }
  if (dataStores.length === 0) {
    results.warnings.push('No data stores defined');
  }

  return results;
}

/**
 * Validate gateway logic
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateGatewayLogic(process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check for gateways with more specific type matching
  const gateways = process.flowElements.filter(el => 
    el.$type === 'bpmn:ExclusiveGateway' ||
    el.$type === 'bpmn:InclusiveGateway' ||
    el.$type === 'bpmn:ParallelGateway' ||
    el.$type === 'bpmn:ComplexGateway' ||
    el.$type === 'bpmn:EventBasedGateway'
  );
  if (gateways.length === 0) {
    results.warnings.push('No gateways defined');
  } else {
    // Check for condition expressions
    const conditionalFlows = process.flowElements.filter(el => 
      el.$type === 'bpmn:SequenceFlow' && 
      el.conditionExpression
    );
    if (conditionalFlows.length === 0) {
      results.warnings.push('No conditional flows defined');
    }
  }

  return results;
}

/**
 * Validate documentation
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateDocumentation(process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check process documentation
  if (!process.documentation || process.documentation.length === 0) {
    results.warnings.push('Process documentation missing');
  }

  // Check task documentation
  const tasks = process.flowElements.filter(el => el.$type === 'bpmn:Task');
  const tasksWithoutDoc = tasks.filter(task => !task.documentation || task.documentation.length === 0);
  if (tasksWithoutDoc.length > 0) {
    results.warnings.push(`${tasksWithoutDoc.length} tasks missing documentation`);
  }

  return results;
}

/**
 * Validate MDBA requirements
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateMDBARequirements(process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check each MDBA rule
  for (const [ruleKey, rule] of Object.entries(MDBA_RULES)) {
    let ruleValid = false;
    let ruleMessage = '';

    switch (ruleKey) {
      case 'ICIP_COMPLIANCE':
        ruleValid = process.flowElements.some(el => 
          el.name && el.name.toLowerCase().includes('icip')
        );
        ruleMessage = 'ICIP compliance checks';
        break;

      case 'QUALITY_ASSURANCE':
        ruleValid = process.flowElements.some(el => 
          el.name && (
            el.name.toLowerCase().includes('quality') ||
            el.name.toLowerCase().includes('validation') ||
            el.name.toLowerCase().includes('review')
          )
        );
        ruleMessage = 'Quality assurance checkpoints';
        break;

      case 'DOCUMENTATION_STANDARDS':
        ruleValid = process.documentation && process.documentation.length > 0 &&
          process.flowElements.every(el => 
            !el.name || el.documentation && el.documentation.length > 0
          );
        ruleMessage = 'Documentation standards';
        break;

      case 'ROLE_ASSIGNMENTS':
        ruleValid = process.laneSets && process.laneSets.length > 0 &&
          process.laneSets[0].lanes.every(lane => lane.name);
        ruleMessage = 'Role assignments';
        break;
    }

    if (!ruleValid) {
      if (rule.required) {
        results.errors.push(`Missing required ${ruleMessage}`);
        results.valid = false;
      } else {
        results.warnings.push(`Missing ${ruleMessage}`);
      }
    }
  }

  return results;
}

/**
 * Validate subprocess definitions
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateSubprocess(process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check for subprocesses
  const subprocesses = process.flowElements.filter(el => 
    el.$type === 'bpmn:SubProcess' || 
    el.$type === 'bpmn:CallActivity'
  );

  if (subprocesses.length === 0) {
    // Not all processes need subprocesses, so this is just a warning
    results.warnings.push('No subprocesses or call activities defined');
  } else {
    // Validate each subprocess
    for (const subprocess of subprocesses) {
      // Check for required attributes
      if (!subprocess.id) {
        results.errors.push(`Subprocess missing ID: ${subprocess.name || 'unnamed'}`);
        results.valid = false;
      }

      if (!subprocess.name) {
        results.warnings.push(`Subprocess missing name: ${subprocess.id}`);
      }

      // For call activities, check called element
      if (subprocess.$type === 'bpmn:CallActivity' && !subprocess.calledElement) {
        results.errors.push(`Call activity missing called element: ${subprocess.id}`);
        results.valid = false;
      }

      // Check for start and end events in subprocesses
      if (subprocess.$type === 'bpmn:SubProcess') {
        const hasStartEvent = subprocess.flowElements?.some(el => el.$type === 'bpmn:StartEvent');
        const hasEndEvent = subprocess.flowElements?.some(el => el.$type === 'bpmn:EndEvent');

        if (!hasStartEvent) {
          results.errors.push(`Subprocess missing start event: ${subprocess.id}`);
          results.valid = false;
        }
        if (!hasEndEvent) {
          results.errors.push(`Subprocess missing end event: ${subprocess.id}`);
          results.valid = false;
        }
      }
    }
  }

  return results;
}

/**
 * Validate a single BPMN file
 * @param {string} filePath - Path to the BPMN file
 * @returns {Promise<Object>} Validation results
 */
async function validateBpmnFile(filePath) {
  const results = {
    filePath,
    valid: true,
    warnings: [],
    errors: [],
    categories: {},
    processes: []
  };

  try {
    // Read and parse the BPMN file
    const xml = fs.readFileSync(filePath, 'utf8');
    let definitions;
    try {
      const parsed = await moddle.fromXML(xml);
      definitions = parsed.rootElement;
    } catch (parseErr) {
      results.valid = false;
      results.errors.push(`Failed to parse BPMN XML in file '${path.basename(filePath)}': ${parseErr.message}`);
      return results;
    }
    
    // Store the raw XML for attribute validation
    definitions.$xml = xml;

    // Validate XML structure
    let xmlResults;
    try {
      xmlResults = validateXmlStructure(definitions);
    } catch (xmlStructErr) {
      results.valid = false;
      results.errors.push(`XML structure validation failed in file '${path.basename(filePath)}': ${xmlStructErr.message}`);
      return results;
    }
    results.categories.XML_STRUCTURE = xmlResults;
    if (!xmlResults.valid) {
      results.valid = false;
      results.errors.push(...xmlResults.errors.map(e => `[XML_STRUCTURE] ${e}`));
      results.warnings.push(...xmlResults.warnings.map(w => `[XML_STRUCTURE] ${w}`));
    }

    // Get all processes
    let processes;
    try {
      processes = definitions.rootElements.filter(el => el.$type === 'bpmn:Process');
    } catch (procErr) {
      results.valid = false;
      results.errors.push(`Failed to extract process elements in file '${path.basename(filePath)}': ${procErr.message}`);
      return results;
    }
    
    if (!processes || processes.length === 0) {
      results.valid = false;
      results.errors.push(`No process elements found in file '${path.basename(filePath)}'`);
      return results;
    }

    for (const process of processes) {
      const processResults = {
        id: process.id || '(no id)',
        name: process.name || '(no name)',
        valid: true,
        categories: {}
      };

      // Validate each category with error handling
      for (const [catKey, catDef] of Object.entries(VALIDATION_CATEGORIES)) {
        try {
          let catResult;
          switch (catKey) {
            case 'PROCESS_DEFINITION':
              catResult = validateProcessDefinition(process); break;
            case 'ERROR_HANDLING':
              catResult = validateErrorHandling(definitions, process); break;
            case 'MESSAGE_HANDLING':
              catResult = validateMessageHandling(definitions, process); break;
            case 'SUBPROCESS':
              catResult = validateSubprocess(process); break;
            case 'SWIMLANE':
              catResult = validateSwimlanes(process); break;
            case 'DATA_MANAGEMENT':
              catResult = validateDataManagement(definitions, process); break;
            case 'GATEWAY_LOGIC':
              catResult = validateGatewayLogic(process); break;
            case 'DOCUMENTATION':
              catResult = validateDocumentation(process); break;
            case 'MDBA_REQUIREMENTS':
              catResult = validateMDBARequirements(process); break;
            default:
              catResult = { valid: true, warnings: [], errors: [] };
          }
          processResults.categories[catDef.name] = catResult;
          if (catDef.critical && !catResult.valid) {
            processResults.valid = false;
          }
        } catch (catErr) {
          processResults.valid = false;
          processResults.categories[catDef.name] = {
            valid: false,
            warnings: [],
            errors: [`[${catDef.name}] Validation failed: ${catErr.message}`]
          };
        }
      }

      if (!processResults.valid) {
        results.valid = false;
      }
      results.processes.push(processResults);
    }

    return results;
  } catch (error) {
    results.valid = false;
    results.errors.push(`General failure in file '${path.basename(filePath)}': ${error.message}`);
    return results;
  }
}

/**
 * Find all BPMN files in a directory recursively
 * @param {string} dir - Directory to search
 * @param {Array<string>} fileList - List to add files to
 * @returns {Array<string>} - List of BPMN files
 */
function findBpmnFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      findBpmnFiles(filePath, fileList);
    } else if (path.extname(file) === '.bpmn') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Print validation results with color coding
 * @param {Object} results - Validation results
 */
function printResults(results) {
  const fileName = results.filePath ? path.basename(results.filePath) : '(unknown file)';
  console.log(`\n${chalk.bold(`Validation results for ${fileName}:`)}`);
  
  if (results.error) {
    console.error(chalk.red(`✗ Error: ${results.error}`));
    return;
  }

  if (results.valid) {
    console.log(chalk.green('✓ Overall: Valid'));
  } else {
    console.error(chalk.red('✗ Overall: Invalid'));
  }

  if (results.processes) {
    for (const proc of results.processes) {
      console.log(`\n${chalk.bold(`Process: ${proc.name} (${proc.id})`)}`);
      
      if (proc.valid) {
        console.log(chalk.green('  ✓ Valid'));
      } else {
        console.error(chalk.red('  ✗ Invalid'));
      }

      Object.entries(proc.categories).forEach(([category, result]) => {
        const categoryInfo = Object.values(VALIDATION_CATEGORIES).find(c => c.name === category);
        const critical = categoryInfo?.critical ? ' (Critical)' : '';
        
        console.log(`  ${category}${critical}:`);
        if (result.valid) {
          console.log(chalk.green('    ✓ Valid'));
        } else {
          console.error(chalk.red('    ✗ Invalid'));
        }
        
        if (result.errors?.length > 0) {
          console.error('    Errors:');
          result.errors.forEach(error => console.error(chalk.red(`      - ${error}`)));
        }
        
        if (result.warnings?.length > 0) {
          console.warn('    Warnings:');
          result.warnings.forEach(warning => console.warn(chalk.yellow(`      - ${warning}`)));
        }
      });
    }
  }
}

/**
 * Generate HTML report
 * @param {Array<Object>} validResults - Valid validation results
 * @param {Array<Object>} invalidResults - Invalid validation results
 * @param {Object} summary - Validation summary
 */
function generateHtmlReport(validResults, invalidResults, summary) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BPMN Validation Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .summary { background: #f5f5f5; padding: 20px; border-radius: 5px; }
        .file { margin: 20px 0; padding: 10px; border: 1px solid #ddd; }
        .valid { color: green; }
        .invalid { color: red; }
        .warning { color: orange; }
        .critical { font-weight: bold; }
        .category { margin: 10px 0; }
        .errors, .warnings { margin-left: 20px; }
    </style>
</head>
<body>
    <h1>BPMN Validation Report</h1>
    <div class="summary">
        <h2>Summary</h2>
        <p>Generated: ${new Date().toLocaleString()}</p>
        <p>Total files: ${summary.totalFiles}</p>
        <p class="valid">Valid files: ${summary.validFiles}</p>
        <p class="invalid">Invalid files: ${summary.invalidFiles}</p>
    </div>
    <h2>Valid Files</h2>
    ${validResults.length === 0 ? '<p>None</p>' : validResults.map(result => {
      const fileName = result.filePath ? path.basename(result.filePath) : '(unknown file)';
      return `
    <div class="file">
        <h2>${fileName}</h2>
        <p class="valid">
            Overall: Valid
        </p>
        ${result.processes?.map(proc => `
        <div class="process">
            <h3>Process: ${proc.name} (${proc.id})</h3>
            ${Object.entries(proc.categories).map(([category, catResult]) => `
            <div class="category">
                <h4>${category}</h4>
                <p class="valid">
                    ✓ Valid
                </p>
                ${catResult.warnings?.length ? `
                <div class="warnings">
                    <h5>Warnings:</h5>
                    <ul>
                        ${catResult.warnings.map(warning => `
                        <li class="warning">${warning}</li>
                        `).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
            `).join('')}
        </div>
        `).join('')}
    </div>
      `;
    }).join('')}
    <h2>Invalid Files</h2>
    ${invalidResults.length === 0 ? '<p>None</p>' : invalidResults.map(result => {
      const fileName = result.filePath ? path.basename(result.filePath) : '(unknown file)';
      return `
    <div class="file">
        <h2>${fileName}</h2>
        <p class="invalid">
            Overall: Invalid
        </p>
        ${result.processes?.map(proc => `
        <div class="process">
            <h3>Process: ${proc.name} (${proc.id})</h3>
            ${Object.entries(proc.categories).map(([category, catResult]) => `
            <div class="category">
                <h4>${category}</h4>
                <p class="${catResult.valid ? 'valid' : 'invalid'}">
                    ${catResult.valid ? '✓ Valid' : '✗ Invalid'}
                </p>
                ${catResult.errors?.length ? `
                <div class="errors">
                    <h5>Errors:</h5>
                    <ul>
                        ${catResult.errors.map(error => `
                        <li class="invalid">${error}</li>
                        `).join('')}
                    </ul>
                </div>
                ` : ''}
                ${catResult.warnings?.length ? `
                <div class="warnings">
                    <h5>Warnings:</h5>
                    <ul>
                        ${catResult.warnings.map(warning => `
                        <li class="warning">${warning}</li>
                        `).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
            `).join('')}
        </div>
        `).join('')}
    </div>
      `;
    }).join('')}
</body>
</html>`;

  // Ensure report directory exists
  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
  }

  fs.writeFileSync(
    path.join(REPORT_DIR, 'validation-report.html'),
    html
  );
}

/**
 * Main function to validate all BPMN files
 */
async function validateAllBpmnFiles() {
  console.log(chalk.bold('Validating BPMN files...\n'));
  
  try {
    const bpmnFiles = findBpmnFiles(MODELS_DIR);
    
    if (bpmnFiles.length === 0) {
      console.log(chalk.yellow('No BPMN files found.'));
      return;
    }
    
    console.log(chalk.blue(`Found ${bpmnFiles.length} BPMN files.`));
    
    let validCount = 0;
    const allResults = [];
    
    for (const file of bpmnFiles) {
      const results = await validateBpmnFile(file);
      allResults.push(results);
      if (results.valid) validCount++;
    }

    // Group results
    const validResults = allResults.filter(r => r.valid);
    const invalidResults = allResults.filter(r => !r.valid);

    // Print grouped results
    if (validResults.length > 0) {
      console.log(chalk.green('\nValid files:'));
      validResults.forEach(printResults);
    }
    if (invalidResults.length > 0) {
      console.log(chalk.red('\nInvalid files:'));
      invalidResults.forEach(printResults);
    }
    
    const summary = {
      timestamp: new Date().toISOString(),
      totalFiles: bpmnFiles.length,
      validFiles: validCount,
      invalidFiles: bpmnFiles.length - validCount
    };
    
    // Generate reports
    generateHtmlReport(validResults, invalidResults, summary);
    fs.writeFileSync(
      path.join(REPORT_DIR, 'validation-report.json'),
      JSON.stringify({ summary, results: allResults }, null, 2)
    );
    
    console.log(chalk.bold('\nValidation Summary:'));
    console.log(chalk.blue(`Total files: ${bpmnFiles.length}`));
    console.log(chalk.green(`Valid files: ${validCount}`));
    console.log(chalk.red(`Invalid files: ${bpmnFiles.length - validCount}`));
    console.log(chalk.blue('\nReports generated:'));
    console.log(`- ${path.join(REPORT_DIR, 'validation-report.html')}`);
    console.log(`- ${path.join(REPORT_DIR, 'validation-report.json')}`);
    
    if (validCount !== bpmnFiles.length) {
      process.exit(1);
    }
  } catch (error) {
    console.error(chalk.red('Error during validation:'), error);
    process.exit(1);
  }
}

// Run the validation
validateAllBpmnFiles(); 