import React, { useState, useEffect } from 'react'
import { Header, Button } from 'semantic-ui-react'
import { server } from '@config'; 
import Layout from '@components/Layout/Layout';

type YesOrNoResponse = {
    data: 'yes' | 'no'
}

const fetchResult = async () => {
    const response = await fetch(`${server}/api/yes-or-no`) // La agregas en Fetch API    
    const { data }: YesOrNoResponse = await response.json()

    return data
}

export const getServerSideProps = async () => {
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
            }, 800)
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

// const YesOrNo = ({ initialResult }:{ initialResult : string }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [result, setResult] = useState(initialResult)
//     const [triggerCount, setTriggerCount ] = useState(0)

//     useEffect(() => {
//         fetchResult()
//         .then((initialResult) => {
//         setResult(initialResult)
//         })
//     }, [triggerCount])
    
//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//         setTriggerCount(triggerCount + 1)
//     };

//     return (
//         <div>
//         <Header size="huge" as="h1" textAlign='center'>
//             Open Popup
//          </Header>

//         <a href="#" id="YON" onClick={togglePopup}>
//             Open Popup
//         </a>
//         {isOpen && (
//             <div className="popup">
//             <p>{result}</p>
//             <button onClick={togglePopup}>Close</button>
//             </div>
//         )}
//         <style jsx>{`
//             .popup {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             background-color: white;
//             padding: 20px;
//             border: 1px solid black;
//             z-index: 999;
//             text-align: center;
//             margin-bottom: 2rem;
//             }
//             #YON {    
//             text-align: center;
//             margin-bottom: 4rem;
//             }
//             .ui.huge.center.aligned.header {
//                 margin-bottom: 40px;
//                 margin-top: 40px;
//             }
//         `}</style>
//         </div>
//     );
// }

// export  { YesOrNo };



// const YesOrNo = ({data}:{data: string}) => (

//     <Message floating content={data} />
// )

// export { YesOrNo } 

// function YesOrNo() {
//   return (
//     <section>
//         <Link href="/yes-or-no">
//             <div id="YON">YesOrNo</div>
//         </Link>
//     <style jsx>{`
//     #YON {    
//         text-align: center;
//         margin-bottom: 2rem;
//     }
//     `}</style>
//     </section>
//   )
// }
