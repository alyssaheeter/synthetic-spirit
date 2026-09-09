export type RGB = { r: number; g: number; b: number };
export type PaintColor = {
  id: string; name: string; manufacturer: string; code: string; hex: string; rgb: RGB;
  lrv?: number; verified: boolean; source: string; hueFamily: string; lightness: string;
  chroma: string; temperature: string; undertones: string; notes: string;
};
export type Additive = {
  id: string; name: string; hex: string; note: string; owned: boolean; availableOz?: number;
  physicalManufacturer: string; productLine: string; finishBase: string;
  colorName: string; colorSpecification: string; specificationOwner: string;
  digitalStatus: 'estimated'|'verified'; source: string; ocrAlias?: string;
};
export type Scores = { overall: number; restraint: number; sharkskin: number; sawMill: number; softness: number; lightness: number; undertone: number };
export type CandidatePart = { additiveId: string; additiveOz: number };
export type CandidateSeed = { name: string; direction: string; parts: CandidatePart[]; confidence: 'High'|'Medium'|'Exploratory'; rationale: string; sharkskinRelationship: string; sawMillRelationship: string; risks: string };
export type MixCandidate = CandidateSeed & { hex: string; scores: Scores };
