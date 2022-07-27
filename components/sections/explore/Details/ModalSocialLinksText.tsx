import { Text } from "@chakra-ui/react";

type ModalShareLinkTextProps = {
  children: string;
};

function ModalSocialLinksText({ children }: ModalShareLinkTextProps) {
  return (
    <Text color="brand.black" fontWeight="medium">
      {children}
    </Text>
  );
}

export default ModalSocialLinksText;
