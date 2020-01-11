import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
} from 'native-base';
export default class Footerr extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
