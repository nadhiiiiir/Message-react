import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  Modal,
} from "reactstrap";
import Message from "../../../@types/message";
import { editMessages } from "../../../action/message/action";

interface MessageEditPropsType {
  message: Message;
  refresh: () => void;
}

const MessageEdit = ({ message, refresh }: MessageEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [messageId, setMessageId] = useState<any>(message._id);
  const [content, setContent] = useState<string>(message.content);
  const [date, setDate] = useState<string>(message.date);
  const [state, setState] = useState<boolean>(message.state);
 

  const submit = () => {
    const editMessage = {
      content,
      date,
      state,
    };

    editMessages(editMessage, messageId, () => {
      refresh();
      setIsOpened(false); 
    });
  };

  const reset = () => {
    setContent("");
    setDate("");
    setState(true);
  };

  return (
    <>
      <Button date="warning" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader>
          Edit Message
          <button className="float-right btn btn-default" onClick={() => setIsOpened(!isOpened)}> X  </button> 
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <div className="form-group">
            <Label for="content">
                Message
              </Label>
              <Input value={content} id="content" name="content" type="text" className="form-group" />
             
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
              >
              </Input>
             
              </div>
           <div className="form-group">
            <Label for="state">
               statue
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
          <Button date="warning" onClick={submit}>
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

export default MessageEdit;
