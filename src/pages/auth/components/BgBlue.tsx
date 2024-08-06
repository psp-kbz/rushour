import { Box, Image } from "@mantine/core";
import BgBlueImg from "../../../assets/icon/auth-bg-blue.svg";

export default function BgBlue() {
  return (
    <Box
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
      }}
    >
      <Image
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute right-0 bottom-0"
        src={BgBlueImg}
        width={200}
        height={200}
        alt="bg-blue"
      />
    </Box>
  );
}
