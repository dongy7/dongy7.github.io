import styled from 'styled-components'
import Page from '../layouts/Main'
import Title from '../components/post/Title'
import List from '../components/project/List'
import Card from '../components/project/Card'
import Button from '../components/project/Button'
import { projects } from './projectList'

export default () => {
  const MainTitleSection = styled.div`
    text-align: center;
    margin-bottom: 50px;
  `

  return (
    <Page project>
      <div className="portfolio">
        <MainTitleSection>
          <Title>Projects</Title>
        </MainTitleSection>
        <List>
          {projects.map(({ name, description, src, demo }) =>
            <Card>
              <div className="card" key={name}>
                <div className="card-content">
                  <span className="card-title">{name}</span>
                  <p>{description}</p>
                </div>
                <div className="card-action">
                  <Button href={src}>Source</Button>
                  <Button href={demo}>Demo</Button>
                </div>
              </div>
            </Card>
          )}
        </List>
      </div>
    </Page>
  )
}