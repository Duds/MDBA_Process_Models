/**
 * Enhanced BPMN Validation Script
 * 
 * This script validates all BPMN files in the models directory against
 * BPMN 2.0 standards and MDBA Enterprise Architecture requirements.
 */

const fs = require('fs');
const path = require('path');
const BpmnModdle = require('bpmn-moddle');

const moddle = new BpmnModdle();
const MODELS_DIR = path.join(__dirname, '..', 'models');

// Validation categories from checklist
const VALIDATION_CATEGORIES = {
  XML_STRUCTURE: 'XML Structure',
  PROCESS_DEFINITION: 'Process Definition',
  ERROR_HANDLING: 'Error Handling',
  MESSAGE_HANDLING: 'Message Handling',
  SUBPROCESS: 'Subprocess',
  SWIMLANE: 'Swimlane',
  DATA_MANAGEMENT: 'Data Management',
  GATEWAY_LOGIC: 'Gateway Logic',
  DOCUMENTATION: 'Documentation',
  MDBA_REQUIREMENTS: 'MDBA Requirements'
};

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
  if (!definitions.$attrs['xmlns:bpmn']) {
    results.errors.push('Missing BPMN namespace declaration');
    results.valid = false;
  }

  // Check for required elements
  const processes = definitions.rootElements.filter(el => el.$type === 'bpmn:Process');
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

  // Check message flows
  const messageFlows = process.flowElements.filter(el => el.$type === 'bpmn:MessageFlow');
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
 * @param {Object} process - BPMN process object
 * @returns {Object} Validation results
 */
function validateDataManagement(process) {
  const results = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check for data objects
  const dataObjects = process.flowElements.filter(el => el.$type === 'bpmn:DataObject');
  if (dataObjects.length === 0) {
    results.warnings.push('No data objects defined');
  }

  // Check for data stores
  const dataStores = process.flowElements.filter(el => el.$type === 'bpmn:DataStoreReference');
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

  // Check for gateways
  const gateways = process.flowElements.filter(el => el.$type.startsWith('bpmn:Gateway'));
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

  // Check for ICIP compliance
  const hasICIPCheck = process.flowElements.some(el => 
    el.name && el.name.toLowerCase().includes('icip')
  );
  if (!hasICIPCheck) {
    results.warnings.push('No ICIP compliance checks found');
  }

  // Check for quality assurance
  const hasQualityCheck = process.flowElements.some(el => 
    el.name && el.name.toLowerCase().includes('quality')
  );
  if (!hasQualityCheck) {
    results.warnings.push('No quality assurance checks found');
  }

  return results;
}

/**
 * Validate a BPMN file
 * @param {string} filePath - Path to the BPMN file
 * @returns {Promise<Object>} Validation results
 */
async function validateBpmnFile(filePath) {
  try {
    const xml = fs.readFileSync(filePath, 'utf8');
    const { rootElement: definitions } = await moddle.fromXML(xml);
    
    console.log(`\nValidation results for ${path.basename(filePath)}:`);
    
    // Get the first process from rootElements
    const process = definitions.rootElements.find(el => el.$type === 'bpmn:Process');
    if (!process) {
      console.log('✗ Error: No process element found');
      return;
    }

    // Validate each category
    const xmlResults = validateXmlStructure(definitions);
    const processResults = validateProcessDefinition(process);
    const errorResults = validateErrorHandling(definitions, process);
    const messageResults = validateMessageHandling(definitions, process);
    const swimlaneResults = validateSwimlanes(process);
    const dataResults = validateDataManagement(process);
    const gatewayResults = validateGatewayLogic(process);
    const docResults = validateDocumentation(process);
    const mdbaResults = validateMDBARequirements(process);

    const results = {
      file: path.basename(filePath),
      valid: true,
      processes: []
    };

    const categories = {
      [VALIDATION_CATEGORIES.XML_STRUCTURE]: xmlResults,
      [VALIDATION_CATEGORIES.PROCESS_DEFINITION]: processResults,
      [VALIDATION_CATEGORIES.ERROR_HANDLING]: errorResults,
      [VALIDATION_CATEGORIES.MESSAGE_HANDLING]: messageResults,
      [VALIDATION_CATEGORIES.SWIMLANE]: swimlaneResults,
      [VALIDATION_CATEGORIES.DATA_MANAGEMENT]: dataResults,
      [VALIDATION_CATEGORIES.GATEWAY_LOGIC]: gatewayResults,
      [VALIDATION_CATEGORIES.DOCUMENTATION]: docResults,
      [VALIDATION_CATEGORIES.MDBA_REQUIREMENTS]: mdbaResults
    };

    const processValid = Object.values(categories).every(cat => cat.valid);
    results.processes.push({
      id: process.id || '(no id)',
      valid: processValid,
      categories
    });
    if (!processValid) results.valid = false;

    return results;
  } catch (error) {
    return {
      file: path.basename(filePath),
      valid: false,
      error: error.message
    };
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
 * Print validation results
 * @param {Object} results - Validation results
 */
function printResults(results) {
  console.log(`\nValidation results for ${results.file}:`);
  
  if (results.error) {
    console.error(`✗ Error: ${results.error}`);
    return;
  }

  if (results.valid) {
    console.log('✓ Overall: Valid');
  } else {
    console.error('✗ Overall: Invalid');
  }

  if (results.processes) {
    for (const proc of results.processes) {
      console.log(`\nProcess: ${proc.id}`);
      if (proc.valid) {
        console.log('  ✓ Valid');
      } else {
        console.error('  ✗ Invalid');
      }
      Object.entries(proc.categories).forEach(([category, result]) => {
        console.log(`  ${category}:`);
        if (result.valid) {
          console.log('    ✓ Valid');
        } else {
          console.error('    ✗ Invalid');
        }
        if (result.errors.length > 0) {
          console.error('    Errors:');
          result.errors.forEach(error => console.error(`      - ${error}`));
        }
        if (result.warnings.length > 0) {
          console.warn('    Warnings:');
          result.warnings.forEach(warning => console.warn(`      - ${warning}`));
        }
      });
    }
  }
}

/**
 * Main function to validate all BPMN files
 */
async function validateAllBpmnFiles() {
  console.log('Validating BPMN files...\n');
  
  try {
    const bpmnFiles = findBpmnFiles(MODELS_DIR);
    
    if (bpmnFiles.length === 0) {
      console.log('No BPMN files found.');
      return;
    }
    
    console.log(`Found ${bpmnFiles.length} BPMN files.`);
    
    let validCount = 0;
    const allResults = [];
    
    for (const file of bpmnFiles) {
      const results = await validateBpmnFile(file);
      allResults.push(results);
      if (results.valid) validCount++;
      printResults(results);
    }
    
    console.log(`\nValidation Summary:`);
    console.log(`Total files: ${bpmnFiles.length}`);
    console.log(`Valid files: ${validCount}`);
    console.log(`Invalid files: ${bpmnFiles.length - validCount}`);
    
    // Generate validation report
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: bpmnFiles.length,
      validFiles: validCount,
      invalidFiles: bpmnFiles.length - validCount,
      results: allResults
    };
    
    fs.writeFileSync(
      path.join(__dirname, '..', 'docs', 'process-design', 'validation-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    if (validCount !== bpmnFiles.length) {
      process.exit(1);
    }
  } catch (error) {
    console.error('Error during validation:', error);
    process.exit(1);
  }
}

// Run the validation
validateAllBpmnFiles(); 