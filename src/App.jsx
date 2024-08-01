import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  useDisclosure,
} from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";

function App() {
  const aboutModal = useDisclosure();
  const worksModal = useDisclosure();
  const shopsModal = useDisclosure();

  return (
    <>
      <Modal
        isOpen={aboutModal.isOpen}
        id="1"
        backdrop="blur"
        isDismissable
        placement="center"
        onOpenChange={aboutModal.onOpenChange}
        size="5xl"
        scrollBehavior="inside"
        className="mx-4"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">About</ModalHeader>
              <ModalBody className="my-2">
                <ScrollShadow size={100}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={worksModal.isOpen}
        backdrop="blur"
        isDismissable
        placement="center"
        onOpenChange={worksModal.onOpenChange}
        size="5xl"
        scrollBehavior="inside"
        className="mx-4"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Works</ModalHeader>
              <ModalBody className="my-2">
                <ScrollShadow size={100}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={shopsModal.isOpen}
        backdrop="blur"
        isDismissable
        placement="center"
        onOpenChange={shopsModal.onOpenChange}
        size="5xl"
        scrollBehavior="inside"
        className="mx-4"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Shops</ModalHeader>
              <ModalBody className="my-2">
                <ScrollShadow size={100}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="bg-color-main text-color-main flex h-[calc(100svh-56px)] w-screen items-center justify-evenly self-center max-sm:flex-col">
        {/* <a
          //onClick={aboutModal.onOpen}
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          about
        </a>
        <a
          //onClick={worksModal.onOpen}
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          works
        </a> */}
        <div className="w-fit">
          <h1 className="text-center font-sans text-6xl font-bold italic tracking-wider max-sm:text-5xl">
            KOONG
          </h1>
          <div className="mt-5 flex items-center self-center p-2">
            <div className="mr-2">
              <img
                src="/bookcover.png"
                alt="pointillism_cover"
                className="size-8 rounded drop-shadow-md"
              />
            </div>
            <a
              href="https://form.typeform.com/to/fwB823a4"
              target="_blank"
              className="hover:text-color-invert font-serif font-light underline decoration-dashed decoration-1 underline-offset-4 hover:decoration-solid max-sm:text-sm"
            >
              Pre-order 'Pointillism Vol.1' here.
            </a>
          </div>
        </div>
        {/* <a
          //onClick={shopsModal.onOpen}
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          shops
        </a> */}
        {/* <a
          href="mailto:koong.bg@gmail.com"
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          contact
        </a> */}
      </div>
      <footer className="sticky bottom-0">
        <Footer />
      </footer>
      <Analytics />
    </>
  );
}

export default App;
