import "./Header.css";
import { chakra } from "@chakra-ui/react";

import axios from "axios";
import fileDownload from "js-file-download";

function Header() {
  const savefile = (e) => {
    const Url = "http://localhost:7000/download";
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

  return (
    <div>
      <div className="Header">
        <br />
        <text className="Header1">I am,</text>
        <img
          src="https://ik.imagekit.io/aj4rz7nxsa/portfolio/_Pngtree_working_boy_illustration_4565546_ACmivitLC.png"
          className="img1"
          alt="img not found"
        />
        {/* <text>sdfsadf</text> */}
      </div>
      <text className="dsp name">Pradeep L Ashtkar</text>
      <br />
      <br />
      <p className="dsp">A young Hustler with passion for coding</p>
      <p className="dsp">MERN developer with problem solving skills</p>
      <p className="dsp">Enjoys working closely with people</p>
      <br />
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
    </div>
  );
}
export default Header;
