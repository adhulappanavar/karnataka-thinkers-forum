export interface FocusArea {
  id: string;
  number: number;
  title: string;
  kannadaTitle: string;
  iconName: string;
  whyItBelongs: string;
  includes: string[];
  color: string;
  bgGradient: string;
}

export interface ObjectiveItem {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface TimelineEvent {
  date: string;
  formattedDate: string;
  event: string;
  kannadaEvent?: string;
  description: string;
  category: 'Legal' | 'Governance' | 'Advocacy' | 'Community' | 'AGM';
  highlight?: boolean;
}

export interface OfficeBearer {
  role: string;
  name: string;
  status?: string;
  isVacancy?: boolean;
}

export interface GovernanceState {
  foundingYear: string;
  foundingOfficeBearers: OfficeBearer[];
  currentStatusYear: string;
  currentOfficeBearers: OfficeBearer[];
  documentsAvailable: string[];
  immediateActionItems: string[];
}

export interface ArchiveFile {
  id: string;
  name: string;
  type: string;
  date?: string;
  status: 'Available' | 'Archived';
  description?: string;
  size?: string;
}

export interface ArchiveFolder {
  id: string;
  code: string;
  name: string;
  icon: string;
  files: ArchiveFile[];
}

export interface MembershipForm {
  fullName: string;
  email: string;
  phone: string;
  occupation: string;
  address: string;
  district: string;
  focusAreaInterests: string[];
  statementOfPurpose: string;
}

export interface PublicRepresentation {
  id: string;
  name: string;
  email: string;
  topic: string;
  district: string;
  details: string;
  dateSubmitted: string;
  status: 'Received' | 'Under Review' | 'Resolution Drafted';
}
