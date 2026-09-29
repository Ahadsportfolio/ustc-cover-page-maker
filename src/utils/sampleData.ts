import { CoverPageData, ColorTheme } from '../types/coverPage';

export const USTC_DEPARTMENTS = [
  "Computer Science & Engineering (CSE)",
  "Electrical & Electronic Engineering (EEE)",
  "Pharmacy",
  "Business Administration (FBA)",
  "Faculty of Medicine (FMS / MBBS)",
  "English",
  "Civil Engineering (CE)",
  "Biochemistry & Molecular Biology (BMB)",
  "Biotechnology & Genetic Engineering (BGE)",
];

export const DOC_TYPES = [
  "Lab Report",
  "Assignment",
  "Project Report",
  "Thesis / Dissertation",
  "Term Paper",
  "Practical Notebook",
  "Case Study Report"
];

export const DESIGNATIONS = [
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Senior Lecturer",
  "Lecturer",
  "Adjunct Faculty",
  "Head of the Department"
];

export const COLOR_THEMES: Record<string, ColorTheme> = {
  navy: {
    id: 'navy',
    name: 'USTC Navy & Gold',
    primary: '#002B49',
    secondary: '#001A2D',
    accent: '#D4AF37',
    bgLight: '#F0F4F8',
    border: '#002B49'
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Green',
    primary: '#065F46',
    secondary: '#044E38',
    accent: '#10B981',
    bgLight: '#ECFDF5',
    border: '#065F46'
  },
  slate: {
    id: 'slate',
    name: 'Classic Slate',
    primary: '#1E293B',
    secondary: '#0F172A',
    accent: '#64748B',
    bgLight: '#F8FAFC',
    border: '#334155'
  },
  maroon: {
    id: 'maroon',
    name: 'Crimson Maroon',
    primary: '#881337',
    secondary: '#4C0519',
    accent: '#E11D48',
    bgLight: '#FFF1F2',
    border: '#881337'
  },
  royal: {
    id: 'royal',
    name: 'Royal Blue',
    primary: '#1E40AF',
    secondary: '#1E3A8A',
    accent: '#3B82F6',
    bgLight: '#EFF6FF',
    border: '#1E40AF'
  },
  custom: {
    id: 'custom',
    name: 'Custom Theme',
    primary: '#002B49',
    secondary: '#001A2D',
    accent: '#D4AF37',
    bgLight: '#F3F4F6',
    border: '#002B49'
  }
};

export const DEFAULT_COVER_DATA: CoverPageData = {
  instituteName: "University of Science and Technology Chittagong",
  instituteSubtext: "Foy's Lake, Khulshi, Chattogram-4202, Bangladesh",
  departmentName: "Department of Computer Science & Engineering",
  logoUrl: null,
  logoType: 'ustc_default',
  logoSize: 95,

  docType: "Lab Report",
  courseTitle: "Data Structures & Algorithms",
  courseCode: "CSE-211",
  experimentNo: "Experiment No: 04",
  topicTitle: "Implementation and Performance Analysis of Binary Search Trees (BST) in C++",

  instructorName: "Dr. Md. Ahsan Kabir",
  instructorDesignation: "Assistant Professor",
  instructorDepartment: "Department of Computer Science & Engineering",

  studentName: "Tariqul Islam",
  studentId: "190302001",
  studentBatch: "40th Batch",
  studentSemester: "5th Semester",
  studentSection: "Section A",
  studentDepartment: "Department of Computer Science & Engineering",

  submissionDate: new Date().toISOString().split('T')[0],

  layoutPreset: 'classic',
  fontFamily: 'times',
  colorTheme: 'navy',
  customPrimaryColor: '#002B49',
  customAccentColor: '#D4AF37',
  showMarginGuide: false,
  paperBg: 'white'
};

export const SAMPLE_PROFILES: { name: string; data: Partial<CoverPageData> }[] = [
  {
    name: "CSE - Data Structures Lab Report",
    data: {
      docType: "Lab Report",
      courseTitle: "Data Structures & Algorithms",
      courseCode: "CSE-211",
      experimentNo: "Experiment 04",
      topicTitle: "Implementation of Binary Search Trees & Tree Traversal Algorithms",
      departmentName: "Department of Computer Science & Engineering",
      instructorName: "Engr. Mahmudur Rahman",
      instructorDesignation: "Assistant Professor",
      studentName: "Adnan Chowdhury",
      studentId: "210301045",
      studentBatch: "42nd Batch",
      studentSemester: "4th Semester",
      studentSection: "Section B",
      layoutPreset: "classic",
      fontFamily: "times",
      colorTheme: "navy"
    }
  },
  {
    name: "EEE - Circuit Analysis Assignment",
    data: {
      docType: "Assignment",
      courseTitle: "Electrical Circuit Analysis II",
      courseCode: "EEE-121",
      experimentNo: "Assignment 02",
      topicTitle: "Transient Response Analysis of RLC Networks under AC Excitation",
      departmentName: "Department of Electrical & Electronic Engineering",
      instructorName: "Prof. Dr. Syeda Nusrat Jahan",
      instructorDesignation: "Professor & Head",
      studentName: "Nafisa Tabassum",
      studentId: "220302019",
      studentBatch: "44th Batch",
      studentSemester: "3rd Semester",
      studentSection: "Section A",
      layoutPreset: "modern",
      fontFamily: "arial",
      colorTheme: "emerald"
    }
  },
  {
    name: "Pharmacy - Pharmacology Project",
    data: {
      docType: "Project Report",
      courseTitle: "Advanced Medicinal Chemistry",
      courseCode: "PHARM-315",
      experimentNo: "Project Report #1",
      topicTitle: "In-Silico Docking Analysis of Novel NSAID Derivatives Against COX-2",
      departmentName: "Department of Pharmacy",
      instructorName: "Dr. Farhana Yasmin",
      instructorDesignation: "Associate Professor",
      studentName: "Shahriar Ahmed",
      studentId: "200305088",
      studentBatch: "39th Batch",
      studentSemester: "6th Semester",
      studentSection: "Section A",
      layoutPreset: "premium",
      fontFamily: "inter",
      colorTheme: "maroon"
    }
  }
];
