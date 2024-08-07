import { Box, Image } from "@mantine/core";
import BgBlueImg from "../../../assets/icon/auth-bg-blue.svg";
import { useScreen } from "@hooks/useScreen";

export default function BgBlue() {
  const screen = useScreen();
  const w = screen.isMobile ? 100 : 200;
  const h = screen.isMobile ? 100 : 200;
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
        width={w}
        height={h}
        alt="bg-blue"
      />
    </Box>
  );
}
