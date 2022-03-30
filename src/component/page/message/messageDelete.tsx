import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Message from "../../../@types/message";
import { deleteMessages } from "../../../action/message/action";

interface MessageDeletePropsType {
  message: Message;
  refresh: () => void;
}

const MessageDelete = ({ message, refresh }: MessageDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit = () => {
    deleteMessages(message, () => {
      refresh();
      setIsOpened(false);
    });
  };

  return (
    <>
      <Button color="danger" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
        Delete Message
        </ModalHeader>
        <ModalBody>
        sure to Delete this Message  {message.content}?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit}>
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

export default MessageDelete;
