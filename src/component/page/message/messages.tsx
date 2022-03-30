import { useState, useEffect } from "react";
import { ButtonGroup, Table } from "reactstrap";
import MessageEdit from "./messageEdit";
import MessageAdd from "./messageAdd";
import MessageDelete from "./messageDelete";
import Message from "../../../@types/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { getMessages } from "../../../action/message/action";

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    getMessages(setMessages); // aka setMessages(data)
  }, []);
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-6 text-left">
          <h3>Messages</h3>
        </div>
        <div className="col-md-6 text-right">
        <MessageAdd refresh={() => getMessages(setMessages)} />
        </div> 
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <Table bordered hover responsive striped>
            <thead>
              <tr>
                <th>
                  Content 
                </th>
                <th>
                Date
                </th>
                <th>
            Statue
                </th>
              
                <th>
                Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.length ? (
                messages.map((message, i) => (
                  <tr key={i}>
                    <td scope="row">{message.content}</td>
                    <td>{message.date}</td>
                    <td>{message.state}</td>
                    <td>
                      <ButtonGroup>
                        <MessageEdit
                          message={message}
                          refresh={() => getMessages(setMessages)}
                        />
                        <MessageDelete
                          message={message}
                          refresh={() => getMessages(setMessages)}
                        />
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center p-5">
                    <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                    <br />
                    No messages yet
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Messages;
