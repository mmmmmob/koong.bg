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
      {/* about modal */}
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
          {() => (
            <>
              <ModalHeader className="mt-3 flex flex-col gap-1 font-serif text-3xl">
                About
              </ModalHeader>
              <ModalBody className="my-2 font-serif text-lg font-thin">
                <ScrollShadow size={50}>
                  <div className="flex max-sm:flex-col sm:h-64">
                    <div className="flex-shrink-0">
                      <img
                        src="/public/favicon.jpg"
                        alt="avatar"
                        className="overflow-hidden sm:size-64"
                      />
                    </div>
                    <ScrollShadow size={50}>
                      <div className="max-sm:my-3 sm:mx-3">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero, optio! Expedita voluptatibus animi ad
                          illum aperiam temporibus nihil, quo deleniti, hic modi
                          corrupti laudantium ea cum quas ut doloremque illo.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero, optio! Expedita voluptatibus animi ad
                          illum aperiam temporibus nihil, quo deleniti, hic modi
                          corrupti laudantium ea cum quas ut doloremque illo.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero, optio! Expedita voluptatibus animi ad
                          illum aperiam temporibus nihil, quo deleniti, hic modi
                          corrupti laudantium ea cum quas ut doloremque illo.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero, optio! Expedita voluptatibus animi ad
                          illum aperiam temporibus nihil, quo deleniti, hic modi
                          corrupti laudantium ea cum quas ut doloremque illo.
                        </p>
                      </div>
                    </ScrollShadow>
                  </div>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* works modal */}
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
          {() => (
            <>
              <ModalHeader className="mt-3 flex flex-col gap-1 font-serif text-3xl">
                Works
              </ModalHeader>
              <ModalBody className="my-2 font-serif text-lg font-thin">
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

      {/* shops modal */}
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
          {() => (
            <>
              <ModalHeader className="mt-3 flex flex-col gap-1 font-serif text-3xl">
                Shops
              </ModalHeader>
              <ModalBody className="my-2 font-serif text-lg font-thin">
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
        <a
          onClick={aboutModal.onOpen}
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          about
        </a>
        <a
          onClick={worksModal.onOpen}
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          works
        </a>
        <h1 className="font-sans text-6xl font-bold italic tracking-wider max-sm:text-5xl">
          KOONG
        </h1>
        <a
          onClick={shopsModal.onOpen}
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          shops
        </a>
        <a
          href="mailto:koong.bg@gmail.com"
          className="font-serif text-2xl hover:underline max-sm:text-xl"
        >
          contact
        </a>
      </div>
      <footer className="sticky bottom-0">
        <Footer />
      </footer>
      <Analytics />
    </>
  );
}

export default App;
