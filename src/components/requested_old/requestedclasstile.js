var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function () {
		var details = this.props.details;
		return (
        	<div className="col-md-4 col-sm-6 col-xs-6">
        		<div className="panel">
	                <span className="requestedCategory"><Link to="/about">{details.name}</Link></span>
	                <img src={details.category.imageUrl} className="img-responsive upcomingImage" alt="Class Title - Category" />
	                <span className="upcomingTitle truncate col-md-12 col-sm-12 col-xs-12">{details.name}</span>
	                <div className="panel-body text-right">
	                    <div className="row">
	                        <div className="text-left col-md-4 col-sm-6 hidden-xs">
	                            <h2><span className="glyphicon glyphicon-ok"></span></h2>
	                            <p>RSVP</p>
	                        </div>
	                        <div className="col-md-8 col-sm-6">
	                            <h5>details.date</h5>
	                            <p className="small">details.location</p>
	                            <span className="small badge glyphicon glyphicon-user">14</span>
	                        </div>
	                    </div>
	                </div>
				</div>
			</div>
		)
	}
});

