# One Propagator, Three Regimes

**Testing High-Energy Physics Across Scales**

A four-lab capstone for MSc Experimental Physics, connecting gravitational metrology, atomic spectroscopy, and collider physics through a single organising principle: the massive mediator propagator.

Physikalisches Institut · Albert-Ludwigs-Universität Freiburg

---

## What this is

Three experiments — torsion balance (gravitational constant), positronium hyperfine splitting, and Z⁰ resonance analysis — are usually taught as isolated techniques. This capstone treats them as kinematic limits of one tree-level exchange amplitude:

```
M(q) ~ g² / (q² − m_ϕ²)
```

| Limit | Regime | Observable | Lab |
|-------|--------|-----------|-----|
| Static, \|q\| ≪ m_ϕ | Yukawa potential | Modified 1/r | Lab 1 |
| Bound state, \|q\| ~ αm_e | Contact operator | HFS shift | Lab 2 |
| On-shell, q² → m_ϕ² | Resonance pole | Cross-section peak + Γ_inv | Lab 3 |

Lab 4 synthesises the results into a unified exclusion plot, gap analysis, and critical evaluation of whether the unification holds up.

## Structure

```
one-propagator/
├── index.html                  ← Landing page
├── framework.html              ← Theory reference (all labs)
├── tutorial.html               ← Worked examples, textbook bridge
├── lab1.html                   ← Gravitational constant + Yukawa
├── lab2.html                   ← Positronium HFS + BSM contact
├── lab3.html                   ← Z⁰ resonance + invisible width
├── lab4.html                   ← Synthesis + gap analysis
├── style.css                   ← Shared stylesheet
├── framework/
│   ├── propagator_derivations.py
│   └── likelihood_utils.py
├── lab1-gravity/
│   ├── README.md
│   ├── notebook_template.ipynb
│   └── data/
│       └── synthetic_yukawa_signal.csv
├── lab2-positronium/
│   ├── README.md
│   ├── notebook_template.ipynb
│   └── data/
│       └── hfs_published_values.csv
├── lab3-z0/
│   ├── README.md
│   ├── notebook_template.ipynb
│   └── data/
│       └── lep_lineshape.csv
├── lab4-synthesis/
│   ├── README.md
│   ├── notebook_template.ipynb
│   └── results/
├── archive/
│   └── README.md
├── README.md                   ← This file
└── LICENSE
```

## How to use

**As a student at Freiburg:** Fork this repository. Work in the lab directories. Push your final notebooks and results. Your lab notes and analysis code form the appendices of your report.

**As an instructor elsewhere:** The site and notebooks are self-contained. The propagator-unification concept is not Freiburg-specific — any department with a Cavendish experiment and access to published LEP data can adapt this. See the licence below.

## Course design

**Learning phase (Labs 1–4).** Formative feedback only, no direct grade impact. Each lab follows the FP three-step protocol: entrance session, active lab with lab notes, findings session.

**Exam phase.** Standalone special lab class. Full scientific report (30%) + seminar presentation with oral defence (70%). Single final grade.

The four-lab separation is deliberate. Labs 1–2 probe the propagator off-shell (Yukawa screening, contact operators). Lab 3 teaches pole physics at the Z⁰ mass. Lab 4 is where students confront the mapping problem — what can be unified onto a common parameter plane and what cannot — and produce a critical evaluation of the entire programme.

## Prerequisites

- Theoretical mechanics, quantum mechanics, perturbation theory (Theo I–III)
- Exposure to QFT propagators and Feynman rules (Theo III/IV)
- Fourier transforms in scattering context
- χ² fitting and uncertainty propagation
- Python with NumPy and SciPy

## Key references

- Adelberger et al., *Ann. Rev. Nucl. Part. Sci.* 53, 77 (2003) — inverse-square law tests
- Arkani-Hamed, Dimopoulos, Dvali, *Phys. Lett. B* 429, 263 (1998) — ADD extra dimensions
- LEP Collaborations, *Phys. Rep.* 427, 257 (2006) — Z resonance precision
- Karshenboim, *Phys. Rev. Lett.* 104, 220406 (2010) — light boson constraints
- Feldman and Cousins, *Phys. Rev. D* 57, 3873 (1998) — unified statistical approach
- Cowan et al., *Eur. Phys. J. C* 71, 1554 (2011) — asymptotic likelihood formulae

## Archive

After each cohort, the student's final synthesis plot and a one-paragraph gap-analysis summary are deposited (with permission) in `archive/`. Over time, this shows how different analysis choices produce different exclusion contours from the same physics.

## Licence

CC BY-SA 4.0. See [LICENSE](LICENSE).

---

Physikalisches Institut · Albert-Ludwigs-Universität Freiburg
Draft v0.1
