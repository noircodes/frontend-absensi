import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import React, { ChangeEvent, useEffect, useState } from "react";
import { updateUser } from "../api/user";
import { EditIcon } from "../icons/table/edit-icon";

export const roles = [
  { label: "Admin", value: "ADMIN" },
  { label: "Karyawan", value: "EMPLOYEE" }
]

export const UpdateUser = ({currentUser} : any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [user, setUser] = useState({
    _id: currentUser._id,
    name: currentUser.name,
    photoUrl: currentUser.photoUrl,
    email: currentUser.email,
    phone: currentUser.phone,
    tags: [],
    username: currentUser.username,
    password: currentUser.password,
    noId: currentUser.noId,
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
        <Tooltip content="Edit user" color="secondary">
          <button onClick={onOpen}>
            <EditIcon size={20} fill="#979797" />
          </button>
        </Tooltip>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Edit User
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Email"
                    variant="bordered"
                    value={user.email}
                    onChange={handleEmail}
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
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={() => updateUser(user._id, {
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
                    Update User
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
  