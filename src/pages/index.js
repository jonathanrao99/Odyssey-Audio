import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Icon, Box, Hr, Image, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, StackItem, Stack } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text
				margin="0px 0 24px 0"
				text-align="center"
				font="normal 900 42px/1.2 --fontFamily-serifGaramond"
				md-font="--headline3"
				color="#000000"
			>
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
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			background="url(https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-juan-pablo-serrano-arenas-1246437.jpg?v=2023-06-30T15:09:03.304Z) 0% 0%/100%,linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%)"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Striving for perfection in everything we do. Unparalleled service for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			background="#000000"
		>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Welcome to Odyssey Audio! Our website is dedicated to providing exceptional training services for aspiring musicians of all skill levels. Whether you're a beginner looking to discover your passion for music or an experienced player seeking to enhance your technique, we have the perfect courses and resources to help you reach your musical goals.
				<br />
				<br />
				At Melody Masters, we offer a wide range of instrument-specific training programs, tailored to suit various musical interests. Our highly skilled and passionate instructors consist of industry professionals and accomplished musicians dedicated to sharing their expertise and nurturing your talent.
Our training services cater to learners of all ages, so whether you're a child, teenager, or adult, you'll find courses that suit your specific needs.{"\n\n\n\n"}
			</Text>
		</Section>
		<Section padding="80px 0 90px 0" quarkly-title="Product-5" position="static">
			<Override slot="SectionContent" align-items="center" />
			<Text
				margin="0px 0px 20px 0px"
				font="normal 500 56px/1.2 --fontFamily-sans"
				text-align="center"
				lg-width="70%"
				md-width="100%"
				color="--darkL1"
			>
				Our Services
			</Text>
			<Text
				margin="0px 0px 20px 0px"
				text-align="center"
				font="normal 400 22px/1.5 --fontFamily-sansHelvetica"
				color="--darkL1"
				padding="0px 280px 0px 280px"
				lg-padding="0px 0 0px 0"
				lg-margin="0px 0px 50px 0px"
			>
				WE OFFER TRAINING IN VARIOUS MUSICAL INSTRUMENTS
			</Text>
			<Hr
				min-height="10px"
				margin="0px 0px 50px 0px"
				border-color="--color-darkL1"
				width="40px"
				border-width="2px 0 0 0"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				grid-gap="0 35px"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
				margin="0px 0px 70px 0px"
				md-margin="0px 0px 50px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image
						src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-pixabay-34221.jpg?v=2023-06-30T15:13:29.229Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						object-fit="cover"
						sm-height="220px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
					/>
					<Hr
						min-height="10px"
						margin="0px 0px 10px 0px"
						border-color="--color-darkL1"
						width="40px"
						border-width="2px 0 0 0"
					/>
					<Text margin="0px 0px 15px 0px" font="normal 400 20px/1.2 --fontFamily-sans">
						Easy and beginner-friendly Violin training
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Box min-width="100px" min-height="100px" margin="0px 0px 30px 0px">
						<Image
							src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-juan-pablo-serrano-arenas-1021142.jpg?v=2023-06-30T15:14:18.182Z"
							display="block"
							max-width="100%"
							margin="0px 0px 25px 0px"
							height="300px"
							width="100%"
							object-fit="cover"
							sm-height="220px"
							lg-height="200px"
							md-height="350px"
						/>
						<Hr
							min-height="10px"
							margin="0px 0px 10px 0px"
							border-color="--color-darkL1"
							width="40px"
							border-width="2px 0 0 0"
						/>
						<Text margin="0px 0px 15px 0px" font="normal 400 20px/1.2 --fontFamily-sans">
							Pick up the Piano within no time
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Image
							src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-josh-sorenson-995301.jpg?v=2023-06-30T15:14:37.435Z"
							display="block"
							max-width="100%"
							margin="0px 0px 25px 0px"
							height="300px"
							width="100%"
							object-fit="cover"
							sm-height="220px"
							lg-height="200px"
							md-height="350px"
						/>
						<Hr
							min-height="10px"
							margin="0px 0px 10px 0px"
							border-color="--color-darkL1"
							width="40px"
							border-width="2px 0 0 0"
						/>
						<Text margin="0px 0px 15px 0px" font="normal 400 20px/1.2 --fontFamily-sans">
							Play to the beat with the help of our trainers
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image
						src="https://uploads.quarkly.io/649eee646efcea001ae2cfad/images/pexels-pixabay-164729.jpg?v=2023-06-30T15:13:51.706Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						object-fit="cover"
						sm-height="220px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
					/>
					<Hr
						min-height="10px"
						margin="0px 0px 10px 0px"
						border-color="--color-darkL1"
						width="40px"
						border-width="2px 0 0 0"
					/>
					<Text margin="0px 0px 15px 0px" font="normal 400 20px/1.2 --fontFamily-sans">
						Impress your peers with our beginner Guitar training
					</Text>
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