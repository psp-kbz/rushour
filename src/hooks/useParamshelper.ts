import { useShallowEffect } from "@mantine/hooks";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

type VALUE = string | null | number | undefined;

function removeNil(obj: Record<string, VALUE>) {
  if (!obj) return {};
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => Boolean(v))
  ) as Record<string, string>;
}

export function useParamsHelper(defaultParams?: Record<string, string>) {
  const [searchParams, setSearchParams] = useSearchParams();

  useShallowEffect(() => {
    if (defaultParams) setSearchParams(removeNil(defaultParams));
  }, [defaultParams]);

  const getParam = (key: string) => searchParams.get(key);

  const getParams = () => Object.fromEntries([...searchParams]);

  const replaceParams = (newParams: Record<string, VALUE>) => {
    setSearchParams(removeNil(newParams));
  };

  const setParam = useCallback(
    (key: string, value?: VALUE) => {
      const params = Object.fromEntries([...searchParams]);
      setSearchParams(removeNil({ ...params, [key]: value }));
    },
    [searchParams, setSearchParams]
  );

  const setParams = useCallback(
    (newParams: Record<string, VALUE>) => {
      const params = Object.fromEntries([...searchParams]);
      setSearchParams(removeNil({ ...params, ...newParams }));
    },
    [searchParams, setSearchParams]
  );

  return {
    getParam,
    getParams,
    replaceParams,
    setParam,
    setParams,
    searchParams,
  };
}
