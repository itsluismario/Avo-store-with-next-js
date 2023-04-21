import React, { useState, useEffect } from 'react'
import { Header, Button } from 'semantic-ui-react'
import { server } from '@config'; 
import Layout from '@components/Layout/Layout';

type YesOrNoResponse = {
    data: 'yes' | 'no'
}

const fetchResult = async () => {
    const response = await fetch(`${server}/api/yes-or-no`)
    const { data }: YesOrNoResponse = await response.json()
        
    return data;
}

export const getStaticProps = async () => {
    const initialResult : string = await fetchResult() 
    
    return {
        props: {
            initialResult,
        },
    }
}

function YesOrNo({ initialResult }:{ initialResult : string }) {
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState(initialResult)
    const [triggerCount, setTriggerCount ] = useState(0)
    

    useEffect(() => {
            setIsLoading(true)
            setTimeout(() => {
            fetchResult()
                .then((initialResult) => {
                    setResult(initialResult)
                    setIsLoading(false)
                })
            }, 300)
    }, [triggerCount])
    
    const toggleCount = () => {
        setTriggerCount(triggerCount + 1)
    };

    return (
        <Layout>
        <Header as="h1" textAlign='center' color={isLoading ? 'grey' : 'green' }>
            {result}
        </Header>
        
        <Button
            color="green"
            onClick={toggleCount}
            loading={isLoading}
            disabled={isLoading}
        >
            Intentar de nuevo
        </Button>
        <style jsx global>{`
            div {
                text-align: center;
            }
            .ui.center.aligned.header {
                font-size: 6rem;
                text-transform: uppercase;
            }
        `}</style>
        </Layout>
    )
  }
  
  export default YesOrNo
