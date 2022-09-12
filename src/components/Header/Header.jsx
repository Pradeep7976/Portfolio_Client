import "./Header.css";
import { Center, chakra, SimpleGrid, VStack } from "@chakra-ui/react";

import axios from "axios";
import fileDownload from "js-file-download";

function Header() {
  const savefile = (e) => {
    const Url = "https://pradeep-l.herokuapp.com/download";
    axios({
      url: Url,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, "Pradeep_Resume.pdf");
    });
    // axios.get(url).then((res) => {
    //   fileDownload(res.da)
    // });
  };
  const arr = [
    "A young Hustler with passion for coding",
    "MERN developer with problem solving skills",
    "Enjoys working closely with people",
  ];
  return (
    <div>
      <SimpleGrid columns={(1, 1, 2)} spacing={10}>
        <div>
          <Center>
            <VStack>
              {arr.map((ele) => {
                return <p className="dsp">{ele}</p>;
              })}
            </VStack>
          </Center>
        </div>
        <div>
          <img
            src="https://ik.imagekit.io/aj4rz7nxsa/portfolio/_Pngtree_working_boy_illustration_4565546_ACmivitLC.png"
            className="img1"
            alt="img not found"
          />
        </div>
      </SimpleGrid>
      <Center>
        <chakra.button
          px="3"
          py="2"
          bg="green.200"
          rounded="md"
          _hover={{ bg: "green.300" }}
          className="dsp"
          onClick={savefile}
        >
          Resume
        </chakra.button>
      </Center>
    </div>
  );
}
export default Header;
