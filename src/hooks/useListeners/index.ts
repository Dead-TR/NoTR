import { useCallback, useEffect, useMemo } from "react";

export const useListeners = (
  listeners: keyof WindowEventMap | (keyof WindowEventMap)[],
  callBack: (event?: Event) => void,
  memoDependence: any[] = []
) => {
  const list: (keyof WindowEventMap)[] = useMemo(
    () => (Array.isArray(listeners) ? [...listeners] : [listeners]),
    [listeners, ...memoDependence]
  );

  const removeListeners = useCallback(() => {
    list.forEach((listener) => {
      window.removeEventListener(listener, callBack);
    });
  }, [list, ...memoDependence]);
  useEffect(() => {
    callBack();

    list.forEach((listener) => {
      window.addEventListener(listener, callBack);
    });

    return () => {
      removeListeners();
    };
  }, [...memoDependence]);

  return {
    removeListeners,
  };
};
