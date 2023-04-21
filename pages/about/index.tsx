import React from 'react';
import Layout from '@components/Layout/Layout'
import { Image, Header } from 'semantic-ui-react'

const aboutMe = [
  { title: 'What are my goals?',
    content: 
      'My short and mid-term objectives for the next 10 years are to develop leadership and engineering skills to create valuable products or services that can make a tremendous impact on the global economy.',
  },
  {
    title: 'How to achive it?',
    content: 'Joining a startup that matches the description above and at the same time, gaining practical experience while I am working with experts in the field.'
  },
  {
    title: 'Why are these goals so important to me?',
    content: 'I want to help people through technology.'
  },
  {
    title: 'Which sectors am I interested on working on?',
    content: 'Bitcoin | Lightning network | Payments | AI'
  }
]

const About = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
          About me
        </Header>
        <figure>
          <Image src="/images/Me.jpg" alt="About me" />
        </figure>
        <ol>
          {aboutMe.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }
        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }
        ol {
          list-style: none;
          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;
          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }
        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 40px;
          margin-bottom: 2rem;
        }
        :global(.ui.image) {
          border-radius: 1000px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 30%;
        }
      `}</style>
    </Layout>
  )
}

export default About;
