import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
	<div className='columns is-multiline'>
		{gridItems.map((item) => (
			<div key={item.text} className='column is-one-fifth'>
				<section className='section'>
					<div className='has-text-centered'>
						<div
							style={{
								width: "100px",
								display: "inline-block",
							}}
						>
							<PreviewCompatibleImage imageInfo={item} />
						</div>
					</div>
					<h3
						className='has-text-centered'
						style={{ color: "white", textTransform: "uppercase" }}
					>
						{item.text}
					</h3>
				</section>
			</div>
		))}
	</div>
);

FeatureGrid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			text: PropTypes.string,
		})
	),
};

export default FeatureGrid;
