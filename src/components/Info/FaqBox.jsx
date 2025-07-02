import Accordion from "react-bootstrap/Accordion";

export default function FaqBox({ question, answer }) {
  return (
    <Accordion className='faqbox'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body>{answer}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
