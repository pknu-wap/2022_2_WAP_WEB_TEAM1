import dancingCat from './assets/dancing-cat.gif';
import styled from '@emotion/styled';
import { Button, Modal, useDisclosure } from '@wap-ui/react';

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const openRepo = () => {
    window.open('https://github.com/pknu-wap/wap-ui');
  };
  return (
    <Container>
      <Button color="success" shadow onClick={onOpen}>
        Please Open This
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Header onClose={onClose}>From WAP-UI</Modal.Header>
        <Modal.Body>
          <ContentWrapper>
            <span>Thank you for using the library</span>
            <ContentImage src={dancingCat} alt="dancingCat" />
            <span>If you like it, please give me a star!</span>
          </ContentWrapper>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" color="success" shadow onClick={openRepo}>
            OK
          </Button>
          <Button size="sm" color="error" shadow onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px 0;
`;

export default App;
