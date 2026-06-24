// Short-stack push/fold (shove-or-fold) jam ranges for the Push/Fold Chart tool.
//
// These are unexploitable / Nash-equilibrium all-in ranges, NO ANTE, chip-EV,
// with the effective stack measured in big blinds.
//
// Full-ring positions (UTG, HJ, CO, BTN) come from the canonical Jennifear
// no-ante chip-EV full-ring Nash push/fold chart, mapped by the number of
// players left to act behind the shover (BTN = 2 behind = "Button" column,
// CO = 3 = "Cutoff", HJ = 4 = "Hijack", UTG = 8 = the tightest "Button-6"
// column). The small blind row is the "folded to the SB" spot, which is
// heads-up (only the big blind is left), so it doubles as the heads-up
// small-blind shoving range; those were cross-checked against the primedope
// equilibrium pushbot charts and HoldemResources Nash.
//
// Every notation string parses through parseRangeNotation() in
// lib/poker-ranges.ts (pairs "22+", suited "A2s+" and "A5s-A2s", offsuit
// "A2o+", bare "AK" = both).

export type PFPosition = 'UTG' | 'HJ' | 'CO' | 'BTN' | 'SB'
export type PFStack = 5 | 8 | 10 | 12 | 15

export const PF_POSITIONS: PFPosition[] = ['UTG', 'HJ', 'CO', 'BTN', 'SB']
export const PF_STACKS: PFStack[] = [5, 8, 10, 12, 15]

export const PF_POSITION_NOTES: Record<PFPosition, string> = {
  UTG: 'Under the gun, everyone is left to act, so this is the tightest jam range.',
  HJ: 'Hijack. A few players behind you, a little wider than under the gun.',
  CO: 'Cutoff. Only three seats behind you, so the range opens up.',
  BTN: 'Button. Just the blinds are left, the widest full-ring jam range.',
  SB: 'Small blind, folded to you. This is heads-up versus the big blind, so it is very wide.',
}

// Position x stack -> jam range in standard notation.
export const PUSH_FOLD_RANGES: Record<PFPosition, Record<PFStack, string>> = {
  UTG: {
    5: '22+, A3s+, ATo+, K9s+, KJo+, Q9s+, J9s+, T9s',
    8: '55+, ATs+, AJo+, KTs+, QTs+, JTs',
    10: '99+, A9s+, A5s, AJo+, KTs+, QTs+, JTs',
    12: 'TT+, ATs+, AJo+, KJs+, QJs',
    15: 'TT+, ATs+, AQo+, KJs+',
  },
  HJ: {
    5: '22+, A2s+, A2o+, K6s+, K9o+, Q9s+, QTo+, J9s+, T8s+, 98s',
    8: '22+, A2s+, A8o+, K9s+, KTo+, Q9s+, QJo, J8s+, JTo, T8s+, 98s',
    10: '22+, A7s+, A5s-A3s, ATo+, K8s+, KJo+, Q8s+, QJo, J8s+, T8s+, 98s',
    12: '22+, A8s+, A5s-A4s, ATo+, K9s+, KJo+, Q9s+, J9s+, T9s',
    15: '22+, A9s+, A5s, ATo+, K9s+, KQo, Q9s+, J9s+, T9s',
  },
  CO: {
    5: '22+, A2s+, A2o+, K3s+, K9o+, Q8s+, QTo+, J8s+, JTo, T8s+, 98s, 87s',
    8: '22+, A2s+, A2o+, K8s+, KTo+, Q9s+, QJo, J9s+, T8s+, 98s, 87s',
    10: '22+, A2s+, A7o+, A5o, K7s+, KTo+, Q8s+, QTo+, J8s+, JTo, T8s+, 98s, 87s',
    12: '22+, A2s+, A9o+, K9s+, KTo+, Q9s+, QJo, J8s+, JTo, T8s+, 98s',
    15: '22+, A7s+, A5s-A4s, ATo+, K8s+, KJo+, Q9s+, QJo, J9s+, T9s, 98s',
  },
  BTN: {
    5: '22+, A2s+, A2o+, K2s+, K5o+, Q6s+, Q9o+, J8s+, JTo, T8s+, 97s+, 87s, 76s',
    8: '22+, A2s+, A2o+, K3s+, K9o+, Q8s+, QTo+, J7s+, JTo, T7s+, T9o, 97s+, 86s+, 76s, 65s',
    10: '22+, A2s+, A2o+, K6s+, KTo+, Q8s+, QTo+, J8s+, JTo, T8s+, 97s+, 87s, 76s',
    12: '22+, A2s+, A2o+, K6s+, KTo+, Q8s+, QTo+, J8s+, JTo, T8s+, 97s+, 87s, 76s',
    15: '22+, A2s+, A5o+, K6s+, KTo+, Q8s+, QTo+, J8s+, JTo, T7s+, 97s+, 87s, 76s',
  },
  SB: {
    5: '22+, A2s+, A2o+, K2s+, K2o+, Q2s+, Q2o+, J2s+, J3o+, T2s+, T6o+, 95s+, 97o+, 84s+, 86o+, 74s+, 76o, 64s+, 53s+, 43s',
    8: '22+, A2s+, A2o+, K2s+, K2o+, Q2s+, Q4o+, J2s+, J7o+, T4s+, T7o+, 95s+, 97o+, 84s+, 87o, 74s+, 76o, 64s+, 53s+, 43s',
    10: '22+, A2s+, A2o+, K2s+, K2o+, Q2s+, Q7o+, J3s+, J8o+, T4s+, T8o+, 95s+, 97o+, 84s+, 87o, 74s+, 76o, 64s+, 53s+, 43s',
    12: '22+, A2s+, A2o+, K2s+, K6o+, Q2s+, Q8o+, J4s+, J8o+, T5s+, T8o+, 95s+, 97o+, 85s+, 87o, 74s+, 64s+, 53s+',
    15: '22+, A2s+, A2o+, K2s+, K6o+, Q4s+, Q9o+, J5s+, J9o+, T6s+, T8o+, 96s+, 98o, 85s+, 75s+, 64s+, 54s',
  },
}
