import { Box, Image } from "@mantine/core";
import BgRedImg from "../../../assets/icon/auth-bg-red.svg";
import { useScreen } from "@hooks/useScreen";

export default function BgRed() {
  const screen = useScreen();
  const w = screen.isMobile ? 100 : 200;
  const h = screen.isMobile ? 100 : 200;
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
        width={w}
        height={h}
        alt="bg-red"
      />
    </Box>
  );
}
