import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CommentType } from "../constants";
import { isAdmin } from "../functions";

interface Props {
	comment: CommentType;
	addComment: any;
	deleteComment: any;
	editComment: any;
}

const Comment = ({ comment, addComment, deleteComment, editComment }: Props) => {
	const { user } = useAuth0();
	const [editing, setEditing] = useState(false);
	const [text, setText] = useState("");
	console.log(editing);

	useEffect(() => {
		setText(comment.text);
	}, []);

	return (
		<Box
			style={{
				padding: 10,
				alignItems: "center",
				flexDirection: "row",
				display: "flex",
			}}
		>
			<Box style={{ paddingRight: 20 }}>
				<Typography>{comment.userEmail}</Typography>
				<Typography>{comment.createdDate}</Typography>
				{editing ? (
					<>
						<Input value={text} onChange={(e) => setText(e.target.value)} />
						<Button
							disabled={!text}
							onClick={() => {
								editComment(comment.id, text);
								setEditing(false);
							}}
						>
							<Typography>POTVRDI</Typography>
						</Button>
						<Button
							onClick={() => {
								setEditing(false);
								setText(comment.text);
							}}
						>
							<Typography>ODUSTANI</Typography>
						</Button>
					</>
				) : (
					<Typography>{comment.text}</Typography>
				)}
			</Box>
			{user && (isAdmin(user.email) || user.email === comment.userEmail) && (
				<Button onClick={() => deleteComment(comment.id)}>
					<Typography>OBRISI</Typography>
				</Button>
			)}
			{user && user.email === comment.userEmail && (
				<Button onClick={() => setEditing(!editing)}>
					<Typography>UREDI</Typography>
				</Button>
			)}
		</Box>
	);
};

export default Comment;
