import { Box, Typography } from "@mui/material";
import React from "react";
import { TeamType } from "../functions";

interface Props {
	team: TeamType;
}

const Team = ({ team }: Props) => {
	return (
		<Box style={{ display: "flex", flexDirection: "row" }}>
			<Typography style={{ paddingLeft: 10, paddingRight: 20, width: "15%" }}>
				{team.name}
			</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>{team.won}</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>{team.lost}</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>{team.draws}</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>{team.scored}</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>{team.conceded}</Typography>
			<Typography style={{ paddingLeft: 10, width: "11%" }}>{team.points}</Typography>
		</Box>
	);
};

export default Team;
