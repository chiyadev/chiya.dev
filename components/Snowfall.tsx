import { chakra } from "@chakra-ui/system";
import dynamic from "next/dynamic";

const Snowfall = chakra(dynamic(() => import("react-snowfall"), { ssr: false }));
export default Snowfall;
