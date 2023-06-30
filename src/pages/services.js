import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Strong, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"services"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Odyssey Audio
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-index">
						Home
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-7" background="#ddf7ff">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				lg-width="100%"
				margin="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				sm-padding="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				flex-direction="column"
			>
				<Box
					overflow-x="hidden"
					transform="translateY(0px)"
					padding="0px 0px 100% 0px"
					width="100%"
					overflow-y="hidden"
					position="relative"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					height="auto"
				>
					<Image
						src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-steshka-willems-2592179.jpg?v=2023-06-30T15:38:21.027Z"
						object-fit="cover"
						position="absolute"
						width="100%"
						bottom={0}
						display="block"
						top={0}
						left={0}
						right={0}
						min-height="100%"
					/>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				flex-direction="row"
				lg-align-items="center"
				padding="4px 4px 4px 4px"
				lg-order="1"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				display="flex"
				width="50%"
				lg-width="100%"
				lg-margin="0px 0px 0px 0px"
			>
				<Box width="50%" padding="12px 12px 12px 13px" display="flex">
					<Box
						width="100%"
						height="auto"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						margin="0px 0px 0px 0px"
						overflow-x="hidden"
						overflow-y="hidden"
						transform="translateY(0px)"
						hover-transform="translateY(-10px)"
						padding="0px 0px 100% 0px"
					>
						<Image
							top="0px"
							left="0px"
							right="auto"
							bottom="0px"
							display="block"
							object-fit="cover"
							position="absolute"
							width="100%"
							min-height="100%"
							src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-wendy-wei-1864637.jpg?v=2023-06-30T15:39:58.748Z"
						/>
					</Box>
				</Box>
				<Box padding="12px 12px 12px 12px" display="flex" width="50%">
					<Box
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						position="relative"
						transform="translateY(0px)"
						overflow-x="hidden"
						overflow-y="hidden"
						margin="0px 0px 0px 0px"
						padding="0px 0px 100% 0px"
						width="100%"
						height="auto"
					>
						<Image
							bottom="0px"
							src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-clem-onojeghuo-111287.jpg?v=2023-06-30T15:42:22.117Z"
							position="absolute"
							top="auto"
							left={0}
							min-height="100%"
							object-fit="cover"
							display="block"
							width="100%"
							right={0}
						/>
					</Box>
				</Box>
				<Box width="50%" padding="12px 12px 12px 12px" display="flex">
					<Box
						margin="0px 0px 0px 0px"
						padding="0px 0px 100% 0px"
						transition="transform 0.2s ease-in-out 0s"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						transform="translateY(0px)"
						hover-transform="translateY(-10px)"
						width="100%"
					>
						<Image
							object-fit="cover"
							display="block"
							top="auto"
							right={0}
							bottom="0px"
							min-height="100%"
							src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-pixabay-45243.jpg?v=2023-06-30T15:42:16.194Z"
							position="absolute"
							width="100%"
							left={0}
						/>
					</Box>
				</Box>
				<Box width="50%" padding="12px 12px 12px 12px" display="flex">
					<Box
						position="relative"
						hover-transform="translateY(-10px)"
						padding="0px 0px 100% 0px"
						transform="translateY(0px)"
						transition="transform 0.2s ease-in-out 0s"
						margin="0px 0px 0px 0px"
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
					>
						<Image
							src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-tim-mossholder-876714.jpg?v=2023-06-30T15:41:02.946Z"
							position="absolute"
							display="block"
							top="auto"
							left={0}
							min-height="100%"
							object-fit="cover"
							width="100%"
							right={0}
							bottom="0px"
						/>
					</Box>
				</Box>
			</Box>
			<Box
				width="100%"
				align-items="flex-start"
				lg-align-items="center"
				sm-margin="0px 0px 20px 0px"
				display="flex"
				flex-direction="column"
				lg-width="100%"
				lg-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				lg-padding="0px 16px 16px 16px"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="--darkL2"
					font="--base"
					lg-text-align="center"
					width="60%"
					lg-width="100%"
					md-text-align="left"
				>
					<Strong>
						{"\n"}Whether you aspire to play in a band, perform on stage, or simply enjoy the pleasure of playing an instrument, Melody Masters is the ultimate destination for your musical training needs. Join us today and embark on an extraordinary journey of musical exploration and growth!{"\n\n"}
					</Strong>
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				margin="0px 0px 32px 0px"
				width="100%"
			>
				<Text margin="0px 0px 0px 0px" font="--headline1" color="--dark" text-align="center">
					Our Team
				</Text>
				<Text
					margin="16px 0px 0px 0px"
					font="--lead"
					display="block"
					width="50%"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						{"\n"}Our trainers offer personalized, one-on-one instruction to ensure that your lessons are tailored to your individual needs and learning pace.{" "}
					</Strong>
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
			>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1554651802-57f1d69a4944?auto=format&fit=crop&w=500&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Sam Smith
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Keyboard
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1599870418764-c38abcfb955a?auto=format&fit=crop&w=400&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Mason Johnson
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Drums
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1602480370486-ddc38af362cb?auto=format&fit=crop&w=500&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Adriana Williams
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Violin
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1619950466709-02c2bf682442?auto=format&fit=crop&w=300&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Ethan Tremblay
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Guitar
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" quarkly-title="Footer-1">
			<List
				margin="0px 0px 0px 0px"
				padding="12px 0px 12px 0px"
				list-style-type="none"
				as="ul"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					About
				</Link>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Services
				</Link>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Sign Up
				</Link>
			</List>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				support@odysseyaudio.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"649eee646efcea001ae2cfab"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});