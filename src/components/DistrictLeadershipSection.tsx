import React, { useState } from 'react';
import { DistrictPresident, DistrictApplication } from '../types';
import { Award, Search, Filter, CheckCircle2, UserPlus, ShieldCheck, Mail, MapPin, Calendar, FileText, Check, UserCheck, Clock, Eye, Sparkles } from 'lucide-react';

interface DistrictLeadershipSectionProps {
  districts: DistrictPresident[];
  applications: DistrictApplication[];
  onOpenApplyModal: (districtName: string) => void;
  onApproveApplication: (applicationId: string, districtId: string, candidateName: string, candidateEmail: string) => void;
  isAdminAuthenticated: boolean;
  lang: 'EN' | 'KN';
}

export const DistrictLeadershipSection: React.FC<DistrictLeadershipSectionProps> = ({
  districts,
  applications,
  onOpenApplyModal,
  onApproveApplication,
  isAdminAuthenticated,
  lang,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [viewingApplication, setViewingApplication] = useState<DistrictApplication | null>(null);

  const divisions = ['All', 'Belagavi', 'Bengaluru', 'Kalaburagi', 'Mysuru'];

  const filteredDistricts = districts.filter((item) => {
    const matchesSearch = item.districtName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.districtNameKannada.includes(searchTerm) ||
                          (item.presidentName && item.presidentName.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDivision = selectedDivision === 'All' || item.division === selectedDivision;
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    return matchesSearch && matchesDivision && matchesStatus;
  });

  const appointedCount = districts.filter((d) => d.status === 'Appointed').length;
  const vacantCount = districts.length - appointedCount;
  const pendingApps = applications.filter((app) => app.status === 'Pending');

  return (
    <section id="districts" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
            {lang === 'KN' ? '೩೧ ಜಿಲ್ಲಾಡಳಿತ ವ್ಯವಸ್ಥೆ' : 'Karnataka State Leadership (31 Districts)'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {lang === 'KN' ? 'ಕರ್ನಾಟಕದ ೩೧ ಜಿಲ್ಲಾಧ್ಯಕ್ಷರ ಪಟ್ಟಿ' : 'District Presidents Directory'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Official list of appointed District Presidents representing Karnataka Thinkers Forum (R) across all 31 districts. Apply below for vacant district leadership posts.
          </p>
        </div>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Total Districts</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">{districts.length} Districts</span>
            </div>
            <Award className="w-8 h-8 text-amber-600" />
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">Appointed Presidents</span>
              <span className="text-2xl font-black text-emerald-900 dark:text-emerald-200">{appointedCount} Appointed</span>
            </div>
            <UserCheck className="w-8 h-8 text-emerald-600" />
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">Vacant Positions</span>
              <span className="text-2xl font-black text-amber-900 dark:text-amber-200">{vacantCount} Open Posts</span>
            </div>
            <UserPlus className="w-8 h-8 text-amber-600" />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search district or president name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Division Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
            <span className="text-xs font-bold text-slate-500 mr-1">Division:</span>
            {divisions.map((div) => (
              <button
                key={div}
                onClick={() => setSelectedDivision(div)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedDivision === div
                    ? 'bg-amber-700 text-white font-bold'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {div}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 font-bold mr-1">Status:</span>
            {['All', 'Appointed', 'Vacant'].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                  selectedStatus === st
                    ? 'bg-slate-900 text-white dark:bg-amber-600'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

        </div>

        {/* District Presidents Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 uppercase font-extrabold tracking-wider border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-4 px-4 sm:px-6">#</th>
                <th className="py-4 px-4 sm:px-6">District Name / ಜಿಲ್ಲೆ</th>
                <th className="py-4 px-4 sm:px-6">Division</th>
                <th className="py-4 px-4 sm:px-6">District President / ಜಿಲ್ಲಾಧ್ಯಕ್ಷರು</th>
                <th className="py-4 px-4 sm:px-6">Status</th>
                <th className="py-4 px-4 sm:px-6 text-right">Action / ಅರ್ಜಿ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredDistricts.map((item, index) => {
                const isAppointed = item.status === 'Appointed';
                return (
                  <tr
                    key={item.districtId}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 font-mono font-bold text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </td>
                    
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                      <div className="flex flex-col">
                        <span className="text-sm font-extrabold">{item.districtName}</span>
                        <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                          {item.districtNameKannada}
                        </span>
                      </div>
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-slate-600 dark:text-slate-300 font-medium">
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-[11px]">
                        {item.division} Division
                      </span>
                    </td>

                    <td className="py-4 px-4 sm:px-6">
                      {isAppointed ? (
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                            {item.presidentName ? item.presidentName.charAt(0) : 'P'}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-slate-900 dark:text-white block">
                              {item.presidentName}
                            </span>
                            {item.appointedDate && (
                              <span className="text-[10px] text-slate-400 block">
                                Appointed: {item.appointedDate}
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs italic text-slate-400 font-medium">
                          Vacant — Applications Open
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 sm:px-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold ${
                        isAppointed
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${isAppointed ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                        <span>{item.status}</span>
                      </span>
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-right">
                      {isAppointed ? (
                        <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-900">
                          ✓ Appointed
                        </span>
                      ) : (
                        <button
                          onClick={() => onOpenApplyModal(item.districtName)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all shadow-xs active:scale-95"
                        >
                          <UserPlus className="w-3.5 h-3.5" />
                          <span>Apply for District President Post</span>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredDistricts.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-xs font-medium">
              No districts found matching search criteria.
            </div>
          )}
        </div>

        {/* ADMIN REVIEW & APPROVAL PANEL (Visible to Authenticated Admins) */}
        {isAdminAuthenticated && (
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                    Admin Approval Portal
                  </span>
                  <h3 className="text-xl font-black text-white">
                    District President Candidate Applications ({pendingApps.length} Pending)
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                Executive Review Dashboard
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              As an authorized Executive Committee Admin, you can review submitted applications and approve candidates. Approving an application will set the candidate as the official District President in the live table.
            </p>

            <div className="space-y-4">
              {applications.map((app) => {
                const isPending = app.status === 'Pending';
                const isApproved = app.status === 'Approved';
                return (
                  <div
                    key={app.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      isApproved
                        ? 'bg-emerald-950/40 border-emerald-800 text-emerald-100'
                        : 'bg-slate-800/80 border-slate-700 text-slate-200'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-white">{app.fullName}</span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-600/30">
                            Age: {app.age} yrs (19+)
                          </span>
                          <span className="text-xs text-slate-400">({app.gender})</span>
                        </div>
                        <span className="text-xs font-bold text-amber-400 block mt-0.5">
                          Applying for: {app.districtName} District President
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                          isApproved ? 'bg-emerald-500 text-white' : 'bg-amber-600 text-white'
                        }`}>
                          Status: {app.status}
                        </span>

                        {isPending && (
                          <button
                            onClick={() => onApproveApplication(app.id, app.districtName.toLowerCase().replace(/\s+/g, '-'), app.fullName, app.email)}
                            className="px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md flex items-center gap-1.5"
                          >
                            <Check className="w-4 h-4" />
                            <span>Approve as District President</span>
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block font-bold">Contact Email:</span>
                        <span className="text-slate-200 truncate block">{app.email}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-bold">Phone:</span>
                        <span className="text-slate-200">{app.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-bold">City / Taluk:</span>
                        <span className="text-slate-200">{app.cityTaluk}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-bold">Qualification:</span>
                        <span className="text-slate-200">{app.qualification}</span>
                      </div>
                    </div>

                    <div className="mt-3 space-y-2 text-xs bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <div>
                        <span className="text-amber-400 font-bold block">Past Experience:</span>
                        <p className="text-slate-300 leading-relaxed">{app.pastExperience}</p>
                      </div>
                      <div>
                        <span className="text-amber-400 font-bold block">Purpose & Intent:</span>
                        <p className="text-slate-300 leading-relaxed">{app.purposeAndIntent}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {applications.length === 0 && (
                <div className="text-center py-6 text-slate-400 text-xs font-semibold">
                  No candidate applications received yet.
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
