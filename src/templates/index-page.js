import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
	image,
	back,
	back2,
	title,
	heading,
	mainpitch,
	description,
	intro,
}) => (
	<div>
		<div
			style={{
				backgroundImage: `url(${
					back.childImageSharp ? back.childImageSharp.fluid.src : back
				})`,
				backgroundPosition: `bottom right`,
				backgroundSize: "100%",
				backgroundRepeat: "no-repeat",
			}}
		>
			<section className='section'>
				<div
					className='container'
					style={{
						display: "flex",
						height: "200px",
						lineHeight: "1",
						justifyContent: "space-around",
						alignItems: "left",
						flexDirection: "column",
						paddingRight: "15%",
					}}
				>
					<h1
						className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
						style={{
							color: "black",
							lineHeight: "1",

							padding: "100px 0 10px 0",
						}}
					>
						{title}
					</h1>

					<h3
						className='subtitle'
						style={{
							padding: "0 0 10px 0",
						}}
					>
						{mainpitch.description}
					</h3>
					<div
						className='column is-12 has-text-centered'
						style={{ margin: "0% 0 0 0" }}
					>
						<Link className='btn bl is-clickable' to='/leistungen'>
							Erfahren Sie mehr.
						</Link>
					</div>
				</div>
			</section>
			<div
				title=' Zwei Strichmännchen. Eins ist ein sich fragender Kunde, der Hilfe benötigt. Auf der anderen Seite ein Jonglierender Berger, 
			der mit allen Leistungen in Form von Bällen jongliert.'
				style={{
					backgroundImage: `url(${
						image.childImageSharp ? image.childImageSharp.fluid.src : image
					})`,
					backgroundPosition: `bottom right`,
					backgroundPositionX: "75%",
					backgroundPositionY: "100px",
					height: "600px",
					backgroundRepeat: "no-repeat",
					zIndex: "2",
				}}
			></div>
		</div>
		<div
			style={{
				backgroundImage: `url(${
					back2.childImageSharp ? back2.childImageSharp.fluid.src : back2
				})`,
				backgroundPosition: `right top`,
				backgroundPositionY: "-5px",
				backgroundSize: "100%",
				backgroundRepeat: "no-repeat",
				position: "relative",
				backgroundColor: "black",
				borderTop: "10px solid #C9D75A",
			}}
		>
			<section className='section'>
				<div className='container '>
					<div className='section'>
						<div className='columns'>
							<div
								className='column is-10 is-offset-1'
								style={{ color: "white" }}
							>
								<div className='content'>
									<div className='content'>
										<div className='tile margin-4'>
											<h2
												className='has-text-weight-semibold is-size-2'
												style={{
													paddingTop: "25%",
													color: "white",
												}}
											>
												{mainpitch.title}
											</h2>
										</div>
									</div>

									<Features gridItems={intro.blurbs} />

									<div className='columns'>
										<div className='column is-12 has-text-centered'>
											<p>{description}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div
			style={{
				backgroundImage: `url(${
					back.childImageSharp ? back.childImageSharp.fluid.src : back
				})`,
				backgroundPosition: `right bottom`,
				backgroundSize: "100%",
				backgroundRepeat: "no-repeat",
				position: "relative",
				backgroundColor: "black",
				borderBottom: "20px solid #C9D75A",
			}}
		>
			{" "}
			<div className='has-text-centered'>
				<Link
					className='btn wh'
					to='/kontakt'
					style={{
						marginBottom: "30%",
					}}
				>
					Kontaktieren Sie uns.
				</Link>
			</div>
		</div>
		<div
			style={{
				backgroundImage: `url(${
					back2.childImageSharp ? back2.childImageSharp.fluid.src : back2
				})`,
				backgroundPosition: `right top`,
				backgroundPositionY: "-5px",
				backgroundSize: "100%",
				backgroundRepeat: "no-repeat",
				position: "relative",
				backgroundColor: "white",
				borderTop: "10px solid #C9D75A",
				height: "300px",
			}}
		></div>
		<section className='section'>
			<h2
				className='has-text-centered has-text-weight-semibold is-size-2'
				style={{ color: "black", paddingBottom: "30px", lineHeight: "2" }}
			>
				Neuigkeiten
			</h2>

			<BlogRoll />
			<div className='column is-12 has-text-centered'>
				<Link className='btn' to='/blog'>
					Mehr lesen
				</Link>
			</div>
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	back: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	back2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				back={frontmatter.back}
				back2={frontmatter.back2}
				title={frontmatter.title}
				heading={frontmatter.heading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 400, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				back {
					childImageSharp {
						fluid(maxWidth: 3000, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				back2 {
					childImageSharp {
						fluid(maxWidth: 3000, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 100, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
						url
					}
					heading
					description
				}
			}
		}
	}
`;
