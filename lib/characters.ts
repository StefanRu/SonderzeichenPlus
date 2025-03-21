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
      { char: "Ā", name: "A macron", htmlEntity: "&#256;", unicodePoint: "U+0100" },
      { char: "Ă", name: "A breve", htmlEntity: "&#258;", unicodePoint: "U+0102" },
      { char: "Ą", name: "A ogonek", htmlEntity: "&#260;", unicodePoint: "U+0104" },
    ],
  },
  {
    base: "B",
    variations: [
      { char: "Ḃ", name: "B dot above", htmlEntity: "&#7682;", unicodePoint: "U+1E02" },
      { char: "Ƀ", name: "B stroke", htmlEntity: "&#579;", unicodePoint: "U+0243" },
    ],
  },
  {
    base: "C",
    variations: [
      { char: "Ç", name: "C cedilla", htmlEntity: "&Ccedil;", unicodePoint: "U+00C7" },
      { char: "Ć", name: "C acute", htmlEntity: "&#262;", unicodePoint: "U+0106" },
      { char: "Č", name: "C caron", htmlEntity: "&#268;", unicodePoint: "U+010C" },
      { char: "Ĉ", name: "C circumflex", htmlEntity: "&#264;", unicodePoint: "U+0108" },
      { char: "Ċ", name: "C dot above", htmlEntity: "&#266;", unicodePoint: "U+010A" },
    ],
  },
  {
    base: "D",
    variations: [
      { char: "Ð", name: "Eth", htmlEntity: "&ETH;", unicodePoint: "U+00D0" },
      { char: "Đ", name: "D stroke", htmlEntity: "&#272;", unicodePoint: "U+0110" },
      { char: "Ď", name: "D caron", htmlEntity: "&#270;", unicodePoint: "U+010E" },
      { char: "Ḋ", name: "D dot above", htmlEntity: "&#7690;", unicodePoint: "U+1E0A" },
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
      { char: "Ē", name: "E macron", htmlEntity: "&#274;", unicodePoint: "U+0112" },
      { char: "Ĕ", name: "E breve", htmlEntity: "&#276;", unicodePoint: "U+0114" },
      { char: "Ė", name: "E dot above", htmlEntity: "&#278;", unicodePoint: "U+0116" },
      { char: "Ę", name: "E ogonek", htmlEntity: "&#280;", unicodePoint: "U+0118" },
    ],
  },
  {
    base: "F",
    variations: [{ char: "Ƒ", name: "F hook", htmlEntity: "&#401;", unicodePoint: "U+0191" }],
  },
  {
    base: "G",
    variations: [
      { char: "Ğ", name: "G breve", htmlEntity: "&#286;", unicodePoint: "U+011E" },
      { char: "Ģ", name: "G cedilla", htmlEntity: "&#290;", unicodePoint: "U+0122" },
      { char: "Ĝ", name: "G circumflex", htmlEntity: "&#284;", unicodePoint: "U+011C" },
      { char: "Ġ", name: "G dot above", htmlEntity: "&#288;", unicodePoint: "U+0120" },
    ],
  },
  {
    base: "H",
    variations: [
      { char: "Ħ", name: "H stroke", htmlEntity: "&#294;", unicodePoint: "U+0126" },
      { char: "Ĥ", name: "H circumflex", htmlEntity: "&#292;", unicodePoint: "U+0124" },
    ],
  },
  {
    base: "I",
    variations: [
      { char: "Ì", name: "I grave", htmlEntity: "&Igrave;", unicodePoint: "U+00CC" },
      { char: "Í", name: "I acute", htmlEntity: "&Iacute;", unicodePoint: "U+00CD" },
      { char: "Î", name: "I circumflex", htmlEntity: "&Icirc;", unicodePoint: "U+00CE" },
      { char: "Ï", name: "I umlaut", htmlEntity: "&Iuml;", unicodePoint: "U+00CF" },
      { char: "Ī", name: "I macron", htmlEntity: "&#298;", unicodePoint: "U+012A" },
      { char: "Ĭ", name: "I breve", htmlEntity: "&#300;", unicodePoint: "U+012C" },
      { char: "Į", name: "I ogonek", htmlEntity: "&#302;", unicodePoint: "U+012E" },
      { char: "İ", name: "I dot above", htmlEntity: "&#304;", unicodePoint: "U+0130" },
    ],
  },
  {
    base: "J",
    variations: [{ char: "Ĵ", name: "J circumflex", htmlEntity: "&#308;", unicodePoint: "U+0134" }],
  },
  {
    base: "K",
    variations: [
      { char: "Ķ", name: "K cedilla", htmlEntity: "&#310;", unicodePoint: "U+0136" },
      { char: "Ƙ", name: "K hook", htmlEntity: "&#408;", unicodePoint: "U+0198" },
    ],
  },
  {
    base: "L",
    variations: [
      { char: "Ĺ", name: "L acute", htmlEntity: "&#313;", unicodePoint: "U+0139" },
      { char: "Ļ", name: "L cedilla", htmlEntity: "&#315;", unicodePoint: "U+013B" },
      { char: "Ľ", name: "L caron", htmlEntity: "&#317;", unicodePoint: "U+013D" },
      { char: "Ŀ", name: "L middle dot", htmlEntity: "&#319;", unicodePoint: "U+013F" },
      { char: "Ł", name: "L stroke", htmlEntity: "&#321;", unicodePoint: "U+0141" },
    ],
  },
  {
    base: "N",
    variations: [
      { char: "Ñ", name: "N tilde", htmlEntity: "&Ntilde;", unicodePoint: "U+00D1" },
      { char: "Ň", name: "N caron", htmlEntity: "&#327;", unicodePoint: "U+0147" },
      { char: "Ń", name: "N acute", htmlEntity: "&#323;", unicodePoint: "U+0143" },
      { char: "Ņ", name: "N cedilla", htmlEntity: "&#325;", unicodePoint: "U+0145" },
      { char: "Ŋ", name: "Eng", htmlEntity: "&#330;", unicodePoint: "U+014A" },
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
      { char: "Ō", name: "O macron", htmlEntity: "&#332;", unicodePoint: "U+014C" },
      { char: "Ŏ", name: "O breve", htmlEntity: "&#334;", unicodePoint: "U+014E" },
      { char: "Ő", name: "O double acute", htmlEntity: "&#336;", unicodePoint: "U+0150" },
    ],
  },
  {
    base: "R",
    variations: [
      { char: "Ř", name: "R caron", htmlEntity: "&#344;", unicodePoint: "U+0158" },
      { char: "Ŕ", name: "R acute", htmlEntity: "&#340;", unicodePoint: "U+0154" },
      { char: "Ŗ", name: "R cedilla", htmlEntity: "&#342;", unicodePoint: "U+0156" },
    ],
  },
  {
    base: "S",
    variations: [
      { char: "Š", name: "S caron", htmlEntity: "&#352;", unicodePoint: "U+0160" },
      { char: "Ś", name: "S acute", htmlEntity: "&#346;", unicodePoint: "U+015A" },
      { char: "Ŝ", name: "S circumflex", htmlEntity: "&#348;", unicodePoint: "U+015C" },
      { char: "Ş", name: "S cedilla", htmlEntity: "&#350;", unicodePoint: "U+015E" },
    ],
  },
  {
    base: "T",
    variations: [
      { char: "Þ", name: "Thorn", htmlEntity: "&THORN;", unicodePoint: "U+00DE" },
      { char: "Ť", name: "T caron", htmlEntity: "&#356;", unicodePoint: "U+0164" },
      { char: "Ţ", name: "T cedilla", htmlEntity: "&#354;", unicodePoint: "U+0162" },
      { char: "Ŧ", name: "T stroke", htmlEntity: "&#358;", unicodePoint: "U+0166" },
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
      { char: "Ū", name: "U macron", htmlEntity: "&#362;", unicodePoint: "U+016A" },
      { char: "Ŭ", name: "U breve", htmlEntity: "&#364;", unicodePoint: "U+016C" },
      { char: "Ų", name: "U ogonek", htmlEntity: "&#370;", unicodePoint: "U+0172" },
      { char: "Ű", name: "U double acute", htmlEntity: "&#368;", unicodePoint: "U+0170" },
    ],
  },
  {
    base: "W",
    variations: [{ char: "Ŵ", name: "W circumflex", htmlEntity: "&#372;", unicodePoint: "U+0174" }],
  },
  {
    base: "Y",
    variations: [
      { char: "Ý", name: "Y acute", htmlEntity: "&Yacute;", unicodePoint: "U+00DD" },
      { char: "Ÿ", name: "Y umlaut", htmlEntity: "&Yuml;", unicodePoint: "U+0178" },
      { char: "Ŷ", name: "Y circumflex", htmlEntity: "&#374;", unicodePoint: "U+0176" },
    ],
  },
  {
    base: "Z",
    variations: [
      { char: "Ž", name: "Z caron", htmlEntity: "&#381;", unicodePoint: "U+017D" },
      { char: "Ź", name: "Z acute", htmlEntity: "&#377;", unicodePoint: "U+0179" },
      { char: "Ż", name: "Z dot above", htmlEntity: "&#379;", unicodePoint: "U+017B" },
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
      { char: "ā", name: "a macron", htmlEntity: "&#257;", unicodePoint: "U+0101" },
      { char: "ă", name: "a breve", htmlEntity: "&#259;", unicodePoint: "U+0103" },
      { char: "ą", name: "a ogonek", htmlEntity: "&#261;", unicodePoint: "U+0105" },
    ],
  },
  {
    base: "b",
    variations: [
      { char: "ḃ", name: "b dot above", htmlEntity: "&#7683;", unicodePoint: "U+1E03" },
      { char: "ƀ", name: "b stroke", htmlEntity: "&#384;", unicodePoint: "U+0180" },
    ],
  },
  {
    base: "c",
    variations: [
      { char: "ç", name: "c cedilla", htmlEntity: "&ccedil;", unicodePoint: "U+00E7" },
      { char: "ć", name: "c acute", htmlEntity: "&#263;", unicodePoint: "U+0107" },
      { char: "č", name: "c caron", htmlEntity: "&#269;", unicodePoint: "U+010D" },
      { char: "ĉ", name: "c circumflex", htmlEntity: "&#265;", unicodePoint: "U+0109" },
      { char: "ċ", name: "c dot above", htmlEntity: "&#267;", unicodePoint: "U+010B" },
    ],
  },
  {
    base: "d",
    variations: [
      { char: "ð", name: "eth", htmlEntity: "&eth;", unicodePoint: "U+00F0" },
      { char: "đ", name: "d stroke", htmlEntity: "&#273;", unicodePoint: "U+0111" },
      { char: "ď", name: "d caron", htmlEntity: "&#271;", unicodePoint: "U+010F" },
      { char: "ḋ", name: "d dot above", htmlEntity: "&#7691;", unicodePoint: "U+1E0B" },
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
      { char: "ē", name: "e macron", htmlEntity: "&#275;", unicodePoint: "U+0113" },
      { char: "ĕ", name: "e breve", htmlEntity: "&#277;", unicodePoint: "U+0115" },
      { char: "ė", name: "e dot above", htmlEntity: "&#279;", unicodePoint: "U+0117" },
      { char: "ę", name: "e ogonek", htmlEntity: "&#281;", unicodePoint: "U+0119" },
    ],
  },
  {
    base: "f",
    variations: [{ char: "ƒ", name: "f hook", htmlEntity: "&#402;", unicodePoint: "U+0192" }],
  },
  {
    base: "g",
    variations: [
      { char: "ğ", name: "g breve", htmlEntity: "&#287;", unicodePoint: "U+011F" },
      { char: "ģ", name: "g cedilla", htmlEntity: "&#291;", unicodePoint: "U+0123" },
      { char: "ĝ", name: "g circumflex", htmlEntity: "&#285;", unicodePoint: "U+011D" },
      { char: "ġ", name: "g dot above", htmlEntity: "&#289;", unicodePoint: "U+0121" },
    ],
  },
  {
    base: "h",
    variations: [
      { char: "ħ", name: "h stroke", htmlEntity: "&#295;", unicodePoint: "U+0127" },
      { char: "ĥ", name: "h circumflex", htmlEntity: "&#293;", unicodePoint: "U+0125" },
    ],
  },
  {
    base: "i",
    variations: [
      { char: "ì", name: "i grave", htmlEntity: "&igrave;", unicodePoint: "U+00EC" },
      { char: "í", name: "i acute", htmlEntity: "&iacute;", unicodePoint: "U+00ED" },
      { char: "î", name: "i circumflex", htmlEntity: "&icirc;", unicodePoint: "U+00EE" },
      { char: "ï", name: "i umlaut", htmlEntity: "&iuml;", unicodePoint: "U+00EF" },
      { char: "ī", name: "i macron", htmlEntity: "&#299;", unicodePoint: "U+012B" },
      { char: "ĭ", name: "i breve", htmlEntity: "&#301;", unicodePoint: "U+012D" },
      { char: "į", name: "i ogonek", htmlEntity: "&#303;", unicodePoint: "U+012F" },
      { char: "ı", name: "dotless i", htmlEntity: "&#305;", unicodePoint: "U+0131" },
    ],
  },
  {
    base: "j",
    variations: [{ char: "ĵ", name: "j circumflex", htmlEntity: "&#309;", unicodePoint: "U+0135" }],
  },
  {
    base: "k",
    variations: [
      { char: "ķ", name: "k cedilla", htmlEntity: "&#311;", unicodePoint: "U+0137" },
      { char: "ƙ", name: "k hook", htmlEntity: "&#409;", unicodePoint: "U+0199" },
    ],
  },
  {
    base: "l",
    variations: [
      { char: "ĺ", name: "l acute", htmlEntity: "&#314;", unicodePoint: "U+013A" },
      { char: "ļ", name: "l cedilla", htmlEntity: "&#316;", unicodePoint: "U+013C" },
      { char: "ľ", name: "l caron", htmlEntity: "&#318;", unicodePoint: "U+013E" },
      { char: "ŀ", name: "l middle dot", htmlEntity: "&#320;", unicodePoint: "U+0140" },
      { char: "ł", name: "l stroke", htmlEntity: "&#322;", unicodePoint: "U+0142" },
    ],
  },
  {
    base: "n",
    variations: [
      { char: "ñ", name: "n tilde", htmlEntity: "&ntilde;", unicodePoint: "U+00F1" },
      { char: "ň", name: "n caron", htmlEntity: "&#328;", unicodePoint: "U+0148" },
      { char: "ń", name: "n acute", htmlEntity: "&#324;", unicodePoint: "U+0144" },
      { char: "ņ", name: "n cedilla", htmlEntity: "&#326;", unicodePoint: "U+0146" },
      { char: "ŋ", name: "eng", htmlEntity: "&#331;", unicodePoint: "U+014B" },
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
      { char: "ō", name: "o macron", htmlEntity: "&#333;", unicodePoint: "U+014D" },
      { char: "ŏ", name: "o breve", htmlEntity: "&#335;", unicodePoint: "U+014F" },
      { char: "ő", name: "o double acute", htmlEntity: "&#337;", unicodePoint: "U+0151" },
    ],
  },
  {
    base: "r",
    variations: [
      { char: "ř", name: "r caron", htmlEntity: "&#345;", unicodePoint: "U+0159" },
      { char: "ŕ", name: "r acute", htmlEntity: "&#341;", unicodePoint: "U+0155" },
      { char: "ŗ", name: "r cedilla", htmlEntity: "&#343;", unicodePoint: "U+0157" },
    ],
  },
  {
    base: "s",
    variations: [
      { char: "š", name: "s caron", htmlEntity: "&#353;", unicodePoint: "U+0161" },
      { char: "ś", name: "s acute", htmlEntity: "&#347;", unicodePoint: "U+015B" },
      { char: "ß", name: "sharp s", htmlEntity: "&szlig;", unicodePoint: "U+00DF" },
      { char: "ŝ", name: "s circumflex", htmlEntity: "&#349;", unicodePoint: "U+015D" },
      { char: "ş", name: "s cedilla", htmlEntity: "&#351;", unicodePoint: "U+015F" },
    ],
  },
  {
    base: "t",
    variations: [
      { char: "þ", name: "thorn", htmlEntity: "&thorn;", unicodePoint: "U+00FE" },
      { char: "ť", name: "t caron", htmlEntity: "&#357;", unicodePoint: "U+0165" },
      { char: "ţ", name: "t cedilla", htmlEntity: "&#355;", unicodePoint: "U+0163" },
      { char: "ŧ", name: "t stroke", htmlEntity: "&#359;", unicodePoint: "U+0167" },
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
      { char: "ū", name: "u macron", htmlEntity: "&#363;", unicodePoint: "U+016B" },
      { char: "ŭ", name: "u breve", htmlEntity: "&#365;", unicodePoint: "U+016D" },
      { char: "ų", name: "u ogonek", htmlEntity: "&#371;", unicodePoint: "U+0173" },
      { char: "ű", name: "u double acute", htmlEntity: "&#369;", unicodePoint: "U+0171" },
    ],
  },
  {
    base: "w",
    variations: [{ char: "ŵ", name: "w circumflex", htmlEntity: "&#373;", unicodePoint: "U+0175" }],
  },
  {
    base: "y",
    variations: [
      { char: "ý", name: "y acute", htmlEntity: "&yacute;", unicodePoint: "U+00FD" },
      { char: "ÿ", name: "y umlaut", htmlEntity: "&yuml;", unicodePoint: "U+00FF" },
      { char: "ŷ", name: "y circumflex", htmlEntity: "&#375;", unicodePoint: "U+0177" },
    ],
  },
  {
    base: "z",
    variations: [
      { char: "ž", name: "z caron", htmlEntity: "&#382;", unicodePoint: "U+017E" },
      { char: "ź", name: "z acute", htmlEntity: "&#378;", unicodePoint: "U+017A" },
      { char: "ż", name: "z dot above", htmlEntity: "&#380;", unicodePoint: "U+017B" },
    ],
  },
]

