import { useRef, useState, useCallback } from 'react';
import { UploadCloud, FileText, X, CheckCircle2 } from 'lucide-react';

interface ResumeUploaderProps {
  onFileChange: (file: File | null) => void;
  error?: string;
}

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED = '.pdf,.doc,.docx';

export default function ResumeUploader({ onFileChange, error }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (selectedFile: File | undefined) => {
      setLocalError(null);
      if (!selectedFile) return;

      if (selectedFile.size > MAX_SIZE) {
        setLocalError('File exceeds 5MB limit.');
        return;
      }

      const ext = selectedFile.name.split('.').pop()?.toLowerCase();
      if (!ext || !['pdf', 'doc', 'docx'].includes(ext)) {
        setLocalError('Only PDF, DOC, and DOCX files are accepted.');
        return;
      }

      setFile(selectedFile);
      setUploading(true);
      setProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            onFileChange(selectedFile);
            return 100;
          }
          return prev + 10;
        });
      }, 80);
    },
    [onFileChange]
  );

  const handleRemove = () => {
    setFile(null);
    setProgress(0);
    setLocalError(null);
    onFileChange(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const displayError = error || localError;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-sm font-medium text-fr-text">Resume</label>
        <span className="text-xs text-fr-muted">Optional</span>
      </div>

      {!file ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
          role="button"
          tabIndex={0}
          className={`relative cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-colors duration-200 ${
            dragActive
              ? 'border-fr-accent bg-cyan-500/5'
              : displayError
                ? 'border-fr-error'
                : 'border-fr-border hover:border-fr-border-hover'
          }`}
          aria-label="Upload resume"
        >
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED}
            className="sr-only"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <UploadCloud
            size={28}
            className={`mx-auto mb-3 ${dragActive ? 'text-fr-accent' : 'text-fr-muted'}`}
          />
          <p className="text-sm text-fr-text font-medium">
            Drop your resume here, or{' '}
            <span className="text-fr-accent">browse</span>
          </p>
          <p className="mt-1.5 text-xs text-fr-muted">
            PDF, DOC, DOCX up to 5MB
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-fr-border bg-fr-elevated p-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
              {uploading ? (
                <UploadCloud size={18} className="text-fr-accent animate-pulse" />
              ) : (
                <CheckCircle2 size={18} className="text-fr-success" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-fr-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-fr-text truncate">
                  {file.name}
                </span>
              </div>
              <p className="text-xs text-fr-muted mt-0.5">
                {uploading ? `Uploading... ${progress}%` : `${(file.size / 1024).toFixed(0)} KB`}
              </p>
            </div>
            {!uploading && (
              <button
                onClick={handleRemove}
                className="flex items-center justify-center w-8 h-8 rounded-lg text-fr-muted hover:text-fr-error hover:bg-fr-card transition-colors flex-shrink-0"
                aria-label="Remove resume"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {uploading && (
            <div className="mt-3 h-1 bg-fr-card rounded-full overflow-hidden">
              <div
                className="h-full bg-fr-accent rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      )}

      {displayError && (
        <p className="mt-1.5 text-xs text-fr-error" role="alert">
          {displayError}
        </p>
      )}

      <p className="mt-3 text-xs text-fr-muted leading-relaxed">
        Optional. PDF or DOCX, up to [5] MB. Please do not include government ID numbers, photographs or sensitive personal information (such as health, religion or caste). Your resume is stored securely, is not publicly displayed and is accessible only to authorised Fronthyre personnel and our service providers.
      </p>
    </div>
  );
}
