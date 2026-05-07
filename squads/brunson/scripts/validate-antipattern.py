#!/usr/bin/env python3
"""
Brunson Squad — Antipattern Validator
Runs antipattern screening checklist for funnel launches and returns violations.

Usage:
  python validate-antipattern.py <funnel_audit.yaml>
  python validate-antipattern.py --interactive

Returns:
  PASS - No antipatterns detected
  FAIL - Violations listed with remediation

Exit codes:
  0 = PASS
  1 = FAIL (has VETO violations)
"""

import sys
import yaml
from pathlib import Path

ANTIPATTERNS = [
    {
        "id": "AP_001",
        "name": "Funnel Without Secret Formula",
        "field": "sem_secret_formula",
        "question": "O funil foi desenhado SEM a Secret Formula definida (WHO/WHERE/BAIT/RESULT)?",
        "red_flags": [
            "Nao sabe quem e o Dream Customer",
            "Nao identificou onde o publico se congrega",
            "Isca (bait) nao definida ou generica",
            "Resultado prometido vago ou generico",
        ],
        "veto_if": True,
        "antidote": "Voltar ao inicio. Definir Secret Formula antes de qualquer design de funil.",
    },
    {
        "id": "AP_002",
        "name": "Skipping Value Ladder",
        "field": "sem_value_ladder",
        "question": "O funil pula degraus da Value Ladder (vende high-ticket sem frontend)?",
        "red_flags": [
            "Tenta vender produto caro sem oferta de entrada",
            "Nao tem isca gratuita para capturar leads",
            "Pula de free direto para backend",
            "Value Ladder tem menos de 3 degraus",
        ],
        "veto_if": True,
        "antidote": "Mapear Value Ladder completa: Bait -> Frontend -> Middle -> Backend.",
    },
    {
        "id": "AP_003",
        "name": "Copy Without Hook-Story-Offer",
        "field": "sem_hook_story_offer",
        "question": "A copy/conteudo foi criado SEM a estrutura Hook-Story-Offer?",
        "red_flags": [
            "Sales page comeca com features, nao com hook",
            "Nao tem historia (Epiphany Bridge) no meio",
            "Oferta aparece sem construcao de valor",
            "Ad/email sem hook claro nos primeiros 3 segundos",
        ],
        "veto_if": True,
        "antidote": "Reescrever seguindo Hook (atencao) -> Story (conexao) -> Offer (acao).",
    },
    {
        "id": "AP_004",
        "name": "Webinar Without Big Domino",
        "field": "sem_big_domino",
        "question": "O webinar nao tem Big Domino definido (a UNICA crenca a derrubar)?",
        "red_flags": [
            "Webinar tenta ensinar muitas coisas",
            "Nao identifica a crenca limitante principal",
            "Apresentacao sem foco em UMA grande transformacao",
            "Tres Segredos nao conectam ao Big Domino",
        ],
        "veto_if": True,
        "antidote": "Identificar: 'Se eu fizer eles acreditarem que [X], todas as objecoes caem.'",
    },
    {
        "id": "AP_005",
        "name": "Traffic Without Dream 100",
        "field": "sem_dream_100",
        "question": "A estrategia de trafego nao inclui Dream 100 (congregacoes do publico)?",
        "red_flags": [
            "Comprando trafego frio sem saber onde o publico esta",
            "Nao identificou influenciadores/canais do nicho",
            "Nao tem lista de 100 alvos para infiltrar",
            "So depende de ads pagos sem estrategia de congregacao",
        ],
        "veto_if": True,
        "antidote": "Criar lista Dream 100: podcasts, blogs, canais, influenciadores, grupos do nicho.",
    },
    {
        "id": "AP_006",
        "name": "Fake Scarcity/Urgency",
        "field": "escassez_falsa",
        "question": "A escassez ou urgencia NAO e genuina?",
        "red_flags": [
            "Contador que reseta quando expira",
            "Vagas 'limitadas' que nunca acabam",
            "Deadline que estende automaticamente",
            "Bonus 'exclusivos' disponiveis o ano todo",
        ],
        "veto_if": True,
        "antidote": "Remover escassez falsa ou tornar genuina (limite real de vagas, deadline real).",
    },
    {
        "id": "AP_007",
        "name": "Offer Without Value Stack",
        "field": "sem_value_stack",
        "question": "A oferta nao tem Value Stack empilhado (valor percebido < 10x preco)?",
        "red_flags": [
            "Preco apresentado sem ancoragem de valor",
            "Bonus nao tem valor individual atribuido",
            "Stack Slide ausente ou fraco",
            "Valor total empilhado < 3x preco (ideal 10x)",
        ],
        "veto_if": False,  # MODIFY, not VETO
        "antidote": "Construir Stack Slide: listar cada componente com valor, empilhar, revelar preco real.",
    },
    {
        "id": "AP_008",
        "name": "Email Without Soap Opera Structure",
        "field": "email_sem_soap_opera",
        "question": "A sequencia de emails nao segue estrutura Soap Opera?",
        "red_flags": [
            "Emails sao broadcasts isolados, sem arco narrativo",
            "Nao tem gancho no final conectando ao proximo email",
            "Falta a progressao: cenario -> drama -> epifania -> prova -> urgencia",
            "Sequencia de onboarding e so informativa, sem storytelling",
        ],
        "veto_if": False,  # MODIFY
        "antidote": "Reestruturar em 5 episodios Soap Opera: cenario, drama, epifania, prova, urgencia.",
    },
    {
        "id": "AP_009",
        "name": "Launch Without Pre-Frame",
        "field": "sem_pre_frame",
        "question": "O lancamento nao tem pre-frame adequado (preparacao do estado mental)?",
        "red_flags": [
            "Audiencia chega na pagina de vendas 'fria'",
            "Nao tem pre-frame bridge antes da oferta",
            "Sequencia de aquecimento ausente",
            "Nao educa sobre o problema antes de vender a solucao",
        ],
        "veto_if": False,  # MODIFY
        "antidote": "Criar pre-frame bridge: conteudo/video/email que prepara o estado mental antes da oferta.",
    },
    {
        "id": "AP_010",
        "name": "Page Without Single CTA",
        "field": "multiplos_ctas",
        "question": "A pagina tem MULTIPLOS CTAs competindo por atencao?",
        "red_flags": [
            "Mais de 1 acao diferente na mesma pagina",
            "Menu de navegacao em sales page",
            "Links externos que tiram da pagina de venda",
            "Sidebar com ofertas diferentes",
        ],
        "veto_if": False,  # MODIFY
        "antidote": "Uma pagina, uma oferta, um CTA. Remover todas as distractoes.",
    },
    {
        "id": "AP_011",
        "name": "Story Without Epiphany Bridge",
        "field": "sem_epiphany_bridge",
        "question": "A historia principal nao segue o formato Epiphany Bridge?",
        "red_flags": [
            "Historia nao tem backstory claro",
            "Falta o momento 'aha' (epifania)",
            "Nao conecta a epifania ao produto/oferta",
            "Historia e sobre o guru, nao sobre a transformacao",
            "Ouvinte nao consegue se ver na historia",
        ],
        "veto_if": True,
        "antidote": "Reescrever com Epiphany Bridge: Backstory -> Jornada -> Momento 'Aha' -> Transformacao -> Framework.",
    },
]


def validate_from_file(filepath: str) -> tuple[bool, list[dict], list[dict]]:
    """Validate antipatterns from YAML file."""
    with open(filepath, "r") as f:
        data = yaml.safe_load(f)

    violations = []
    passed = []

    for ap in ANTIPATTERNS:
        field = ap["field"]
        # Check if field exists and is True (violation present)
        is_violation = data.get(field, False) == True

        if is_violation:
            violations.append(ap)
        else:
            passed.append(ap)

    return len(violations) == 0, passed, violations


def interactive_check() -> tuple[bool, list[dict], list[dict]]:
    """Interactive antipattern check via prompts."""
    violations = []
    passed = []

    print("=" * 60)
    print("BRUNSON ANTIPATTERN SCREENING - INTERACTIVE")
    print("Responda Y (sim, antipattern presente) ou N (nao) para cada pergunta.")
    print("=" * 60)
    print()

    for ap in ANTIPATTERNS:
        print(f"[{ap['id']}] {ap['name']}")
        severity = "VETO" if ap["veto_if"] else "MODIFY"
        print(f"  Severidade: {severity}")
        print(f"  Pergunta: {ap['question']}")
        print(f"  Red flags:")
        for rf in ap["red_flags"]:
            print(f"    - {rf}")

        while True:
            answer = input("  Este antipattern esta presente? (Y/N): ").strip().upper()
            if answer in ["Y", "N", "S"]:
                break
            print("  Por favor, responda Y ou N.")

        if answer in ["Y", "S"]:
            violations.append(ap)
            print(f"  -> DETECTADO. Antidoto: {ap['antidote']}")
        else:
            passed.append(ap)
            print(f"  -> OK")
        print()

    return len(violations) == 0, passed, violations


def print_report(is_valid: bool, passed: list[dict], violations: list[dict]):
    """Print formatted validation report."""
    print()
    print("=" * 60)
    print("BRUNSON ANTIPATTERN VALIDATION REPORT")
    print("=" * 60)
    print()

    veto_violations = [v for v in violations if v["veto_if"]]
    modify_violations = [v for v in violations if not v["veto_if"]]

    print(f"Status: {'PASS' if is_valid else 'FAIL'}")
    print(f"Passed: {len(passed)}/{len(ANTIPATTERNS)}")
    print(f"Violations: {len(violations)} ({len(veto_violations)} VETO, {len(modify_violations)} MODIFY)")
    print()

    if passed:
        print("PASSED CHECKS:")
        for p in passed:
            print(f"  [OK] [{p['id']}] {p['name']}")
        print()

    if violations:
        if veto_violations:
            print("VETO VIOLATIONS (bloqueiam lancamento do funil):")
            for v in veto_violations:
                print(f"  [{v['id']}] {v['name']}")
                print(f"       Antidoto: {v['antidote']}")
            print()

        if modify_violations:
            print("MODIFY VIOLATIONS (ajustar antes de lancar):")
            for v in modify_violations:
                print(f"  [{v['id']}] {v['name']}")
                print(f"       Antidoto: {v['antidote']}")
            print()

    print("=" * 60)

    if is_valid:
        print("RESULT: PASS - Nenhum antipattern critico detectado.")
        print("Funil aprovado para lancamento.")
    elif veto_violations:
        print("RESULT: VETO - Corrigir violacoes antes de lancar o funil.")
        print()
        print("Veto VT1-008: Antipattern critico detectado. Workflow bloqueado.")
        print()
        print("Acoes imediatas:")
        for v in veto_violations:
            print(f"  - [{v['id']}]: {v['antidote']}")
    else:
        print("RESULT: MODIFY - Ajustar violacoes, pode prosseguir com cuidado.")
        print()
        print("Recomendacoes:")
        for v in modify_violations:
            print(f"  - [{v['id']}]: {v['antidote']}")

    print("=" * 60)


def main():
    if len(sys.argv) < 2:
        print("Usage: python validate-antipattern.py <funnel_audit.yaml>")
        print("       python validate-antipattern.py --interactive")
        sys.exit(1)

    if sys.argv[1] == "--interactive":
        is_valid, passed, violations = interactive_check()
    else:
        filepath = sys.argv[1]
        if not Path(filepath).exists():
            print(f"Error: File not found: {filepath}")
            sys.exit(1)
        is_valid, passed, violations = validate_from_file(filepath)

    # Print report
    print_report(is_valid, passed, violations)

    # Exit with 1 only if VETO violations exist
    veto_violations = [v for v in violations if v["veto_if"]]
    sys.exit(0 if (is_valid or not veto_violations) else 1)


if __name__ == "__main__":
    main()
