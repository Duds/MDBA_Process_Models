/**
 * BPMN Validation Script
 * 
 * This script validates all BPMN files in the models directory.
 */

const fs = require('fs');
const path = require('path');
const BpmnModdle = require('bpmn-js/lib/model/bpmn-moddle').default;

const moddle = new BpmnModdle();
const MODELS_DIR = path.join(__dirname, '..', 'models');

/**
 * Validate a BPMN file
 * @param {string} filePath - Path to the BPMN file
 * @returns {Promise<boolean>} - Whether the file is valid
 */
async function validateBpmnFile(filePath) {
  try {
    const xml = fs.readFileSync(filePath, 'utf8');
    const result = await moddle.fromXML(xml);
    
    if (result.warnings.length) {
      console.warn(`\nWarnings for ${path.basename(filePath)}:`);
      result.warnings.forEach(warning => {
        console.warn(` - ${warning.message}`);
      });
    }
    
    console.log(`✓ ${path.basename(filePath)} is valid`);
    return true;
  } catch (error) {
    console.error(`✗ ${path.basename(filePath)} is invalid:`);
    console.error(` - ${error.message}`);
    return false;
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
    for (const file of bpmnFiles) {
      const isValid = await validateBpmnFile(file);
      if (isValid) validCount++;
    }
    
    console.log(`\nValidation complete: ${validCount}/${bpmnFiles.length} files are valid.`);
    
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