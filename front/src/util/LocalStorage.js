import React, { useState, useEffect } from "react";

export default function LocalStorage(defaultValue, key) {
    
  const [value, setValue] = useState(() => {
    const LocalStorageValue = localStorage.getItem(key);
    return LocalStorageValue !== null
      ? JSON.parse(LocalStorageValue)
      : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
