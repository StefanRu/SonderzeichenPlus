export interface ISO885915Character {
  char: string
  codePoint: number
  name: string
  description: string
}

// Helper function to get the base letter for grouping
function getBaseLetter(char: string): string {
  // This simplified approach works for most Latin letters
  return char.normalize("NFD")[0].toLowerCase()
}

// Create arrays for capital and small letters
const capitalLetters: ISO885915Character[] = [
  // Basic Latin capital letters A-Z (65-90)
  ...Array.from({ length: 26 }, (_, i) => ({
    char: String.fromCodePoint(65 + i),
    codePoint: 65 + i,
    name: `Latin Capital Letter ${String.fromCodePoint(65 + i)}`,
    description: `Uppercase letter ${String.fromCodePoint(65 + i)}`,
  })),

  // Special Latin capital letters
  { char: "À", codePoint: 192, name: "Latin Capital Letter A with Grave", description: "Capital A with grave accent" },
  { char: "Á", codePoint: 193, name: "Latin Capital Letter A with Acute", description: "Capital A with acute accent" },
  {
    char: "Â",
    codePoint: 194,
    name: "Latin Capital Letter A with Circumflex",
    description: "Capital A with circumflex",
  },
  { char: "Ã", codePoint: 195, name: "Latin Capital Letter A with Tilde", description: "Capital A with tilde" },
  { char: "Ä", codePoint: 196, name: "Latin Capital Letter A with Diaeresis", description: "Capital A with diaeresis" },
  {
    char: "Å",
    codePoint: 197,
    name: "Latin Capital Letter A with Ring Above",
    description: "Capital A with ring above",
  },
  { char: "Æ", codePoint: 198, name: "Latin Capital Letter AE", description: "Capital AE ligature" },
  { char: "Ç", codePoint: 199, name: "Latin Capital Letter C with Cedilla", description: "Capital C with cedilla" },
  { char: "È", codePoint: 200, name: "Latin Capital Letter E with Grave", description: "Capital E with grave accent" },
  { char: "É", codePoint: 201, name: "Latin Capital Letter E with Acute", description: "Capital E with acute accent" },
  {
    char: "Ê",
    codePoint: 202,
    name: "Latin Capital Letter E with Circumflex",
    description: "Capital E with circumflex",
  },
  { char: "Ë", codePoint: 203, name: "Latin Capital Letter E with Diaeresis", description: "Capital E with diaeresis" },
  { char: "Ì", codePoint: 204, name: "Latin Capital Letter I with Grave", description: "Capital I with grave accent" },
  { char: "Í", codePoint: 205, name: "Latin Capital Letter I with Acute", description: "Capital I with acute accent" },
  {
    char: "Î",
    codePoint: 206,
    name: "Latin Capital Letter I with Circumflex",
    description: "Capital I with circumflex",
  },
  { char: "Ï", codePoint: 207, name: "Latin Capital Letter I with Diaeresis", description: "Capital I with diaeresis" },
  { char: "Ð", codePoint: 208, name: "Latin Capital Letter Eth", description: "Capital Eth" },
  { char: "Ñ", codePoint: 209, name: "Latin Capital Letter N with Tilde", description: "Capital N with tilde" },
  { char: "Ò", codePoint: 210, name: "Latin Capital Letter O with Grave", description: "Capital O with grave accent" },
  { char: "Ó", codePoint: 211, name: "Latin Capital Letter O with Acute", description: "Capital O with acute accent" },
  {
    char: "Ô",
    codePoint: 212,
    name: "Latin Capital Letter O with Circumflex",
    description: "Capital O with circumflex",
  },
  { char: "Õ", codePoint: 213, name: "Latin Capital Letter O with Tilde", description: "Capital O with tilde" },
  { char: "Ö", codePoint: 214, name: "Latin Capital Letter O with Diaeresis", description: "Capital O with diaeresis" },
  { char: "Ø", codePoint: 216, name: "Latin Capital Letter O with Stroke", description: "Capital O with stroke" },
  { char: "Œ", codePoint: 188, name: "Latin Capital Ligature OE", description: "Capital ligature OE" },
  { char: "Š", codePoint: 166, name: "Latin Capital Letter S with Caron", description: "Capital S with caron" },
  { char: "Ù", codePoint: 217, name: "Latin Capital Letter U with Grave", description: "Capital U with grave accent" },
  { char: "Ú", codePoint: 218, name: "Latin Capital Letter U with Acute", description: "Capital U with acute accent" },
  {
    char: "Û",
    codePoint: 219,
    name: "Latin Capital Letter U with Circumflex",
    description: "Capital U with circumflex",
  },
  { char: "Ü", codePoint: 220, name: "Latin Capital Letter U with Diaeresis", description: "Capital U with diaeresis" },
  { char: "Ý", codePoint: 221, name: "Latin Capital Letter Y with Acute", description: "Capital Y with acute accent" },
  { char: "Ÿ", codePoint: 190, name: "Latin Capital Letter Y with Diaeresis", description: "Capital Y with diaeresis" },
  { char: "Þ", codePoint: 222, name: "Latin Capital Letter Thorn", description: "Capital Thorn" },
  { char: "Ž", codePoint: 180, name: "Latin Capital Letter Z with Caron", description: "Capital Z with caron" },
]

const smallLetters: ISO885915Character[] = [
  // Basic Latin small letters a-z (97-122)
  ...Array.from({ length: 26 }, (_, i) => ({
    char: String.fromCodePoint(97 + i),
    codePoint: 97 + i,
    name: `Latin Small Letter ${String.fromCodePoint(97 + i)}`,
    description: `Lowercase letter ${String.fromCodePoint(97 + i)}`,
  })),

  // Special Latin small letters
  { char: "à", codePoint: 224, name: "Latin Small Letter A with Grave", description: "Small a with grave accent" },
  { char: "á", codePoint: 225, name: "Latin Small Letter A with Acute", description: "Small a with acute accent" },
  { char: "â", codePoint: 226, name: "Latin Small Letter A with Circumflex", description: "Small a with circumflex" },
  { char: "ã", codePoint: 227, name: "Latin Small Letter A with Tilde", description: "Small a with tilde" },
  { char: "ä", codePoint: 228, name: "Latin Small Letter A with Diaeresis", description: "Small a with diaeresis" },
  { char: "å", codePoint: 229, name: "Latin Small Letter A with Ring Above", description: "Small a with ring above" },
  { char: "æ", codePoint: 230, name: "Latin Small Letter AE", description: "Small ae ligature" },
  { char: "ç", codePoint: 231, name: "Latin Small Letter C with Cedilla", description: "Small c with cedilla" },
  { char: "è", codePoint: 232, name: "Latin Small Letter E with Grave", description: "Small e with grave accent" },
  { char: "é", codePoint: 233, name: "Latin Small Letter E with Acute", description: "Small e with acute accent" },
  { char: "ê", codePoint: 234, name: "Latin Small Letter E with Circumflex", description: "Small e with circumflex" },
  { char: "ë", codePoint: 235, name: "Latin Small Letter E with Diaeresis", description: "Small e with diaeresis" },
  { char: "ì", codePoint: 236, name: "Latin Small Letter I with Grave", description: "Small i with grave accent" },
  { char: "í", codePoint: 237, name: "Latin Small Letter I with Acute", description: "Small i with acute accent" },
  { char: "î", codePoint: 238, name: "Latin Small Letter I with Circumflex", description: "Small i with circumflex" },
  { char: "ï", codePoint: 239, name: "Latin Small Letter I with Diaeresis", description: "Small i with diaeresis" },
  { char: "ð", codePoint: 240, name: "Latin Small Letter Eth", description: "Small eth" },
  { char: "ñ", codePoint: 241, name: "Latin Small Letter N with Tilde", description: "Small n with tilde" },
  { char: "ò", codePoint: 242, name: "Latin Small Letter O with Grave", description: "Small o with grave accent" },
  { char: "ó", codePoint: 243, name: "Latin Small Letter O with Acute", description: "Small o with acute accent" },
  { char: "ô", codePoint: 244, name: "Latin Small Letter O with Circumflex", description: "Small o with circumflex" },
  { char: "õ", codePoint: 245, name: "Latin Small Letter O with Tilde", description: "Small o with tilde" },
  { char: "ö", codePoint: 246, name: "Latin Small Letter O with Diaeresis", description: "Small o with diaeresis" },
  { char: "ø", codePoint: 248, name: "Latin Small Letter O with Stroke", description: "Small o with stroke" },
  { char: "œ", codePoint: 189, name: "Latin Small Ligature OE", description: "Small ligature oe" },
  { char: "ß", codePoint: 223, name: "Latin Small Letter Sharp S", description: "Small sharp s (eszett)" },
  { char: "š", codePoint: 168, name: "Latin Small Letter S with Caron", description: "Small s with caron" },
  { char: "ù", codePoint: 249, name: "Latin Small Letter U with Grave", description: "Small u with grave accent" },
  { char: "ú", codePoint: 250, name: "Latin Small Letter U with Acute", description: "Small u with acute accent" },
  { char: "û", codePoint: 251, name: "Latin Small Letter U with Circumflex", description: "Small u with circumflex" },
  { char: "ü", codePoint: 252, name: "Latin Small Letter U with Diaeresis", description: "Small u with diaeresis" },
  { char: "ý", codePoint: 253, name: "Latin Small Letter Y with Acute", description: "Small y with acute accent" },
  { char: "ÿ", codePoint: 255, name: "Latin Small Letter Y with Diaeresis", description: "Small y with diaeresis" },
  { char: "þ", codePoint: 254, name: "Latin Small Letter Thorn", description: "Small thorn" },
  { char: "ž", codePoint: 184, name: "Latin Small Letter Z with Caron", description: "Small z with caron" },
]

// Helper function to group characters by their base letter
export function groupCharactersByBaseLetter(characters: ISO885915Character[]): Record<string, ISO885915Character[]> {
  const groups: Record<string, ISO885915Character[]> = {}

  characters.forEach((char) => {
    // Handle special cases
    let baseLetter = getBaseLetter(char.char)

    // Special handling for ligatures and special characters
    if (char.char === "Æ" || char.char === "æ") baseLetter = "ae"
    if (char.char === "Œ" || char.char === "œ") baseLetter = "oe"
    if (char.char === "Þ" || char.char === "þ") baseLetter = "thorn"
    if (char.char === "Ð" || char.char === "ð") baseLetter = "eth"
    if (char.char === "ß") baseLetter = "ss"

    if (!groups[baseLetter]) {
      groups[baseLetter] = []
    }

    groups[baseLetter].push(char)
  })

  return groups
}

// Group characters
export const groupedCapitalLetters = groupCharactersByBaseLetter(capitalLetters)
export const groupedSmallLetters = groupCharactersByBaseLetter(smallLetters)

// Get unique base letters for capital and small letters
export const capitalBaseLetters = Object.keys(groupedCapitalLetters).sort()
export const smallBaseLetters = Object.keys(groupedSmallLetters).sort()

// Combine all characters for search functionality
export const iso885915Characters: ISO885915Character[] = [...capitalLetters, ...smallLetters]

// Helper function to get control character names (kept for reference)
function getControlCharName(codePoint: number): string {
  const controlCharNames: Record<number, string> = {
    0: "NUL",
    1: "SOH",
    2: "STX",
    3: "ETX",
    4: "EOT",
    5: "ENQ",
    6: "ACK",
    7: "BEL",
    8: "BS",
    9: "HT",
    10: "LF",
    11: "VT",
    12: "FF",
    13: "CR",
    14: "SO",
    15: "SI",
    16: "DLE",
    17: "DC1",
    18: "DC2",
    19: "DC3",
    20: "DC4",
    21: "NAK",
    22: "SYN",
    23: "ETB",
    24: "CAN",
    25: "EM",
    26: "SUB",
    27: "ESC",
    28: "FS",
    29: "GS",
    30: "RS",
    31: "US",
    127: "DEL",
  }

  return controlCharNames[codePoint] || "Unknown"
}

