import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal onClose={onClose} isOpen={isOpen} size="xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.800">
        <ModalBody p={0}>
          <Image src={imgUrl} bgSize="cover" />
        </ModalBody>
        <ModalFooter
          borderBottomRadius={30}
          py={1}
          px={2}
          justifyContent="flex-start"
          bgColor="pGray.800"
        >
          <Link color="pGray.100" href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
