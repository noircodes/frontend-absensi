import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import React, { ChangeEvent, useState } from "react";
import { addUser } from "../api/user";

export const roles = [
  { label: "Admin", value: "ADMIN" },
  { label: "Karyawan", value: "EMPLOYEE" }
]

export const AddUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [user, setUser] = useState({
    name: "",
    photoUrl: "",
    email: "",
    phone: "",
    tags: [],
    username: "",
    password: "",
    noId: "",
    role: "EMPLOYEE",
  });

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  const handlePhotoUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, photoUrl: e.target.value });
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, phone: e.target.value });
  };

  // const handleTags = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUser({ ...user, tags: e.target.value });
  // };

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, username: e.target.value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleNoId = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, noId: e.target.value });
  };

  const handleRole = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, role: e.target.value });
  };

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Add User
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add User
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Email"
                    variant="bordered"
                    value={user.email || ''}
                    onChange={handleEmail}
                  />
                  <Input
                    label="Username"
                    variant="bordered"
                    value={user.username}
                    onChange={handleUsername}
                  />
                  <Input
                    label="Name"
                    variant="bordered"
                    value={user.name}
                    onChange={handleName}
                  />
                  <Input
                    label="Phone Number"
                    variant="bordered"
                    value={user.phone}
                    onChange={handlePhone}
                  />
                  <Input
                    label="Photo URL"
                    variant="bordered"
                    value={user.photoUrl}
                    onChange={handlePhotoUrl}
                  />
                  <Input
                    label="No ID"
                    variant="bordered"
                    value={user.noId}
                    onChange={handleNoId}
                  />

                  <Input
                    label="Password"
                    type="password"
                    variant="bordered"
                    value={user.password}
                    onChange={handlePassword}
                  />
                  <Input
                    label="Confirm Password"
                    type="password"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={() => addUser({
                    "email" : user.email,
                    "username" : user.username,
                    "name" : user.name,
                    "phone" : user.phone,
                    "photoUrl" : user.photoUrl,
                    "password" : user.password,
                    "role" : user.role,
                    "tags" : user.tags,
                    "noId" : user.noId
                  }).then(() => {
                    onClose();
                    window.location.reload();
                  })}>
                    Add User
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
