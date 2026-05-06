# Component API Checklist

## Pass Criteria
- **Threshold:** Score >= 6/9 = PASS
- **Veto:** If any Rule 1 (Naming) is missing, AUTOMATIC FAIL.

## 1. Naming & Consistency (Weight: 3)

- [ ] Props use concise, clear names (e.g., `isOpen` instead of `isDropdownOpen`). 
  - *If FAIL -> Rename props to standard prefix rules.*
- [ ] Boolean props default to false.
  - *If FAIL -> Change default values to false.*
- [ ] Event handler props start with `on` (e.g., `onClick`, `onChange`).
  - *If FAIL -> Prepend 'on' to all action prop names.*

## 2. Flexibility (Weight: 3)

- [ ] Avoids deeply nested configuration objects as props.
  - *If FAIL -> Flatten config objects into individual props or compose children.*
- [ ] Leverages composition (children) when appropriate.
  - *If FAIL -> Replace opaque config arrays with standard explicit `children` mapping.*
- [ ] Supports passing HTML attributes directly to the root element.
  - *If FAIL -> Implement rest/spread (`...props`) on the topmost HTML element.*

## 3. Documentation (Weight: 3)

- [ ] All props are documented with types.
  - *If FAIL -> Add JSDoc/TS types for every exposed property.*
- [ ] Default values are explicitly stated.
  - *If FAIL -> Note 'default: x' in all optional prop comments.*
- [ ] Includes practical code examples.
  - *If FAIL -> Supply at least 1 JSX snippet demonstrating usage.*
