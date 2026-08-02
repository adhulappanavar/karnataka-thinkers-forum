import React, { useState } from 'react';
import { ARCHIVE_FOLDERS } from '../data/ktfData';
import { ArchiveFolder, ArchiveFile } from '../types';
import { Folder, FileText, Search, Download, Eye, CheckCircle2, Clock, Filter, ChevronRight, FolderArchive, ShieldCheck, X } from 'lucide-react';

interface ArchiveExplorerProps {
  lang: 'EN' | 'KN';
}

export const ArchiveExplorer: React.FC<ArchiveExplorerProps> = ({ lang }) => {
  const [selectedFolder, setSelectedFolder] = useState<ArchiveFolder>(ARCHIVE_FOLDERS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Available' | 'Pending Organization' | 'Archived'>('All');
  const [previewFile, setPreviewFile] = useState<ArchiveFile | null>(null);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const filteredFiles = selectedFolder.files.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (file.description && file.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'All' || file.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDownload = (file: ArchiveFile) => {
    setDownloadSuccessMessage(`Request logged for "${file.name}". Copy sent to official NGO desk.`);
    setTimeout(() => setDownloadSuccessMessage(null), 4000);
  };

  return (
    <section id="archive" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
            {lang === 'KN' ? '೮ ವರ್ಗಗಳ ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್' : 'Official Document Repository'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {lang === 'KN' ? '೮ ವಿಭಾಗಗಳ ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳು' : 'The 8-Folder Digital Archive'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Structured public document hierarchy corresponding directly to Karnataka Thinkers Forum's official organizational filing architecture.
          </p>
        </div>

        {downloadSuccessMessage && (
          <div className="mt-6 max-w-xl mx-auto p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-300 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {downloadSuccessMessage}
            </span>
            <button onClick={() => setDownloadSuccessMessage(null)}><X className="w-4 h-4" /></button>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Folder Navigation Cards */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 px-2 mb-2">
              Directory Structure (01 to 08)
            </h3>

            {ARCHIVE_FOLDERS.map((folder) => {
              const isSelected = selectedFolder.id === folder.id;
              return (
                <button
                  key={folder.id}
                  onClick={() => setSelectedFolder(folder)}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-amber-700 text-white font-bold shadow-lg border-amber-800'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-black shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}>
                      {folder.code}
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm font-bold truncate">{folder.name}</h4>
                      <p className={`text-[11px] ${isSelected ? 'text-amber-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {folder.files.length} Official Documents
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Files List & Search */}
          <div className="lg:col-span-8 bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Header of Active Folder */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                  Folder {selectedFolder.code}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Folder className="w-5 h-5 text-amber-600" />
                  <span>{selectedFolder.name}</span>
                </h3>
              </div>

              {/* Search within active folder */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1">
              <span className="text-slate-400 font-medium text-[11px] shrink-0">Status Filter:</span>
              {(['All', 'Available', 'Pending Organization', 'Archived'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    statusFilter === status
                      ? 'bg-amber-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Files Grid */}
            <div className="space-y-3">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-amber-300 dark:hover:border-amber-800 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        {file.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {file.description}
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-[11px] font-medium text-slate-400">
                        {file.date && <span>Date: {file.date}</span>}
                        {file.size && <span>• {file.size}</span>}
                        <span>• PDF Document</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:self-center shrink-0">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      file.status === 'Available'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : file.status === 'Pending Organization'
                        ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {file.status}
                    </span>

                    <button
                      onClick={() => setPreviewFile(file)}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="Quick Preview Summary"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDownload(file)}
                      className="p-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-xs"
                      title="Download Official Record"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {filteredFiles.length === 0 && (
                <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
                  <p className="text-xs font-semibold text-slate-500">No documents found matching criteria in folder "{selectedFolder.name}".</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Document Preview Record
                </span>
              </div>
              <button onClick={() => setPreviewFile(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {previewFile.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {previewFile.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/90 text-xs space-y-2 border border-slate-200 dark:border-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Folder Directory:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedFolder.code} - {selectedFolder.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="font-bold text-amber-600">{previewFile.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Official Access:</span>
                <span className="font-bold text-slate-900 dark:text-white">Public Record (Dharwad Desk)</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPreviewFile(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(previewFile);
                  setPreviewFile(null);
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Request Document Copy</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
