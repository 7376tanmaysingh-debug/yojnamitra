import { CitizenProfile, MatchResult, Scheme } from '../types';

export function evaluateSchemeEligibility(profile: CitizenProfile, scheme: Scheme): MatchResult {
  const met: string[] = [];
  const unmet: string[] = [];
  const conditionalNotes: string[] = [];

  const rules = scheme.eligibilityCriteria;

  // 1. Age check
  if (rules.minAge !== undefined) {
    if (profile.age >= rules.minAge) {
      met.push(`Age ${profile.age} meets minimum requirement (≥ ${rules.minAge} yrs)`);
    } else {
      unmet.push(`Current age (${profile.age}) is below minimum requirement (${rules.minAge} yrs)`);
    }
  }

  if (rules.maxAge !== undefined) {
    if (profile.age <= rules.maxAge) {
      met.push(`Age ${profile.age} is within upper threshold (≤ ${rules.maxAge} yrs)`);
    } else {
      unmet.push(`Age (${profile.age}) exceeds age ceiling (${rules.maxAge} yrs)`);
    }
  }

  // 2. Gender check
  if (scheme.id === 'stand-up-india') {
    // Special rule for Stand-Up India: Women of ANY category OR SC/ST of any gender
    const isWoman = profile.gender === 'Female';
    const isScSt = profile.socialCategory === 'SC' || profile.socialCategory === 'ST';
    if (isWoman || isScSt) {
      met.push(isWoman ? 'Eligible as Woman Entrepreneur' : 'Eligible as SC/ST Entrepreneur');
    } else {
      unmet.push('Applicant must be a Woman or belong to SC/ST community');
    }
  } else if (rules.gender && rules.gender !== 'Any') {
    if (profile.gender === rules.gender) {
      met.push(`Gender requirement (${rules.gender}) satisfied`);
    } else {
      unmet.push(`Restricted to ${rules.gender} applicants only`);
    }
  }

  // 3. Occupation check
  if (rules.occupations && rules.occupations !== 'Any' && rules.occupations.length > 0) {
    if (rules.occupations.includes(profile.occupation)) {
      met.push(`Target occupation (${profile.occupation}) matches scheme scope`);
    } else {
      unmet.push(`Designed specifically for: ${rules.occupations.join(', ')}`);
    }
  }

  // 4. Social category check
  if (rules.socialCategories && rules.socialCategories !== 'Any' && rules.socialCategories.length > 0) {
    if (rules.socialCategories.includes(profile.socialCategory)) {
      met.push(`Category (${profile.socialCategory}) is eligible`);
    } else {
      unmet.push(`Available for categories: ${rules.socialCategories.join(', ')}`);
    }
  }

  // 5. Income check
  if (rules.maxAnnualIncome !== undefined) {
    if (profile.annualIncome <= rules.maxAnnualIncome) {
      met.push(`Annual income (₹${profile.annualIncome.toLocaleString()}) is below ceiling of ₹${rules.maxAnnualIncome.toLocaleString()}`);
    } else {
      unmet.push(`Annual income (₹${profile.annualIncome.toLocaleString()}) exceeds the limit of ₹${rules.maxAnnualIncome.toLocaleString()}`);
    }
  }

  // 6. Taxpayer restriction
  if (rules.requiresNonTaxpayer) {
    if (!profile.isIncomeTaxPayer) {
      met.push('Non-taxpayer condition satisfied');
    } else {
      unmet.push('Restricted to non-income-taxpaying households');
    }
  }

  // 7. BPL / Priority Ration Card
  if (rules.requiresBpl) {
    if (profile.hasBplRationCard || profile.rationCardType === 'AAY (Antyodaya)' || profile.rationCardType === 'BPL (Priority)') {
      met.push('BPL / Priority Ration Card holder');
    } else if (profile.annualIncome <= 120000) {
      conditionalNotes.push('Does not currently hold a BPL card, but income qualifies for BPL/EWS certification');
    } else {
      unmet.push('Requires Below Poverty Line (BPL / Antyodaya / Priority) status');
    }
  }

  // 8. Farmland requirement
  if (rules.requiresFarmland) {
    if (profile.landholdingAcres > 0) {
      met.push(`Owns ${profile.landholdingAcres} acres of cultivable farmland`);
    } else {
      unmet.push('Requires ownership of cultivable agricultural land (Khatauni/RoR)');
    }
  }

  // 9. Girl child under 10
  if (rules.requiresGirlChildUnder10) {
    if (profile.hasGirlChildUnder10) {
      met.push('Has girl child under 10 years of age');
    } else {
      unmet.push('Requires having a girl child under the age of 10');
    }
  }

  // 10. Pregnancy / Lactating mother
  if (rules.requiresPregnantOrLactating) {
    if (profile.isPregnantOrLactating) {
      met.push('Registered pregnant or lactating mother status confirmed');
    } else {
      unmet.push('Applicable exclusively for pregnant women or lactating mothers');
    }
  }

  // 11. Disability
  if (rules.requiresDisability) {
    if (profile.isPersonWithDisability) {
      const minPerc = rules.minDisabilityPercentage || 40;
      if (profile.disabilityPercentage >= minPerc) {
        met.push(`Certified disability percentage (${profile.disabilityPercentage}%) meets requirement (≥ ${minPerc}%)`);
      } else {
        unmet.push(`Disability percentage (${profile.disabilityPercentage}%) is below required ${minPerc}% for this benefit`);
      }
    } else {
      unmet.push('Designated for persons with benchmark disabilities (PwD / UDID holder)');
    }
  }

  // 12. Housing condition
  if (rules.requiresKutchaOrHomeless) {
    if (profile.housingType === 'Kutcha / Mud House' || profile.housingType === 'Homeless' || profile.housingType === 'Rented') {
      met.push(`Housing status (${profile.housingType}) qualifies for housing assistance`);
    } else {
      unmet.push('Applicant family already resides in a pucca house');
    }
  }

  // 13. Area type check
  if (rules.areaType && rules.areaType !== 'Any' && rules.areaType.length > 0) {
    if (rules.areaType.includes(profile.areaType)) {
      met.push(`Residence area (${profile.areaType}) matches scheme operational jurisdiction`);
    } else {
      unmet.push(`Only operational in: ${rules.areaType.join(', ')} areas`);
    }
  }

  // 14. Self Help Group (SHG) membership
  if (rules.requiresShgMember) {
    if (profile.isShgMember) {
      met.push('Active member of registered women Self Help Group (SHG)');
    } else {
      conditionalNotes.push('Can become eligible by enrolling in a local NRLM/DAY village Self Help Group');
      unmet.push('Requires active membership in an accredited women Self Help Group');
    }
  }

  // Calculate overall score and status
  const totalChecks = met.length + unmet.length + conditionalNotes.length;
  const score = totalChecks > 0 ? Math.round((met.length / totalChecks) * 100) : 0;

  let status: 'eligible' | 'conditional' | 'ineligible' = 'ineligible';

  if (unmet.length === 0 && conditionalNotes.length === 0) {
    status = 'eligible';
  } else if (unmet.length === 0 && conditionalNotes.length > 0) {
    status = 'conditional';
  } else if (unmet.length === 1 && conditionalNotes.length > 0 && score >= 70) {
    status = 'conditional';
  } else {
    status = 'ineligible';
  }

  // Recommendation message
  let recommendation = '';
  if (status === 'eligible') {
    recommendation = `You meet 100% of the verified statutory requirements. Apply immediately via ${scheme.applicationMode}.`;
  } else if (status === 'conditional') {
    recommendation = `Potentially eligible pending document verification or procedural enrollment (${conditionalNotes.join('; ')}).`;
  } else {
    recommendation = `Currently not eligible due to ${unmet.slice(0, 2).join('; ')}. Check alternative related programs.`;
  }

  return {
    scheme,
    status,
    score,
    metCriteria: met,
    unmetCriteria: unmet,
    conditionalNotes: conditionalNotes.length > 0 ? conditionalNotes : undefined,
    recommendation
  };
}

export function matchAllSchemes(profile: CitizenProfile, schemes: Scheme[]): MatchResult[] {
  const results = schemes.map(scheme => evaluateSchemeEligibility(profile, scheme));

  // Sort order:
  // 1. Eligible first (higher scores first)
  // 2. Conditional next
  // 3. Ineligible last (sorted by score descending so close matches appear first)
  return results.sort((a, b) => {
    const statusWeight = { eligible: 3, conditional: 2, ineligible: 1 };
    if (statusWeight[a.status] !== statusWeight[b.status]) {
      return statusWeight[b.status] - statusWeight[a.status];
    }
    return b.score - a.score;
  });
}
