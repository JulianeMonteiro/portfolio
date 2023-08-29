import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="secundario">
      Lorem isum dolor sit, amet consectetur adipisicing elit. Dolorum
      voluptatibus mollitia quia sunt quas maxime soluta! Unde inventore tempora
      repudiandae a voluptatibus quis cupiditate velit perferendis facere,
      corporis placeat necessitatibus!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=JulianeMonteiro&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JulianeMonteiro&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
