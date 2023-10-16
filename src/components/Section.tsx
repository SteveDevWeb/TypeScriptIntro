import React, { ReactElement, ReactNode } from 'react'

type SectionProps = {
     title?: string
     children: ReactNode
}

export function Section({ children, title="MySubHeader" }: SectionProps) {
     return (
          <section>
               <h2>{title}</h2>
               <p>{children}</p>
          </section>
     )
}



 