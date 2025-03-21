export type CharacterVariation = {
  char: string
  name: string
  htmlEntity?: string
  unicodePoint?: string
}

export type CharacterGroup = {
  base: string
  variations: CharacterVariation[]
}

// Only include characters that have variations
export const uppercaseLetters: CharacterGroup[] = [
  {
    base: "A",
    variations: [
      { char: "À", name: "A grave", htmlEntity: "&Agrave;", unicodePoint: "U+00C0" },
      { char: "Á", name: "A acute", htmlEntity: "&Aacute;", unicodePoint: "U+00C1" },
      { char: "Â", name: "A circumflex", htmlEntity: "&Acirc;", unicodePoint: "U+00C2" },
      { char: "Ã", name: "A tilde", htmlEntity: "&Atilde;", unicodePoint: "U+00C3" },
      { char: "Ä", name: "A umlaut", htmlEntity: "&Auml;", unicodePoint: "U+00C4" },
      { char: "Å", name: "A ring", htmlEntity: "&Aring;", unicodePoint: "U+00C5" },
      { char: "Æ", name: "AE ligature", htmlEntity: "&AElig;", unicodePoint: "U+00C6" },
    ],
  },
  {
    base: "C",
    variations: [
      { char: "Ç", name: "C cedilla", htmlEntity: "&Ccedil;", unicodePoint: "U+00C7" },
      { char: "Ć", name: "C acute", htmlEntity: "&#262;", unicodePoint: "U+0106" },
      { char: "Č", name: "C caron", htmlEntity: "&#268;", unicodePoint: "U+010C" },
    ],
  },
  {
    base: "D",
    variations: [
      { char: "Ð", name: "Eth", htmlEntity: "&ETH;", unicodePoint: "U+00D0" },
      { char: "Đ", name: "D stroke", htmlEntity: "&#272;", unicodePoint: "U+0110" },
    ],
  },
  {
    base: "E",
    variations: [
      { char: "È", name: "E grave", htmlEntity: "&Egrave;", unicodePoint: "U+00C8" },
      { char: "É", name: "E acute", htmlEntity: "&Eacute;", unicodePoint: "U+00C9" },
      { char: "Ê", name: "E circumflex", htmlEntity: "&Ecirc;", unicodePoint: "U+00CA" },
      { char: "Ë", name: "E umlaut", htmlEntity: "&Euml;", unicodePoint: "U+00CB" },
      { char: "Ě", name: "E caron", htmlEntity: "&#282;", unicodePoint: "U+011A" },
    ],
  },
  {
    base: "I",
    variations: [
      { char: "Ì", name: "I grave", htmlEntity: "&Igrave;", unicodePoint: "U+00CC" },
      { char: "Í", name: "I acute", htmlEntity: "&Iacute;", unicodePoint: "U+00CD" },
      { char: "Î", name: "I circumflex", htmlEntity: "&Icirc;", unicodePoint: "U+00CE" },
      { char: "Ï", name: "I umlaut", htmlEntity: "&Iuml;", unicodePoint: "U+00CF" },
    ],
  },
  {
    base: "N",
    variations: [
      { char: "Ñ", name: "N tilde", htmlEntity: "&Ntilde;", unicodePoint: "U+00D1" },
      { char: "Ň", name: "N caron", htmlEntity: "&#327;", unicodePoint: "U+0147" },
    ],
  },
  {
    base: "O",
    variations: [
      { char: "Ò", name: "O grave", htmlEntity: "&Ograve;", unicodePoint: "U+00D2" },
      { char: "Ó", name: "O acute", htmlEntity: "&Oacute;", unicodePoint: "U+00D3" },
      { char: "Ô", name: "O circumflex", htmlEntity: "&Ocirc;", unicodePoint: "U+00D4" },
      { char: "Õ", name: "O tilde", htmlEntity: "&Otilde;", unicodePoint: "U+00D5" },
      { char: "Ö", name: "O umlaut", htmlEntity: "&Ouml;", unicodePoint: "U+00D6" },
      { char: "Ø", name: "O slash", htmlEntity: "&Oslash;", unicodePoint: "U+00D8" },
      { char: "Œ", name: "OE ligature", htmlEntity: "&OElig;", unicodePoint: "U+0152" },
    ],
  },
  {
    base: "R",
    variations: [{ char: "Ř", name: "R caron", htmlEntity: "&#344;", unicodePoint: "U+0158" }],
  },
  {
    base: "S",
    variations: [
      { char: "Š", name: "S caron", htmlEntity: "&#352;", unicodePoint: "U+0160" },
      { char: "Ś", name: "S acute", htmlEntity: "&#346;", unicodePoint: "U+015A" },
    ],
  },
  {
    base: "T",
    variations: [
      { char: "Þ", name: "Thorn", htmlEntity: "&THORN;", unicodePoint: "U+00DE" },
      { char: "Ť", name: "T caron", htmlEntity: "&#356;", unicodePoint: "U+0164" },
    ],
  },
  {
    base: "U",
    variations: [
      { char: "Ù", name: "U grave", htmlEntity: "&Ugrave;", unicodePoint: "U+00D9" },
      { char: "Ú", name: "U acute", htmlEntity: "&Uacute;", unicodePoint: "U+00DA" },
      { char: "Û", name: "U circumflex", htmlEntity: "&Ucirc;", unicodePoint: "U+00DB" },
      { char: "Ü", name: "U umlaut", htmlEntity: "&Uuml;", unicodePoint: "U+00DC" },
      { char: "Ů", name: "U ring", htmlEntity: "&#366;", unicodePoint: "U+016E" },
    ],
  },
  {
    base: "Y",
    variations: [
      { char: "Ý", name: "Y acute", htmlEntity: "&Yacute;", unicodePoint: "U+00DD" },
      { char: "Ÿ", name: "Y umlaut", htmlEntity: "&Yuml;", unicodePoint: "U+0178" },
    ],
  },
  {
    base: "Z",
    variations: [
      { char: "Ž", name: "Z caron", htmlEntity: "&#381;", unicodePoint: "U+017D" },
      { char: "Ź", name: "Z acute", htmlEntity: "&#377;", unicodePoint: "U+0179" },
    ],
  },
]

export const lowercaseLetters: CharacterGroup[] = [
  {
    base: "a",
    variations: [
      { char: "à", name: "a grave", htmlEntity: "&agrave;", unicodePoint: "U+00E0" },
      { char: "á", name: "a acute", htmlEntity: "&aacute;", unicodePoint: "U+00E1" },
      { char: "â", name: "a circumflex", htmlEntity: "&acirc;", unicodePoint: "U+00E2" },
      { char: "ã", name: "a tilde", htmlEntity: "&atilde;", unicodePoint: "U+00E3" },
      { char: "ä", name: "a umlaut", htmlEntity: "&auml;", unicodePoint: "U+00E4" },
      { char: "å", name: "a ring", htmlEntity: "&aring;", unicodePoint: "U+00E5" },
      { char: "æ", name: "ae ligature", htmlEntity: "&aelig;", unicodePoint: "U+00E6" },
    ],
  },
  {
    base: "c",
    variations: [
      { char: "ç", name: "c cedilla", htmlEntity: "&ccedil;", unicodePoint: "U+00E7" },
      { char: "ć", name: "c acute", htmlEntity: "&#263;", unicodePoint: "U+0107" },
      { char: "č", name: "c caron", htmlEntity: "&#269;", unicodePoint: "U+010D" },
    ],
  },
  {
    base: "d",
    variations: [
      { char: "ð", name: "eth", htmlEntity: "&eth;", unicodePoint: "U+00F0" },
      { char: "đ", name: "d stroke", htmlEntity: "&#273;", unicodePoint: "U+0111" },
    ],
  },
  {
    base: "e",
    variations: [
      { char: "è", name: "e grave", htmlEntity: "&egrave;", unicodePoint: "U+00E8" },
      { char: "é", name: "e acute", htmlEntity: "&eacute;", unicodePoint: "U+00E9" },
      { char: "ê", name: "e circumflex", htmlEntity: "&ecirc;", unicodePoint: "U+00EA" },
      { char: "ë", name: "e umlaut", htmlEntity: "&euml;", unicodePoint: "U+00EB" },
      { char: "ě", name: "e caron", htmlEntity: "&#283;", unicodePoint: "U+011B" },
    ],
  },
  {
    base: "i",
    variations: [
      { char: "ì", name: "i grave", htmlEntity: "&igrave;", unicodePoint: "U+00EC" },
      { char: "í", name: "i acute", htmlEntity: "&iacute;", unicodePoint: "U+00ED" },
      { char: "î", name: "i circumflex", htmlEntity: "&icirc;", unicodePoint: "U+00EE" },
      { char: "ï", name: "i umlaut", htmlEntity: "&iuml;", unicodePoint: "U+00EF" },
    ],
  },
  {
    base: "n",
    variations: [
      { char: "ñ", name: "n tilde", htmlEntity: "&ntilde;", unicodePoint: "U+00F1" },
      { char: "ň", name: "n caron", htmlEntity: "&#328;", unicodePoint: "U+0148" },
    ],
  },
  {
    base: "o",
    variations: [
      { char: "ò", name: "o grave", htmlEntity: "&ograve;", unicodePoint: "U+00F2" },
      { char: "ó", name: "o acute", htmlEntity: "&oacute;", unicodePoint: "U+00F3" },
      { char: "ô", name: "o circumflex", htmlEntity: "&ocirc;", unicodePoint: "U+00F4" },
      { char: "õ", name: "o tilde", htmlEntity: "&otilde;", unicodePoint: "U+00F5" },
      { char: "ö", name: "o umlaut", htmlEntity: "&ouml;", unicodePoint: "U+00F6" },
      { char: "ø", name: "o slash", htmlEntity: "&oslash;", unicodePoint: "U+00F8" },
      { char: "œ", name: "oe ligature", htmlEntity: "&oelig;", unicodePoint: "U+0153" },
    ],
  },
  {
    base: "r",
    variations: [{ char: "ř", name: "r caron", htmlEntity: "&#345;", unicodePoint: "U+0159" }],
  },
  {
    base: "s",
    variations: [
      { char: "š", name: "s caron", htmlEntity: "&#353;", unicodePoint: "U+0161" },
      { char: "ś", name: "s acute", htmlEntity: "&#347;", unicodePoint: "U+015B" },
      { char: "ß", name: "sharp s", htmlEntity: "&szlig;", unicodePoint: "U+00DF" },
    ],
  },
  {
    base: "t",
    variations: [
      { char: "þ", name: "thorn", htmlEntity: "&thorn;", unicodePoint: "U+00FE" },
      { char: "ť", name: "t caron", htmlEntity: "&#357;", unicodePoint: "U+0165" },
    ],
  },
  {
    base: "u",
    variations: [
      { char: "ù", name: "u grave", htmlEntity: "&ugrave;", unicodePoint: "U+00F9" },
      { char: "ú", name: "u acute", htmlEntity: "&uacute;", unicodePoint: "U+00FA" },
      { char: "û", name: "u circumflex", htmlEntity: "&ucirc;", unicodePoint: "U+00FB" },
      { char: "ü", name: "u umlaut", htmlEntity: "&uuml;", unicodePoint: "U+00FC" },
      { char: "ů", name: "u ring", htmlEntity: "&#367;", unicodePoint: "U+016F" },
    ],
  },
  {
    base: "y",
    variations: [
      { char: "ý", name: "y acute", htmlEntity: "&yacute;", unicodePoint: "U+00FD" },
      { char: "ÿ", name: "y umlaut", htmlEntity: "&yuml;", unicodePoint: "U+00FF" },
    ],
  },
  {
    base: "z",
    variations: [
      { char: "ž", name: "z caron", htmlEntity: "&#382;", unicodePoint: "U+017E" },
      { char: "ź", name: "z acute", htmlEntity: "&#378;", unicodePoint: "U+017A" },
    ],
  },
]

