import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

import Match from "../components/Match";
import { KoloType, loginPage, MatchType } from "../constants";
import { Container, Box, Button, Typography, Input } from "@mui/material";
import App from "../App";
import Comment from "../components/Comment";
import Kolo from "../components/Kolo";
import Table from "../components/Table";

interface Props {
	kola: KoloType[];
	setKola: any;
}

const Home = ({ kola, setKola }: Props) => {
	const { user } = useAuth0();

	const handleChangeScore = (matchId: number, team: number, newValue: number) => {
		const newKola = kola.map((kolo) => {
			kolo.matches.map((match) => {
				if (match.id === matchId) {
					if (team === 1) {
						match.firstTeamGoals = newValue;
					} else {
						match.secondTeamGoals = newValue;
					}
				}
				return match;
			});
			return kolo;
		});

		setKola(newKola);
		localStorage.setItem("kola", JSON.stringify(newKola));
	};

	const handleAddComment = (koloId: number, email: string, text: string) => {
		const newKola = kola.map((kolo) => {
			if (kolo.id === koloId) {
				kolo.comments.push({
					id: parseInt((Math.random() * 1000000).toString()),
					createdDate: new Date().toISOString(),
					text,
					userEmail: email,
				});
			}
			return kolo;
		});
		setKola(newKola);
		localStorage.setItem("kola", JSON.stringify(newKola));
	};

	const handleDeleteComment = (commentId: number) => {
		console.log("deleting comment", commentId);
		const newKola = kola.map((kolo) => {
			kolo.comments = kolo.comments.filter((comment) => comment.id !== commentId);
			return kolo;
		});
		setKola(newKola);
		localStorage.setItem("kola", JSON.stringify(newKola));
	};

	const handleEditComment = (commentId: number, text: string) => {
		console.log("editing cvomment");
		const newKola = kola.map((kolo) => {
			kolo.comments.map((comment) => {
				if (comment.id === commentId) {
					comment.text = text;
				}
				return comment;
			});
			return kolo;
		});
		setKola(newKola);
		localStorage.setItem("kola", JSON.stringify(newKola));
	};

	return (
		<Container style={{}}>
			<Box style={{ paddingBottom: 20 }}>
				{user && <Typography>Welcome {user.email}</Typography>}
			</Box>
			<Table kola={kola} />
			<Box style={{ justifyContent: "center" }}>
				{kola.map((kolo, index) => (
					<Kolo
						index={index}
						kolo={kolo}
						changeScore={handleChangeScore}
						deleteComment={handleDeleteComment}
						addComment={handleAddComment}
						editComment={handleEditComment}
					/>
				))}
			</Box>
		</Container>
	);
};

export default Home;
