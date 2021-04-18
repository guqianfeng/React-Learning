import React, { useEffect, useRef } from 'react'

export default function useWatch (dep, callback, config = {immediate: false}) {
    const {immediate} = config
    // console.log({immediate})
    const prev = useRef()
    const inited = useRef(false)
    const stop = useRef(false)
    const execute = () => callback(prev.current)
    useEffect(() => {
        if (!stop.current) {
            if (!inited.current) {
                inited.current = true;
                if (immediate) {
                    execute()
                }
            } else {
                execute()
            }
            prev.current = dep
        }
    }, [dep])
    return () => {
        stop.current = true
    }
}