import { Container, Links, Content } from './styles.js';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tags } from '../../components/Tags';

export function Details(){
    return(
<Container>
  <Header />
    <main>
      <Content>
        <ButtonText title="Excluir nota" />
        <h1>Introdução ao React</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore praesentium molestiae corrupti voluptatum. Maiores fugiat doloribus asperiores debitis natus, consequuntur doloremque! Quisquam molestiae omnis optio maiores neque officiis consequuntur incidunt!</p>
        <Section title="Links úteis">
          <Links>
            <li><a href="https://www.rocketseat.com.br/">rocketseat.com.br</a></li>
            <li><a href="https://www.rocketseat.com.br/">rocketseat.com.br</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tags title="express" />
          <Tags title="node" />
        </Section>

        <Button title="Voltar" />
      </Content>
    </main>
</Container>
      )
}