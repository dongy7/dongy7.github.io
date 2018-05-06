import styled from 'styled-components'
import Page from '../layouts/Portfolio'
import Title from '../components/post/Title'
import Description from '../components/port/Description'
import Header from '../components/port/Header'
import Item from '../components/port/Item'
import List from '../components/port/List'
import Name from '../components/port/Name'
import Project from '../components/port/Project'
import Footer from '../components/port/Footer'
import Button from '../components/port/Button'
import { projects } from './projects'

export default () => {
  const MainTitleSection = styled.div`
    margin-bottom: 50px;
  `
  return (
    <Page>
      <div className="portfolio">
        <MainTitleSection>
          <Title>Portfolio</Title>
        </MainTitleSection>
        <List>
          {projects.map(({ name, description, src, demo }) =>
            <Item>
              <Project>
                <Header>
                  <Name>{name}</Name>
                </Header>
                <Description>{description}</Description>
                <Footer>
                  <Button href={src}>Source</Button>
                  <Button href={demo}>Demo</Button>
                </Footer>
              </Project>
            </Item>
          )}
        </List>
      </div>
    </Page>
  )
}