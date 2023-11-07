import { useEffect, useState } from 'react';

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { isMounted: mounted };
};

export default useMounted;
