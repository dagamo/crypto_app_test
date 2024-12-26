const MAX_REQUEST_COUNT = 5;
export const MAX_TIME = 30; // in seconds

export const initTimerInterval = ({
  decrementTimer,
  isPending,
  isConnected,
}: {
  decrementTimer: () => void;
  isPending: boolean;
  isConnected: boolean;
}) => {
  const idTimeout = setInterval(() => {
    if (isPending) {
      return;
    }
    if (!isConnected) {
      return;
    }

    decrementTimer();
  }, 1000);
  return idTimeout;
};

export const initRequestInterval = ({
  count,
  mutate,
  incrementCount,
  setRequestCount,
  resetPrices,
}: {
  count: number;
  mutate: () => void;
  incrementCount: () => void;
  resetPrices: () => void;
  setRequestCount: (count: number) => void;
}) => {
  if (count === 1) {
    mutate();
    incrementCount();
  }
  const idInterval = setInterval(() => {
    if (count <= MAX_REQUEST_COUNT) {
      incrementCount();
      mutate();
      return;
    }
    if (count >= MAX_REQUEST_COUNT) {
      resetPrices();
      setRequestCount(2);
    }
  }, 1000 * MAX_TIME);
  return idInterval;
};
