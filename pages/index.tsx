import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from 'src/components/atoms/Button'
import Title from 'src/components/atoms/Title'
import Accordion, { AccordionItem } from 'src/components/parts/Accordion'
import Box from 'src/components/parts/Box'
import Container from 'src/components/parts/Container'
import FadeIn from 'src/components/parts/FadeIn'
import FV from 'src/components/parts/FV'
import Table, { TableCell, TableRow } from 'src/components/parts/Table'
import TextImage from 'src/components/parts/TextImage'
import CircleContents from 'src/components/templates/CircleContents'
import ContactForm from 'src/components/templates/ContactForm'
import FVContents from 'src/components/templates/FVContents'
import Layout from 'src/components/templates/Layout'
import Member from 'src/components/templates/Member'
import SkillsContents from 'src/components/templates/SkillsContents'
import { actionTitleContent } from 'src/contents/action'
import { FAQContents, FAQTitleContent } from 'src/contents/faq'
import { formTitleContent } from 'src/contents/form'
import { infoContents, infoTitleContent } from 'src/contents/info'
import { interestContents, interestTitleContent } from 'src/contents/interest'
import { intro, introContents } from 'src/contents/intro'
import { memberContents, memberTitleContent } from 'src/contents/member'
import { meritContents, meritTitleContent } from 'src/contents/merit'
import { skillContents, skillTitleContent } from 'src/contents/skill'

const Home: NextPage = () => {
  return (
    <Layout>
      <FV src="/images/fv-top.jpg"><FVContents /></FV>
      <Container className='py-12'>
        <div className='md:w-max mx-auto mb-12'>
          <FadeIn option={{threshold: 1.0, triggerOnce: true}}>
            <Title>{intro.title}</Title>
            <div className="whitespace-pre-wrap">{intro.text}</div>
          </FadeIn>
        </div>
        <div>
          {introContents.map((item, index) => (
            <FadeIn key={item.id}>
              <TextImage key={item.id} title={item.title} image={item.image} direction={index % 2 === 1 ? 'row-reverse' : undefined}>{item.text}</TextImage>
            </FadeIn>
          ))}
        </div>
      </Container>
      <div className='bg-gray-100 py-12'>
        <Container>
          <div className='md:w-max mx-auto mb-12'>
            <FadeIn>
              <Title>{skillTitleContent.title}</Title>
              <div className="whitespace-pre-wrap">{skillTitleContent.text}</div>
            </FadeIn>
            <SkillsContents />
          </div>
        </Container>
      </div>
      <Container className='py-12'>
        <FadeIn>
          <Title>{actionTitleContent.title}</Title>
          <div className='text-center'><Button href='#info'>ドローンイベントの詳細を見る</Button></div>
        </FadeIn>
      </Container>
      <div className='bg-gray-100'>
        <Container className='py-12'>
          <FadeIn>
            <Title>{interestTitleContent.title}</Title>
            <ul className='bg-white p-4 md:flex flex-wrap'>
              {interestContents.map((item, index) => (
                <li key={item.id} className="md:w-1/2">{item.text}</li>
              ))}
            </ul>
          </FadeIn>
        </Container>
        <Container className='py-12'>
          <FadeIn>
            <Title>{meritTitleContent.title}</Title>
          </FadeIn>
          <div className='md:flex'>
            {meritContents.map((item, index) => (
              <div key={item.id} className='md:w-1/3'>
                <FadeIn key={item.id} delay={300 * (index + 1)}>
                  <TextImage title={item.title} image={item.image} direction="col">{item.text}</TextImage>
                </FadeIn>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Container className='py-12'>
        <FadeIn>
          <Title>{memberTitleContent.title}</Title>
        </FadeIn>
        <div>
          {memberContents.map(item => (
            <FadeIn key={item.id}>
              <Member name={item.name} kana={item.kana} info={item.info} image={item.image}>{item.text}</Member>
            </FadeIn>
          ))}
        </div>
      </Container>
      <div className='bg-gray-100' id='info'>
        <Container className='py-12'>
          <FadeIn>
            <Title>{infoTitleContent.title}</Title>
          </FadeIn>
          <FadeIn option={{threshold: 0.2, triggerOnce: true}}>
            <Table className='whitespace-pre-wrap'>
              {infoContents.map(item => (
                <TableRow key={item.id}>
                  <TableCell th>{item.title}</TableCell>
                  <TableCell>{item.text}</TableCell>
                </TableRow>
              ))}
            </Table>
          </FadeIn>
        </Container>
      </div>
      <Container className='py-12'>
        <FadeIn>
          <Title>{FAQTitleContent.title}</Title>
        </FadeIn>
        <FadeIn>
          <Accordion>
            {FAQContents.map(item => (
              <AccordionItem key={item.id} title={item.question}>{item.answer}</AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
      <div id='contact'></div>
      <Container className='py-12'>
        <FadeIn>
          <Title>{formTitleContent.title}</Title>
        </FadeIn>
        <FadeIn option={{threshold: 0.1, triggerOnce: true}}>
          <ContactForm />
        </FadeIn>
      </Container>
    </Layout>
  )
}

export default Home