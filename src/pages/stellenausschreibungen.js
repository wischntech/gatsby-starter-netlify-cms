import React from "react";

import Layout from "../components/Layout";
import BlogRollJobs from "../components/BlogRollJobs";

export default class StellenausschreibungPage extends React.Component {
	render() {
		return (
			<Layout>
				<div className='full-width-image-container margin-top-0' style={{}}>
					<h1
						className='has-text-weight-bold is-size-1'
						style={{
							padding: "1rem",
						}}
					>
						Stellenausschreibungen
					</h1>
				</div>
				<section className='section'>
					<div className='container'>
						<div className='content'>
							<BlogRollJobs />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
