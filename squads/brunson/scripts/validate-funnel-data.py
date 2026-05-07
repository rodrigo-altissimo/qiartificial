#!/usr/bin/env python3
"""
Brunson Squad — Funnel Data Validator
Validates Minimum Funnel Data before funnel design or architecture tasks.

Usage:
  python validate-funnel-data.py <funnel_data.yaml>
  python validate-funnel-data.py --inline "secret_formula:Y,value_ladder:Y,dream_customer:Y,funnel_type:N,traffic_strategy:N"

Returns:
  PASS - All 5 Funnel Data items present
  FAIL - Missing items listed

Exit codes:
  0 = PASS
  1 = FAIL
"""

import sys
import yaml
from pathlib import Path

FUNNEL_DATA_ITEMS = [
    "secret_formula",     # WHO + WHERE + BAIT + RESULT
    "value_ladder",       # Min 3 rungs mapped with prices
    "dream_customer",     # Avatar with demographics + psychographics
    "funnel_type",        # Type selected with rationale
    "traffic_strategy",   # Dream 100 or traffic plan defined
]

FUNNEL_DATA_ALIASES = {
    "secret_formula": [
        "secret_formula", "formula_secreta", "secret-formula",
        "secretformula", "formula", "who_where_bait_result",
    ],
    "value_ladder": [
        "value_ladder", "escada_de_valor", "value-ladder",
        "valueladder", "ladder", "escada_valor",
    ],
    "dream_customer": [
        "dream_customer", "cliente_dos_sonhos", "dream-customer",
        "dreamcustomer", "avatar", "dream_avatar",
    ],
    "funnel_type": [
        "funnel_type", "tipo_funil", "funnel-type",
        "funneltype", "tipo_de_funil", "funnel",
    ],
    "traffic_strategy": [
        "traffic_strategy", "estrategia_trafego", "traffic-strategy",
        "trafficstrategy", "trafego", "dream_100", "dream100",
    ],
}


def normalize_key(key: str) -> str | None:
    """Map any alias to canonical Funnel Data key."""
    key_lower = key.lower().strip()
    for canonical, aliases in FUNNEL_DATA_ALIASES.items():
        if key_lower in aliases:
            return canonical
    return None


def parse_inline(inline: str) -> dict:
    """Parse inline format: 'secret_formula:Y,value_ladder:Y,...'"""
    result = {}
    pairs = inline.split(",")
    for pair in pairs:
        if ":" in pair:
            key, value = pair.split(":", 1)
            canonical = normalize_key(key)
            if canonical:
                val = value.strip().upper()
                if val in ["Y", "YES", "SIM", "S", "TRUE", "1"]:
                    result[canonical] = True
                elif val in ["N", "NO", "NAO", "FALSE", "0"]:
                    result[canonical] = False
                else:
                    result[canonical] = value.strip()
    return result


def parse_yaml_file(filepath: str) -> dict:
    """Parse YAML file and extract Funnel Data items."""
    with open(filepath, "r") as f:
        data = yaml.safe_load(f)

    result = {}

    def extract_funnel_data(obj):
        if isinstance(obj, dict):
            for key, value in obj.items():
                canonical = normalize_key(key)
                if canonical and value is not None:
                    str_value = str(value).strip().upper()
                    if str_value in ["Y", "YES", "SIM", "S", "TRUE"]:
                        result[canonical] = True
                    elif str_value in ["N", "NO", "NAO", "FALSE", "MISSING", ""]:
                        result[canonical] = False
                    elif str_value and str_value not in ["MISSING", "N/A", "NONE", "NULL"]:
                        result[canonical] = True
                if isinstance(value, dict):
                    extract_funnel_data(value)

    extract_funnel_data(data)
    return result


def validate_funnel_data(data: dict) -> tuple[bool, list[str], list[str]]:
    """
    Validate Funnel Data against required items.

    Returns:
        (is_valid, present_items, missing_items)
    """
    present = []
    missing = []

    for item in FUNNEL_DATA_ITEMS:
        if item in data and data[item]:
            present.append(item)
        else:
            missing.append(item)

    is_valid = len(missing) == 0
    return is_valid, present, missing


def format_item_name(item: str) -> str:
    """Human-readable item name."""
    names = {
        "secret_formula": "Secret Formula (WHO + WHERE + BAIT + RESULT)",
        "value_ladder": "Value Ladder (min 3 degraus com precos)",
        "dream_customer": "Dream Customer Avatar (demografia + psicografia)",
        "funnel_type": "Tipo de Funil (selecionado com justificativa)",
        "traffic_strategy": "Estrategia de Trafego (Dream 100 ou plano)",
    }
    return names.get(item, item)


def main():
    if len(sys.argv) < 2:
        print("Usage: python validate-funnel-data.py <funnel_data.yaml>")
        print("       python validate-funnel-data.py --inline 'secret_formula:Y,value_ladder:Y,...'")
        sys.exit(1)

    # Parse input
    if sys.argv[1] == "--inline":
        if len(sys.argv) < 3:
            print("Error: --inline requires data string")
            sys.exit(1)
        data = parse_inline(sys.argv[2])
    else:
        filepath = sys.argv[1]
        if not Path(filepath).exists():
            print(f"Error: File not found: {filepath}")
            sys.exit(1)
        data = parse_yaml_file(filepath)

    # Validate
    is_valid, present, missing = validate_funnel_data(data)

    # Output
    print("=" * 60)
    print("FUNNEL DATA VALIDATION REPORT")
    print("=" * 60)
    print()
    print(f"Status: {'PASS' if is_valid else 'FAIL'}")
    print(f"Completeness: {len(present)}/5")
    print()

    if present:
        print("Present items:")
        for item in present:
            print(f"  [x] {format_item_name(item)}")

    if missing:
        print()
        print("Missing items (REQUIRED before funnel design):")
        for item in missing:
            print(f"  [ ] {format_item_name(item)}")

    print()
    print("=" * 60)

    if is_valid:
        print("RESULT: PASS - All Funnel Data items present. Funnel design allowed.")
    else:
        print("RESULT: FAIL - Collect missing items before designing funnel.")
        print()
        print("Perguntas diagnosticas:")
        for item in missing:
            questions = {
                "secret_formula": "Quem e seu Dream Customer, onde ele se congrega, qual isca vai atrai-lo, e qual resultado unico voce entrega?",
                "value_ladder": "Quais sao os degraus da sua Value Ladder? (Bait/Free -> Frontend -> Middle -> Backend -> High-Ticket)",
                "dream_customer": "Descreva seu cliente dos sonhos: quem e, o que pensa, o que sente, o que teme, o que deseja ardentemente?",
                "funnel_type": "Qual tipo de funil voce vai usar e por que? (SLO, Webinar, Challenge, Application, etc.)",
                "traffic_strategy": "Como voce vai atrair Dream Customers? Quem sao seus Dream 100? Qual tipo de trafego vai usar?",
            }
            print(f"  - {questions.get(item, item)}")

    print("=" * 60)

    sys.exit(0 if is_valid else 1)


if __name__ == "__main__":
    main()
