import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { KoloType } from "../constants";
import Comment from "./Comment";
import Match from "./Match";

interface Props {
	kolo: KoloType;
	index: number;
	changeScore: any;
	deleteComment: any;
	addComment: any;
	editComment: any;
}

const Kolo = ({
	kolo,
	changeScore,
	addComment,
	deleteComment,
	editComment,
	index,
}: Props) => {
	const { user } = useAuth0();
	const [text, setText] = useState("");

	return (
		<Box style={{ padding: 20 }}>
			<Typography>Kolo {index + 1}</Typography>
			{kolo.matches.map((match, index) => (
				<Match key={index} match={match} changeScore={changeScore} />
			))}
			{user && (
				<>
					<Input value={text} onChange={(e) => setText(e.target.value)} />
					<Button
						disabled={!text}
						onClick={() => {
							setText("");
							addComment(kolo.id, user.email!, text);
						}}
					>
						<Typography>Komentiraj</Typography>
					</Button>
				</>
			)}
			{kolo.comments.map((comment, index) => (
				<Comment
					key={index}
					comment={comment}
					addComment={addComment}
					deleteComment={deleteComment}
					editComment={editComment}
				/>
			))}
		</Box>
	);
};

export default Kolo;
