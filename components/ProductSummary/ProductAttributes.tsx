import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

const ProductAttributes = ({description, ...otherAttritbutes}: TProductAttributes) => {

    return (
    <section className='container'>
        <Header as="h3">About this avocado</Header>
        <p>{description}</p>
        <Divider/>
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
                {Object.keys(otherAttritbutes).map(key => (
                    <Table.Row key={key}>
                        <Table.Cell className='attr-name'>{key}</Table.Cell>
                        <Table.Cell>{otherAttritbutes[key as keyof typeof otherAttritbutes]}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        <style jsx>{`
        :global(.attr-name) {
        text-transform: capitalize;
      }
    `}</style>
    </section>
  )
}

export default ProductAttributes