export type LayoutPreset = 'classic' | 'modern' | 'premium';

export type FontFamily = 'times' | 'arial' | 'georgia' | 'inter';

export type PresetColor = 'navy' | 'emerald' | 'slate' | 'maroon' | 'royal' | 'custom';

export interface ColorTheme {
  id: PresetColor;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  bgLight: string;
  border: string;
}

export interface CoverPageData {
  // Header
  instituteName: string;
  instituteSubtext: string;
  departmentName: string;
  logoUrl: string | null;
  logoType: 'ustc_default' | 'cse_crest' | 'eee_crest' | 'pharm_crest' | 'custom' | 'none';
  logoSize: number; // in pixels (e.g. 90)

  // Document Info
  docType: string; // e.g. "Lab Report", "Assignment", "Project Report", "Thesis", "Term Paper"
  courseTitle: string;
  courseCode: string;
  experimentNo: string;
  topicTitle: string;

  // Submitted To
  instructorName: string;
  instructorDesignation: string;
  instructorDepartment: string;

  // Submitted By
  studentName: string;
  studentId: string;
  studentBatch: string;
  studentSemester: string;
  studentSection: string;
  studentDepartment: string;

  // Date
  submissionDate: string;

  // Design Settings
  layoutPreset: LayoutPreset;
  fontFamily: FontFamily;
  colorTheme: PresetColor;
  customPrimaryColor: string;
  customAccentColor: string;
  showMarginGuide: boolean;
  paperBg: 'white' | 'cream' | 'light-blue';
}

export interface SavedProfile {
  id: string;
  profileName: string;
  createdAt: string;
  data: CoverPageData;
}
