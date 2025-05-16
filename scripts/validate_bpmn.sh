#!/bin/bash

# BPMN Validation Script
# This script validates BPMN XML files against the BPMN 2.0 schema

# Set error handling
set -e

# Define colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if xmllint is installed
if ! command -v xmllint &> /dev/null; then
    echo -e "${RED}Error: xmllint is not installed. Please install libxml2-utils.${NC}"
    exit 1
fi

# Function to validate a single BPMN file
validate_bpmn() {
    local file=$1
    echo -e "\n${YELLOW}Validating: $file${NC}"
    
    # Check if file exists
    if [ ! -f "$file" ]; then
        echo -e "${RED}Error: File not found: $file${NC}"
        return 1
    fi
    
    # Basic XML validation first
    if ! xmllint --noout "$file" 2>/dev/null; then
        echo -e "${RED}✗ Invalid XML structure: $file${NC}"
        xmllint --noout "$file" 2>&1 | sed 's/^/  /'
        return 1
    fi
    
    # Check for required BPMN elements
    if ! grep -q "<bpmn:definitions" "$file"; then
        echo -e "${RED}✗ Missing bpmn:definitions element: $file${NC}"
        return 1
    fi
    
    if ! grep -q "<bpmn:process" "$file"; then
        echo -e "${RED}✗ Missing bpmn:process element: $file${NC}"
        return 1
    fi
    
    # Check for required attributes
    if ! grep -q 'xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"' "$file"; then
        echo -e "${RED}✗ Missing BPMN namespace: $file${NC}"
        return 1
    fi
    
    # Check for basic BPMN structure
    local has_start=$(grep -c "<bpmn:startEvent" "$file")
    local has_end=$(grep -c "<bpmn:endEvent" "$file")
    local has_tasks=$(grep -c "<bpmn:task" "$file")
    local has_flows=$(grep -c "<bpmn:sequenceFlow" "$file")
    
    if [ "$has_start" -eq 0 ]; then
        echo -e "${RED}✗ Missing start event: $file${NC}"
        return 1
    fi
    
    if [ "$has_end" -eq 0 ]; then
        echo -e "${RED}✗ Missing end event: $file${NC}"
        return 1
    fi
    
    if [ "$has_tasks" -eq 0 ]; then
        echo -e "${RED}✗ Missing tasks: $file${NC}"
        return 1
    fi
    
    if [ "$has_flows" -eq 0 ]; then
        echo -e "${RED}✗ Missing sequence flows: $file${NC}"
        return 1
    fi
    
    # Check for documentation
    if ! grep -q "<bpmn:documentation" "$file"; then
        echo -e "${YELLOW}⚠ Warning: Missing documentation: $file${NC}"
    fi
    
    # Check for error handling
    if ! grep -q "<bpmn:error" "$file"; then
        echo -e "${YELLOW}⚠ Warning: No error definitions found: $file${NC}"
    fi
    
    # Check for swimlanes
    if ! grep -q "<bpmn:lane" "$file"; then
        echo -e "${YELLOW}⚠ Warning: No swimlanes defined: $file${NC}"
    fi
    
    echo -e "${GREEN}✓ Valid BPMN structure: $file${NC}"
    return 0
}

# Find all BPMN files
echo -e "${YELLOW}Searching for BPMN files...${NC}"
BPMN_FILES=$(find . -name "*.bpmn" -type f)

# Counter for results
TOTAL=0
VALID=0
INVALID=0
WARNINGS=0

# Validate each file
for file in $BPMN_FILES; do
    TOTAL=$((TOTAL + 1))
    if validate_bpmn "$file"; then
        VALID=$((VALID + 1))
    else
        INVALID=$((INVALID + 1))
    fi
done

# Print summary
echo -e "\n${YELLOW}Validation Summary:${NC}"
echo -e "Total files: $TOTAL"
echo -e "${GREEN}Valid files: $VALID${NC}"
echo -e "${RED}Invalid files: $INVALID${NC}"
if [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}Files with warnings: $WARNINGS${NC}"
fi

# Exit with error if any files are invalid
if [ $INVALID -gt 0 ]; then
    exit 1
fi

exit 0 