import { useState } from "react"
import { DeleteIcon } from "../icons/table/delete-icon"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip, useDisclosure } from "@nextui-org/react"
import { deleteAttendance } from "../api/attendance"

export const DeleteAttendance = ({currentAttendance} : any) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    const [attendance, setAttendance] = useState({
        _id: currentAttendance._id
    })

    return (
        <div>
            <>
            <Tooltip
              content="Delete attendance"
              color="danger" 
            >
                <button onClick={onOpen}>
                    <DeleteIcon size={20} fill="#FF0080" />
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
                            Are you sure?
                        </ModalHeader>
                        <ModalBody>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" variant="flat" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="danger" variant="flat" onPress={() => deleteAttendance(attendance._id).then(() => {
                                onClose()
                                window.location.reload()
                            })}>
                                Yes
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                </ModalContent>

            </Modal>
            </>
        </div>
    )
}