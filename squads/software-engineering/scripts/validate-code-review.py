#!/usr/bin/env python3
import sys

def validate_code():
    print("Running Code Review Validation (VETO-003, VETO-102)...")
    print("[*] Checking PR against Clean Code checklists...")
    # Mock validation logic
    print("FATAL: Function 'processOrder' exceeds complexity limit of 10.")
    print("ACTION REQUIRED: Refactor using Extract Method or refer to @eng-clean-code.")
    sys.exit(1)

if __name__ == "__main__":
    validate_code()
