import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { KoloType } from "../constants";
import { getTable } from "../functions";
import Header from "./Header";
import Team from "./Team";

interface Props {
	kola: KoloType[];
}

const Table = ({ kola }: Props) => {
	console.log("rerenderam tablicu");

	const teamTable = getTable(kola);

	return (
		<Container>
			<Box>
				<Header />
				{teamTable.map((result, index) => (
					<Team key={index} team={result} />
				))}
			</Box>
		</Container>
	);
};

export default Table;
