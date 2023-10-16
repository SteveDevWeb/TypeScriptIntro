import React from 'react'
import './App.css'
import Header from './components/Header'
import { Section } from './components/Section'
import { Counter } from './components/Counter'
import List from './components/List'
import { useState } from 'react'


function App() {
     const [count, setCount] = useState<number>(1)

     return (
          <>
               <Header title="Maxine" />
               <Section>This is my section</Section>
               <Counter setCount={setCount}> Count is {count}</Counter>
               <List items={["Coffee", "Tacos", "Code"]} render={(item: string) => <span>{item}</span>}></List>
          </>
     )
}

export default App
