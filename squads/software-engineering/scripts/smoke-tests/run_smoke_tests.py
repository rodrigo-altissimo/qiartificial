#!/usr/bin/env python3
import os
import yaml
import sys
from pathlib import Path

# Base paths
SQUAD_DIR = Path(__file__).parent.parent.parent
CONFIG_FILE = SQUAD_DIR / "config.yaml"
MINDS_DIR = SQUAD_DIR / "data/minds"
WORKFLOWS_DIR = SQUAD_DIR / "workflows"
CHECKLISTS_DIR = SQUAD_DIR / "checklists"

def load_yaml(filepath):
    try:
        with open(filepath, 'r') as f:
            docs = list(yaml.safe_load_all(f))
            # Merge documents or just return the first one with elements, or combine dicts
            result = {}
            for doc in docs:
                if isinstance(doc, dict):
                    result.update(doc)
            return result if result else None
    except Exception as e:
        print(f"❌ YAML Syntax Error in {filepath}: {e}")
        return None

def test_yaml_syntax():
    print("\n--- Running YAML Syntax Test ---")
    all_yamls = list(MINDS_DIR.glob("*.yaml")) + list(WORKFLOWS_DIR.glob("*.yaml")) + [CONFIG_FILE, SQUAD_DIR / "config/veto-conditions.yaml"]
    passed = True
    for yml in all_yamls:
        if not yml.exists():
            continue
        if load_yaml(yml) is None:
            passed = False
    if passed:
        print("✅ All YAML files have valid syntax.")
    return passed

def test_agents_declared_vs_existing():
    print("\n--- Running Agent Integrity Test ---")
    config = load_yaml(CONFIG_FILE)
    declared_agents = {agent['id'] for agent in config.get('agents', [])}
    
    existing_files = {f.stem.replace("-dna", "") for f in MINDS_DIR.glob("*-dna.yaml")}
    
    passed = True
    missing_files = declared_agents - existing_files
    if missing_files:
        print(f"❌ Declared agents missing DNA files: {missing_files}")
        passed = False
        
    undeclared_files = existing_files - declared_agents
    if undeclared_files:
        print(f"⚠️ DNA files exist for undeclared agents: {undeclared_files} (Consider adding to config.yaml)")
        
    if passed:
        print("✅ All declared agents have corresponding DNA files.")
        
    return passed, declared_agents

def test_workflow_agent_references(declared_agents):
    print("\n--- Running Workflow Reference Test ---")
    passed = True
    for wf_file in WORKFLOWS_DIR.glob("*.yaml"):
        wf = load_yaml(wf_file)
        if not wf:
            continue
        for step in wf.get('steps', []):
            agent = step.get('agent')
            if agent and agent not in declared_agents and not agent.startswith("${"):
                print(f"❌ Workflow {wf_file.name} references unknown agent: {agent}")
                passed = False
    
    if passed:
        print("✅ All workflows reference valid, declared agents.")
    return passed

if __name__ == "__main__":
    print("🚀 Starting Squad Smoke Tests...")
    success = True
    
    success &= test_yaml_syntax()
    
    ag_success, declared_agents = test_agents_declared_vs_existing()
    success &= ag_success
    
    if declared_agents:
        success &= test_workflow_agent_references(declared_agents)
        
    if success:
        print("\n🎉 ALL SMOKE TESTS PASSED!")
        sys.exit(0)
    else:
        print("\n💥 SMOKE TESTS FAILED! See above errors.")
        sys.exit(1)
