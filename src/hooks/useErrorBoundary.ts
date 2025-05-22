import { useState } from 'react';
import { handleError } from '@/lib/errorUtils';

export function useErrorBoundary() {
  const [error, setError] = useState<string | null>(null);

  const catchError = (e: unknown) => {
    const msg = handleError(e);
    setError(msg);
    setTimeout(() => setError(null), 4000);
  };

  return { error, catchError };
}
