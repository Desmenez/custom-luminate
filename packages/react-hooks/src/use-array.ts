import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export type UseArrayResult<T = unknown> = {
  /**
   * The current value of the array.
   */
  value: T[]

  /**
   * The handler object that contains all the array manipulation methods.
   */
  handler: {
    /**
     * Set the value of the array.
     * @param value - The to-be array value.
     * @returns
     */
    set: Dispatch<SetStateAction<T[]>>

    /**
     * Add an element to the end of the array.
     * @param element - The element to add to the end of the array.
     * @returns
     */
    push: (element: T) => void

    /**
     * Remove an element from the array given the element itself.
     * @param element - The element to remove from the array.
     * @returns
     */
    remove: (element: T) => void

    /**
     * Remove an element from the array given an index.
     * @param index - The index of the element to remove.
     * @returns
     */
    removeIndex: (index: number) => void

    /**
     * Check if the array is empty.
     * @returns
     */
    isEmpty: () => boolean

    /**
     * Map the array to a new array.
     * @param callback - The callback function to map the array.
     * @returns
     */
    mapAndSet: (callback: (value: T, index: number, array: T[]) => T) => void

    /**
     * Find an element in the array.
     * @param callback - The callback function to find the element.
     * @returns
     */
    find: (callback: (value: T, index: number, array: T[]) => boolean) => T | undefined

    /**
     * Filter the array.
     * @param callback - The callback function to filter the array.
     * @returns
     */
    filterAndSet: (callback: (value: T, index: number, array: T[]) => boolean) => void

    /**
     * Find the index of an element in the array.
     * @param callback - The callback function to find the index of the element.
     * @returns
     */
    findIndex: (callback: (value: T, index: number, array: T[]) => boolean) => number
  }
}

export function useArray<T = unknown>(initialValue: T[] = []): UseArrayResult<T> {
  const [value, setValue] = useState<T[]>(initialValue ?? [])

  const push = useCallback((element: T) => {
    setValue((oldValue) => [...oldValue, element])
  }, [])

  const remove = useCallback((element: T) => {
    setValue((oldValue) => oldValue.filter((value) => value !== element))
  }, [])

  const removeIndex = useCallback((index: number) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index))
  }, [])

  const isEmpty = useCallback(() => value.length === 0, [])

  const mapAndSet = useCallback((callback: (value: T, index: number, array: T[]) => T) => {
    setValue((oldValue) => oldValue.map(callback))
  }, [])

  const find = useCallback(
    (callback: (value: T, index: number, array: T[]) => boolean) => {
      return value.find(callback)
    },
    [value]
  )

  const filterAndSet = useCallback((callback: (value: T, index: number, array: T[]) => boolean) => {
    setValue((oldValue) => oldValue.filter(callback))
  }, [])

  const findIndex = useCallback(
    (callback: (value: T, index: number, array: T[]) => boolean) => {
      return value.findIndex(callback)
    },
    [value]
  )

  return {
    value,
    handler: {
      set: setValue,
      push,
      remove,
      removeIndex,
      isEmpty,
      mapAndSet,
      find,
      filterAndSet,
      findIndex,
    },
  }
}
