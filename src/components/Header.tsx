import React, { ReactElement } from 'react'


type HeaderProps = { title: string }

function Header({title}:HeaderProps):ReactElement {
    return (
        <h1>{title}</h1>
    )
}

export default Header