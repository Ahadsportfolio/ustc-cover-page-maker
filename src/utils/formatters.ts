export const formatSubmissionDate = (dateStr?: string): string => {
  if (!dateStr || typeof dateStr !== 'string') return 'N/A';
  try {
    // If dateStr is YYYY-MM-DD or ISO
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const [year, month, day] = parts.map((p) => parseInt(p, 10));
      if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
        const dateObj = new Date(year, month - 1, day);
        if (!isNaN(dateObj.getTime())) {
          return dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      }
    }
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return dateStr;
  } catch {
    return dateStr || 'N/A';
  }
};
