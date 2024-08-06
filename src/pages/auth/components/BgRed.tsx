import { Box, Image } from "@mantine/core";
import BgRedImg from "../../../../public/icon/auth-bg-red.svg";

export default function BgRed() {
  return (
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Image
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute right-0 bottom-0"
        src={BgRedImg}
        width={200}
        height={200}
        alt="bg-blue"
      />
    </Box>
  );
}
