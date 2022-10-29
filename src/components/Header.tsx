import { Box, Typography } from "@mui/material";
import React from "react";
import { TeamType } from "../functions";

const Header = () => {
	return (
		<Box style={{ display: "flex", flexDirection: "row" }}>
			<Typography style={{ paddingLeft: 10, paddingRight: 20, width: "15%" }}>
				NAZIV
			</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>POBJEDA</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>IZGUBLJENIH</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>NERJESENO</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>ZABIJENIH</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>PRIMLJENIH</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>BODOVI</Typography>
		</Box>
	);
};

export default Header;
