import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from 'src/components/atoms/Button'
import Title from 'src/components/atoms/Title'
import Accordion, { AccordionItem } from 'src/components/parts/Accordion'
import Box from 'src/components/parts/Box'
import Container from 'src/components/parts/Container'
import FV from 'src/components/parts/FV'
import Table, { TableCell, TableRow } from 'src/components/parts/Table'
import TextImage from 'src/components/parts/TextImage'
import CircleContents from 'src/components/templates/CircleContents'
import ContactForm from 'src/components/templates/ContactForm'
import FVContents from 'src/components/templates/FVContents'
import Layout from 'src/components/templates/Layout'
import Member from 'src/components/templates/Member'
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
          <Title>{intro.title}</Title>
          <div className="whitespace-pre-wrap">{intro.text}</div>
        </div>
        <div>
          {introContents.map((item, index) => (
            <TextImage key={item.id} title={item.title} image={item.image} direction={index % 2 === 1 ? 'row-reverse' : undefined}>{item.text}</TextImage>
          ))}
        </div>
      </Container>
      <div className='bg-gray-100 py-12'>
        <Container>
            <div className='md:w-max mx-auto mb-12'>
              <Title>{skillTitleContent.title}</Title>
              <div className="whitespace-pre-wrap">{skillTitleContent.text}</div>
            </div>
            <div className='relative flex justify-around flex-wrap md:block md:max-w-screen-sm md:mx-auto md:my-40 md:aspect-square md:border border-base-cont md:rounded-full'>
              <Box className="bg-white hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className='text-lg font-bold text-center'>プログラミング的<br />思考</div>
              </Box>
              {skillContents.map(item => (
                <Box key={item.id} className={clsx(['bg-white mb-4 w-60 md:absolute', item.className])}>
                  <div className='text-center'><Image {...item.image} /></div>
                  <div className='text-lg font-bold text-center'>{item.title}</div>
                  <div className='text-center whitespace-pre-wrap'>{item.text}</div>
                </Box>
              ))}
            </div>
        </Container>
      </div>
      <Container className='py-12'>
        <Title>{actionTitleContent.title}</Title>
        <div className='text-center'><Button href='#info'>ドローンイベントの詳細を見る</Button></div>
      </Container>
      <div className='bg-gray-100'>
        <Container className='py-12'>
          <Title>{interestTitleContent.title}</Title>
          <ul className='bg-white p-4 md:flex flex-wrap'>
            {interestContents.map(item => (
              <li key={item.id} className="md:w-1/2">{item.text}</li>
            ))}
          </ul>
        </Container>
        <Container className='py-12'>
          <Title>{meritTitleContent.title}</Title>
          <div className='md:flex'>
            {meritContents.map(item => (
              <div key={item.id} className='md:w-1/3'>
                <TextImage title={item.title} image={item.image} direction="col">{item.text}</TextImage>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Container className='py-12'>
        <Title>{memberTitleContent.title}</Title>
        <div className='md:flex'>
          {memberContents.map(item => (
            <Member key={item.id} name={item.name} kana={item.kana} info={item.info} image={item.image}>{item.text}</Member>
          ))}
        </div>
      </Container>
      <div className='bg-gray-100' id='info'>
        <Container className='py-12'>
          <Title>{infoTitleContent.title}</Title>
          <Table className='whitespace-pre-wrap'>
            {infoContents.map(item => (
              <TableRow key={item.id}>
                <TableCell th>{item.title}</TableCell>
                <TableCell>{item.text}</TableCell>
              </TableRow>
            ))}
          </Table>
        </Container>
      </div>
      <Container className='py-12'>
        <Title>{FAQTitleContent.title}</Title>
        <Accordion>
          {FAQContents.map(item => (
            <AccordionItem key={item.id} title={item.question}>{item.answer}</AccordionItem>
          ))}
        </Accordion>
      </Container>
      <div id='contact'></div>
      <Container className='py-12'>
        <Title>{formTitleContent.title}</Title>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Home