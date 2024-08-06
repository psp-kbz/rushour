import { Box } from "@mantine/core";
import logo from "@assets/images/logo/logo.webp";

interface LogoProps {
  height?: number;
}

export function Logo({ height }: LogoProps) {
  return <Box component="img" height={height} src={logo} />;
}
