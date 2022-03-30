import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { addMessage } from "../../../action/message/action";

interface MessageAddPropsType {
  refresh: () => void;
}



const MessageAdd = (props: MessageAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [content, setContent] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [state, setState] = useState<boolean>(true);

  const submit = () => {
    const newMessage = {
      content,
      date,
      state,
    };

    addMessage(newMessage, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setContent("");
    setDate("");
    setState(true);
    
  };

  return (
    <>
      <Button
        date="success"
        size="xs"
        className="mb-2"
        onClick={() => setIsOpened(true)}
        
      >
        <FontAwesomeIcon icon={faAdd} className="pr-2" />
        Added Messages
        
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader>
          Messages content 
          <button className="float-right btn btn-default" onClick={() => setIsOpened(!isOpened)}> X  </button>
        </ModalHeader>
        <ModalBody>
          <Form >
              <div className="form-group">
                <Label for="content">
                  Content
                </Label>
                <Input
                  value={content}
                  id="content"
                  name="content"
                  type="text"
                  className="form-group"
                  onChange={(e) => setContent(e.target.value)}
                /> 
              </div>
              <div className="form-group">
                <Label for="date">
                  Date
                </Label>
                <Input
                  value={date}
                  id="date"
                  name="date"
                  type="text"
                  onChange={(e) => setDate(e.target.value)}
                /> 
              </div>
              <div className="form-group">
                <Label for="state">
                  Statue
                </Label>
                <Input
                  value={state}
                  id="state"
                  name="state"
                  type="text"
                  onChange={(e) => setState(Boolean.parseInt(e.target.value))}
                /> 
              </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button date="success" onClick={submit}>
            Confirm
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>
           Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default MessageAdd;
