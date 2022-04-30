import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >

      <form className="infoForm">
      <h3>Your Info</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="FirstName"
            className="infoInput"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="LastName"
            className="infoInput"
          />
        </div>

        <div>
          <input type="text" placeholder="Works at" className="infoInput" />
        </div>

        <div>
          <input type="text" placeholder="Lives in" className="infoInput" />
          <input type="text" placeholder="Country" className="infoInput" />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Relationship status"
          />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
