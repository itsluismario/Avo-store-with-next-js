import React from 'react'
import { Header } from 'semantic-ui-react'

const HeaderOne = () => (
    <Header size="huge" as="h1" textAlign='center'>
    Está
    🥑
    Guay!
    <style jsx global>{`
    .ui.huge.center.aligned.header {
        margin-bottom: 40px;
    }
    `}</style>
    </Header>

)

export default HeaderOne