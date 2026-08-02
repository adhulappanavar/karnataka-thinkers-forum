import React, { useState, useEffect } from 'react';
import { DistrictApplication } from '../types';
import { X, Send, Award, CheckCircle2, AlertCircle, User, Calendar, Mail, Phone, MapPin, GraduationCap, Briefcase, Target, ShieldCheck } from 'lucide-react';

interface DistrictPresidentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDistrict: string;
  districtsList: string[];
  onSubmitApplication: (app: Omit<DistrictApplication, 'id' | 'submittedDate' | 'status'>) => void;
  lang: 'EN' | 'KN';
}

export const DistrictPresidentModal: React.FC<DistrictPresidentModalProps> = ({
  isOpen,
  onClose,
  selectedDistrict,
  districtsList,
  onSubmitApplication,
  lang,
}) => {
  const [district, setDistrict] = useState(selectedDistrict);
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState<number | ''>(25);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cityTaluk, setCityTaluk] = useState('');
  const [qualification, setQualification] = useState('');
  const [pastExperience, setPastExperience] = useState('');
  const [purposeAndIntent, setPurposeAndIntent] = useState('');

  const [ageError, setAgeError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedDistrict) {
      setDistrict(selectedDistrict);
    }
  }, [selectedDistrict]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate Age requirement (19 years and above)
    const numAge = Number(age);
    if (!numAge || numAge < 19) {
      setAgeError(lang === 'KN' ? 'ಅರ್ಜಿದಾರರು ೧೯ ವರ್ಷ ಅಥವಾ ಮೇಲ್ಪಟ್ಟವರಾಗಿರಬೇಕು.' : 'Applicant must be at least 19 years old.');
      return;
    }
    setAgeError(null);

    onSubmitApplication({
      districtName: district,
      fullName,
      gender,
      age: numAge,
      email,
      phone,
      address,
      cityTaluk,
      qualification,
      pastExperience,
      purposeAndIntent,
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset form
      setFullName('');
      setPhone('');
      setEmail('');
      setAddress('');
      setCityTaluk('');
      setQualification('');
      setPastExperience('');
      setPurposeAndIntent('');
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                Official Leadership Application
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {lang === 'KN' ? 'ಜಿಲ್ಲಾಧ್ಯಕ್ಷರ ಹುದ್ದೆಗೆ ಅರ್ಜಿ' : 'Apply for District President Post'}
              </h3>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white">
              Application Submitted Successfully!
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Your application for <strong>District President of {district}</strong> has been logged into the Karnataka Thinkers Forum (R) State Executive Portal for Admin review.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Target District Selection */}
            <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                  Target District / ಉದ್ದೇಶಿತ ಜಿಲ್ಲೆ
                </label>
                <span className="text-[11px] text-amber-800/80 dark:text-amber-400">
                  Select the Karnataka district you wish to lead as District President.
                </span>
              </div>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="px-3 py-2 text-xs font-bold rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {districtsList.map((d) => (
                  <option key={d} value={d}>
                    {d} District
                  </option>
                ))}
              </select>
            </div>

            {/* 1. Basic Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
                <User className="w-4 h-4 text-amber-600" />
                <span>1. Basic Details / ಮೂಲ ವಿವರಗಳು</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name / ಪೂರ್ಣ ಹೆಸರು *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adv. Suresh V. Patil"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Gender / ಲಿಂಗ *
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Age Requirement (19 yrs and above) */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>2. Age Requirement (19+ yrs) / ವಯಸ್ಸು</span>
              </h4>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Age (Must be 19 years or above) *
                </label>
                <input
                  type="number"
                  required
                  min={19}
                  max={100}
                  value={age}
                  onChange={(e) => {
                    const val = e.target.value === '' ? '' : Number(e.target.value);
                    setAge(val);
                    if (val && Number(val) < 19) {
                      setAgeError(lang === 'KN' ? 'ಅರ್ಜಿದಾರರು ೧೯ ವರ್ಷ ಅಥವಾ ಮೇಲ್ಪಟ್ಟವರಾಗಿರಬೇಕು.' : 'Minimum age requirement is 19 years.');
                    } else {
                      setAgeError(null);
                    }
                  }}
                  className="w-full sm:w-48 px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {ageError && (
                  <p className="mt-1 text-[11px] font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{ageError}</span>
                  </p>
                )}
              </div>
            </div>

            {/* 3. Contact Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>3. Contact Details / ಸಂಪರ್ಕ ವಿವರಗಳು</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address / ಇಮೇಲ್ *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number / ದೂರವಾಣಿ ಸಂಖ್ಯೆ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98450 00000"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    City / Taluk *
                  </label>
                  <input
                    type="text"
                    required
                    value={cityTaluk}
                    onChange={(e) => setCityTaluk(e.target.value)}
                    placeholder="e.g. Sagar Taluk"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Residence Address / ವಿಳಾಸ *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Door No, Street Name, Area"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* 4. Qualification & Past Experience */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>4. Qualification & Experience / ವಿದ್ಯಾರ್ಹತೆ ಮತ್ತು ಅನುಭವ</span>
              </h4>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Highest Educational Qualification / ವಿದ್ಯಾರ್ಹತೆ *
                  </label>
                  <input
                    type="text"
                    required
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="e.g. M.A. Public Administration, LL.B., B.E., B.Com"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Past Social Work / Advocacy / Leadership Experience *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={pastExperience}
                    onChange={(e) => setPastExperience(e.target.value)}
                    placeholder="Describe your prior work with NGOs, legal literacy drives, youth groups, or community initiatives..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* 5. Purpose and Intent */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Target className="w-4 h-4 text-amber-600" />
                <span>5. Purpose & Intent / ಉದ್ದೇಶ ಮತ್ತು ದೃಷ್ಟಿಕೋನ</span>
              </h4>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Vision & Goals for the District as President *
                </label>
                <textarea
                  rows={3}
                  required
                  value={purposeAndIntent}
                  onChange={(e) => setPurposeAndIntent(e.target.value)}
                  placeholder="Explain why you want to serve as District President and your key goals for KTF in your district..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all shadow-md flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Application to Executive Committee</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
