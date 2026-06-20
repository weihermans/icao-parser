// @flyvolo/icao-parser — validate ICAO/IATA airport codes and infer region.
// Zero dependencies. Built by VOLO (https://www.flyvolo.ai).

// ICAO first-letter (and key two-letter) region prefixes.
const REGIONS = {
  K: "United States (contiguous)",
  C: "Canada",
  M: "Mexico & Central America",
  E: "Northern Europe",
  L: "Southern Europe",
  O: "Middle East",
  R: "East Asia (Korea/Japan/Taiwan/Philippines)",
  Z: "China & Mongolia",
  V: "South & Southeast Asia",
  W: "Maritime Southeast Asia",
  Y: "Australia",
  N: "South Pacific",
  S: "South America",
  F: "Central & Southern Africa",
  G: "Western Africa",
  H: "Northeastern Africa",
  D: "Northwestern Africa",
  U: "Russia & post-Soviet states",
  B: "Greenland / Iceland",
  T: "Caribbean",
  A: "Western South Pacific",
  P: "Eastern North Pacific (Hawaii/Alaska)",
};

const ICAO_RE = /^[A-Z]{4}$/;
const IATA_RE = /^[A-Z]{3}$/;

/** True if `code` is a syntactically valid 4-letter ICAO code. */
function isValidICAO(code) {
  return typeof code === "string" && ICAO_RE.test(code.trim().toUpperCase());
}

/** True if `code` is a syntactically valid 3-letter IATA code. */
function isValidIATA(code) {
  return typeof code === "string" && IATA_RE.test(code.trim().toUpperCase());
}

/** Human-readable region inferred from an ICAO code's prefix, or null. */
function regionFromICAO(code) {
  if (!isValidICAO(code)) return null;
  return REGIONS[code.trim().toUpperCase()[0]] ?? "Unknown region";
}

/** Normalize + classify a code → {code, type, region}. */
function parse(code) {
  const c = String(code || "").trim().toUpperCase();
  if (isValidICAO(c)) return { code: c, type: "ICAO", region: regionFromICAO(c) };
  if (isValidIATA(c)) return { code: c, type: "IATA", region: null };
  return { code: c, type: "invalid", region: null };
}

module.exports = { isValidICAO, isValidIATA, regionFromICAO, parse, REGIONS };
