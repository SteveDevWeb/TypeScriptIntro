import React from 'react'
import { useState } from 'react'
import { ReactNode } from 'react'

type CounterProps = {
     setCount: React.Dispatch<React.SetStateAction<number>>
     children: ReactNode
}

export function Counter({ setCount, children }: CounterProps) {
     return (
          <>
               <h1>{children}</h1>
               <button onClick={() => setCount((prev) => prev + 1)}>+</button>
               <button onClick={() => setCount((prev) => prev - 1)}>-</button>
          </>
     )
}