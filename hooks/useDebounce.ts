import React, { useState, useEffect } from "react"

// hook
export default function useDebounce(value: any, delay: number) {
  // state
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      // Set debouncedValue to value (passed value)
      // after the given delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      // Return the cleanup function that will be called every time ...
      // ... useEffect is called again. useEffect will be called again only if ...
      // ... value will be changed (see dependency array below).
      // This is how we avoid changing debouncedValue, if the value value ...
      // ... changed within the delay interval.
      // The timeout is cleared and restarted.
      // To put this together: if the user types something inside ...
      // ... of our application in the search box, we don't want debouncedValue...
      // ... didn't change until it stopped printing longer than 500ms.
      return () => {
        clearTimeout(handler)
      }
    },
    // Called again only if the value changes
    // we can also add the "delay" variable to the dependency array...
    // ... if you are going to change it dynamically.
    [value]
  )

  return debouncedValue
}
