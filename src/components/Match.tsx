import { useAuth0 } from "@auth0/auth0-react";
import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { MatchType } from "../constants";
import { isAdmin } from "../functions";

interface Props {
	match: MatchType;
	changeScore: any;
}

const Match = ({ match, changeScore }: Props) => {
	const [score, setScore] = useState();

	const { user } = useAuth0();
	return (
		<Box
			style={{
				padding: 10,
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
				display: "flex",
			}}
		>
			<Typography style={{ paddingRight: 20 }}>{match.firstTeam} </Typography>
			{user && isAdmin(user.email) ? (
				<Box>
					<Input
						style={{ width: 50 }}
						type="numeric"
						value={match.firstTeamGoals}
						onChange={(e) => {
							changeScore(
								match.id,
								1,
								isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
							);
						}}
					/>
				</Box>
			) : (
				<Typography>{match.firstTeamGoals} </Typography>
			)}
			<Typography>{" - "}</Typography>
			{user && isAdmin(user.email) ? (
				<Box style={{ paddingLeft: 10 }}>
					<Box>
						<Input
							style={{ width: 50 }}
							type="numeric"
							value={match.secondTeamGoals}
							onChange={(e) => {
								changeScore(
									match.id,
									2,
									isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
								);
							}}
						/>
					</Box>
				</Box>
			) : (
				<Typography>{match.secondTeamGoals} </Typography>
			)}
			<Typography style={{ paddingLeft: 10 }}>{match.secondTeam}</Typography>
		</Box>
	);
};

export default Match;
