import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/images/logo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const { userData, setUserData } = useContext(UserContext);
	const avatarPicture = `https://source.boringavatars.com/beam/40/${userData?.username}}`;
	const navigate = useNavigate();


	return (
		<HeaderContainer>
			<LeftHeader>
				<LogoContainer>
					<img src={logo} alt="" />
					<p>GT</p>
				</LogoContainer>
				<SearchBarContainer>
					<input type="text" placeholder="Search" />
					<IoSearchSharp />
				</SearchBarContainer>
			</LeftHeader>
			<RightHeader>
				<MenuContainer>
					<p>trending</p>
					{userData && <p>profile</p>}
				</MenuContainer>
				<ProfileContainer>
					{userData !== undefined ? (
						<Avatar src={avatarPicture} />
					) : (
						<Button variant="contained" onClick={() => {navigate("/sign-in")}}>
							LogIn
						</Button>
					)}
				</ProfileContainer>
			</RightHeader>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	height: 70px;
	width: 100%;
	padding: 10px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
	margin-bottom: 20px;
	@media (max-width: 600px) {
		padding: 10px 20px;
	}
`;

const LeftHeader = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 40px;
	@media (max-width: 600px) {
		gap: 20px;
	}
`;

const RightHeader = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 30px;
	@media (max-width: 600px) {
		gap: 20px;
	}
`;

const LogoContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 5px;
	img {
		height: 120%;
		@media (max-width: 600px) {
			height: 110%;
		}
	}
	p {
		color: white;
		font-family: "Audiowide", cursive;
		font-size: 25px;
		font-weight: 600;
		-webkit-text-stroke: 2px #0f0f0f;
		text-shadow: 0px 0px 2px #0f0f0f;
		@media (max-width: 600px) {
			display: none;
		}
	}
`;

const SearchBarContainer = styled.div`
	height: 40px;
	max-width: 300px;
	background-color: #151323;
	border-radius: 8px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 0px 10px;
	@media (max-width: 600px) {
		background: none;
		padding: 0px;
	}
	input {
		height: 100%;
		width: 100%;
		background: none;
		border: none;
		outline: none;
		font-family: "Roboto", sans-serif;
		font-size: 18px;
		padding: 0px;
		color: white;
		::placeholder {
			color: #747474;
		}
		@media (max-width: 600px) {
			display: none;
		}
	}
	svg {
		font-size: 20px;
		@media (max-width: 600px) {
			font-size: 25px;
		}
	}
`;

const MenuContainer = styled.div`
	color: white;
	font-family: "Roboto", sans-serif;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 20px;
	@media (max-width: 600px) {
		gap: 15px;
	}
`;

const ProfileContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}
`;
